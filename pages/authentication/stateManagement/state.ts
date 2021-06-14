export interface IAuthenticationState {
    userAuthenticated: boolean;
    loginInProgress: boolean;
    getTokenInProgress: boolean;
    error: string;
}

export const INITIAL_STATE: IAuthenticationState = {
    userAuthenticated: false,
    loginInProgress: false,
    getTokenInProgress: false,
    error: ''
};
