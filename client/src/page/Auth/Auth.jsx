import React from 'react';
import { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="content">
        <div className="card">
          <div className="logo">
            <div className="f-logo">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
            </div>
          </div>
          {!isLogin && (
            <div className="input-container">
              <input type="text" name="username" placeholder="Username" />
            </div>
          )}
          <div className="input-container">
            <input type="email" name="email" placeholder="Email address" />
          </div>
          <div className="input-container">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="login-btn-container">
            <button className={isLogin ? 'login-btn' : 'sign-btn'}>{isLogin ? 'Log In' : 'Sign In'}</button>
          </div>
          <div className="divider"></div>
          <div className="login-register-link">
            <div className="crt-new-ac" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create New Account' : 'Already Have An Account'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
