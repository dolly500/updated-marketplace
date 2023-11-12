import React, { useState } from 'react';
import styles from './forgot-password.module.css'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      setMessage('Password reset email sent successfully.');
    } catch (error) {
      setMessage('Error sending password reset email. Please try again.');
    }
  };

  return (
    <div  className={styles.container}>
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} placeholder='Enter your Email Address'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleForgotPassword}>Reset Password</button>
      <div>{message && <p>{message}</p>}</div>
    </div>
  );
}

export default ForgotPassword;
