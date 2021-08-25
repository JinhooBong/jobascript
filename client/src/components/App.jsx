import React from 'react';
import Axios from 'axios';
import JobsList from './JobsList.jsx';
import JobSearch from './JobSearch.jsx';

const App = () => {
  return (
    <div>
      <h1 className="title">Jobascript</h1>
      <JobsList />
      <JobSearch />
    </div>
  )
}

export default App;