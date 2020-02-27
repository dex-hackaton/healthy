import {AsyncActionCreators} from "typescript-fsa";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {BaseRequest} from "../api/BaseRequest";
import {IAppState} from "./index";

export const baseThunkAction = <P extends any[], R>(
    params: P,
    request: Function,
    action: AsyncActionCreators<P, R, Error>,
    selector?: Function,
    onSuccess?: Function,
    onError?: Function
): ThunkAction<Promise<{ result?: R; error?: Error }>,
    IAppState,
    Error,
    Action> => async (dispatch, getState): Promise<{ result?: R; error?: Error }> => {
  if (selector && selector(getState())) {
    return {
      error: {name: "Aborted.", message: "Requested data not needed."}
    };
  }
  dispatch(action.started(params));
  try {
    const result = await request.bind(new BaseRequest())(...params);
    if (result.status >= 400) {
      dispatch(action.failed({params, error: result as Error}));
    } else {
      dispatch(action.done({params, result}));
    }
    onSuccess && onSuccess();

    return {result};
  } catch (error) {
    dispatch(action.failed({params, error}));
    onError && onError();

    return {error};
  }
};
