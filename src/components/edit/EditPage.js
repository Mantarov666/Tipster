

import { useEffect, useState } from "react"
import { useParams,  useNavigate, Link, json } from "react-router-dom"

export const EditPage = () => { 
const params = useParams()
const navigate = useNavigate()

const [curentPost, setCurentPost] = useState({})
const oldToken = curentPost.accessToken
const old_Id = curentPost._id
console.log(oldToken)
useEffect(()=> { 
    fetch(`http://localhost:3030/jsonstore/comentary/${params.id}/${params._id}`)
    .then(res=>res.json())
    .then(rez=>{
        setCurentPost(rez)
    })}, [])

  


const onSubmit = (e) => {
    e.preventDefault();

    const gameData = Object.fromEntries(new FormData(e.target));

   console.log(gameData.user)
   
   console.log(params.id)
   console.log(params._id) 

     fetch(`http://localhost:3030/jsonstore/comentary/${params.id}/${params._id}`, {
   headers: {
	Accept: "application/json",
	"Content-Type": "application/json"
	},
	method: "PUT",
    body: JSON.stringify({
        author: gameData.user,
        coment : gameData.textarea,
        accessToken : oldToken, 
        _id : old_Id
    })
  })
  .then(res=>res.json())
  .then(rez=> { 
    setCurentPost(rez)
    navigate(`/prediction/${params.id}/comentary`)
    console.log(rez)
  })

  
}
    
   

    return (
        <form  style={{ gap: '15px', alignItems: 'center' }} onSubmit={onSubmit} >
        <div>
            <label htmlFor="user"></label>
            <input name="user" type="text" id="user" style={{ width: '300px', borderRadius: '15px', border: 'solid' }} defaultValue={curentPost.author} />  
        </div>
        <div>
            <label htmlFor="comentary"></label>
            <textarea name="textarea" id="comentary" style={{ width: '300px', height: '100px', border: 'solid', borderRadius: '15px' }}  defaultValue={curentPost.coment}></textarea>

        </div>
       
   <button  style={{ justifyContent: 'flex-end', border: 'solid' }} type="submit" >Edited</button>
   
    </form>
        )
} 
 

