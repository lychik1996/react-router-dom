import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SinglePage() {
  const { id } = useParams();//polychitb parametri s url adresa
  const navigate = useNavigate();
  // useNavigate route po histori
  const [data, setData] = useState(null);

  const goBack =()=>navigate(-1);
  const goHome = ()=>navigate("/");

  useEffect(() => {
    fetch('/para.json')
      .then((res) => res.json())
      .then((data) => setData(data.page));
  }, [id]);
  
  const selectItem = data && data.find((item) => item.id == id);
  return (
    <div>
      {selectItem && (
        <>
          <h1>{selectItem.name}</h1>
          <p>{selectItem.info}</p>
          <Link to={"edit"} style={{backgroundColor:"blue",color:"white"}}>
          Edit Post
          </Link>
          <button onClick={()=>goBack()}>Back</button>
          <button onClick={()=>goHome()}>Home</button>
        </>
      )}
    </div>
  );
}
