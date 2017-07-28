import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">

        {EarthquakeList}

      </div>
    );
  }
}

export default App;
