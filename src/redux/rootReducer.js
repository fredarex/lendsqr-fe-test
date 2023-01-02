import { combineReducers } from "redux";
import { featureReducer } from "./Features/features.reducer";

export const reducer =  combineReducers({
    features: featureReducer
});
