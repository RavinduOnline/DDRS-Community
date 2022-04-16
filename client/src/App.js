import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';


import NotFound from './components/Pages/404/notfound';

import NewForum from './components/Pages/Forum/Home/newtopic';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        
              <Route exact path="/" element={<Home/>}/>   

              <Route path="/add-forum" element={<NewForum/>}/>

              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

