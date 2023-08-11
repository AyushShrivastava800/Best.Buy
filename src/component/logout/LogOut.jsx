import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LogOut() {
  const navigate=useNavigate();
  useEffect(() => {
    localStorage.removeItem("loggedUser");
    navigate("/")
  }, []);

  return <div></div>;
}
export default LogOut;
