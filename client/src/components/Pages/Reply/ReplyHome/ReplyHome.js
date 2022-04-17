import React from 'react'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Replycard from '../replycard/replycard'


export default function ReplyHome() {
  return (
    <div>
        
        <Replycard/>

        
          
          <ReactQuill className="newtopic-react-quill" theme='snow'/>
          
          
          

          <div className='replyhome-button'>
            <button className='replyhome-button-create'>Post</button>
            <a href='/'><button className='replyhome-button-close'>Close</button></a>
          </div>
          

     

    </div>
  )
}
