import { SWITCH_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
    newValue: 'f'
};
export const switchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};