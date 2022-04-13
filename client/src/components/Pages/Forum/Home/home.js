import React from 'react'
import Header from '../../../Header/header'
import ForumCard from '../Home/ForumCard/forumcard'
import './home.css'

export default function home() {
  return (
    <div>
        <Header/>
        

        <div>
          <button> Populer</button>
          <button> Latest</button>
        </div>

        <button>
          NEW TOPIC
        </button>      

        <div>
          <h6>Topic</h6>
          <h6>Reply</h6>
          <hr/>
        </div>

        <div className='home-card-container'>
          <ForumCard/>
        </div>
        
        




    </div>
    
  )
}
