import {GET_USER} from '../constants/constants';
import * as data from '../settings/dummy-data';

export default function(state = data.dummyUser, action) {
    switch(action.type) {
        case GET_USER:
            return action.payload;
    }
    return state;
}