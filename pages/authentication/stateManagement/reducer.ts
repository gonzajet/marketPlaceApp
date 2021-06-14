
import { Actions } from './actions';
import * as constants from './constants';
import { IAuthenticationState, INITIAL_STATE } from './state';

export function authentication(state: IAuthenticationState = INITIAL_STATE, action: Actions): IAuthenticationState {
    switch (action.type) {
        case constants.GET_USER_TOKEN_STARTED:
            return {
                ...state,
                getTokenInProgress: true,
                error: ''
            };
        //TBD
        case constants.GET_USER_TOKEN_SUCCESS:
            return {
                ...state,
                getTokenInProgress: false,
            };
        //TBD
        case constants.GET_USER_TOKEN_FAIL:
            return {
                ...state,
                getTokenInProgress: false,
                error: action.payload
            };

        default:
            return state;
    }
}
