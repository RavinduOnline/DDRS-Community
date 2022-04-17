import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';
import SignUp from './components/Pages/UserProfile/SignUp/signup'
import SignIn from './components/Pages/UserProfile/SignIn/signin'
import Profile from './components/Pages/UserProfile/Profile/profile'
import UserSetting from './components/Pages/UserProfile/UserSetting/usersetting';
import NewForum from './components/Pages/Forum/Home/newtopic';
import ForumView from './components/Pages/Forum/ForumView/forumview';
import NotFound from './components/Pages/404/notfound';


function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route exact path="/signin" element={<SignIn/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/usersetting" element={<UserSetting/>}/>
              <Route path="/add-forum" element={<NewForum/>}/>
              <Route path="/view-forum" element={<ForumView/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

