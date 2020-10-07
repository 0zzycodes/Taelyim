import { ActionTypes } from "./types";

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setCurrentPage = (data) => ({
  type: ActionTypes.CURRENT_PAGE,
  payload: data,
});
