
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function page ({params}) {


    //run on client side
    const router = useRouter()


    const handleDelete = () =>{
        router.push("/books")
    }
    console.log(params)
  return (
    <div>
      <p>this is book page for {params.book_id}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}
