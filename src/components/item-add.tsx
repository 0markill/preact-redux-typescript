import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import reducers from '../reducers';
import { addItem } from '../actions';

interface ItemAddConnectedProps {
  addItem: Function;
}

@connect(reducers, bindActions({ addItem }))
export class ItemAdd extends Component<{}, {}> {
  render(props: ItemAddConnectedProps) {
    let input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            // Skip empty entries
            return;
          }
          props.addItem(input.value);
          input.value = '';
        } }>
          <input ref={node => {
            input = node;
          } } />
          <button type="submit">
            Add item
          </button>
        </form>
      </div>
    );
  }
}
