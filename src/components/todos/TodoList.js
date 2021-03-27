import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { Todo } from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }
  componentDidMount() {
    store.dispatch({ type: 'load_todos' });
  }
  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = this.state.newTodo;
    store.dispatch({ type: 'add_new_todo', newTodo });
    this.setState({
      newTodo: '',
    });
  };
  removeAll = () => {
    store.dispatch({ type: 'remove_all' });
  };
  completeAll = () => {
    store.dispatch({ type: 'complete_all' });
  };
  render() {
    const todos = this.props.todos || [];
    const listComplete = !this.props.todos.some(
      (todo) => todo.status === 'incomplete'
    );
    console.log(listComplete);
    // const listComplete = true;
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5">
          <div className="mb-4">
            <h1 className="text-gray-darkest text-3xl font-bold">Todo List</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="flex my-8">
                <input
                  onChange={this.handleChange}
                  name="newTodo"
                  value={this.state.newTodo}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
                  placeholder="Add Todo"
                />
                <button
                  type="submit"
                  className="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal-700 hover:text-white hover:bg-teal-700"
                >
                  Add
                </button>
              </div>
            </form>
            {listComplete ? (
              <button
                onClick={this.removeAll}
                className={
                  'flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700'
                }
              >
                Remove All
              </button>
            ) : (
              <button
                onClick={this.completeAll}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-teal-300 border-teal-300 hover:bg-teal-300"
              >
                Complete All
              </button>
            )}
          </div>
          {todos.map((todo, i) => (
            <Todo key={i} todo={todo} />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  todos: state.todo,
});

export default connect(mapState)(TodoList);
