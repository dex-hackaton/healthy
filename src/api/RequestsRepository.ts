import {MainApiRequest} from "./MainApiRequest";

export class RequestsRepository {
    mainApiRequest = new MainApiRequest();
}

export const requestsRepository = new RequestsRepository();
