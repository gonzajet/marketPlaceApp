import { ThunkAction } from 'redux-thunk';

import IStoreState from '../../../store/IStoreState';
import { getToken as getUserToken } from './api';
import { Actions } from './actions';
import { actionTriggers } from './actionsCreators';

//TBD
export const getToken = (): ThunkAction<void, IStoreState, null, Actions> => async (dispatch, getState) => {
    // Indicate we are loading something...
    if (getState().authentication.getTokenInProgress) {
        return;
    }
    
    dispatch(actionTriggers.getUserTokenStarted());

    await getUserToken().then((resp) => {
        const nice: string = 'nice';
        dispatch(actionTriggers.getUserTokenSuccess(nice));
    }).catch((error) => {
        dispatch(actionTriggers.getUserTokenFailed(error.toString()));
    })
};

