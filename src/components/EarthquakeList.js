import React, {Component} from 'react';
import moment from 'moment';

import earthquakes from './../data/Earthquakes.js'
import EarthquakeInfo from './EarthquakeInfo';


export default class EarthquakeList extends Component{
  render(){
    let earthQuakes = earthquakes.features.map((earthquake)=>{
      return(
        <div className="col-sm-6" key={earthquake.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{earthquake.features.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.features.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.features.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {earthquake.features.geometry.coordinates}</p>
              <a href={earthquake.features.properties.url} className="card-link">USGS Event Link</a>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div>
        <EarthquakeInfo />
        {earthQuakes}

      </div>
    )
  }
}
