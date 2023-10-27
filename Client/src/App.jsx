import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Components/Home";
import Intro from "./Components/Intro";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} exact />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="*"  element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
