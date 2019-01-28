import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./Reducers/loginReducer";
// import reloadProfileReducer from "./Reducers/reloadProfileReducer";

const rootReducer = combineReducers({
    user: loginReducer,
    // reloadProfile: reloadProfileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;