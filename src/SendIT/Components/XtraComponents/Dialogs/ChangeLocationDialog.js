import React from 'react';
import { connect } from 'react-redux';
import { hideChangeLocationDialog } from '../../../actions/dialogs';

import '../../../CSS/dialog_admin.css';

class ChangeLocationDialog extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       location: 'Jinja, Uganda',
       weight: '1.2',
       price: '32'
    };
  };
  
  onSave = props => {
    props.hideChangeLocationDialog();
  };
  
  onDiscard = props => {
    props.hideChangeLocationDialog();
  };

  onLocationChange = (e) => {
    const location = e.target.value
    this.setState({ location })
  }

  onPriceChange = (e) => {
    const price = e.target.value
    this.setState({ price })
  }

  onWeightChange = (e) => {
    const weight = e.target.value
    this.setState({ weight })
  }

  render() {
    const { props } = this
    return (
      <div className='dlg-wrapper-edit'>
        <div className='dlg-box-edit'>
          <div className='dlg-header'>
            Edit Order: 0<span id='parcelId' />
          </div>
          <div className='dlg-body-edit'>
            <div>
              <span>From:</span>
              <select disabled id='from-edit'>
                <option>lalitpur,godawari</option>
              </select>
              <span> To:</span>
              <select id='to-edit'>
                <option>pulchowk,lalitpur</option>
                <option>dillibazar,ktm</option>
                <option>chitwan,bharatpur</option>
              
              </select>
            </div>
            <div>
              <span>Weight (in Kg): </span>
              <input value={this.state.weight} size='5' id='weight' onChange={this.onWeightChange.bind(this)} />
              <span>Price (in USD):</span>
              <input value={this.state.price} size='5' id='price' onChange={this.onPriceChange.bind(this)} />
            </div>
            <div>
              <span>Status: </span>
              <select id='status'>
                <option value='Delivered'>Delivered</option>
                <option value='In Transit'>In Transit</option>
                <option value='Not Delivered'>Not Delivered</option>
              </select>
            </div>
            <div>
              <span>Current location: </span>
              <input
                value={this.state.location}
                id='location-edit'
                onChange={this.onLocationChange.bind(this)}
              />
            </div>
          </div>
          <div className='dlg-footer'>
            <button className='btn_n' onClick={() => this.onDiscard(props)}>
              Discard
            </button>
            <button className='btn_n a' onClick={() => this.onSave(props)}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { hideChangeLocationDialog }
)(ChangeLocationDialog);
