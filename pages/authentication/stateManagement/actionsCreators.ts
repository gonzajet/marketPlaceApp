import * as constants from './constants';
import * as actions from './actions';

export function getUserTokenStarted(): actions.IGetUserTokenStarted {
    return {
        type: constants.GET_USER_TOKEN_STARTED
    };
}

//TBD
export function getUserTokenSuccess(account: any): actions.IGetUserTokenSuccess {
    return {
        type: constants.GET_USER_TOKEN_SUCCESS,
        payload: account
    };
    
}
//TBD
export function getUserTokenFailed(errorMessage: string): actions.IGetUserTokenFailed {
    return {
        type: constants.GET_USER_TOKEN_FAIL,
        payload: errorMessage
    };
}

export const actionTriggers =
{
    getUserTokenStarted,
    getUserTokenSuccess,
    getUserTokenFailed
};
