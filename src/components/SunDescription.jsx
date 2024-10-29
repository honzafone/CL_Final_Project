const SunDescription = ({ sunData, showDescription, customText }) => (

    // Vlož komponentu s popisem
  <div className={`description z-10 fixed bottom-5 left-32rem pl-5 text-customPrimary ${showDescription ? 'fade-in' : ''}`}>
    <h1 className='text-3xl font-bold text-shadow'>
      {sunData 
      ? `${sunData.englishName}` 
      : 'Data nenalezena'}
    </h1>
    <h2>
      {sunData 
        ? `${sunData.bodyType}` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {sunData 
        ? `Type: Yellow dwarf` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {sunData 
        ? `Radius: ${sunData.equaRadius} km` 
        : 'Data nenalezena'}
    </h2>
    
    <h2>
      {sunData 
        ? `Temperature: 5,973°C to 15,000,000°C` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {sunData 
        ? `Rotation period: 27 days` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {sunData 
        ? `Average orbital speed around the Milky Way: 720,000km/h (200km/s)` 
        : 'Data nenalezena'}
    </h2>
   
    <p className="mt-2">
      {customText}
    </p>
  </div>
);

export default SunDescription;
