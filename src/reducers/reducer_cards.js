import { ADD_CARD } from "../constants/constants";
import merge from "lodash/merge";

const byListId = (state, action) => {
  const { payload } = action;
  const { id, listId, text } = payload;
  return {
    [listId]: {
      [id]: payload
    }
  };
};

const allId = (state, action) => {
  const { payload } = action;
  const { id } = payload;
  console.log(state);
  return _.merge([], null, ...id);
};
export default function(state = null, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        byListId: byListId(state, action),
        allId: allId(state, action)
      };
  }
  return state;
}
