




    import { useContext, useEffect } from "react"
    import { AuthContex } from '../../context/AuthContext'
    import { logout } from "../../service/authService"
    import { useNavigate } from "react-router-dom"
    
    
    
    export const Logout = () => { 
    
        const navigate = useNavigate()
      const {user, userLogout} = useContext(AuthContex)
      console.log(user)
    
        useEffect( ()=> { 
             logout(user.accessToken) 
        .then(()=> {
            userLogout()
          navigate('/')
        })
        // .catch((error)=>{
        //     console.log(error)
        // })
        })
       
      
    return null
    
    }
    


