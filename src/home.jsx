import { useContext ,useEffect, useState} from 'react'
import axios from 'axios'
import {AuthContext} from './auth'
import {useNavigate} from 'react-router-dom'

function home (){
    const {current} = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData , setUserData] = useState()


    useEffect(() => {
        if(!current){
            navigate('/login')
        }

        axios.get('http://localhost:5174/api/list-user') // เชื่อมต่อกับ api ของฝั่ง backend
        .then((res) => {
            console.log(res.data.result)
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
                            <th>name</th>
                            <th>lastName</th>
                            <th>email</th>
                        </tr>
                        {
                           userData?.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                        } 
                    </table>
                </div>
            </div>
        </div>
    )

}

export default home