import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDeatilReducer,
} from "./reducers/productReducers";
import { authReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDeatilReducer,
  auth: authReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
