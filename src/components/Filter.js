/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
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

  // useEffect(() => {
  //   console.log(activeFilters);
  // }, [activeFilters]);

  const handleChange = ({ target: { name, value } }) => {
    setValueFilter({
      ...valueFilter,
      [name]: value,
    });
  };

  const filterOptions = (option) => !activeFilters.find(
    (filter) => option === filter.column,
  );

  return (
    <main>
      <div>
        <input
          className="inputName center"
          type="text"
          value={ filterByName.name }
          data-testid="name-filter"
          placeholder="Search a planet ..."
          onChange={ (e) => setFilterByName({ ...filterByName, name: e.target.value }) }
        />
      </div>
      <section className="selectContainer">
        <div className="column">
          <label htmlFor="column" className="labelTitle">
            Coluna
            <select
              name="column"
              value={ valueFilter.column }
              onChange={ handleChange }
              data-testid="column-filter"
            >
              {columnFilterOptions.filter(filterOptions).map((column) => (
                <option value={ column } key={ column }>
                  {column}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="comparison">
          <label htmlFor="comparison" className="labelTitle">
            Operador
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
          </label>
        </div>
        <div className="value">
          <input
            name="value"
            type="number"
            value={ valueFilter.value }
            onChange={ handleChange }
            data-testid="value-filter"
          />
        </div>
        <div>
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
            Adicionar
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={ () => {
              setActiveFilters([]);
              setFilterByNumericValues([...filterByNumericValues, valueFilter]);
              setValueFilter({
                column: '',
                comparison: '',
                value: '',
              });
            } }
            data-testid="button-remove-filters"
          >
            Remover Filtros
          </button>
        </div>
      </section>
      {activeFilters.map((filter, index) => (
        <div key={ index } data-testid="filter" className="filter">
          {filter.column}
          {' '}
          {filter.comparison}
          {' '}
          {filter.value}
          <button
            type="button"
            onClick={ () => {
              const cloneArray = [...activeFilters];
              cloneArray.splice(index, 1);
              setActiveFilters(cloneArray);
            } }
          >
            x
          </button>
        </div>
      ))}
    </main>
  );
}

export default Filter;
