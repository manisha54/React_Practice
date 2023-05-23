'use client'
import Counter from "@/components/counter"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const handleClick1 =()=> setCount(count+1)

  
  return (
    <div>
      <h1>Task 1 -- Counter App</h1>

      <Counter count={count} handleClick1={handleClick1}/>
      <Counter count={count}handleClick1={handleClick1}/>
      
    </div>

  )
}
