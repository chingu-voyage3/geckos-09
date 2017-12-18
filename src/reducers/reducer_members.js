import {GET_MEMBERS} from '../constants/constants';
import * as data from '../settings/dummy-data';

export default function(state = data.dummyMembers, action) {
    switch(action.type) {
        case GET_MEMBERS:
            return action.payload;
    }
    return state;
}