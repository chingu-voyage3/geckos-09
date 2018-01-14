import { lists } from "../settings/dummy-data";
<<<<<<< HEAD
import { GET_LIST } from "../constants/constants";

export default function(state = lists, action) {
=======
import { GET_LISTS } from "../constants/constants";

export default function(state = null, action) {
>>>>>>> 0bfa6a0028c187fef0dd228d3aaa922f02224e37
  switch (action.type) {
    case GET_LISTS:
      // Using the es6 spread operator to concat
      // the latest list on to the end of the lists object in redux store
      return { ...state, [action.payload.id]: action.payload };
  }
  return state;
}
