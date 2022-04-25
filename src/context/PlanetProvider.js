import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

// https://stackoverflow.com/questions/40748397/how-to-use-children-with-react-stateless-functional-component-in-typescript
function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState({
    name: '',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await response.json();

      setData(result);
    };

    getPlanets();
  }, []);

  const planetData = {
    data,
    filterByName,
    setFilterByName,
  };

  return (
    <PlanetContext.Provider value={ planetData }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default PlanetProvider;
