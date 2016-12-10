import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import reducers from '../reducers';
import { toggleItem } from '../actions';

import { ItemAdd } from './item-add';
import { ItemList } from './item-list';

interface AppConnectedProps {
  items: any[];
  toggleItem: Function;
}

@connect(reducers, bindActions({ toggleItem }))
export class App extends Component<{}, {}> {
  render(props: AppConnectedProps) {
    return (
      <div>
        <ItemAdd />
        <ItemList items={props.items} onItemClick={props.toggleItem} />
      </div>
    );
  }
}
