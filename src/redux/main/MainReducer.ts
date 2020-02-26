import {reducerWithInitialState} from "typescript-fsa-reducers";
import {MainInitialState} from "./MainState";
import {MainActions} from "./MainActions";

export const MainReducer = reducerWithInitialState(MainInitialState).case(
    MainActions.getCategories.done,
    (state, {result}) => ({
        categories: result
    })
);
