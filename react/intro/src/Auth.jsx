import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isLoggedIn: bool
// isSpinnerOn: bool

// algo
// 1. show login by default
// 2. on login click - show spinner for 2 seconds
// 3. after 2 seconds - show Logout
// 4. on logout click - show Login

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isSpinnerOn: false,
  };

  onLogin = () => {
    this.setState({
      isSpinnerOn: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinnerOn: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.onLogout} />
        ) : this.state.isSpinnerOn ? (
          <Spinner size={50} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </>
    );
  }
}

export default Auth;
