import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { saveHistoryObject } from '../actions/history';

import Intro from './Intro/Index';
import Nav from './Nav/Index';
import NavAdmin from './Nav-Admin/Index';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
    };
  }

  componentWillMount() {
    const path = history.location.pathname;
    this.setState({ path });
    const unlisten = history.listen((location, action) => {
      // console.log(location.pathname);
      this.setState({
        path: location.pathname,
      });
    });
    this.props.saveHistoryObject(history)
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    console.log(this.state.path);

    return (
      <div>
        <Router history={history}>
          <div>
            {this.state.path === '/' || this.state.path === '/home/' ? (
              <Redirect to='/home/login' />
            ) : (
              <div>
                <Route path='/home' component={Intro} />
                <Route path='/user' component={Nav} />
                <Route path='/admin' component={NavAdmin} />
              </div>
            )}
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { saveHistoryObject })(App);
