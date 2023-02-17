
import { useContext, useState } from "react"
import { AuthContex } from "../../context/AuthContext"


export const UserComents = () => {

    const { user } = useContext(AuthContex)

    const [coments, setComents] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const curComents = data.get('coments')
      

        setComents(curComents)

       

    }






    return (
        <div style={{ border: 'solid', borderRadius: '15px', width: '80%', height: '60px', }}>
            <form onSubmit={onSubmit}>
                <label htmlFor="comentary" >  <strong> {user.email}</strong>  : </label> 
                    
                  
                <input id="comentary" type="text" name="coments" />
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>

                    <button type="submit" style={{ borderRadius: '10px', width: '70px' }}>Add</button>

                </div>

            </form>

                <div> {coments} </div>
        </div>
    )
}