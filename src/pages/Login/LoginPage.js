import React, { useState, useEffect } from "react";
import style from "./login.module.css";
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [errorMessages, setErrorMessages] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    async function checkLoginData() {
      let tempLoginData = await fetch("//www.rd-fitness.in/crud.php", {
        method: "POST",

        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
          return "error";
        });
      if (tempLoginData === false) {
        setErrorMessages(true);
      } else if (tempLoginData === true) {
        setErrorMessages(false);
        console.log("login successful");
        navigate('/Clients', { replace: true });

      }
    }
    checkLoginData();
  };

  const renderForm = (
    <div className={style.form}>
      <form onSubmit={handleSubmit} action="#">
        <div className={style.inputContainer}>
          <label>Username </label>
          <input
            type="text"
            name="uname"
            onChange={(e) => setUserName(e.target.value)}
            required
            className={style.text}
          />
          {errorMessages==true && <div className={style.error}>invalid username</div> }
        </div>
        <div className={style.inputContainer}>
          <label>Password </label>
          <input
            type="password"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            required
            className={style.password}
          />
          {errorMessages==true && <div className={style.error}>invalid password</div> }
        </div>
        <div className={style.buttonContainer}>
          <input type="submit" className={style.submit}/>
        </div>
      </form>
    </div>
  );

  return (
    <div className={style.app}>
      <div className={style.loginForm}>
        <div className={style.title}>Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
export default Login;
