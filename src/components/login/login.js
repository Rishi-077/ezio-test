import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function login() {
    if (name === "user" && password === "user@123") {
      navigate("/todo");
      setName("");
      setPassword("");
    } else return alert("incorrect credential");
  }
  return (
    <>
      <div className="card w-50 mx-auto mt-5 py-3 px-4">
        <form>
          <div className="mb-4">
            <label className="h6 fw-bold">Username</label>
            <input
              type="text"
              placeholder="username"
              className="form-control shadow-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="h6 fw-bold">password</label>
            <input
              type="text"
              placeholder="password"
              className="form-control shadow-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" onClick={login}>
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
