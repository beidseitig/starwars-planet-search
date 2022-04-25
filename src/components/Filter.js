import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filterByName, setFilterByName } = useContext(PlanetContext);
  return (
    <main>
      <input
        type="text"
        value={ filterByName.name }
        data-testid="name-filter"
        onChange={ (e) => setFilterByName({ ...filterByName, name: e.target.value }) }
      />
    </main>
  );
}

export default Filter;
