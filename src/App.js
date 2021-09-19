import React, { Fragment, useEffect } from 'react';
import Logs from './components/logs/Logs';
import SearchBar from './components/layouts/SearchBar'
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
