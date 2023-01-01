import React from 'react';
import { login, logo } from '../../constants/images';
import './Login.scss';
function Login() {
  return (
    <div className='login-container'>
        <div className='l-login-content'>
            <div>
                <img src={logo} alt="lendsqr logo" />
            </div>
            <div className="login-img">
                <img src={login} alt="for login" />
            </div>   
        </div>
        <div className='r-login-content'>
            <div className="logo">
                <img src={logo} alt="lendsqr logo" />
            </div>
            <div className="login-form">
                <div className="r-header-text">Welcome!</div>
                <p>Enter details to login.</p>
                <form>
                    <div className="r-input">
                        <input value="" placeholder="Email" />
                    </div>
                    <div className="r-input">
                        <input value="" placeholder="password" />
                        <span>show</span>
                    </div>
                    <div>
                        <span>Forgot PASSWORD?</span>
                    </div>
                    <div className="login-btn">LOG IN</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login