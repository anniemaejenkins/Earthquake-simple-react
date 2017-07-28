import React, {Component} from 'react';
import moment from 'moment';

import Earthquakes from './../Earthquakes.js'


export default class EarthquakeList extends Component{
  render(){
    return(
      <div className="col-sm-6" key={FILL_ME_IN_WITH_A_UNIQUE_KEY}>
        <div className="card" >
          <div className="card-block">
            <h4 className="card-title">{FILL_ME_IN_WITH_THE_PLACE}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {FILL_ME_IN_WITH_THE_MAGNITUDE_MAG}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(FILL_ME_IN_WITH_THE_TIME).format('llll')}</h6>
            <p className="card-text">Coordinates: {FILL_ME_IN_WITH_THE_COORDINATES}</p>
            <a href={FILL_ME_IN_WITH_THE_URL} className="card-link">USGS Event Link</a>
          </div>
        </div>
      </div>
    )
  }
}
