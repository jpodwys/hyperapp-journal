import { h } from 'hyperapp';
// import Icon from '../icon';
// import copyText from '../../js/copy-text';

  // copy = (e) => {
  //   copyText(this.props.entry.date + ' ' + this.props.entry.text);
  // }
  
const EntryPreview = () => (state, actions) => (
  <div class="entry-preview">
    <a href={"/entry/" + entry.id}>
      <div class="list-item">
        <div class="first-row">
          <span
            class="entry-link">
            {entry.date}
          </span>
    
        </div>

        <div class="second-row">
          {entry.text}
        </div>
      </div>
    </a>

    <span class="nav-set right dark-fill entry-preview--icons">
      <Icon icon="copy" key={entry.id + 'copy'} onclick={this.copy}/>
      <Icon icon="delete" key="delete" onclick={fire('linkstate', {key: 'toastConfig', val: {type: 'confirm delete', data: entry.id}})}/>
    </span>
  </div>
);

export default EntryPreview;

