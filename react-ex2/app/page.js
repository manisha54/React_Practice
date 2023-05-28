import Contacts from "@/components/Contacts"

export default function Home(){
  const contacts = [
    {
    id: 1,
    name: "Manisha Tharu",
    phone: "9800562062"
    },
    {
    id: 2,
    name: "Aratii Singh",
    phone: "9864968870"
    },
    {
    id: 3,
    name: "Manju Tharu",
    phone: "9844856292"
    }
    

  
   ]
   return(
    <div>
    <Contacts contacts={contacts} />
  </div>
   )
}