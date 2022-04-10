import React from 'react'
import "./webheader.css"


export default function webheader() {
  return (
    <div>

                        {/* <!-- Right elements --> */}
                 <div class="d-flex align-items-center  web-header-main-box">
                             <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/">
                                        Home
                                    </a>
                            </div>
                    
                            <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/#About">
                                        Categories
                                    </a>
                            </div>
                            <div className="web-menu-item">
                                    <a className='nav-link text-white text-uppercase' href="/#Skills">
                                        About Us
                                    </a>
                            </div>

                        <div className='web-menu-user-box'>
                                 <a  class="text-white web-menu-user-name-a" href="#" >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        class="rounded-circle header-profile-pic "
                                        alt="Profile Pic"
                                        loading="lazy"
                                    /> 

                                     <div class="web-menu-user-name">Janith Dilshan</div>
                                    </a>
                         </div>
                                {/* <!-- Right elements --> */}
                    </div>

    </div>
  )
}
