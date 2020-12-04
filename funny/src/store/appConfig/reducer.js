import { combineReducers } from 'redux';

import {
    INIT_ALL,
    UPDATE_EMAIL,
    UPDATE_NAME,
    UPDATE_PW,
    UPDATE_USER,
    UPDATE_USER_BASKET 
} from './constants';

import {
    DefaultUserDataStatus
} from './defaults';


export default combineReducers({
    userStatus: (state = DefaultUserDataStatus, action) => {
        switch (action.type) {
            case INIT_ALL: 
                return {
                    ...state,
                     };
            case UPDATE_EMAIL:
                return {
                    ...state,
                    email:action.payload
                    };

            case UPDATE_NAME:
                return {
                    ...state,
                     name:action.payload
                        
                     };

             case UPDATE_PW:
                 return {
                    ...state,
                        pw:action.payload
                            
                    };
             
           case UPDATE_USER:
                 return {
                    ...state,
                    id:action.payload.id,
                    pw:action.payload.pw,
                    email:action.payload.email,
                    name:action.payload.name,
                     };
               
          case UPDATE_USER_BASKET:
                return {
                    ...state,
                    basket:action.payload    
                    };
            default: return state;
        }
    }

});


