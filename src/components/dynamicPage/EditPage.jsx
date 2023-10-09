import { useParams } from "react-router-dom"

export default function EditPage(){
    const {id}=useParams();
    
    return(
        <>
        <p className="body"style={{fontSize:"30px", paddingTop:"10px"}}>Edit Post {id}</p>
        </>
    )
}