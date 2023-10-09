import { useLocation,Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

//yznaem otkydova mi prishli i etb li polbzovateli
export default function RequireAuth({children}){
    const {user}= useAuth();
    const location = useLocation();
    
    if(!user){
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children;
}