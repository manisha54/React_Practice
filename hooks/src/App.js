
import './App.css';
import { useCallback, useMemo, useRef, useState } from 'react';
import Notes from './Notes';



function SortedList({ list, sortFunc }) {
  console.log('rendering sorted list  ....')
  const sortedNames = useMemo(() => {
    console.log('sorting names...')
    return [...list].sort(sortFunc)
  }, [list, sortFunc])

  return (
    <div>
      {sortedNames.map(name => <li key={name}>{name}</li>)}

    </div>
  )



}
function App() {
  const [numbers] = useState([10, 20, 30])

  const [names, setNames] = useState(["manisha", "aratii", "manju"])

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const inputRef = useRef(null)
  // const total = numbers.reduce((ass, n) => acc +n,0)

  // const  calulateTotal = () =>{
  //   console.log("calculate total.......")
  //   return numbers.reduce((acc, n) => acc +n,0)

  // }



  const total = useMemo(() => {
    console.log("calculate total.......")
    return numbers.reduce((acc, n) => acc + n, 0)
  }, [numbers])

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, [])


  const addName = () => {
    setNames(names.concat(inputRef.current.value))
    inputRef.current.value = ""
    // setName('')
  }

  return (
    <div className="App">
      {/* <p> Total :{total}</p>
      <button onClick={() => setCount(count + 1)}> Count: {count}</button> */}


      {/* <input type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}></input> */}
      {/* 
      <input type='text' ref={inputRef}></input>
      <button onClick={addName}>add name</button>
      <SortedList list={names} sortFunc={sortFunc} /> */}
       <Notes/>
    </div>
  );
}

export default App;
