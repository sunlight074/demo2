import {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function home (){
    const navigate = useNavigate();
    const [userData , setUserData] = useState()

    useEffect(() => {
        if(!sessionStorage.getItem("login")){
            navigate('/login')
        }

        axios.get('http://localhost:5174/api/list-user') // เชื่อมต่อกับ api ของฝั่ง backend
        .then((res) => {
            setUserData(res.data.result)
        })
        .catch((error) => {
            console.log(error)
        })

    },[])

    return (
        <div className="home">
            <div className="container-lg bg-white"  style={{marginTop : 90 ,padding:20 ,width: 700 , borderRadius: 20  }}>  
                <div className='text-center'>รายชื่อผู้ใช้งานระบบ</div>
                <div className='mt-5'>
                    <table className="table table-bordered">
                        <tr>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                        </tr>
                        {
                           userData?.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                        } 
                    </table>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <button className='btn btn-primary' 
                onClick={()=>{
                    sessionStorage.clear()
                    navigate('/login')
                }}
                >
                    Sign Out
                </button>
            </div>        
        </div>
    )

}

export default home
