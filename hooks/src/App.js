
import './App.css';
import { useMemo, useState } from 'react';



function SortedList({list, sortFunc}){
  console.log('rendering sorted list  ....')
  const sortedNames = useMemo (()=>{
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
  const [numbers] = useState([10,20,30])

  const [names] = useState(["manisha", "aratii", "manju"])

  const [count, setCount] = useState(0)
  // const total = numbers.reduce((ass, n) => acc +n,0)

  // const  calulateTotal = () =>{
  //   console.log("calculate total.......")
  //   return numbers.reduce((acc, n) => acc +n,0)

  // }
  
  const sortFunc =(a,b) => a.localeCompare(b) * -1



  const total = useMemo(()=>{
    console.log("calculate total.......")
    return numbers.reduce((acc, n) => acc +n,0)
  }, [numbers])

  return (
    <div className="App">
      <p> Total :{total}</p>
      <button onClick={() => setCount(count+1)}> Count: {count}</button>

      <SortedList list={names} sortFunc={sortFunc}/>
      
    </div>
  );
}

export default App;
