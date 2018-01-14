import _ from "lodash";
import { lists } from "../settings/dummy-data";
import { GET_LISTS } from "../constants/constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_LISTS:
      // Using the es6 spread operator to concat
      // the latest list on to the end of the lists object in redux store
      return { ...state, [action.payload.id]: action.payload };
  }
  return state;
}
