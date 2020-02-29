export class BaseRequest {
  protected static token: string | undefined | null = localStorage.getItem("token");
  protected baseurl: string = "https://api.healthy.adds.md";

  static setToken = (token: string | undefined) => {
    token && localStorage.setItem("token", token);
  };

  static handleError = async (error: any): Promise<any> => {
    const _error = await error;

    return Promise.reject(_error);
  };

  fetch(url: string, config: Record<string, any>): Promise<any> {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("token")}`,
    };

    return fetch(
      this.baseurl + url,
      Object.assign({ headers: headers }, config)
    ).then(response => {
      if (!response.status || response.status < 200 || response.status >= 300) {
        throw response.json();
      }

      return response.json();
    });
  }
}