const PlanetDescription = ({ planetData, showDescription, customText }) => (

  // component for description
  <div className={`description z-10 fixed bottom-5 left-32rem pl-5 text-customPrimary ${showDescription ? 'fade-in' : ''}`}>
    <h1 className='text-3xl font-bold text-shadow'>
      {planetData
        ? `${planetData.englishName}`
        : 'Data nenalezena'}
    </h1>
    <div className="text-md text-customSecondary-500 text-shadow font-semibold md:font-bold">
      <h2>
        {planetData
          ? `Radius: ${planetData.equaRadius} of km`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Distance: ${planetData.semimajorAxis} of km from Sun`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Mass: ${planetData.mass.massValue} kg/m3`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Year: ${planetData.sideralOrbit} days`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Temperature: ${planetData.avgTemp} K`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Gravity: ${planetData.gravity} m/s2`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Moons: ${planetData.moons ? planetData.moons.length : 0}`
          : 'Data nenalezena'}
      </h2>
      <h2>
        {planetData
          ? `Astronomical Day: ${planetData.sideralRotation} hours`
          : 'Data nenalezena'}
      </h2>
      <p className="mt-2">
        {customText}
      </p>
    </div>
  </div>
);

export default PlanetDescription;
