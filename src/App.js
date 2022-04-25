import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';
import Filter from './components/Filter';
// import Header from './components/Header';

function App() {
  return (
    <PlanetProvider>
      {/* <Header /> */}
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
