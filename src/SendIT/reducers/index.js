import { combineReducers } from 'redux';
import newOrderReducer from './new_order_reducer';
import userOrdersReducer from './user_orders_reducer';
import orderListReducer from './order_list_reducer';
import userListReducer from './users_list_reducer';
import loginRegisterReducer from './login_register_reducer';
import dialogsReducer from './dialogs_reducer';
import historyReducer from './historyReducer';

const allReducers = combineReducers({
  newOrder: newOrderReducer,
  userOrders: userOrdersReducer,
  orderList: orderListReducer,
  userList: userListReducer,
  loginRegister: loginRegisterReducer,
  dialogs: dialogsReducer,
  history: historyReducer
})

export default allReducers