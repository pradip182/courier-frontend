import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../CSS/MakeOrder.css';
import Select from '../XtraComponents/Select';
import ConfirmDialog from '../XtraComponents/Dialogs/ConfirmDialog';
import { changeWeight } from '../../actions/makeOrderActions';
import { showMakeOrderDialog } from '../../actions/dialogs';

class MakeOrder extends Component {
  onChangeWeight(e) {
    const weight = e.target.value;
    this.props.changeWeight(weight);
  }

  showConfirmDialog(){
    this.props.showMakeOrderDialog()
  }

  render() {
    const { from, to, weight } = this.props.newOrder;
    return (
      <div>
        {this.props.dialog.makeOrderDialog ? <ConfirmDialog /> : <div />}
        <div className='contain'>
          <h1>
            Send Your Parcel
            <span> Quick</span> &<span> Easy</span>
          </h1>
          <div className='form-box'>
            <span className='from'>From: </span>
            <Select selectedPlace={from} loc='from' />
            <span className='too'>To: </span>
            <Select selectedPlace={to} loc='to' />
            <span className='weight'>Weight (kg): </span>
            <input
              type='number'
              value={weight}
              id='weight'
              min={0.1}
              step={0.1}
              onChange={this.onChangeWeight.bind(this)}
            />
            <button
              className='order-btn'
              onClick={() => {
                this.showConfirmDialog()
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newOrder: state.newOrder,
    dialog: state.dialogs,
  };
}

export default connect(
  mapStateToProps,
  { changeWeight, showMakeOrderDialog }
)(MakeOrder);
