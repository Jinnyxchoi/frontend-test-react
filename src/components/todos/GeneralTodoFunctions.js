import React from 'react';
import { connect } from 'react-redux';

function GeneralTodoFunctions(props) {
  const listComplete = !props.todos.some(
    (todo) => todo.status === 'incomplete'
  );

  return (
    <div className="mb-4">
      <div className="flex my-8 justify-between">
        <h1 className="text-gray-darkest text-3xl font-bold">Todo List</h1>
        {listComplete ? (
          <button
            onClick={props.removeAll}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
          >
            Remove All
          </button>
        ) : (
          <button
            onClick={props.completeAll}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-teal-300 border-teal-300 hover:bg-teal-300"
          >
            Complete All
          </button>
        )}
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className="flex my-8">
          <input
            onChange={props.handleChange}
            name="newTodo"
            value={props.newTodo}
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
    </div>
  );
}
const mapState = (state) => ({
  todos: state.todo,
});

const mapDispatch = (dispatch) => ({
  completeAll: () => dispatch({ type: 'complete_all' }),
  removeAll: () => dispatch({ type: 'remove_all' }),
});
export default connect(mapState, mapDispatch)(GeneralTodoFunctions);
