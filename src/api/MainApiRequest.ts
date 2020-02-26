import {BaseRequest} from "./BaseRequest";
import {ICategory} from "./dto/Category";

export class MainApiRequest extends BaseRequest {
    categories(config?: Record<string, any>): Promise<ICategory[]> {
        return this.fetch(
            `/activities`,
            Object.assign(
                {
                    method: "GET",
                },
                config,
            ),
        ).catch(BaseRequest.handleError);
    }
}