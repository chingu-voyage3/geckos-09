import { GET_BOARD, CHANGE_BOARD_INFO } from "../constants/constants";
import { board } from "../settings/dummy-data";

export default function(state = board, action) {
  switch (action.type) {
    case GET_BOARD:
      return action.payload;

    case CHANGE_BOARD_INFO:
      return action.payload;
  }
  return state;
}
