import { useState } from 'react';
import '../style/login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '', role: 'member' });
  const [error, setError] = useState('');

  const handleChange = (e, setState) => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      });
      
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        alert(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
        console.log(err);
      setError('Server error');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        localStorage.setItem('token', data.token);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="username" placeholder="User name" required value={signupData.username} onChange={(e) => handleChange(e, setSignupData)} />
          <input type="email" name="email" placeholder="Email" required value={signupData.email} onChange={(e) => handleChange(e, setSignupData)} />
          <select name="role" required value={signupData.role} onChange={(e) => handleChange(e, setSignupData)}>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
          <input type="password" name="password" placeholder="Password" required value={signupData.password} onChange={(e) => handleChange(e, setSignupData)} />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required value={loginData.email} onChange={(e) => handleChange(e, setLoginData)} />
          <input type="password" name="password" placeholder="Password" required value={loginData.password} onChange={(e) => handleChange(e, setLoginData)} />
          <button type="submit">Login</button>
        </form>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
