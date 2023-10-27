import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";
import LoginOrSignup from "./Components/Login/LoginOrSignup";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} exact />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="*"  element={<PageNotFound/>}/>
        <Route path='/loginOrSignup' element={<LoginOrSignup/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
