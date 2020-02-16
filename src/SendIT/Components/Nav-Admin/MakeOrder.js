import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from '../XtraComponents/Select';
import { changeWeight } from '../../actions/makeOrderActions';
import '../../CSS/MakeOrder.css';

class MakeOrderAdmin extends Component {
  
  onChangeWeight(e) {
    const weight = e.target.value;
    this.props.changeWeight(weight)
  }
  
  render() {
    console.log(this.props)
    const { from, to, weight } = this.props.newOrder
    return (
      <div className='contain'>
        <h1>
          Hello,
          <span> Admin</span>
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
          <button className='order-btn'>Order</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    newOrder: state.newOrder
  }
}

export default connect(mapStateToProps, { changeWeight })(MakeOrderAdmin);
