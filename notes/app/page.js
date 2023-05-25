  'use client'
  import Notes from "@/components/Notes"
  
  export default function Home(){
    const notes =[
      {
        id:1,
        desc:'today is chilli',
        important :true
      },
       {
        id:2,
        desc:'css is required for web applications',
        important :false
      },
      {
        id:3,
        desc:'js with react is a must',
        important :true
      }
    ]
    return (
      <div>
        <Notes notes ={notes}/>
      </div>
    )
  }