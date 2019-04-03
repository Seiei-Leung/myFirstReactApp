import { combineReducers } from 'redux';
import { todoReducer } from './todo-reducer';
import { countReducer } from './count-reducer';

const rootReducer = combineReducers({
	todoReducer,
	countReducer
})

export default rootReducer;