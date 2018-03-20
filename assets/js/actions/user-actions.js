import User from '../services/user-service';
import getInitialState from '../app-state';
import { clearLocalStorage } from '../utils';

const actions = {
  login: user => (state, actions) => {
    clearLocalStorage();
    User.login(user).then(user => {
      actions.loginSuccess(user);
    }).catch(err => {
      actions.loginFailure(err);
    });
  },

  loginSuccess: user => (state, actions) => {
    actions.setState({loggedIn: true});
    actions.location.go('/entries');
  },

  loginFailure: err => { console.log('loginFailure', err); },

  createAccount: user => (state, actions) => {
    clearLocalStorage();
    User.create(user).then(user => {
      actions.loginSuccess(user);
    }).catch(err => {
      actions.createAccountFailure(err);
    });
  },

  createAccountFailure: err => { console.log('createAccountFailure', err); },

  logout: () => (state, actions) => {
    User.logout().then(() => {
      actions.logoutSuccess();
    }).catch(err => {
      actions.logoutFailure(err);
    });
  },

  logoutSuccess: () => {
    clearLocalStorage();
    return getInitialState();
  },

  logoutFailure: err => { console.log('logoutFailure', err); },
}

export default actions;
