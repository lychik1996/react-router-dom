import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth"

export default function CreatePage(){
    const {signOut} =useAuth();
    const navigate = useNavigate();
    return(
        <>
        <p className="body"style={{fontSize:"30px", paddingTop:"10px"}}>Create Post</p>
        <button onClick={()=>signOut(()=>navigate('/',{replace:true}))}>LogOut</button>
        </>
    )
}