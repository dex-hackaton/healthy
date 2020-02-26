import actionCreatorFactory from "typescript-fsa";
import {ICategory} from "../../api/dto/Category";

const actionCreator = actionCreatorFactory("MAIN");

export const MainActions = {
    getCategories: actionCreator.async<never[], ICategory[], Error>("MAIN_GET_CATEGORIES"),
};
