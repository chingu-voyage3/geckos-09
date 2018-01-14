import { GET_LISTS } from "../constants/constants";

export function getMembers() {
  return {
    type: DUMMY_DATA
  };
}

export function getUser() {
  return {
    type: GET_USER
  };
}

export function getLists(lists) {
  return {
    type: GET_LISTS,
    payload: lists
  };
}

export function getCards() {
  return {
    type: DUMMY_DATA
  };
}

export function getBoard() {
  return {
    type: DUMMY_DATA
  };
}
