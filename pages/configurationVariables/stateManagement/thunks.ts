import { ThunkAction } from 'redux-thunk';
import IStoreState from 'store/IStoreState';

import { Actions } from 'pages/configurationVariables/stateManagement/actions';
import { actionTriggers } from 'pages/configurationVariables/stateManagement/actionsCreators';
import { IConfigurationVariablesState } from './state';

export const getConfigurationVariables = (): ThunkAction<void, IStoreState, null, Actions> => async (dispatch) => {
    dispatch(actionTriggers.getConfigurationVariables());

    await fetch("/config.json")
    .then(async function(response) {
         const parsedResponse: IConfigurationVariablesState = await response.json();
         dispatch(actionTriggers.getConfigurationVariablesSuccess(parsedResponse));
      })
    .catch((error: string) => {
      dispatch(actionTriggers.getConfigurationVariablesFailed(error));
    });
};
