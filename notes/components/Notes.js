export default function Notes(props){
    const {notes} = props   //object d-structure
    return (
        <>
        <h1> Notes App</h1>
        <ul>
            {
                notes.map(note =>
                    <li>{note.desc}</li>)
            }
        </ul>
        </>
    )
}