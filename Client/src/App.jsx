import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Provider} from 'react-redux'

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile/Profile";
import LoginOrSignup from "./Components/Login/LoginOrSignup";
import Configuration from "./Components/Configuration";
import DeveloperConfiguration from "./Components/DeveloperConfiguration";
import DeveloperHome from "./Components/DeveloperHome";

import store from "./Store/store.js";




function App() {
  

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
