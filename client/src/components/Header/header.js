import React from 'react'
import "./header.css"
import Web from "./web/webheader";
import Logo from "./DDRS-Logo_White.png"


export default function header() {
  return (
            <div>
                                     {/* <!-- Navbar --> */}
               <nav class="navbar navbar-expand-sm text-white header-main-box">
                    {/* <!-- Container wrapper --> */}
                    <div class="container-fluid">
                            {/* <!-- Collapsible wrapper --> */}
                            <div className='navbar-nav header-user-box'>
                                    {/* <!-- Navbar brand --> */}
                                    <a href="#">
                                        <img
                                        class="header-logo"
                                        src={Logo}
                                        alt="DDRS Logo"
                                        loading="lazy"
                                        />
                                    </a>
                            </div> <br/>

                         <Web/>

                     </div>

                </nav>
                    {/* <!-- Navbar --> */}

            </div>
  )
}
