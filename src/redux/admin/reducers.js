import { ActionTypes } from "./types";

const INITIAL_STATE = {
  admin: null,
  current_page: "dashboard",
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
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

export default AdminReducer;
