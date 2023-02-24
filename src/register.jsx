import Swal from 'sweetalert2'
import { useNavigate  } from "react-router-dom";
import axios from 'axios'

function register() {
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault()

    const {email ,password ,confirmation ,first_name , last_name } = e.target.elements

    if(password.value !== confirmation.value){
      Swal.fire('รหัสผ่านไม่ตรงกัน' ,'' ,'error')
    }else{
      Swal.fire({
        text:'ยืนยันการลงทะเบียน',
        icon:'warning',
        confirmButtonColor:'#3085D6',
        cancelButtonColor:'#d33',
        confirmButtonText:'ยืนยัน',
        cancelButtonText:'ยกเลิก',
      }).then((result)=>{
          if(result.isConfirmed) {       
            axios.post('http://localhost:5174/api/register',
            { email:email.value, password: password.value , first_name:first_name.value , last_name:last_name.value }) // เชื่อมต่อกับ api ของฝั่ง backend
            .then((res) => {
              Swal.fire('ลงทะเบียนสำเร็จ','','success').then(()=>{
                navigate('/login')
              })
            })
            .catch((error) => {
               Swal.fire('ลงทะเบียนไม่สำเร็จ','มี email ซ้ำ','error')
            })

          }
      }) 
    }
  }

  return ( // ส่งข้อมูลออก
    <div className="App">
      <div className="container-lg bg-white"  style={{marginTop : 90 ,padding:20 ,width: 700 , borderRadius: 20  }}>
        <div className="text-center">
            <h3 style={{color: '#959594'}}>Register</h3>
        </div>

        <form className="needs-validation" novalidate onSubmit={onSubmit}>
          
          <div className="mb-3">
              <label>Name</label>
              <input className="form-control" type="text" name="first_name" required/>
          </div>

          <div className="mb-3">
              <label>Lastname</label>
              <input className="form-control" type="text" name="last_name" required/>
          </div>

          <div className="mb-3">
              <label>E-mail</label>
              <input className="form-control" type="email" name="email" required/>
          </div>
          
          <div className="mb-3">
              <label>Password</label>
              <input className="form-control" type="password"  name="password" required/>    
          </div>
        
          <div className="mb-3">
              <label>Password confirmation</label>
              <input className="form-control" type="password"   name="confirmation" required/>
          </div>
        
          <div className="text-center mt-4">
              <button className="btn btn-success" type="submit">Register</button>
          </div>
        </form>
        
        <div className="d-flex gap-2 justify-content-center mt-3">
            <p >Or</p>
            <a href="login">Sign in</a>
        </div>
     </div>
    </div>
  )
}


export default register // export ทุกครั้งเพื่อให้หน้า main เรียกใช้


