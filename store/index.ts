import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authentication } from '../pages/authentication/stateManagement/reducer';

import IStoreState from './IStoreState';

// ADD REDUCERS
const reducers = combineReducers<IStoreState>({
    authentication,
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
