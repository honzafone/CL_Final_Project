const PlanetDescription = ({ planetData, showDescription, customText }) => (

    
  <div className={`description z-10 fixed bottom-5 left-32rem pl-5 text-blue-500 ${showDescription ? 'fade-in' : ''}`}>
    <h1 className='font-bold'>
      {planetData 
      ? `${planetData.name}` 
      : 'Data nenalezena'}
    </h1>
    <h2>
      {planetData 
        ? `Radius: ${planetData.radius} of Jupiter` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {planetData 
        ? `Distance: ${planetData.distance_light_year} light years from Earth` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {planetData 
        ? `Mass: ${planetData.mass}x of Jupiter` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {planetData 
        ? `Year: ${planetData.period} days period` 
        : 'Data nenalezena'}
    </h2>
    <h2>
      {planetData 
        ? `Temperature: ${planetData.temperature} K` 
        : 'Data nenalezena'}
    </h2>
    <p className="mt-2">
      {customText}
    </p>
  </div>
);

export default PlanetDescription;
