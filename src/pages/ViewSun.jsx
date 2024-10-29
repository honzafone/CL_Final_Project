import React, { useEffect, useState } from 'react';
import SunModel from '../models/Sun';  // Importuj komponentu
import SunDescription from '../components/SunDescription';

function ViewSun() {
  const [sunData, setSunData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(false); // Stav pro zobrazení popisu

  useEffect(() => {
    // Funkce pro načtení dat z API
    const fetchSunData = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/soleil'); // API endpoint pro Slunce

        if (!response.ok) {
          throw new Error('Chyba při načítání dat');
        }

        const data = await response.json();
        setSunData(data); // Data jsou přímo v objektu
        setShowDescription(true); // Zobrazit popis po načtení dat
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
      <SunModel />  {/* Vlož komponentu s modelem Slunce */}
    </div>
  );
}

export default ViewSun;
