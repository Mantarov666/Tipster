
// import styles from './Prediction.module.css'

import { useContext } from "react"
import { AuthContex } from "../../context/AuthContext"
import { PredictionMatches } from "../preDetails/PredictionMatches"




export const Prediction = () => { 

    const {matches} = useContext(AuthContex)

    return (



      <>
   {Object.values(matches).map((x)=> <PredictionMatches key={`${x._id}+1`} match={x} />)}
      </>

    )
   
}