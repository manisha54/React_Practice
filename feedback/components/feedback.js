'use client'
import { useState } from "react"

const Statistics = (props) => {
    // console.log(props)
    const { good, neutral, bad,history } = props

    const total = good + bad + neutral
    const average = (good + neutral) / total
    return (
        <>
            <p>Statistics</p>
            <p>good : {good}</p>
            <p>neutral : {neutral}</p>
            <p>bad : {bad}</p>
            <p>all : {total}</p>
            <p>average : {average}</p>
            {history}
        </>
    )
}


//button
const Button = (props) => {

    return (
        <button onClick={props.handleClick}> {props.text} </button>
    )
}

export default function Feedback() {
    // const [good, setGood] = useState(0)
    // const [neutral, setNeutral] = useState(0)
    // const [bad, setBad] = useState(0)

    const [feedback, setFeedback] = useState(
        { good: 0, neutral: 0, bad: 0 }
    )


    //3rd type of state
    const [history, setHistory] = useState([])

    // const handleGood = () => setGood(good + 1)
    // const handlNeutral = () => setNeutral(neutral + 1)
    // const handleBad = () => setBad(bad + 1)

    const handleGood = () => {
        setFeedback({
            ...feedback,   //break 
            good: feedback.good + 1  // only update good
        })
        setHistory(history.concat('G'))  //concat add two array and create new array
    }

    const handleNeutral = () => {
        setFeedback({
            ...feedback,   //break   ....=> object operator
            neutral: feedback.neutral + 1  // only update neutral
        })
        setHistory(history.concat('N'))

    }

    const handleBad = () => {
        setFeedback({
            ...feedback,   //break 
            bad: feedback.bad + 1  // only update bad
        })

    }

    return (
        <>

            <h1>Give feedback</h1>

            <Button handleClick={handleGood} text="good" />
            <Button handleClick={handleNeutral} text="neutral" />
            <Button handleClick={handleBad} text="bad" />


            <Statistics
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                history ={history}
            />



        </>




    )
}