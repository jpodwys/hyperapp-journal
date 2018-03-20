import { h } from 'hyperapp';
import EntryPreview from '../entry-preview';
// import debounce from '../../js/debounce';

const Entries = () => ({ entries, scrollPosition }, actions) => {
  entries = entries || [];
  if(!entries.length){
    return (<h2 class="center-text">It's empty in here!</h2>);
  }
  return (
    <div class="entry-list">
      {entries.map(entry => <EntryPreview entry={entry}/>)}
    </div>
  )
};

export default Entries;
