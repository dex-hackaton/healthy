import {ICategory} from "../../api/dto/Category";

export interface IMainState {
  categories: ICategory[];
}

export const MainInitialState: IMainState = {
  categories: [] as ICategory[]
};
