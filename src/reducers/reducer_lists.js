import { lists } from '../settings/dummy-data';
import { GET_LIST } from '../constants/constants';

export default function (state = lists, action) {
  switch (action.type) {
    case GET_LIST:
      return action.payload;
  }
  return state;
}
