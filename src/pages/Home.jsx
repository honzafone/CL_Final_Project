import React from 'react';
import { NavLink } from 'react-router-dom';
import StarBackground from '../components/StarBackground'; // Ujistěte se, že cesta odpovídá umístění souboru
import TypingEffect from '../components/TypingEffect';

const Home = () => {
  const button = "bg-customDark text-customAccent font-bold rounded-lg hover:bg-customMuted hover:text-customSecondary";

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <StarBackground /> {/* Přidání komponentu pro hvězdné pozadí */}

      <div className=" w-full flex flex-col items-center text-customSecondary-500">
      {/* <div className="bg-gradient-to-b from-black to-gray-800 w-full flex flex-col items-center text-white"> */}
        {/* Hero Section */}
        <header className="flex flex-col items-center mt-20 pb-10 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 px-4"> <TypingEffect text="Explore the world of Cosmos" speed={200} /></h1>
          <p className="text-lg max-w-xl px-4">
          Dive into our interactive 3D space, where you can explore planets, stars, and the mysteries of the universe in detail. Learn about our solar system and beyond, all from the comfort of your device.
            {/* "Dive into our interactive 3D space, where you can explore planets, stars, and the mysteries of the universe in detail. Learn about our solar system and beyond, all from the comfort of your device." */}
          </p>
          <NavLink to="/models" className={button + " mt-8 px-6 py-3"}>
            Start Exploring
          </NavLink>
        </header>

        {/* Feature Section */}
        <section className="py-10 w-full text-center relative z-10 text-customSecondary">
          <h2 className="text-3xl font-semibold mb-6 ">Features</h2>
          <div className="flex flex-wrap justify-center mx-auto max-w-4xl md:justify-center md:align-center">
            <div className="w-64 p-6 bg-customDark rounded-lg m-4 border-2 border-transparent  hover:border-2 hover:border-customSecondary-500">
              <h3 className="text-2xl font-bold mb-2">3D Planet Models</h3>
              <p>Explore detailed, interactive models of each planet in the solar system.</p>
            </div>
            <div className="w-64 p-6 bg-customDark rounded-lg m-4 border-2 border-transparent  hover:border-2 hover:border-customSecondary-500">
              <h3 className="text-2xl font-bold mb-2">Real-Time Data</h3>
              <p>See live data on planetary positions and distances from the Sun using NASA’s Horizons API.</p>
            </div>
            <div className="w-64 p-6 bg-customDark rounded-lg m-4 border-2 border-transparent  hover:border-2 hover:border-customSecondary-500">
              <h3 className="text-2xl font-bold mb-2">Educational Content</h3>
              <p>Learn more about the unique features and characteristics of each planet.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-10 w-full text-center relative z-10">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Whether you're a space enthusiast or just curious about our universe, our platform offers something for everyone. Sign up for updates and become part of our cosmic community.
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

export default Home;
