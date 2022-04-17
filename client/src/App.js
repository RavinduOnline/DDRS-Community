import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';

import ReplyHome from './components/Pages/Reply/ReplyHome/ReplyHome';
import NotFound from './components/Pages/404/notfound';



function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/replyhome" element={<ReplyHome/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

