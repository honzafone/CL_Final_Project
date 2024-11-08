import React, { useState } from 'react';
import StarBackground from '../components/StarBackground';
import { NavLink } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const About = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const buttonClass = "bg-customDark text-customAccent font-bold rounded-lg hover:bg-customMuted hover:text-customSecondary px-6 py-3 mx-2";

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
            Hello! My name is Jan Decker, a junior frontend developer specializing in React. 
            I have a passion for graphics, 3D modeling, and printing, and this website represents my first project using Three.js. 
            I’m excited to keep pushing my skills forward, and I’d be grateful for any feedback!
          </p>
          <button onClick={() => setIsFormVisible(!isFormVisible)} className={`${buttonClass} px-6 py-3 mx-2`}>
            Contact Me
          </button>
          {isFormVisible && <ContactForm buttonClass={buttonClass} setStatus={setStatus} />}
          {status && <p className="text-center mt-4">{status}</p>}
        </section>

        {/* Call to Action */}
        <section className="pt-10 pb-20 md:pb-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Me</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Stay tuned for more models and features as this project evolves!
          </p>
          <NavLink to="/register" className={`${buttonClass}`}>
            Register Now
          </NavLink>
          <NavLink to="/login" className={`${buttonClass}`}>
            Log In
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default About;
