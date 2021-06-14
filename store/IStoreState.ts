import { IAuthenticationState } from 'pages/authentication/stateManagement/state';
import { IConfigurationVariablesState } from 'pages/configurationVariables/stateManagement/state';

export interface IStoreState {
    authentication: IAuthenticationState;
    configurationVariables: IConfigurationVariablesState;
}

export default IStoreState;