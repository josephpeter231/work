import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile/Profile";
import LoginOrSignup from "./Components/Login/LoginOrSignup";
import Configuration from "./Components/Configuration";
import DeveloperConfiguration from "./Components/DeveloperConfiguration";
import DeveloperHome from "./Components/DeveloperHome";




function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} exact />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/developerhome"  element={<DeveloperHome/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path='/loginOrSignup' element={<LoginOrSignup/>}/>
        <Route path='/config' element={<Configuration/>}/>
        <Route path='/developerconfig' element={<DeveloperConfiguration/>}/>
        <Route path="*"  element={<PageNotFound/>}/>

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
