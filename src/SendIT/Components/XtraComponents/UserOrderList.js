import React from 'react';
import { connect } from 'react-redux';

import UserOrderListItem from '../XtraComponents/UserOrderListItem';

const UserOrderList = ({ userOrders }) => (
  <div>
    {userOrders.map(order => (
      <UserOrderListItem
        key={order.orderid}
        orderid={order.orderid}
        from={order.from}
        to={order.to}
        weight={order.weight}
        price={order.price}
        status={order.status}
      />
    ))}
  </div>
);

function mapStateToProps(state){
  return {
    userOrders: state.userOrders
  }
}

export default connect(mapStateToProps)(UserOrderList)