import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Loading from './Loading';

function Table() {
  const { data, filterByName, activeFilters } = useContext(PlanetContext);
  console.log(data);

  const dataFilter = (linha) => {
    const filteredResults = [];

    activeFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        filteredResults.push(Number(linha[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        filteredResults.push(Number(linha[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        filteredResults.push(Number(linha[filter.column]) === Number(filter.value));
        break;
      default:
        return true;
      }
    });

    return filteredResults.every((el) => el);
  };

  if (!data) return <Loading />;

  const planets = data.results.filter(({ name }) => name.includes(filterByName.name));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planets.filter(dataFilter).map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
