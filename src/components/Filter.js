import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const {
    filterByName, setFilterByName,
    filterByNumericValues, setFilterByNumericValues,
    activeFilters, setActiveFilters,
  } = useContext(PlanetContext);

  const [valueFilter, setValueFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columnFilterOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const handleChange = ({ target: { name, value } }) => {
    setValueFilter({
      ...valueFilter,
      [name]: value,
    });
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={ filterByName.name }
          data-testid="name-filter"
          onChange={ (e) => setFilterByName({ ...filterByName, name: e.target.value }) }
        />
      </div>
      <div>
        <select
          name="column"
          value={ valueFilter.column }
          onChange={ handleChange }
          data-testid="column-filter"
        >
          {columnFilterOptions.map((column) => (
            <option value={ column } key={ column }>
              {column}
            </option>
          ))}
        </select>

        <select
          name="comparison"
          value={ valueFilter.comparison }
          onChange={ handleChange }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          name="value"
          type="number"
          value={ valueFilter.value }
          onChange={ handleChange }
          data-testid="value-filter"
        />

        <button
          type="button"
          onClick={ () => {
            setActiveFilters([...activeFilters, valueFilter]);
            setFilterByNumericValues([...filterByNumericValues, valueFilter]);
            setValueFilter({
              column: '',
              comparison: '',
              value: '',
            });
          } }
          data-testid="button-filter"
        >
          ADICIONAR
        </button>
      </div>
    </main>
  );
}

export default Filter;
