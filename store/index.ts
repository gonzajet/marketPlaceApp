import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authentication } from 'pages/authentication/stateManagement/reducer';
import { configurationVariables } from 'pages/configurationVariables/stateManagement/reducer';

import IStoreState from './IStoreState';

// ADD MORE REDUCERS
const reducers = combineReducers<IStoreState>({
    authentication,
    configurationVariables,
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
