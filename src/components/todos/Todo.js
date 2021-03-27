import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <div>
        <div className="flex mb-4 items-center justify-between">
          <div>
            <div className="flex-grow text-gray-darkest">{todo.content}</div>
          </div>
          <div>
            {todo.status === 'complete' ? (
              <button
                onClick={() => {
                  this.props.toggle(todo);
                }}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
              >
                Done
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.toggle(todo);
                }}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500"
              >
                Not Done
              </button>
            )}

            <button
              onClick={() => {
                this.props.remove(todo);
              }}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatch = (dispatch) => ({
  toggle: (todo) => dispatch({ type: 'toggle_status', todo }),
  remove: (todo) => dispatch({ type: 'remove_todo', todo }),
});
export default connect(null, mapDispatch)(Todo);
