import React, { useEffect, useState } from 'react';
import SunModel from '../models/Sun';  // Importuj komponentu
import SunDescription from '../components/SunDescription';

function ViewSun() {
  const [sunData, setSunData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(false); // State to control animation

  useEffect(() => {
    // Function to fetch data from the API
    const fetchSunData = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/soleil'); // API endpoint SUN

        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setSunData(data); // Data in object form, so we use the data directly
        setShowDescription(true); // Show description after data is loaded
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSunData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {console.log(sunData)}
      <SunDescription sunData={sunData} showDescription={showDescription} />
      <SunModel />
    </div>
  );
}

export default ViewSun;
