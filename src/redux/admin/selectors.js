import { createSelector } from "reselect";

const selectAdminState = (state) => state.admin;

export const selectAdmin = createSelector(
  [selectAdminState],
  (admin) => admin.admin
);

export const selectCurrentPage = createSelector(
  [selectAdminState],
  (admin) => admin.current_page
);
