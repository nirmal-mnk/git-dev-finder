import { combineReducers } from "redux";
import searchSlice from "./Reducers/SearchReducer";
import themeSlice from "./Reducers/ThemeReducer";
const rootReducer = combineReducers({
  searchState: searchSlice,
  themeState: themeSlice,
});
export default rootReducer;
