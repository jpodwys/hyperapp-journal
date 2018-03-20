import { location } from '@hyperapp/router';

const actions = {
  location: location.actions,

  // For debugging
  logState: () => state => { console.log(state); },

  setState: state => ({state})
}

// const focusin = function(el, e){
//   el.setState({inputFocused: true});
// };

// const focusout = function(el, e){
//   el.setState({inputFocused: false});
// };

// const linkstate = function(el, e){
//   let obj = {};
//   obj[e.detail.key] = e.detail.val;
//   el.setState(obj, e.detail.cb);
//   if(e.detail.key === 'dark') localStorage.setItem('dark', e.detail.val);
// };

// const scrollBody = function(el, e){
//   if(el.state.view === '/entries'){
//     el.setState({scrollPosition: document.body.scrollTop});
//   }
// };

export default actions;
