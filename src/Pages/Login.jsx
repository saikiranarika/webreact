import React from 'react';

function Loging() {
  return (
    <div className="login-container">
    <form className="login-form">
        <h1>Login</h1>
        <label htmlFor="username">User Name:</label>
        <input type="text"id="username" maxLength={35} placeholder="Enter your username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" maxLength={25}placeholder="Enter your password" required />
          <p>  Don't have an account& Sign-up</p> 
        <br />
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  );
}

export default Loging;
