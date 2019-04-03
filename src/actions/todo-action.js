import * as actionTypes from './actionType';

export function addTodo(text) {
	return {
		type: actionTypes.ADDTODO,
		payload: text
	}
}