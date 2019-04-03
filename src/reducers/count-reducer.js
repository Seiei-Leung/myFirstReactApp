import * as actionTypes from '../actions/actionType';

export function countReducer(state=0, action) {
	switch (action.type) {
		case actionTypes.INCREASE: {
			return state + 1;
		}
		case actionTypes.DECREASE: {
			return state - 1;
		}
		default: {
			return state;
		}
	}
}