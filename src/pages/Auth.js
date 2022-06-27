import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
    }));

    navigate('/');
  }

  return (
    <div className="Auth">
 <form onSubmit={onAuthStart}>
 <div className="Auth">
          <input type="email" placeholder="E-mail" name="email" required />
          <input
            type="password"
            placeholder="Password"       
            name="password"
            required
            minLength="6"
          />
        </div>
<button>Sign in</button>
      <button>Sign up</button>
</form>

    </div>
  );
}