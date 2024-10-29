import React, { useEffect, useState } from 'react';
import MarsModel from '../models/Mars';  // Importuj komponentu
import PlanetDescription from '../components/PlanetDescription';

function ViewMars() {
    const [planetData, setPlanetData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDescription, setShowDescription] = useState(false); // Stav pro zobrazení popisu

    useEffect(() => {
        // Funkce pro načtení dat z API
        const fetchPlanetData = async () => {
          try {
            const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/mars');
    
            if (!response.ok) {
              throw new Error('Chyba při načítání dat');
            }
    
            const data = await response.json();
            setPlanetData(data); // Předpokládáme, že API vrátí pole, takže bereme první objekt
            setShowDescription(true); // Zobrazit popis po načtení dat
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
            <MarsModel />
        </div>
    );
}

export default ViewMars;