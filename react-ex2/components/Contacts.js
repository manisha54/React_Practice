'use client'

import { useState } from "react"

export default function Contacts(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [contacts, setContacts] = useState(props.contacts)
    const handleChange1 = (event) =>{
        console.log(event.target.value)   //see on the console what you type on text field
        setName(event.target.value)
    }
    const handleChange2 = (event) =>{
        console.log(event.target.value)   //see on the console what you type on text field
        setPhone(event.target.value)
    }
    
    const handleAdd = (event) =>{
        event.preventDefault()  //to stop send data on another server
        const newContact ={     //newNote is object
           id: contacts.length+1,
           name:name,
           phone:phone
        }   
        console.log(newContact)
        setContacts(contacts.concat(newContact))   //concat to send data after click add button to server(note)(list)
   }
   const handleDelete = (contactId)=>{
    if (window.confirm(`are you sure want to delete note with id ${contactId}`))
    setContacts(contacts.filter(n => n.id !==contactId))
    
    
}

    return (
        <>
            <h1>PhoneBook App</h1>

            <form>
                <label> Name </label>
                <input type="text" value={name}
                onChange={handleChange1}></input>
            </form>

            <form>
                <label > Phone Number </label>
                <input type="text" value={phone}
                onChange={handleChange2}></input>
            </form>

            <button onClick={handleAdd}> Add</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(c =>
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.phone}</td>
                            <td>
                            <button onClick={(id) => handleDelete(c.id)}>delete</button>
                                <button>edit</button>
                            </td>

                        </tr>
                    )}
                </tbody>


            </table>
        </>
    )
}