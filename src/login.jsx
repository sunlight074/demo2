import { useNavigate} from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

function login () {
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault()
        const {email , password} = e.target.elements
 
        axios.post('http://localhost:5174/api/login',{ email:email.value, password: password.value }) // เชื่อมต่อกับ api ของฝั่ง backend
        .then((res) => {
          Swal.fire('เข้าสู่ระบบสำเร็จ','','success').then(()=>{
            sessionStorage.setItem("login",true);
            navigate('/home')
          })
        })
        .catch((error) => {
           Swal.fire('ไม่สามารถเข้าสู่ระบบได้','email หรือ password ผิด','error')
        })
    }

    return (
        <div className="Login">
           <div className="container-lg bg-white"  style={{marginTop : 90 ,padding:20 ,width: 700 , borderRadius: 20  }}>
                <div className="text-center">
                    <h3 style={{color: '#959594'}}>Login</h3>
                </div>
                <form className="needs-validation" novalidate onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>E-mail</label>
                        <input className="form-control" type="email" name="email" required/>
                    </div>
                    
                    <div className="mb-3">
                        <label>Password</label>
                        <input className="form-control" type="password"  name="password" required/>    
                    </div>
                    
                    <div className="text-center mt-4">
                        <button className="btn btn-success" type="submit">Login</button>
                    </div>
                </form> 
                <div className="d-flex gap-2 justify-content-center mt-3">
                    <p >Or</p>
                    <a href="register">register</a>
                </div>
            </div>
        </div>
    )
}

export default login 