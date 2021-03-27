import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import GeneralTodoFunctions from './GeneralTodoFunctions';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }
  componentDidMount() {
    this.props.loadInitialTodos();
  }
  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    console.log('here?');
    evt.preventDefault();
    const newTodo = this.state.newTodo;
    this.props.addNewTodo(newTodo);
    this.setState({
      newTodo: '',
    });
  };

  render() {
    const todos = this.props.todos || [];
    const listComplete = !this.props.todos.some(
      (todo) => todo.status === 'incomplete'
    );
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5">
          <GeneralTodoFunctions
            localState={this.state.newTodo}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
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
const mapDispatch = (dispatch) => ({
  addNewTodo: (newTodo) => dispatch({ type: 'add_new_todo', newTodo }),
  loadInitialTodos: () => dispatch({ type: 'load_todos' }),
});
export default connect(mapState, mapDispatch)(TodoList);
