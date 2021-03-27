import { todos } from '../../data/todos';

const initialState = todos;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'load_todos':
      return state;
    case 'add_new_todo':
      const newTodoObj = {
        content: action.newTodo,
        status: 'incomplete',
        date_created: Date.now(),
        date_due: Date.now(),
      };
      return [...state, newTodoObj];
    case 'remove_all':
      return [];
    case 'complete_all':
      return state.map((todo) => {
        return {
          ...todo,
          status: 'complete',
        };
      });
    case 'toggle_status':
      return state.map((each) => {
        if (each.content === action.todo.content) {
          return {
            ...each,
            status: each.status === 'complete' ? 'incomplete' : 'complete',
          };
        }
        return each;
      });
    case 'remove_todo':
      return state.filter((each) => each.content !== action.todo.content);

    default:
      return state;
  }
}
