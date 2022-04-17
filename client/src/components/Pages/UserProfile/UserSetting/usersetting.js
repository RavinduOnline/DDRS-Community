import React from 'react'
import './usersetting.css'

export default function usersetting() {
  return (
    <div>

        <img src=''></img>
        <h4>Janith Dilshan</h4>
        <p>Sri Lanka</p>
        <p>janith@gmail.com</p>
        <button type="submit" className='profile-button'>Change Image</button>

        <table>

            <tr>
              <td>First Name</td>
              <td>Janith</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>Dilshan</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>janith@gmail.com</td>
            </tr>

        </table>

    </div>
  )
}
