import React from 'react'
import './signupforum.css'

export default function signupforum() {
  return (
    <div>
        
        signupforum

        <form>
          <div className='signup-details'>
            <h1>Welcome to.........!</h1>
                <hr/>


                <label for="fname"><b>First Name<br/></b></label>
                <input type="text" placeholder="Enter First Name" name="fname" required/><br/><br/>

                <label for="lname"><b>Last Name<br/></b></label>
                <input type="text" placeholder="Enter Last Name" name="lname" required/><br/><br/>

                <label for="email"><b>Email<br/></b></label>
                <input type="text" placeholder="Enter Email" name="email" required/><br/><br/>

                <label for="gender"><b>Gender<br/></b></label>
                <div>
                <input type="radio" id="male" name="male" value="male"/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="female" value="female"/>
                <label for="female">Female</label>
                <input type="radio" id="other" name="other" value="other"/>
                <label for="other">Other</label><br></br><br/>
                </div>

                <label for="interested"><b>Interested<br/></b></label>
                <input type="text" placeholder="Enter interested" name="interested" required/><br/><br/>

                <lable for="country"><b>Country</b></lable>
                  <select name="country" id="country">
                    <option value="united kingdom">United Kingdom</option>
                    <option value="united states">United States</option>
                    <option value="australia">Australia</option>
                    <option value="japan">Japan</option>
                  </select><br/><br/>


                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/><br/><br/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Confirm Password" name="psw-repeat" required/><br/><br/>

                <label>
                <input type="checkbox" checked="checked" name="remember" /> Agree to the teams and condition
                </label><br/><br/>

                <div class="center2">
                <div class="button1">
                <button type="submit" class="button1">Sign Up</button>
                </div>
                </div>

          </div>

                
        </form>

    </div>
  )
}
