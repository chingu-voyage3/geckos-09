import {GET_BOARD} from "../constants/constants";
import {board} from "../settings/dummy-data";

export default function(state = board, action) {
    switch(action.type) {
        case GET_BOARD:
            return action.payload;
    }
    return state;
}