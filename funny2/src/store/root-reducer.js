import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { configReducer } from './appConfig';

export default (history) => combineReducers({
    router: connectRouter(history),
    appConfig: configReducer
});
