import { ADD_CARD } from "../constants/constants";

export default function(state = null, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
  }
  return state;
}
