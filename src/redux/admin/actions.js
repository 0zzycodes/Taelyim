import { ActionTypes } from "./types";

export const setAdmin = (admin) => ({
  type: ActionTypes.SET_ADMIN,
  payload: admin,
});

export const setCurrentPage = (data) => ({
  type: ActionTypes.CURRENT_PAGE,
  payload: data,
});
