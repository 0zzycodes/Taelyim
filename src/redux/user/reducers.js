import { ActionTypes } from "./types";

const INITIAL_STATE = {
  currentUser: null,
  current_page: "dashboard",
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ActionTypes.CURRENT_PAGE:
      return {
        ...state,
        current_page: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
