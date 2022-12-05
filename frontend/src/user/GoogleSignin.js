import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { googleSignup, authenticate, isAuthenticated } from "../auth/helper";
import { Redirect } from "react-router-dom";

// This is used to display sign in page
const GoogleSignin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false, // To show loading msg to user that somethings going on
    didRedirect: false, // Redirect user after he signs in
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        let user = {};
        const data = res.data;
        user.email = data.email;
        user.name = data.given_name;
        user.lastname = data.family_name;
        user.password = (Math.random() + 1).toString(36).substring(7);
        googleSignup(user)
          .then((data) => {
            if (data.error) {
              setValues({ ...values, error: data.error, loading: false });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true,
                });
              });
            }
          })
          .catch(console.log("Error in signup"));
      } catch (err) {
        console.log(err);
      }
    },
  });

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      <div className="separator">
        <div className="line"></div>
        <h2>Or</h2>
        <div className="line"></div>
      </div>
      <div className="App">
        <header className="App-header">
          <button onClick={login} className="google_button">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>
          {/* <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse.credential);
                            var decoded = jwt_decode(credentialResponse.credential);
                            console.log(decoded)
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }} /> */}
        </header>
      </div>
      {performRedirect()}
    </div>
  );
};

export default GoogleSignin;
