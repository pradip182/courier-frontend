import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import ManageOrders from './ManageOrders';
import ManageUsers from './ManageUsers';
import MakeOrder from './MakeOrder';
import AdminNav from '../XtraComponents/Admin-Nav';
import ManageSpecificUserOrders from './ManageSpecificUserOrders';

import '../../CSS/Nav.css';

// const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
    };
  }

  componentWillMount() {
    // const path = history.location.pathname;
    // this.setState({ path });
    // const unlisten = history.listen((location, action) => {
    //   // console.log(location.pathname);
    //   this.setState({
    //     path: location.pathname,
    //   });
    // });
  }

  componentWillUnmount() {
    // this.unlisten()
  }

  render() {
    const { match } = this.props
    const navStyle =
      this.state.path === '/make-order'
        ? { backgroundColor: 'transparent' }
        : {};
    return (
      <div className='container'>
        <div>
          <AdminNav match={match} navStyle={navStyle} />
          <Route path={`${match.path}/make-order`} component={MakeOrder} />
          <Route path={`${match.path}/manage-orders`} component={ManageOrders} />
          <Route path={`${match.path}/manage-specific-user-orders`} component={ManageSpecificUserOrders} />
          <Route path={`${match.path}/manage-users`} component={ManageUsers} />
        </div>
      </div>
    );
  }
}

export default App;
