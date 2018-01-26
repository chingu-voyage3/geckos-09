import { ADD_CARD, DELETE_CARD, CASCADE_DELETE } from "../constants/constants";
import merge from "lodash/merge";
import omitDeep from "omit-deep-lodash";

const byListId = (state, action) => {
  // some ES6 magic for popping off an object's properties and
  // creating variables of the same name (Ex. const payload = action.payload)
  const { payload } = action;
  const { id, listId, text } = payload;
  const newState = {
    [listId]: {
      [id]: payload
    }
  };
  if (state == null) {
    return {
      [listId]: {
        [id]: payload
      }
    };
  } else if (state.byListId[listId] == {}) {
    // even if list is empty of cards, byListId must return null
    // if not null JSX will throw an error upon rerendering the empty card list
    return null;
  } else {
    return _.merge({}, state.byListId, newState);
  }
  // _.merge is used here because it allows 2 objects to be merged
  // and returns a new copy of state - state cannot be directly mutated
};

const allId = (state, action) => {
  const { payload } = action;
  const { id } = payload;

  // handles the case for which allId array is empty
  if (state == null) {
    return [id];
  }
  // if allId array is not empty, append the id
  // notice that .push, .pop, etc are avoided as it directly mutates state
  return [...state.allId, id];
};

const deleteCard = (state, action) => {
  // payload == id of post to be deleted and list id
  const { payload } = action;
  const { cardId, listId } = payload;

  const omitter = {
    // omitDeep uses recursion to removes 'all' matching keys in an object
    // needed this because the state is nested
    // unique keys are made with generator
    byListId: omitDeep(state.byListId, [cardId]),
    allId: _.without(state.allId, cardId)
  };

  return omitter;
};

const cascadeDelete = (state, action) => {
  // deletes all cards in a list
  const { payload } = action;
  const { listId } = payload;

  const omitter = {
    byListId: _.omit(state.byListId, [listId]),
    allId: allId(state, action)
  };

  return omitter;
};

export default function(state = null, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        byListId: byListId(state, action),
        allId: allId(state, action)
      };
    case DELETE_CARD:
      return deleteCard(state, action);
    case CASCADE_DELETE:
      return cascadeDelete(state, action);
  }
  return state;
}
