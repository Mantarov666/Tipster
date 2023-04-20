import { useContext, useState } from "react"
import { AuthContex } from "../../context/AuthContext"
import styles from "../coments/style.module.css"
import { Link, useNavigate, useParams } from "react-router-dom"


export const Coment =(props)=> { 
const navigate = useNavigate()
const params = useParams()
const { user } = useContext(AuthContex)



const onDel = (e) => { 
    e.preventDefault()
    fetch(`http://localhost:3030/jsonstore/comentary/${params.id}/${props.data._id}`, {
        method : "DELETE"
    })
    navigate (`/prediction/${params.id}/details`)
}


const onEdit = (e) => { 
    e.preventDefault()
    navigate(`/edit/${params.id}/${props.data._id}`)
}





    return (
            
        <div className={styles.comment}>
            <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
                <label htmlFor="coment"> <h4> {props.data.author}</h4></label>
               
             <strong>:</strong> <h4 style={{fontStyle:'italic'}}> " {props.data.coment}"</h4>   
             {user.accessToken == props.data.accessToken &&  <button onClick={onDel} >Delete</button> }

             {user.accessToken == props.data.accessToken &&    <button  onClick={onEdit} >Edit</button> }

          

           
           
            </div>
        </div>
     
    )

}