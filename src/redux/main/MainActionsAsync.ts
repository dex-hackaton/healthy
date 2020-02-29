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
  getEvents: (params: string[]=[]): SimpleThunk =>
    baseThunkAction(
      params,
      requestsRepository.mainApiRequest.events,
      MainActions.getEvents
    ),
  getEvent: (params: string[]=[]): SimpleThunk =>
    baseThunkAction(
      params,
      requestsRepository.mainApiRequest.event,
      MainActions.getEvent
    )
};
