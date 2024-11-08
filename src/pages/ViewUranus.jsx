import React, { useEffect, useState } from 'react';
import UranusModel from '../models/Uranus';
import PlanetDescription from '../components/PlanetDescription';

function ViewUranus() {
  const [planetData, setPlanetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(false); // State to control animation

  useEffect(() => {
    // Function to fetch data from the API
    const fetchPlanetData = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus');

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setPlanetData(data); // Assuming API returns an object, so we use the data directly
        setShowDescription(true); // Show description after data is loaded
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {console.log(planetData)}
      <PlanetDescription
        planetData={planetData}
        showDescription={showDescription} />
      <UranusModel />
    </div>
  );
}

export default ViewUranus;