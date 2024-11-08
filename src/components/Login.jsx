import React, { useState } from 'react';
import { auth } from '../firebase.jsx'; // Data for firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import StarBackground from '../components/StarBackground';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Přihlášení úspěšné!');
      navigate('/'); // navigate to home page after login
    } catch (error) {
      setError('Login error. Please check your email and password.');
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <StarBackground />
      <div className="w-full max-w-md bg-customMuted p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-customSecondary">Logging</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
          />
          <button 
            type="submit"
            className="w-full py-3 bg-customSecondary text-white rounded-md hover:bg-customSecondary-500 transition duration-300"
          >
            Log in
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="text-center mt-4 text-customSecondary">
          Aren't you registered?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
