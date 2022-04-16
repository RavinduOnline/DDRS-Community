import React from 'react'
import Header from '../../../Header/header'
import ForumCard from '../Home/ForumCard/forumcard'
import './home.css'
import './newtopic'
import Footer from '../../../Footer/footer'

export default function home() {
  return (
    <div>
        <Header/>
        

        <div>
          <form className="home-form-flex">
            <input id="home-searchNav" type="search" placeholder="Search" aria-label="Search" /> 
          </form>
        </div>

        
        <div className='home-btn-container'>

          <div className='home-filter'>
            <button className='home-filter-btn' onclick="filterSelection('popular')"> Popular</button>
            <button className='home-filter-btn' onclick="filterSelection('latest')"> Latest</button>
          </div>

          <button className='home-new-btn'>
            <i class="fa-solid fa-plus"></i>&nbsp;&nbsp;NEW TOPIC
          </button>  
           
          <div className='home-topic-txt'>
            <h6 className='home-topic-txt-topic'>Topic</h6>
            <h6 className='home-topic-txt-reply'>Reply</h6>
          </div>

        </div>


        <br/>
        <hr/>
        
        <div className='home-card-container'>
          <ForumCard/>
        </div>
    

        <Footer/>

    </div>
    
  )
}
