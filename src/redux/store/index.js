import { createStore } from "redux";
import ColorBoxReducer from "../reducer/ColorBoxReducer";

const store = createStore(ColorBoxReducer);
export default store;
