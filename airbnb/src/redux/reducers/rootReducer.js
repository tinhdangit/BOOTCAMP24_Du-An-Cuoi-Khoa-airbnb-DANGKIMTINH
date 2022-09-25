import { combineReducers } from "redux";
import { vitriReducer } from "./GpsReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  vitriReducer: vitriReducer,
  userReducer: userReducer,
  roomReducer: roomReducer,
});
export default rootReducer;
