import { SimpleThunk } from "../../utils/SimpleThunk";
import { baseThunkAction } from "../BaseThunkAction";
import { MainActions } from "./MainActions";
import { requestsRepository } from "../../api/RequestsRepository";

export const MainActionsAsync = {
  getCategories: (): SimpleThunk =>
    baseThunkAction(
      [],
      requestsRepository.mainApiRequest.categories,
      MainActions.getCategories
    ),
  getEvents: (): SimpleThunk =>
    baseThunkAction(
      [],
      requestsRepository.mainApiRequest.events,
      MainActions.getEvents
    )
};
