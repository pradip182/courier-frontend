import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import MakeOrder from './MakeOrder';
import Orders from './Orders';
import UserNav from '../XtraComponents/User-Nav';

import '../../CSS/Nav.css';

// const history = createBrowserHistory();

class Nav extends Component {
  
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
    
    return (
      <div className='container'>
        <div>
          <UserNav match={match} />
          <Route exact path={`${match.path}/make-order`} component={MakeOrder} />
          <Route exact path={`${match.path}/orders`} component={Orders} />
        </div>
      </div>
    );
  }
}

export default Nav;
