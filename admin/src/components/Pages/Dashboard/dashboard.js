import React from 'react'
import './dashboard.css'
import Footer from '../../Footer/footer'
import SideMenu from '../../SideMenu/menu'
import TopicTable from './TopicTable/topictable'

export default function dashboard() {
  return (
    <div>

        <SideMenu/>

       <div className='main-body-container'>
            <div className='Home-sub-body-container'>

              <h1 className='text-uppercase' >Dashboard</h1>
              <div className='Home-sub-body-hr-line'/>

            </div>

            {/* Dashboard Detail Box Start */}
            <div className='Home-detail-box-container'>

                  <div className='Home-detail-box User-box'>
                    <h2><i className="fa-solid fa-users"></i> Total Users</h2>
                    <p>80</p>
                  </div>

                  <div className='Home-detail-box Topic-box'>
                    <h2><i className="fa-solid fa-file-signature"></i> Total Topics</h2>
                    <p>124</p>
                  </div>

                  <div className='Home-detail-box Reply-box'>
                    <h2><i class="fa-solid fa-reply-all"></i> Total Replies</h2>
                    <p>121</p>
                  </div>
            </div>

            <div>
              {/* Call for Topic Topic Table JS */}
                <TopicTable/>
            </div>

       </div>
      
        <Footer/>
    </div>
  )
}
