import React from 'react';
import { NavLink } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import StarBackground from '../components/StarBackground';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
  const buttonClass = "bg-customDark text-customAccent font-bold rounded-lg hover:bg-customMuted hover:text-customSecondary px-6 py-3 mx-2";
  const cardClass = "w-64 p-6 bg-customDark rounded-lg m-4 border-2 border-transparent hover:border-2 hover:border-customSecondary-500";
  const features = [
    {
      title: "3D Planet Models",
      description: "Explore detailed, interactive models of each planet in the solar system."
    },
    {
      title: "Real-Time Data",
      description: "See live data on planetary positions and distances from the Sun using NASA’s Horizons API."
    },
    {
      title: "Educational Content",
      description: "Learn more about the unique features and characteristics of each planet."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <StarBackground />
      <div className="w-full flex flex-col items-center text-customSecondary-500">
        <header className="flex flex-col items-center mt-20 pb-10 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 px-4">
            <TypingEffect text="Explore the world of Cosmos" speed={200} />
          </h1>
          <p className="text-lg max-w-xl px-4 my-2">
            Dive into our interactive 3D space, where you can explore planets, stars, and the mysteries of the universe in detail. Learn about our solar system and beyond, all from the comfort of your device.
          </p>
          <NavLink to="/models" className={buttonClass}>
            Start Exploring
          </NavLink>
        </header>

        <section className="py-10 w-full text-center relative z-10 text-customSecondary">
          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <div className="flex flex-wrap justify-center mx-auto max-w-4xl">
          {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>

        <section className="pt-10 pb-20 md:pb-10 w-full text-center relative z-10">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Whether you're a space enthusiast or just curious about our universe, our platform offers something for everyone. Sign up for updates and become part of our cosmic community.
          </p>
          <NavLink to="/register" className={buttonClass}>
            Register Now
          </NavLink>
          <NavLink to="/login" className={buttonClass}>
            Log In
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Home;
