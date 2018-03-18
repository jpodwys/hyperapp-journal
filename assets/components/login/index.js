import { h } from 'hyperapp';

const getUser = (e, prefix) => {
  e.preventDefault();
  return {
    username: document.getElementById(prefix + 'username').value,
    password: document.getElementById(prefix + 'password').value
  }
};

const Login = ({actions}) /*=> (state, actions)*/ => (
  <div class="login-page-wrapper">
    <h1 class="center-text">Journalize</h1>
    <h4 class="center-text">Private journal entries</h4>
      <div class="login-form-wrapper">
        <form action="/api/user" method="POST" onsubmit={e => actions.createAccount(getUser(e, 'c'))} class="full-width full-width--all">
          <fieldset>
            <legend>Create an Account</legend>
            <input id="cusername" placeholder="username" autocapitalize="off"/>
            <input id="cpassword" type="password" placeholder="password"/>
            <input type="submit"/>
          </fieldset>
        </form>
        <form action="/api/user/login" method="POST" onsubmit={e => actions.login(getUser(e, 'l'))} class="full-width full-width--all">
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
