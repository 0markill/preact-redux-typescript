import { h, Component } from 'preact';
import Item from './item';

export interface ItemListProps {
  items: any[];
  onItemClick: Function;
}

export class ItemList extends Component<ItemListProps, {}> {
  render() {
    return (
      <ul>
        {this.props.items.map(item =>
          <Item
            key={item.id}
            {...item}
            onClick={() => this.props.onItemClick(item.id)}
          />
        )}
      </ul>
    );
  }
}
