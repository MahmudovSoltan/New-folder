import { useState } from 'react'
import './App.css'

function App() {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [name2,setName2] = useState("")
const [email2,setEmail2] = useState("")
const [phone2,setPhone2] = useState("")
const [error,setError]= useState(false)
const handleUserInfo = ()=>{
  if (name ==""||email==""||phone=="") {
    setError(true)
  }else if(name!=="" && email !==""&& phone !==""){
    setError(false)
  }
  setName2(name)
  setName("")
  setEmail2(email)
  setEmail("")
  setPhone2(phone)
  setPhone("")
}
console.log(error);

  return (
<div>
<div>
  <input value={name}  onChange={(e)=>setName(e.target.value)} style={{padding:"5px"}} type="text" placeholder='enter your name ' />
  <input  value={email} onChange={(e)=>setEmail(e.target.value)} style={{padding:"5px"}} type="email" placeholder='enter your Surname ' />
  <input  value={phone} onChange={(e)=>setPhone(e.target.value)} style={{padding:"5px"}} type="number" placeholder='enter your phone number ' />
  <button onClick={handleUserInfo}>Save</button>
</div>
<hr />
<div style={{display:"flex",gap:"10px"}}>
  <p style={{minWidth:"169px",textAlign:"left",border:"1px solid black"}}>User Name: <span>{name2}</span></p>
  <p style={{minWidth:"169px",textAlign:"left",border:"1px solid black"}}>User Surname: <span>{email2}</span></p>
  <p style={{minWidth:"169px",textAlign:"left",border:"1px solid black"}}>User Phone Number: <span>{phone2}</span></p>
</div>
<div>
{error?<p style={{color:"red"}}>Zehmet olmasa xanalari doldurun</p>:null}
</div>
</div>
  )
}

export default App
