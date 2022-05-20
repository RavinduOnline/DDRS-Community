import { useState } from "react";
import React from 'react'
import './signupforum.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signupforum() {

    const [fName,setFName] = useState("")
    const [lName,setLName] = useState("")
    const [email,setEmail] = useState("")
    const [interested,setInterested] = useState("")
    const [country,setCountry] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("")

  const SignupGetData = () =>{

    document.getElementById("signup-alert").style.display = "hide";

    if(!fName || !lName || !email || !interested || !country || !password || !rePassword){
      document.getElementById("signup-alert").style.display = "flex";
              document.getElementById("signup-alert").innerHTML = "Please fill all the field!";
              return
    }
    fetch("/user/signup",{
      method:"post",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({

        fName, 
        lName, 
        email, 
        interested, 
        country,
        password,
        rePassword

      })
  }).then(res=>res.json())
  .then(data => {

      if(data.error){ 
            document.getElementById("signup-alert").style.display = "flex";
            document.getElementById("signup-alert").innerHTML = data.error;  
      }
      else{
        toast.success(data.message,{
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(function(){
          window.location.replace('/signin');
        },1000);
      }
        

    console.log("data create -", data)
  }).catch((err)=>{
    console.log("Error - ", err)
  })
  }

  return (
    <div> 
      <ToastContainer/>

        <div>
          <div className='signup-details'>
            <h1>Welcome to.........!</h1>
                <hr/>

                <table>
                  <tr>
                    <td className='signup-td'><label for="fname"><b>First Name<br/></b></label></td>
                    <td className='signup-input'>
                      <input type="text" 
                        placeholder="Enter First Name" 
                        name="fname" 
                        value={fName}
                          onChange={(e) => setFName(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="lname"><b>Last Name<br/></b></label></td>
                    <td className='signup-input'>
                      <input type="text" 
                        placeholder="Enter Last Name" 
                        name="lname" 
                        value={lName}
                          onChange={(e) => setLName(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="email"><b>Email<br/></b></label></td>
                    <td className='signup-input'>
                      <input type="text" 
                        placeholder="Enter Email" 
                        name="email" 
                        value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>


                  <tr>
                    <td className='signup-td'><label for="interested"><b>Interested<br/></b></label></td>
                    <td className='signup-input'>
                      <input type="text" 
                        placeholder="Enter interested" 
                        name="interested"
                        value={interested}
                          onChange={(e) => setInterested(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>

                  <tr>
                  <td className='signup-td'><lable for="country"><b>Country</b></lable></td>
                    <td>
                      <select name="country" 
                        id="country"
                        value={country}
                          onChange={(e) => setCountry(e.target.value)}>
                        <option value="" selected disabled hidden>Select Country</option>
                        <option key="sl" value="Sri Lanka">Sri Lanka</option>
                        <option key="us" value="United States">United States</option>
                        <option key="aus" value="Australia">Australia</option>
                        <option key="japan" value="Japan">Japan</option>
                      </select>
                    </td><br/><br/>
                  </tr>


                  <tr>
                    <td className='signup-td'><label for="psw"><b>Password</b></label></td>
                    <td className='signup-input'>
                      <input type="password" 
                        placeholder="Enter Password" 
                        name="psw" 
                        value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>

                  <tr>
                    <td className='signup-td'><label for="psw-repeat"><b>Re-enter Password</b></label></td>
                    <td className='signup-input'>
                      <input type="password" 
                        placeholder="Confirm Password" 
                        name="psw-repeat" 
                        value={rePassword}
                          onChange={(e) => setRePassword(e.target.value)}
                        required/>
                    </td><br/><br/>
                  </tr>
                </table>
                <div id="signup-alert" class="alert alert-danger" role="alert"/><br/>

                <label>
                <input type="checkbox" checked="checked" name="remember" /> Agree to the teams and condition
                </label>

                <div class="signup-button">
                <button type="submit" 
                  class="signup-button"
                  onClick={() => SignupGetData() }>Sign Up</button>
                </div>

          </div>

                
        </div>

    </div>
  )
}
