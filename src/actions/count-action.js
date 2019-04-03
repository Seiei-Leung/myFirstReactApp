import * as actionTypes from './actionType';

export function increaseCount() {
	return {
		type: actionTypes.INCREASE,
		payload: {}
	};
}

export function decreaseCount() {
	return {
		type: actionTypes.DECREASE,
		payload: {}
	};
}