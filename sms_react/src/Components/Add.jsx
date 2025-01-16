import axios from "axios"
import { useState } from "react"

function Add(){
    const [roll_no,setRollno] = useState('')
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [mark,setMark] = useState('')
    const [phone,setPhone] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/student/',{roll_no,name,age,mark,phone}).then(res=>{
            setRollno('')
            setName('')
            setAge('')
            setMark('')
            setPhone('')
        }).catch(error=>console.log(error.message)
        )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" name="roll_no" id="roll_no" placeholder="Enter roll number" value={roll_no} onChange={(e)=>setRollno(e.target.value)}/>
                <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="number" name="age" id="age" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                <input type="number" name="mark" id="mark" placeholder="Enter Mark" value={mark} onChange={(e)=>setMark(e.target.value)}/>
                <input type="number" name="phone" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        </>
    )


}
export default Add