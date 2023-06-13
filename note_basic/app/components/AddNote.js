
import React, { useContext } from 'react'
import notesContext from '../services/NotesContext'
import noteService from '../services/noteService'

export default function AddNote() {
    const { state: { notes, desc }, dispatch } = useContext(notesContext)
    const handleAdd = (evt) => {
        evt.preventDefault()
        const newNote = {
            desc: desc,
            important: Math.random() < 0.5
        }
        noteService.createNote(newNote)
            .then(data => dispatch({
                type: 'SET_NOTES',
                payload: notes.concat(data)
            }))

        dispatch({ type: 'SET_DESC', payload: "" })
    }


    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => dispatch({
                        type: 'SET_DESC',
                        payload: e.target.value
                    })}
                />
                <button>add</button>
            </form>
        </div>
    )
}








// import React, { useContext } from 'react'
// import notesContext from './NotesContext'

// export default function AddNote() {
//   const { state: { desc }, dispatch } = useContext(notesContext)

//   const handleAdd = (evt) => {
//     evt.preventDefault()
//     const newNote = {
//       id: notes.length + 1,
//       desc: desc,
//       important: Math.random() < 0.5
//     }
//     noteService.createNote(newNote)
//       .then(data => notes.dispatch({
//         type: "SET_NOTES",
//         payload: state.notes.concate(data)
//       }))
//     // .then(data => notes.concat(data))
//     // setNotes(notes.concat(newNote))

//     // setDesc('')
//     dispatch({
//       type: "SET_DESC",
//       payload: ""
//     })
//   }

//   return (
//     <div>
//       <form onSubmit={handleAdd}>
//         <input type='text' placeholder='addnote.....'
//           value={desc}
//           // onChange={(e) => setDesc(e.target.value)}
//           onChange={(e) => dispatch({
//             type:"SET_DESC",
//             payload: notes
//           })}

//         />
//         <button> Add</button>
//       </form>
//     </div>
//   )
// }
