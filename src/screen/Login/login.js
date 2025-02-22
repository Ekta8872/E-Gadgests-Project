import react, { useState } from "react";
import NavBar from "../../components/NavBar";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addLogin } from "../../reducer/loginSlice";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Box } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLogin({ name }));
    // navigate("/");
    // alert(`welcome ${name}`);
    setShowModal(true);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <NavBar />

      <div className="login-container">
        <h2 className="formHeading">Login</h2>
        <p className="para">
          Don't have an account?{" "}
          <a className="newAccPara" href="#">
            Create a New account
          </a>
        </p>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label for="username">Enter username</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Username"
            />
          </div>
          <div className="input-box">
            <label for="password">Enter Password</label>
            <br />
            <input
              type="password"
              id="passwords"
              required
              placeholder="Enter password"
            />
          </div>
          <div className="forgetDiv">
            <a className="forgetPassword" href="#">
              Forget password?
            </a>
          </div>
          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
