import { lists } from "../settings/dummy-data";
import { GET_LISTS } from "../constants/constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_LISTS:
      return action.payload;
  }
  return state;
}
