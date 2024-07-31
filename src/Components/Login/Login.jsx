import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Login = () => {
  return (
    <div className='login'>
      <div className='login-text'>
        <h2>TX<span>trading</span></h2>
      </div>
      <div className='welcome-text'>
        <p>Welcome back</p>
      </div>
      <div className='input-area'>
        <div className='input-1'>
            <input type='text' placeholder='Email' />
        </div>
        <div className='input-2'>
            <input type='text' placeholder='Password' />
        </div>
      </div>
        <div className='forgot-password'>
          <a href=''>
          <p>Forgot password?</p>
          </a>
        </div>
        <div className='log-btn'>
           <div className='btn'>
            <button>Log in</button>
           </div>
        </div>
        <div className='continous'>
          <p>Or continue with</p>
        </div>
        <div className='social-1'>
          <div className='social-btn'>
            <button>Google</button>
          </div>
        </div>
        <div className='social-2'>
          <div className='social-btn'>
            <button>Facebook</button>
          </div>
        </div>
        <div className='social-3'>
          <div className='social-btn'>
            <button>Apple</button>
          </div>
        </div>

        <div className='last-text'>
          <p>Don’t have an account yet? <span>Sign up</span></p>
        </div>
      
    </div>
  )
}

export default Login
