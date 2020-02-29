import { reducerWithInitialState } from "typescript-fsa-reducers";
import { MainInitialState } from "./MainState";
import { MainActions } from "./MainActions";

export const MainReducer = reducerWithInitialState(MainInitialState)
  .case(MainActions.getCategories.done, (state, { result }) => ({
    ...state,
    categories: result
  }))
  .case(MainActions.setFilter, (state, payload) => ({
    ...state,
    filter: payload
  }))
  .case(MainActions.getEvents.done, (state, { result }) => ({
    ...state,
    EventsArr: [...result]
  }))
  .case(MainActions.getEvent.done, (state, { result }) => ({
    ...state,
    SelectedEvent: result[0]
  }));
