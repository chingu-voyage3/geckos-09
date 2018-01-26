import {
  ADD_LIST,
  ADD_CARD,
  DELETE_CARD,
  DELETE_LIST,
  CASCADE_DELETE
} from "../constants/constants";

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

export function addList(list) {
  return {
    type: ADD_LIST,
    payload: list
  };
}

export function deleteList(list) {
  return {
    type: DELETE_LIST,
    payload: list
  };
}

export function cascadeDelete(list) {
  return {
    type: CASCADE_DELETE,
    payload: list
  };
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    payload: card
  };
}

export function deleteCard(card) {
  return {
    type: DELETE_CARD,
    payload: card
  };
}

export function getBoard() {
  return {
    type: DUMMY_DATA
  };
}
