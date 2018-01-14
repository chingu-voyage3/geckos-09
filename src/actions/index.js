import { GET_LISTS, GET_CARDS } from "../constants/constants";

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

export function getCards(cards) {
  return {
    type: GET_CARDS,
    payload: cards
  };
}

export function getBoard() {
  return {
    type: DUMMY_DATA
  };
}
