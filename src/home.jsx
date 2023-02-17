import { useContext ,useEffect} from 'react'
import {AuthContext} from './auth'
import {useNavigate} from 'react-router-dom'

function home (){
    const {current} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!current){
            navigate('/login')
        }
    },[])

    return (
        <div className="home">
            <h3>home page</h3>
        </div>
    )

}

export default home