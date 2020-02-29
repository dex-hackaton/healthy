import { BaseRequest } from "./BaseRequest";
import { ICategory } from "./dto/Category";
import {IEvent} from "./dto/Event";

export class MainApiRequest extends BaseRequest {
  categories(config?: Record<string, any>): Promise<ICategory[]> {
    return this.fetch(
      `/activities`,
      Object.assign(
        {
          method: "GET"
        },
        config
      )
    ).catch(BaseRequest.handleError);
  }

  events(config?: Record<string, any>): Promise<IEvent[]> {

    return this.fetch(
      `/event`,
      Object.assign(
        {
          method: "GET"
        },
        config
      )
    ).catch(BaseRequest.handleError);
  }
}
