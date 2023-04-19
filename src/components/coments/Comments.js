import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Coment } from "../coments/Coment"



export const Comments = () => { 
const params = useParams()

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
           {Object.values(coment).map((x)=> <Coment key={`${x._id}+3`} data={x} />)}
          </div>
        
:<p>No comments</p>
         }</div>
    )
}