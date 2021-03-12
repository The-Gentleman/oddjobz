import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import tasksReducer from './reducers/tasks'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    tasks: tasksReducer
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
  
  export default store;