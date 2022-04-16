import React from 'react'
import './sidebar.css'
import DarkLogo from '../../../SideMenu/DDRS-Logo_DarkBlue.png'

export default function sidebar() {
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

                                            <form  className="side-bar-form"> 

                                                <input type='email' placeholder="Email" required />

                                                <input type='password'  placeholder="Password" required />

                                                <button>Login</button>

                                            </form>


                                        </div>
                                
                                        <div className="side-bar-item">
                                                <a className='nav-link' href="/#FoggetPassword">
                                                    Forget Password
                                                </a>
                                        </div>
                                        
                        </div>

                </nav>
        
            </div>
    
    </div>
  )
}
