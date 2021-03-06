import { ADD_CARD } from "../constants/constants";
import merge from "lodash/merge";

const byListId = (state, action) => {
  // some ES6 magic for popping off an object's properties and
  // creating variables of the same name (Ex. const payload = action.payload)
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
  // _.merge is used here because it allows 2 objects to be merged
  // and returns a new copy of state - state cannot be directly mutated
  return _.merge({}, state.byListId, newState);
};

const allId = (state, action) => {
  const { payload } = action;
  const { id } = payload;

  // handles the case for which allId array is empty
  if (state == null) {
    return [id];
  }
  // if allId array is not empty, append the id
  // notice that .push, .pop, etc are avoided as it directly mutates state
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
