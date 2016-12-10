import { h, Component } from 'preact';

export interface ItemProps {
  onClick: Function;
  completed: boolean;
  text: string;
}

export default class Item extends Component<ItemProps, {}> {
  render() {
    return (
      <li
        onClick={() => this.props.onClick()}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
