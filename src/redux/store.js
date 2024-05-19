import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

export const store=createStore(bookingReducer);

