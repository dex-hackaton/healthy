import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {MainReducer} from "./main/MainReducer";

const appReducer = combineReducers({
  main: MainReducer
});

const rootReducer = (
    state: IAppState | undefined,
    action: { type: string; payload: string }
) => {
  if (action.type === "AUTH/USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export const initializeStore = (initialState = {}) => {
  return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export interface IAppState extends ReturnType<typeof appReducer> {
}
