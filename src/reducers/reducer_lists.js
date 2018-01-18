import _ from "lodash";
import { lists } from "../settings/dummy-data";
import { ADD_LIST, ADD_CARD } from "../constants/constants";

export default function(state = null, action) {
  switch (action.type) {
    case ADD_LIST:
      // Using the es6 spread operator to concat
      // the latest list on to the end of the lists object in redux store
      return { ...state, [action.payload.id]: action.payload };
  }
  return state;
}
