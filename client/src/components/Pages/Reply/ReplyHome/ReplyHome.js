import React from 'react'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function ReplyHome() {
  return (
    <div>
        
      <Header/>

        <p>Reply</p>
          <hr/>
          <ReactQuill className="newtopic-react-quill" theme='snow'/>
          

          <input type="submit" value="Delete"></input>
          <input type="submit" value="Post"></input>
          

      <Footer/>

    </div>
  )
}
