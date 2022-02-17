import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    const payload = {
      email: username,
      password: pass,
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r.token);
        if (r.token) {
          setAuth(true);
          setToken(r.token);
          setPass("");
          setUsername("");
        } else {
          setAuth(false);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h1>Navbar</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={pass}
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>
        {auth === true ? "Logout" : "Login"}
      </button>
      <div>
        {auth === true ? `Logged In and Token is ${token}` : "Logged Out"}
      </div>
    </div>
  );
};
