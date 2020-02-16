import React from 'react';
import { connect } from 'react-redux';

import ListItem from './OrderListItem';

const OrderList = ({ orderListData }) => (
  <div>
    {orderListData.map(order => (
      <ListItem
        key={order.orderid}
        orderid={order.orderid}
        from={order.from}
        to={order.to}
        price={order.price}
        weight={order.weight}
        status={order.status}
      />
    ))}
  </div>
);

function mapStateToProps(state){
  return {
    orderListData: state.orderList
  }
}

export default connect(mapStateToProps, null)(OrderList)