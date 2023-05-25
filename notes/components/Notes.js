import { useState } from "react"

export default function Notes(props) {
 //   const { notes } = props   //object d-structure
    const [desc, setDesc] = useState('')
    const [notes, setNotes] = useState(props.notes)    // remove line 4 and use props.notes
    const handleChange = (event) =>{
        console.log(event.target.value)   //see on the console what you type on text field
        setDesc(event.target.value)
    }

    const handleAdd = (event) =>{
         event.preventDefault()  //to stop send data on another server
         const newNote ={     //newNote is object
            id: notes.length+1,
            desc:desc,
            important: Math.random() < 0.5

         }
         console.log(newNote)
         setNotes(notes.concat(newNote))   //concat to send data after click add button to server(note)(list)
    }


    const handleDelete = (noteId)=>{
        alert(noteId)
        
    }
    return (
        <>
            <h1> Notes App</h1>
            <ul>
                
                {
                    
                    notes.map(note => 
                        <li key={note.id}>
                            {note.desc}
                            {' '}
                            <button onClick={(id) => handleDelete(note.id)}>delete</button>
                            </li>    // key={note.id }--> remove error from console of server
                    )   
                    
                }
            </ul>
            <form>
                <input type="text" value={desc}
                onChange={handleChange}
                />
                { ' '}
                <button onClick={handleAdd}>Add</button>
                
            </form>

           
        </>
    )
}