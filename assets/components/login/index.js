import { h } from 'hyperapp';

const getUser = (e, prefix) => {
  e.preventDefault();
  return {
    username: document.getElementById(prefix + 'username').value,
    password: document.getElementById(prefix + 'password').value
  }
};

const Login = () => (state, { createAccount, login }) => (
  <div class="login-page-wrapper">
    <h1 class="center-text">Journalize</h1>
    <h4 class="center-text">Private journal entries</h4>
      <div class="login-form-wrapper">
        <form
          method="POST"
          action="/api/user"
          class="full-width full-width--all"
          onsubmit={e => createAccount(getUser(e, 'c'))}>
          <fieldset>
            <legend>Create an Account</legend>
            <input id="cusername" placeholder="username" autocapitalize="off"/>
            <input id="cpassword" type="password" placeholder="password"/>
            <input type="submit"/>
          </fieldset>
        </form>
        <form
          method="POST"
          action="/api/user/login"
          class="full-width full-width--all"
          onsubmit={e => login(getUser(e, 'l'))}>
          <fieldset>
            <legend>or Login</legend>
            <input id="lusername" placeholder="username" autocapitalize="off"/>
            <input id="lpassword" type="password" placeholder="password"/>
            <input type="submit"/>
          </fieldset>
        </form>
      </div>
  </div>
);

export default Login;
