import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav_bar/Navbar';
import HomeSchedule from './components/home_screen/HomeSchedule';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomeSchedule} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);
