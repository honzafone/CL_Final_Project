import React from 'react';
import StarBackground from '../components/StarBackground';
import SpaceCoreCanvas from '../models/SpaceCore';

const Exclusive = () => {
  return (<div className="text-customSecondary-500 min-h-screen flex flex-col items-center relative z-10">
      <SpaceCoreCanvas/>
    {/* Zbytek obsahu */}

    <div className="min-h-screen relative -z-10">
      <StarBackground />
      <div className="text-customSecondary-500 min-h-screen flex flex-col items-center relative z-20">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center mt-20 pb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 px-4">Exclusive: Journey into the Cosmos</h1>
          <p className="text-lg max-w-xl px-4">
            Unlock exclusive insights into the wonders of our universe.
          </p>
        </header>

        {/* Galactic Mysteries Section */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-6">Galactic Mysteries</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Our galaxy, the Milky Way, spans 100,000 light-years across, containing billions of stars and planets, each potentially holding secrets to the mysteries of existence. The nearest star system, Alpha Centauri, lies about 4.37 light-years away. Could it host life? 
          </p>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Astrophysicists have discovered the dark matter halo encircling our galaxy, comprising unseen mass that influences galaxy shapes and rotations. Dark matter, making up 27% of the universe, is invisible and undetectable—yet its gravitational pull is essential to the structure of the cosmos.
          </p>
        </section>

        {/* Wonders of the Solar System */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-6">Wonders of the Solar System</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            From the volcanic activity on Io, a moon of Jupiter, to the icy, methane-rich landscapes of Neptune’s moon Triton, our solar system is filled with captivating wonders. Saturn’s rings, composed of ice particles, rocky debris, and dust, span up to 282,000 kilometers, casting a breathtaking view across the gas giant.
          </p>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            Even Mars, with its towering Olympus Mons—over three times the height of Mount Everest—offers glimpses of the geologic marvels that define our planetary neighborhood.
          </p>
        </section>

        {/* Call to Action */}
        <section className="py-10 w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Explore the Unknown</h2>
          <p className="px-4 mb-6 max-w-xl mx-auto">
            With each discovery, we unlock new mysteries. Stay tuned for more cosmic insights and interactive 3D models as we continue this exploration of the universe!
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Exclusive;
