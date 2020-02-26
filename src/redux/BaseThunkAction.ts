import {IAppState} from "./index";
import {AsyncActionCreators} from "typescript-fsa";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {BaseRequest} from "../api/BaseRequest";

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
    Action> => async (dispatch): Promise<{ result?: R; error?: Error }> => {
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
