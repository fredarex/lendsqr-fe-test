import { applyMiddleware,compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
)
export default store;

