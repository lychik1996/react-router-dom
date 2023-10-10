
import { useNavigate, useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const singleLoader = async ({request,params})=>{
  const id = params.id;
  const res = await fetch('/para.json')
  const data = await  res.json()
  
  return{data,id}
}
export default function SinglePage() {
  const {data, id} = useLoaderData();
  
  // const { id } = useParams();//polychitb parametri s url adresa
  const navigate = useNavigate();
  // useNavigate route po histori
  

  const goBack =()=>navigate(-1);
  const goHome = ()=>navigate("/");

  
  
  const selectItem = data.page.find((item) => item.id == id);
  return (
    <div>
      
        <>
          <h1>{selectItem.name}</h1>
          <p>{selectItem.info}</p>
          <Link to={"edit"} style={{backgroundColor:"blue",color:"white"}}>
          Edit Post
          </Link>
          <button onClick={()=>goBack()}>Back</button>
          <button onClick={()=>goHome()}>Home</button>
        </>
      
    </div>
  );
}
