import './forumcard.css'
import '../../ForumView/forumview'
import '../../../Reply/replycard/replycard'
import BackendURL from '../../../../url';

import React , { useState, useEffect } from "react";

export default function Forumcardpopuler() {
    const [forum , setForum] = useState([]);

    useEffect(() => {
      retrieveForum();
    }, []);
  
    const retrieveForum = () =>{
      fetch(BackendURL + "/forum/normal/get").then(res=>res.json())
          .then(response=>{
            console.log(response);
            setForum(response);
        })
        .catch((err)=>{
            console.log("Err Axios - ",err)
        })
  
  
      }
      
  
    return (
      <div>
  
  { forum.map(getforum=> (
       
          <div className='forumcard-mainbox'>
  
            <div className='forumcard-container'>
            <a href={`/view-forum/${getforum._id}`}><h4><b>{getforum.Title}</b></h4></a>
            
  
              <p>{getforum.Description}</p>
            </div>
            
            <span>
              <i class="fa-solid fa-heart"></i>
            </span>
  
            <div className='forumcard-category-box'>
            {getforum.FCategory}
            </div>
            
          </div>
   ))}
      </div>
  
      
    )
  }
  
