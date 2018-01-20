import { ADD_CARD } from "../constants/constants";
import merge from "lodash/merge";

const byListId = (state, action) => {
  const { payload } = action;
  const { id, listId, text } = payload;
  const newState = {
    [listId]: {
      [id]: payload
    }
  };
  if (state == null) {
    return {
      [listId]: {
        [id]: payload
      }
    };
  }
  return _.merge({}, state.byListId, newState);
};

const allId = (state, action) => {
  const { payload } = action;
  const { id } = payload;
  console.log("card state", state);
  if (state == null) {
    return [id];
  }
  return [...state.allId, id];
};

export default function(state = null, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        byListId: byListId(state, action),
        allId: allId(state, action)
      };
  }
  return state;
}
