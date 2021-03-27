import React from 'react';

export class Todo extends React.Component {
  render() {
    const { content, status } = this.props.todo;
    return (
      <div>
        <div className="flex mb-4 items-center justify-between">
          <div>
            <div className="flex-grow text-gray-darkest">{content}</div>
          </div>
          <div>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700">
              Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
              Remove
            </button>
          </div>
        </div>
        {/* <div className="flex mb-4 items-center justify-between">
              <div>
                <div className="flex-grow">Email for review</div>
              </div>
              <div>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">
                  Not Done
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                  Remove
                </button>
              </div>
            </div> */}
      </div>
    );
  }
}
// const { todo, additionalProp } = this.props;
//         return <h4
//         >
//             {todo.content} {additionalProp}
//         </h4>;
// export function Todo({ todo, additionalProp }) {
//     return <h4
//     >
//         {todo.content} {additionalProp}
//     </h4>;
// }
