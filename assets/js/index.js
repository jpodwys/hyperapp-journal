import { h, app } from 'hyperapp';
import { location } from '@hyperapp/router';
import View from '../components/view';
import getInitialState from './app-state';
import actions from './actions';

window.actions = app(getInitialState(), actions, View, document.body);
window.unsubscribe = location.subscribe(window.actions.location);

// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js');
  
//   navigator.serviceWorker.onmessage = function (e) {
//     let eTag = e.data;
//     let lastETag = localStorage.getItem('currentETag');
//     let isNew = !!lastETag && !!eTag && lastETag !== eTag;

//     if(isNew || !lastETag) {
//       localStorage.setItem('currentETag', eTag);
//       if(isNew) location.reload();
//     }
//   };
// }
