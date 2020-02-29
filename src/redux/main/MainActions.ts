import actionCreatorFactory from "typescript-fsa";
import { ICategory } from "../../api/dto/Category";
import { ISelected } from "../../components/filter/Filter";
import { IEvent } from "../../api/dto/Event";

const actionCreator = actionCreatorFactory("MAIN");

export const MainActions = {
  getCategories: actionCreator.async<never[], ICategory[], Error>(
    "MAIN_GET_CATEGORIES"
  ),
  getEvents: actionCreator.async<string[] | never[], IEvent[], Error>("GET_EVENTS"),
  setFilter: actionCreator<ISelected>("SET_FILTER")
};
