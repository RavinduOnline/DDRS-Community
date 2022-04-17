import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';
import SignUp from './components/Pages/UserProfile/SignUp/signup'
import SignIn from './components/Pages/UserProfile/SignIn/signin'
import Profile from './components/Pages/UserProfile/Profile/profile'
import NotFound from './components/Pages/404/notfound';



function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route exact path="/signin" element={<SignIn/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

