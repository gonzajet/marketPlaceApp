
import { Actions } from 'pages/configurationVariables/stateManagement/actions';
import * as constants from 'pages/configurationVariables/stateManagement/constants';
import { IConfigurationVariablesState, INITIAL_STATE } from 'pages/configurationVariables/stateManagement/state';

export function configurationVariables(state: IConfigurationVariablesState = INITIAL_STATE, action: Actions): IConfigurationVariablesState {

    switch (action.type) {
        
        case constants.GET_CONFIGURATION_VARIABLES_REQUEST: {
            return {
                ...state,
            };
        }
           
        case constants.GET_CONFIGURATION_VARIABLES_SUCCESS: {
            state = action.payload;
            state.configurationReady = true;
            return {
                ...state,
            };
        }
           
        case constants.GET_CONFIGURATION_VARIABLES_FAILED: {
            state.configurationReady = false;
            return {
                ...state,
            };
        }

        default:
            return state;
    }
}
