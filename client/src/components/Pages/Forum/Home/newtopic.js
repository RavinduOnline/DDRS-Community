import React from 'react'
import Header from '../../../Header/header'
import './newtopic.css'
import Footer from '../../../Footer/footer'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' //quill's css important


export default function home() {
  return (
    <div>
        <Header/>
        <div className='newtopic-forum'>
          <div className='newtopic-forum-container'>
            <div className='newtopic-head-title'>
              <h1>Create Topic</h1>
            </div>
            <hr/>
            
            <div className='newtopic-question-container'>
              <div className='newtopic-question'>

                <div className='newtopic-question-option'> 
                  <div className='newtopic-title'>
                    <div className='newtopic-title-title'>
                      <input type="text" placeholder='Add Question Title'/>
                    
                      <select>
                          <option value="" selected="selected">Select forum category</option>
                          <option value="" >General</option>
                          <option value="" >JavaScript</option>
                          <option value="" >HTML/CSS</option>
                          <option value="" >Backend</option>
                          <option value="" >Frontend</option>
                          <option value="" >Other</option>
                      </select>
                      
                    </div>
                  </div>
                </div>

                <div className='newtopic-question-option'> 
                  <div className='newtopic-title'>
                    <input type="text" placeholder='Mini Description' maxLength="100"/>
                  </div>
                </div>

                <div className='newtopic-question-option'> 
                  <div className='newtopic-title'>
                    <small>Include all information someone would need to answer your question</small>
                    <ReactQuill className="newtopic-react-quill" theme='snow'/>
                  </div>
                </div>


              </div>
            </div>
            <div className='newtopic-button'>
              <button className='newtopic-button-create'>Create</button>
              <button className='newtopic-button-close'>Close</button>
            </div>

          </div>

        </div>

        <Footer/>
    </div>
  )
}