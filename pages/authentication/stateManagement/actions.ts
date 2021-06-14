import * as constants from './constants';

export interface IGetUserTokenStarted {
    type: typeof constants.GET_USER_TOKEN_STARTED;
}

export interface IGetUserTokenFailed {
    type: typeof constants.GET_USER_TOKEN_FAIL;
    payload: string; //TBD
}

export interface IGetUserTokenSuccess {
    type: typeof constants.GET_USER_TOKEN_SUCCESS;
    payload: any; //TBD
}

export type Actions = IGetUserTokenStarted | IGetUserTokenFailed | IGetUserTokenSuccess;
