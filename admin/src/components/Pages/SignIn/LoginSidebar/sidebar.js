import React,{useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import './sidebar.css'
import DarkLogo from '../../../SideMenu/DDRS-Logo_DarkBlue.png'

const Sidebar = () => {

  const useHistory = useNavigate();

  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
  const AdminLogin = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        alert("Wrong Email");
          return
      }
      fetch("/adminlogin",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              password,
              email
          })
      }).then(res=>res.json())
      .then(data=>{
          console.log(data)
         if(data.error){
            alert(data.error);

         }
         else{
             localStorage.setItem("jwt",data.token)
             localStorage.setItem("admin",JSON.stringify(data.admin))
             useHistory.push('/')
         }
      }).catch(err=>{
          console.log(err)
      })
  }

  return (
    <div>
        <div className='Sidebar-body-box'>

                    <div className='sidebar-body-box-2'></div>

                    <nav className="sidebar-mainbox"> 

                    <header className="sidebar-logo-box">

                        
                    <div>
                                                {/* <!-- brand --> */}
                        <a href="#Logo">
                            <img className="sidemenu-logo" src={DarkLogo } alt="DDRS Logo"loading="lazy"/>
                        </a>
                    </div> 

                    </header>

                        <div className='side-bar-down-box'>
                                {/* <!-- Down elements --> */}
                                        <div className="side-bar-title">
                                             Login
                                        </div>

                                        <div className="side-bar-item">

                                            <form action="/" className="side-bar-form"> 

                                                <input type='email' placeholder="Email" required
                                                 value={email}
                                                 onChange={(e)=>setEmail(e.target.value)}
                                                />

                                                <input type='password'  placeholder="Password" required 
                                                 value={password}
                                                 onChange={(e)=>setPasword(e.target.value)}
                                                />

                                                <button>Login</button>

                                            </form>


                                        </div>
                                
                                        <div className="side-bar-item">
                                                <a className='nav-link' href="/forgotpassword">
                                                    Forget Password
                                                </a>
                                        </div>
                                        
                        </div>

                </nav>
        
            </div>
    
    </div>
  )
}

export default Sidebar

