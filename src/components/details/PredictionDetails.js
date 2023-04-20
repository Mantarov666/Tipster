import { useContext, useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContex } from "../../context/AuthContext"
import { getOne } from "../../service/matchService"
import { Comments } from "../coments/Comments"

export const PredictionDetails = () => {
const navigate = useNavigate()
 const params = useParams()
 
  

    useEffect(()=> {
      getOne(params.id).then(rez => {
        setMatchDet(rez)
    })
    }, []) ; 
    const {user} = useContext(AuthContex)
    const [matchDet, setMatchDet] = useState("")
    const [clicked, isClicked] = useState(false)
    const onCliked = (e) => {
        e.preventDefault()
        isClicked(!clicked)
    }



const onSubmit = (e) =>{
e.preventDefault()
const inputData = new FormData(e.target)
const author = inputData.get('user');
const info = inputData.get('textarea')


    const data ={
        accessToken : user.accessToken,
       author, 
       coment : info
       
    }

  if(info.length > 0){

fetch(`http://localhost:3030/jsonstore/comentary/1`, {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
 })
navigate(`/prediction/1/comentary`)


  }



}

    


   
    return (

        // <div className="cards" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', backgroundColor: 'lightgrey' }}>

        //     <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '190px', gap: '10px' }}>
        //         <div className="cardHeading" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px' }}>
        //             <span >tipster: </span> <h5>{matchDet.autor}</h5>
        //         </div>
        //         <hr />
        //         <div className="cardBody" style={{ display: 'flex', justifyContent: 'space-around' }}>
        //             <h2 >{matchDet.home}</h2> <h3>{matchDet.hGoals}</h3> <h2>vs</h2> <h3>{matchDet.aGoals}</h3><h2>{matchDet.away}</h2>


        //         </div>
        //     </div>
        //     <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '190px', gap: '10px' }}>
        //         <h3> Analysis</h3>
        //         {matchDet.analis}</div>
        //     <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '250px', gap: '10px' }}>
        //         <h3> Comments: <Link to={`/prediction/${params.id}/comentary`}    > <button style={{ fontSize: '15px', borderRadius: '10px' }}>view </button></Link> </h3>
               

        <div className="cards" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', backgroundColor: 'lightgrey' }}>

        <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '190px', gap: '10px' }}>
            <div className="cardHeading" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px' }}>
                <span >tipster: </span> <h5> {/*  {matchDet.autor}*/} Vasil Kaloyanov</h5>
            </div>
            <hr />
            <div className="cardBody" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h2 > {/*  {matchDet.home}*/} Manchester City </h2><h3> {/* {matchDet.hGoals}*/} 3 </h3> <h2>vs</h2> <h3> {/*  {matchDet.aGoals}*/} 2 </h3><h2> {/* {matchDet.away}*/} Arsenal</h2>


            </div>
        </div>
        <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '190px', gap: '10px' }}>
            <h3> Analysis</h3>
            Mikel Arteta will come up against his mentor Pep Guardiola for the first time as Arsenal manager when the Gunners take on Manchester City at the Etihad Stadium on Wednesday evening.

The visitors remain in the hunt for a European spot with 10 games of their season to go, while Man City will be hoping to use this rearranged fixture to bounce back from their derby defeat at the hands of Manchester United on Sunday.
</div>
        <div className="cardContainer" style={{ width: '60%', justifyContent: 'space-around', backgroundColor: 'gray', margin: '20px', borderRadius: '10px', height: '250px', gap: '10px' }}>
            <h3> Comments: <Link to={`/prediction/${params.id}/comentary`}    > <button style={{ fontSize: '15px', borderRadius: '10px' }}>view </button></Link> </h3>
           



                { !clicked  ?<button onClick={onCliked} type='submit'>Add comment</button>:<></>}
               
                { clicked
                   
                       
                     ?  <div>
        
                        <form onSubmit={onSubmit} style={{ gap: '15px', alignItems: 'center' }}>
                            <div>
                                <label htmlFor="user"></label>
                                <input name="user" type="text" id="user" style={{ width: '300px', borderRadius: '15px', border: 'solid' }} placeholder='Name...' />
                            </div>
                            <div>
                                <label htmlFor="comentary"></label>
                                <textarea name="textarea" id="comentary" style={{ width: '300px', height: '100px', border: 'solid', borderRadius: '15px' }} placeholder='Comment...'></textarea>

                            </div>
                           
                            <button  style={{ justifyContent: 'flex-end', border: 'solid' }} type="submit">Add</button>
                            {/* </Link> */}

                        </form>
                    </div>
                         : <></>
                   

                    }
            </div>
        </div>



    )


}