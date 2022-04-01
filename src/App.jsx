import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import "./style/reset.css";
import "./style/style.css";

export default function App() {
  const [tokenSerialized, setTokenSerialized] = useState(localStorage.getItem("token"));
  const [userSerialized, setUserSerialized] = useState(localStorage.getItem("user"));

  const [user, setUser] = useState(userSerialized);
  const [token, setToken] = useState(tokenSerialized);
  const [percentage, setPercentage] = useState('');
  const [day, setDay] = useState('');

  function PersistLogin(user, token) {
    setUser(user);
		setToken(token);

    setTokenSerialized(localStorage.setItem("token", token));
    setUserSerialized(localStorage.setItem("user", user));
	}

  function Logout() {
    setTokenSerialized(localStorage.removeItem("token"));
    setUserSerialized(localStorage.removeItem("user"));
    
    setUser(userSerialized);
		setToken(tokenSerialized);
  }

  return(
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
  );
}