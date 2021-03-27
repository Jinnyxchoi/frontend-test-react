import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from './todos/todoReducer';

const reducer = combineReducers({
  todo,
});

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );
const middleware = composeWithDevTools(
  applyMiddleware(createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);
// const store = createStore(todo);

export default store;
