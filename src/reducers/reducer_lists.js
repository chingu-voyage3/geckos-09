import _ from "lodash";
import omitDeep from "omit-deep-lodash";

import { lists } from "../settings/dummy-data";
import { ADD_LIST, DELETE_LIST } from "../constants/constants";

const deleteList = (state, action) => {
  const { payload } = action;
  // id of list to delete
  const { id } = payload;

  console.log("deleteList", id);
  return omitDeep(state, id);
};
export default function(state = null, action) {
  switch (action.type) {
    case ADD_LIST:
      // Using the es6 spread operator to concat
      // the latest list on to the end of the lists object in redux store
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LIST:
      return deleteList(state, action);
  }
  return state;
}
