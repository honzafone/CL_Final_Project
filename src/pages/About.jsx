import React from 'react';
import StarBackground from '../components/StarBackground';

import { NavLink } from 'react-router-dom';

const About = () => {
  const button = "bg-customDark text-customAccent font-bold rounded-lg hover:bg-customMuted hover:text-customSecondary";
  return (
    <div className="min-h-screen relative ">
      <StarBackground />
      <div className="text-customSecondary-500  min-h-screen flex flex-col items-center relative ">
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
            This project was created by Jan Decker, a junior programmer in React. 
            Through this project, I aim to explore the wonders of our solar system and share them with the world. I am trying to use modern technologies to make the experience as enjoyable as possible.
          </p>
        </section>

        {/* Call to Action */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Me</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Stay tuned for more models and features as this project evolves!
          </p>
          <NavLink to="/register" className={button +" px-6 py-3 mx-2"}>
            Register Now
          </NavLink>
          <NavLink to="/login" className={button +" px-6 py-3 mx-2"}>
            Log In
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default About;
