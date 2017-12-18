import * as constant from '../constants/constants';
import {cards} from '../settings/dummy-data';

export default function(state = cards, action) {
    switch(action.type) {
        case constant.GET_CARDS:
            return action.payload;
    }
    return state; 
}