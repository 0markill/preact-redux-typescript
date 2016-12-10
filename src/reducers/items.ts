interface State {
  id?: number;
  completed?: boolean;
}

interface Action {
  type: string;
  id: number;
  text: string;
}

const item = (state: State = {}, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) { return state; }
      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

const todos = (state: State[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'TOGGLE_ITEM':
      return state.map(t =>
        item(t, action)
      );
    default:
      return state;
  }
};

export default todos;
