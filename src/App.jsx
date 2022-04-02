import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
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
    <UserContext.Provider value={{user, setUser, PersistLogin, Logout}}>
      <TokenContext.Provider value={{token, setToken}}>
        <PercentageContext.Provider value={{percentage, setPercentage}}>
          <DayContext.Provider value={{day, setDay}}>
            <BrowserRouter>
              <Topbar pathname={window.location.pathname} />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              <Menu pathname={window.location.pathname}/>
            </BrowserRouter>
          </DayContext.Provider>
        </PercentageContext.Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}