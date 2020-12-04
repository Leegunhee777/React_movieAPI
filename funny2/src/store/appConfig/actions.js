import { action } from 'typesafe-actions';

import {
    INIT_ALL,
    UPDATE_EMAIL,
    UPDATE_NAME,
    UPDATE_PW,
    UPDATE_USER,
    UPDATE_USER_BASKET
} from './constants';




export const updateUser = {
    updateUserEmail: (email) => action(
        UPDATE_EMAIL,
        email
    ),

    updateUserName: (name) => action(
        UPDATE_NAME,
        name
    ),
    updateUserPw: (pw) => action(
        UPDATE_PW,
        pw
    ),
    updateUserData: (user) => action(
        UPDATE_USER,
        user
      
    ),

    updateUserBasket:(basket) => action(
        UPDATE_USER_BASKET,
        basket
    ),

    initAll:() => action(
        INIT_ALL
    )

    

};


