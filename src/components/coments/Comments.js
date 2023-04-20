import { useEffect, useState, useId, useContext } from "react"
import { useParams } from "react-router-dom"
import { Coment } from "../coments/Coment"

import { AuthContex } from "../../context/AuthContext"

export const Comments = () => { 
    const {user }= useContext(AuthContex)
const params = useParams()
const uniId = useId()
const [coment, setComent] = useState([])
useEffect(()=>{
    fetch(`http://localhost:3030/jsonstore/comentary/${params.id}`)
    .then(res=>res.json())
    .then(rez=>{
        setComent(rez)
    })}, [])

   
 

    
 
    return (
        <div>
            <h1>Comentary: </h1>
            { Object.values(coment).length !== 0
           ? 

            <div style={{display: 'flex', flexDirection:'column', gap: '20px'}}>
           {Object.values(coment).map((x)=> <Coment key={`${Object.keys(x)}`} data={x}  />)}
          </div>
        
:<p>No comments</p>
         }</div>
    )
}