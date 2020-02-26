import {IMainState} from "./MainState";
import {createSelector} from "reselect";

const mainState = (state: IMainState) => state;

export const getCategories = createSelector(
    mainState,
    state => state.categories
);
