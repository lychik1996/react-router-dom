import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();//navigatciya
  const location = useLocation();//state dlya hranenie infi
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    signIn(user, ()=>navigate(fromPage,{replace:true}))
  };
  return (
    <>
      <p className="body">This is LoginPage</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:<input type="text" name="username" placeholder='Name'/>
        </label>

        <button type='submit'>Login</button>
      </form>
    </>
  );
}
