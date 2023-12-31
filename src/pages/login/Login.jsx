import "./login.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email" />
        <label>Passowrd</label>
        <input type="password" className="loginInput" placeholder="Enter your password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  )
}
