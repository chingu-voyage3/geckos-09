import { combineReducers } from "redux";
import membersReducer from "./reducer_members";
import userReducer from "./reducer_user";
import listsReducer from "./reducer_lists";
import cardsReducer from "./reducer_cards";
import boardReducer from "./reducer_board";

const rootReducer = combineReducers({
  members: membersReducer,
  user: userReducer,
  cards: cardsReducer,
  lists: listsReducer,
  board: boardReducer
});

export default rootReducer;
