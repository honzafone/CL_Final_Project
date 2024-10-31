import React, { useState } from 'react';
import StarBackground from '../components/StarBackground';
import { NavLink } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const About = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const button = "bg-customDark text-customAccent font-bold rounded-lg hover:bg-customMuted hover:text-customSecondary";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const { error } = await supabase.from('users').insert([{ name, email, subject, message }]);
    if (error) {
      setStatus('Something went wrong, please try again.');
    } else {
      setStatus('Your message has been sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <div className="text-customSecondary-500 min-h-screen flex flex-col items-center relative">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center mt-20 pb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 px-4">About This Project</h1>
          <p className="text-lg max-w-xl px-4">
            This project is mainly about our solar system, maybe with more models in the future.
          </p>
        </header>

        {/* Author Section */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet the Creator</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Hello! My name is Jan Decker, a junior frontend developer specializing in React, exploring a path into the IT world. 
            I have a passion for graphics, 3D modeling, and printing, and this website represents my first project using Three.js. 
            It’s been a fantastic journey combining interactive 3D elements with web development, and I'm excited to keep pushing my skills forward. 
            I’d be grateful for any feedback and open to collaboration or even creating a custom website for you.
          </p>
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className={`${button} px-6 py-3 mx-2`}
          >
            Contact Me
          </button>
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto bg-customDark p-6 rounded-lg">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
              />
              <button type="submit" className={`${button} w-auto px-6 py-3`}>
                Send Message
              </button>
              {status && <p className="text-center mt-4">{status}</p>}
            </form>
          )}
        </section>

        {/* Call to Action */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Me</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Stay tuned for more models and features as this project evolves!
          </p>
          <NavLink to="/register" className={button + " px-6 py-3 mx-2"}>
            Register Now
          </NavLink>
          <NavLink to="/login" className={button + " px-6 py-3 mx-2"}>
            Log In
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default About;
