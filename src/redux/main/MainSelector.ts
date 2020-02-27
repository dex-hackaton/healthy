import {IMainState} from "./MainState";
import {createSelector} from "reselect";
import {IAppState} from "../index";

const mainState = (state: IAppState): IMainState => state.main;

export const getCategories = createSelector(
    mainState,
    state => state.categories
);
