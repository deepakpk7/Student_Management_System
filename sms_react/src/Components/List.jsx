import { useEffect, useState } from "react";
import axios from 'axios'

function List(){
    const [data,setData] = useState([])
    const [editing,setEditing] = useState([false])
    const [editdata,setEditData] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/student/').then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])

    const Edit_Details = (roll_no,)
}