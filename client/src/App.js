import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';
import SignUp from './components/Pages/UserProfile/SignUp/signup'

import NotFound from './components/Pages/404/notfound';



function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

