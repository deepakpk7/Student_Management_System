import { useEffect,useState } from 'react'
import axios from 'axios'

function List(){
    const [data,setData] = useState([])
    const [editing,setEditing]=useState(false)
    const [editdata,setEditData]=useState(null)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/student/').then ((res)=>{
            console.log(res.data);
            setData(res.data)

        }).catch(error=>console.log(error.message))
    },[])
    const Edit_dtls=(task)=>{
        setEditing(true)
        setEditData(task)
    }

    const UpdateDlts=(id,task) =>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/student/${id}/`,task).then (res=>{
            setData(data.map((prv)=>prv.id===id ? res.data : prv))
        }).catch(error =>console.log(error.message)
    )
    }

    return(
        <div className="container">
            <h1><center>STUDENT MANAGEMENT</center></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ROLL NO</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MARK</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.roll_no}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.mark}</td>
                            <td>{value.phone}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{Edit_dtls(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ? <EditForm curTask={editdata} updateFunction={UpdateDlts}/> : null}
        </div>
    )
}

const EditForm = ({curTask,updateFunction})=>{
    const [task,setTask] = useState(curTask)

    const handleChange = (e)=>{
        const {name,value}=e.target
        setTask({...task,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        updateFunction(task.id,task)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="number" name="roll_no" id="roll_no" value={task.roll_no} onChange={handleChange}/>
            <input type="text" name="name" id="name" value={task.name} onChange={handleChange}/>
            <input type="number" name="age" id="age" value={task.age} onChange={handleChange}/>
            <input type="number" name="mark" id="mark" value={task.mark} onChange={handleChange}/>
            <input type="number" name="phone" id="phone" value={task.phone} onChange={handleChange}/>
            <input type="submit" value="update" className="btn btn-primary"/>
        </form>
    )
}

export default List