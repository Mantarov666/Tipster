


import { useContext } from "react"
import { AuthContex } from "../../context/AuthContext"
import { Link } from "react-router-dom"
// import { PredictionMatches } from "../preDetails/PredictionMatches"




export const Prediction = () => { 

  //   const {matches} = useContext(AuthContex)

  //   return (



  //     <>
  //  {Object.values(matches).map((x)=> <PredictionMatches key={`${x._id}+1`} match={x} />)}
  //     </>

  //   )
   
  const {user} = useContext(AuthContex)

  return (
    
    <div className="cards" style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'40px',  backgroundColor:'lightgrey'}}>
       
    <div className="cardContainer" style={{width:'60%', justifyContent:'space-around', backgroundColor:'gray',margin:'20px', borderRadius:'10px',height:'190px', gap:'10px' }}>
        {/* <div className="cardHeading" style={{display:'flex', alignItems:'center', gap:'10px', marginTop:'15px', marginLeft:'10px'}}>
        <span >tipster: </span> <h5>{props.match.autor}</h5>
        </div>
        <hr />
        <div className="cardBody" style={{display:'flex', justifyContent:'space-around'}}>
          <h2 >{props.match.home}</h2> <h2>vs</h2> <h2>{props.match.away}</h2>
         
         
       </div> */}

  <div className="cardHeading" style={{display:'flex', alignItems:'center', gap:'10px', marginTop:'15px', marginLeft:'10px'}}>
        <span >tipster: </span> <h5>   {/* {props.match.autor}  */}  Vasil Kaloyanov </h5>
        </div>
        <hr />
        <div className="cardBody" style={{display:'flex', justifyContent:'space-around'}}>

          <h2 >   {/*  {props.match.home}*/}  Manchester City  </h2> <h2>vs</h2> <h2>{/*  <h2>{props.match.away}*/} Arsenal </h2>
         
         
       </div> 

{/*  ${props.match._id} */}


       {user.accessToken && <>  <div style={{display:'flex', justifyContent:'flex-end', marginRight:'20px', marginTop:'20px', gap:'10px'}}>
         <Link to={`/prediction/1/details`}> <button>Details</button> </Link> 
         
       </div> </>}

      
     </div>
    
   </div>
  )
}