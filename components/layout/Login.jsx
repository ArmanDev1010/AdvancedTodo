import React, { useEffect } from "react";

import signinimg from "../../assets/signinimg.jpg";
import logo from "../../assets/logo.png";

import AuthButtons from "../AuthButtons";

import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigate("/tasks");
    });
  }, [navigate]);

  return (
    <div className="">
      <div className="relative z-50 p-[10px]">
        <img src={logo} className="max-w-[50px]" alt="" />
      </div>
      <div className="flex lg:flex-row max-lg:flex-col h-[80vh] max-lg:h-[75vh] items-center justify-around m-[5px] relative -z-1">
        <AuthButtons />
      </div>
    </div>
  );
};

export default Login;
