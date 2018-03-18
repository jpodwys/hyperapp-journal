import { h } from 'hyperapp';
// import { Router, route } from '../router';
// import Header from '../header';
import Login from '../login';
// import Entries from '../entries';
// import Entry from '../entry';
// import Toast from '../toast';
// import FourOhFour from '../four-oh-four';

// import handleRouteChange from '../../js/route-handlers';
// import swipe from '../../js/swipe';

// Make sure new pages are always scrolled to the top
// while history entries maintain their scroll position.
// let { pushState } = history;
// history.pushState = (a, b, url) => {
//   pushState.call(history, a, b, url);
//   scrollTo(0, 0);
// };

const View = (state, actions) => (
  <div class={!!state.dark ? 'app dark' : 'app'}>
    {/* <Header
      view={state.view}
      loggedIn={state.loggedIn}
      entry={state.entry}
      filterText={state.filterText}
      showFilterInput={state.showFilterInput}
      dark={state.dark}/> */}
    <main>
      {/* <Router onChange={handleRouteChange.bind(this)}> */}
        <Login path="/" actions={actions} />
        {/* <Entries path="/entries"
          scrollPosition={state.scrollPosition}
          loggedIn={state.loggedIn}
          entries={state.viewEntries}/>
        <Entry path="/entry/:id"
          view={state.view}
          loggedIn={state.loggedIn}
          entry={state.entry} 
          entryReady={state.entryReady}/>
      </Router>
      <Toast toastConfig={state.toastConfig}/> */}
    </main>
  </div>
);

export default View;
