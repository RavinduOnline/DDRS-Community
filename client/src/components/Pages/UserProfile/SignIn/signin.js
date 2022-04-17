import React from 'react'
import './signin.css'

export default function signin() {
  return (
    <div>

        <form>
            <h4>Hi....</h4>
            <label for="fname">User name</label><br/>
            <input type="text" id="fname" name="fname"/><br/><br/>
            <label for="lname">Password</label><br/>
            <input type="text" id="lname" name="lname"/><br/><br/>
            <button className='signin-button' type='submit' >Log in</button><br/><br/>
            <p>Don't have an account? | New user</p>
        </form>

    </div>
  )
}
