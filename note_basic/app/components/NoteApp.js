'use client'
// import axios from 'axios'
import { useEffect, useReducer } from 'react'
import notesContext from '../services/NotesContext'
import noteReducer from '../services/noteReduces'
import noteService from '../services/noteService'
import AddNote from './AddNote'
import NoteList from './NoteList'
import NotesFilter from './NotesFilter'
// const noteReducer = (state, action) => {
//     switch (action, type) {
//         case 'SET_NOTES':
//             return {
//                 ...state,
//                 notes: action.payload
//             }

//         case 'SET_DESC':
//             return {
//                 ...state,
//                 desc: action.payload
//             }

//         case 'SET_FILTER':
//             return {
//                 ...state,
//                 filter: action.payload
//             }
//         default:
//             throw new Error('action not defined')


//     }
// }

export default function NoteApp() {
    const [state, dispatch] = useReducer(noteReducer, {
        notes:[],
        desc:"",
        filter:""
    })
    // const [notes, setNotes] = useState([])
    // const [desc, setDesc] = useState("")
    // const [filter, setFilter] = useState("")
    useEffect(() => {
        noteService.getAllNotes()
            // .then(data => setNotes(data))
            .then(data => dispatch({
                type: 'SET_NOTES',
                payload: data
            }))
    }, [])


    // const handleAdd = (evt) => {
    //     evt.preventDefault()
    //     const newNote = {
    //         id: notes.length + 1,
    //         desc: desc,
    //         important: Math.random() < 0.5
    //     }
    //     noteService.createNote(newNote)
    //     .then(data => notes.dispatch({
    //         type:"SET_NOTES",
    //         payload:state.notes.concate(data)
    //     }))
    //     // .then(data => notes.concat(data))
    //     // setNotes(notes.concat(newNote))

    //     // setDesc('')
    //     dispatch({
    //         type:"SET_DESC",
    //         payload:""
    //     })
    // }

    

    return (
        <div>
            <notesContext.Provider value=
                {{
                    // notes,
                    // handleAdd,
                    // desc,
                    // setDesc,
                    // filter,
                    // setFilter

                    dispatch,
                    state
                }}>

                <NotesFilter />
                <NoteList/>
                <AddNote/>
                {/* <NoteList
                    notes={notes} />
                <br />

                <AddNote
                    handleAdd={handleAdd}
                    desc={desc}
                    setDesc={setDesc}
                /> */}

            </notesContext.Provider>
        </div>
    )
}
