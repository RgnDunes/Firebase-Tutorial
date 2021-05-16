import { auth, provider } from "./firebase";
import React from "react";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Result >>>> ", result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <h1>Sign In to with Google</h1>
    </div>
  );
}

export default Login;
