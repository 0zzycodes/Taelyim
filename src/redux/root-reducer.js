import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AdminReducer from "./admin/reducers";
import { DashboardReducer, DashboarCoursedReducer } from "./dashboard/reducers";
import UserReducer from "./user/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin", "dashboard"],
};

const rootReducer = combineReducers({
  admin: AdminReducer,
  dashboard: DashboardReducer,
  dashboard_course: DashboarCoursedReducer,
  user: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
