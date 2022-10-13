import { createStore,combineReducers } from "redux";
import { Plus } from "./redux/PLUS";
import { Minus } from "./redux/MINUS";
import { Multiply } from "./redux/MULTIPLY";
import { Divide } from "./redux/DIVIDE";
import { Clear } from "./redux/CLEAR";

const combination = combineReducers({Plus,Minus,Multiply,Divide,Clear});
const store = createStore(combination)

export default store;