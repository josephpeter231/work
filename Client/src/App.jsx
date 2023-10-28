import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile/Profile";
import LoginOrSignup from "./Components/Login/LoginOrSignup";
import Configuration from "./Components/Configuration";

// import Configuration from "./Components/Configuration";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} exact />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        {/* <Route path="/config"  element={<Configuration/>}/> */}
        <Route path='/loginOrSignup' element={<LoginOrSignup/>}/>
        <Route path="*"  element={<PageNotFound/>}/>
        <Route path='/config' element={<Configuration/>}/>

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
