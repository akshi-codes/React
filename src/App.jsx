import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from
'react-router-dom'; 
import React from "react";

const Home = () => {
  return (
    <div>This Is My Home Comp</div>
  )
}
const About = () => {
  return (
    <div>This Is My About Comp</div>
  )
}
const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>This Is My Contact Comp
      <button onClick={() => navigate("/profile", {state: { message: "I am coming from contact page"}})}>Navigate to profile</button>
    </div>  
  ) 
}
const Profile = () => {
  const location = useLocation();
  return (
    <>
      <div>This Is My Profile Comp</div>
      <h1>{location?.state?.message}</h1>
    </>
   )
}
const App = () => {
  const label = window.labelConfig
  console.log(label)
return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <h1>App</h1>
      </BrowserRouter>
    </>

)
}


export default App