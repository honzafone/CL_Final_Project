import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError('Chyba při registraci uživatele.');
      console.error(error.message);
    } else {
      alert('Registrace úspěšná! Zkontrolujte svůj e-mail pro potvrzení.');
      setError(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <StarBackground />
      <div className="w-full max-w-md bg-customMuted p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-customSecondary">Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
          />
          <input
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
          />
          <button
            type="submit"
            className="w-full py-3 bg-customSecondary text-white rounded-md hover:bg-customSecondary-500 transition duration-300"
          >
            Register
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="text-center mt-4 text-customSecondary">
          Are you already registered?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
