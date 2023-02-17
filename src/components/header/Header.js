
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContex } from "../../context/AuthContext"


export const Header = () => { 

const {user} = useContext(AuthContex)


    return (

        <header >      
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
   
  <Link to="/" className="navbar-brand">the Best Football Tipster</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto"     >
       {user.email && <span className="nav-link" style={{color:'black'}}>{user.email}</span> } 
               {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Sports
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
               Football
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Basketball
              </a>
            </li>
            
          </ul>
        </li> */}
         
        <li className="nav-item">
          <Link to='/prediction' className="nav-link" >
           Prediction
          </Link>
        </li>
 

      <li className="nav-item">
          <Link to='/about' className="nav-link" >
            About us
          </Link>
        </li>
 
        { user.accessToken 
         ?<li className="nav-item">
          <Link className="nav-link" to='/logout'>
           Logout
          </Link>
          
        </li>
        
        : 
         <>  <li className="nav-item">
         <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
         <Link to="/register" className="nav-link">Register</Link>
        </li>
        </>
     
}

      </ul>
    </div>
  </div>
</nav>
</header>
    )
}