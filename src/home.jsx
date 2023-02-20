import { useContext ,useEffect} from 'react'
import {AuthContext} from './auth'
import {useNavigate} from 'react-router-dom'

function home (){
    const {current} = useContext(AuthContext);
    const navigate = useNavigate();
    const userData = [
        {name:'วาณี1',lastname:'ปุยเจริญ1',email:'wanee1@gmail'},
        {name:'วาณี2',lastname:'ปุยเจริญ2',email:'wanee2@gmail'},
        {name:'วาณี3',lastname:'ปุยเจริญ3',email:'wanee3@gmail'},
        {name:'วาณี4',lastname:'ปุยเจริญ4',email:'wanee4@gmail'},
        {name:'วาณี5',lastname:'ปุยเจริญ5',email:'wanee5@gmail'},
    ]

    useEffect(() => {
        if(!current){
            navigate('/login')
        }
    },[])

    return (
        <div className="home">
            <div className="container-lg bg-white"  style={{marginTop : 90 ,padding:20 ,width: 700 , borderRadius: 20  }}>  
                <div className='text-center'>รายชื่อผู้ใช้งานระบบ</div>
                <div className='mt-5'>
                    <table class="table table-bordered">
                        <tr>
                            <th>name</th>
                            <th>lastName</th>
                            <th>email</th>
                        </tr>
                        {
                            userData.map((item)=>(
                                <tr>
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