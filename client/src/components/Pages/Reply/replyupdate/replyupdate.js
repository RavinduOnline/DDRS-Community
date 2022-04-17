import React from 'react'
import Header from '../../../Header/header'
import './replyupdate.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important


export default function replyupdate() {
  return (
    <div>
        <Header/>
        

        <h2>Janith Dilshan</h2>

            <p><h4>Proxy does not work with the react build version</h4></p>
                 <ReactQuill className="replycard-react-quill" theme='snow'/>
                 <hr></hr>
          
          
          

          <div className='replyupdate-button'>
            <button className='replyupdate-button-create'>Edit</button>
            <a href='/'><button className='replyupdate-button-close'>Cancel</button></a>
          </div>
          

       

        <Footer/>

    </div>
    
  )
}