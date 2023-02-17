import { Link, useNavigate } from "react-router-dom"
import { AuthContex } from "../../context/AuthContext"
import { useContext, useState } from "react"
import { register } from "../../service/authService"




export const Register = () => { 
  const {userLogin} = useContext(AuthContex)
const navigate = useNavigate()

const [cheked, isChecked] = useState (false)


const onCheckedHandler = ()=> {
  isChecked(!cheked)
}




const onSubmitRegister =(e)=> { 
e.preventDefault()
const data = new FormData(e.target)
 
const password = data.get('password')
const comfirmPass = data.get('rePass')
const email = data.get('email')


if(password !== comfirmPass){
  alert('Passwords do NOT match')
  return
}

  register(email, password)
  .then(authData => { 
    userLogin(authData)
    navigate('/')

  })

}




    return (
        <section
  className="vh-80 bg-image"
  style={{
    backgroundColor:
      'gray'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5 " >
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form onSubmit={onSubmitRegister}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name="userName"
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                    name="email"
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                    name="password"
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                    name="rePass"
                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5" style={{fontSize:'20px'}}>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    // defaultValue=""
                    id="form2Example3cg"
                    name="chek"
                    checked={cheked}
                    onChange={onCheckedHandler}

                  
                
                  />
                  <label className="form-check-label" htmlFor="form2Example3g" style={{fontWeight:'900', fontSize:'20px'}}>
                    I am over 18 !
                    
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    disabled={!cheked}
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <Link to='/login' className="fw-bold text-body">
                    <u>Login here</u>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}