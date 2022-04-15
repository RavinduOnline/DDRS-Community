import React from 'react';
import './signup.css'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import SignUpForum from './SignUpForum/signupforum'

const signup = () => {
    return (
        <div>
            <Header/>
            <SignUpForum/>
            <Footer/>
        </div>
    );
};

export default signup;