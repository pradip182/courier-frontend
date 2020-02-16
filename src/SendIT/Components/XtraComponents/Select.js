import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeLoc } from '../../actions/makeOrderActions';

const places = [
  'godawari,lalitpur',
  'pulchowk,lalitpur',
  'dillibazar,kathmandu',
  'chitwan,narayanghat',
  'pokhara, kaski',
 
];

class Select extends Component {
  
  handleChange(event) {
    const place = event.target.value;
    const loc = this.props.loc
    this.props.changeLoc(place, loc)
  }

  render() {
    return (
      <select
        value={this.props.selectedPlace}
        onChange={this.handleChange.bind(this)}
      >
        {places.map(place => {
          return (
            <option key={place} value={place}>
              {place}
            </option>
          );
        })}
      </select>
    );
  }
}

export default connect(null, {changeLoc})(Select);
