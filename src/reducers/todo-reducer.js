import * as actionTypes from '../actions/actionType';

export function todoReducer(state=["开工"], action) {
	switch (action.type) {
		case actionTypes.ADDTODO: {
			return state.concat(action.payload);
		}
		default: {
			return state;
		}
	}
}