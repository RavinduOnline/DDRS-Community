import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';
import NewForum from './components/Pages/Forum/Home/newtopic';
import ForumView from './components/Pages/Forum/ForumView/forumview';


import NotFound from './components/Pages/404/notfound';


function App() {
  return (
    <BrowserRouter>
        <Routes>

        

              <Route exact path="/" element={<Home/>}/>   
              <Route path="/add-forum" element={<NewForum/>}/>
              <Route path="/view-forum" element={<ForumView/>}/>




              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

