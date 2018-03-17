import { h } from 'hyperapp';

const getUser = prefix => ({
  username: document.getElementById(prefix + 'username').value,
  password: document.getElementById(prefix + 'password').value
});

const Login = () => (state, actions) => (
  <div class="login-page-wrapper">
    <h1 class="center-text">Journalize</h1>
    <h4 class="center-text">Private journal entries</h4>
      <div class="login-form-wrapper">
        <form action="/api/user" method="POST" onSubmit={() => actions.createAccount(getUser('c'))} class="full-width full-width--all">
          <fieldset>
            <legend>Create an Account</legend>
            <input id="cusername" placeholder="username" autocapitalize="off"/>
            <input id="cpassword" type="password" placeholder="password"/>
            <input type="submit"/>
          </fieldset>
        </form>
        <form action="/api/user/login" method="POST" onSubmit={() => actions.login(getUser('l'))} class="full-width full-width--all">
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
