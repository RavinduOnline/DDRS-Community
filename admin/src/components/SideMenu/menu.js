import React from 'react'
import './menu.css'
import Logo from "./DDRS-Logo_White.png"


export default function menu() {
  return (
    <div>

      <nav class="sidemenu-mainbox"> 

          <header className="sidemenu-avatar-box">
            
          <div>
                                    {/* <!-- brand --> */}
             <a href="#Logo">
                   <img className="sidemenu-logo" src={Logo} alt="DDRS Logo"loading="lazy"/>
              </a>
          </div> 

            <div className='sidemenu-avatar-sub-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5HT_MiST8gvuAiCijxgSvKCFtpJPMh7Yvlxc5ZTqfKGuVAAsEls2By-MBbrk0Ncxx4&usqp=CAU" />
                <p>Janith Dilshan</p> 
                <a  href="/"><i className="fa-solid fa-right-from-bracket"></i></a>
            </div>

          </header>
          <hr/>

            <div>
                     {/* <!-- Down elements --> */}
                             <div className="side-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/">
                                        Dashboard
                                    </a>
                            </div>
                    
                            <div className="side-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/#About">
                                        Topics
                                    </a>
                            </div>
                            <div className="side-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/#Skills">
                                        Word Filter
                                    </a>
                            </div>
            </div>

      </nav>


    </div>
  )
}
