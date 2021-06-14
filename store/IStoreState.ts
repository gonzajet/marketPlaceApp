import { IAuthenticationState } from '../pages/authentication/stateManagement/state';

export interface IStoreState {
    authentication: IAuthenticationState;
}

export default IStoreState;