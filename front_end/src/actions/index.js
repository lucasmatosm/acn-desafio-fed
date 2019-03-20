import { SWITCH_UPDATE_VALUE } from './actionTypes';
export const switchButton = value => ({
    type: SWITCH_UPDATE_VALUE,
    newValue: value
});