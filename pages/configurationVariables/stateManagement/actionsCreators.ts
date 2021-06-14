import * as constants from 'pages/configurationVariables/stateManagement/constants';
import  * as actions from 'pages/configurationVariables/stateManagement/actions';
import { IConfigurationVariablesState } from './state';

export function getConfigurationVariables(): actions.IGetConfigurationVariablesRequest {
    return {
        type: constants.GET_CONFIGURATION_VARIABLES_REQUEST,
    };
}

export function getConfigurationVariablesSuccess(payload: IConfigurationVariablesState): actions.IGetConfigurationVariablesSuccess {
    return {
        type: constants.GET_CONFIGURATION_VARIABLES_SUCCESS,
        payload: payload
    };
}

export function getConfigurationVariablesFailed(error: string): actions.IGetConfigurationVariablesFailed {
    return {
        type: constants.GET_CONFIGURATION_VARIABLES_FAILED,
        payload: error
    };
}

export const actionTriggers =
{
    getConfigurationVariables,
    getConfigurationVariablesSuccess,
    getConfigurationVariablesFailed
};
