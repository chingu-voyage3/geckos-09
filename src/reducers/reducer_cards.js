import { GET_CARDS } from "../constants/constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, [action.payload.id]: action.payload };
  }
  return state;
}
