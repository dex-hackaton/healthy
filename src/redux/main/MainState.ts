import { ICategory } from "../../api/dto/Category";
import { ISelected } from "../../components/filter/Filter";
import { IEvent } from "../../api/dto/Event";

export interface IMainState {
  categories: ICategory[];
  filter: ISelected;
  EventsArr: IEvent[];
  SelectedEvent: IEvent;
}

export const MainInitialState: IMainState = {
  categories: [] as ICategory[],
  filter: {} as ISelected,
  EventsArr: [] as IEvent[],
  SelectedEvent: {} as IEvent
};
