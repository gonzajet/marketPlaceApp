import * as constants from 'pages/configurationVariables/stateManagement/constants';
import { IConfigurationVariablesState } from './state';

// ACTIONS
export interface IGetConfigurationVariablesRequest {
    type: typeof constants.GET_CONFIGURATION_VARIABLES_REQUEST
}

// ACTIONS
export interface IGetConfigurationVariablesSuccess {
    type: typeof constants.GET_CONFIGURATION_VARIABLES_SUCCESS
    payload: IConfigurationVariablesState
}

// ACTIONS
export interface IGetConfigurationVariablesFailed {
    type: typeof constants.GET_CONFIGURATION_VARIABLES_FAILED
    payload: string
}

export type Actions = IGetConfigurationVariablesRequest | IGetConfigurationVariablesSuccess | IGetConfigurationVariablesFailed;
