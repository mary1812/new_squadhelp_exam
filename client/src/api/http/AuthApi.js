import CONSTANTS from '../../constants';

class Auth {
  #_client;
  #_url;
  #_accessToken;
  constructor(client) {
    this.#_client = client; // httpClient
    this.#_url = 'auth/';
    this.#_accessToken = null;

    this.#_client.interceptors.request.use(
      this.requestInterceptor,
      this.requestInterceptorError
    );

    this.#_client.interceptors.response.use(
      this.responseInterceptor,
      this.responseInterceptorError
    )
  }

  login = (data) => {
    return this.#_client.post(`${this.#_url}login`, data);
  };

  registration = (data) => {
    return this.#_client.post(`${this.#_url}registration`, data);
  };
  refresh = (data) => {
    return this.#_client.post(`${this.#_url}/refresh`, data);
  };

  logout = () => {
    window.localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
    this.#_accessToken = null;
  };

  requestInterceptor = (config) => {
    if (this.#_accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${this.#_accessToken}`,
      };
    }
    return config;
  };

  requestInterceptorError = (err) => Promise.reject(err);

  responseInterceptor = (response) => {
    console.log(response);
    if (response.data?.data?.tokenPair) {
      const {
        data: {
          data: {
            tokenPair: { refreshToken, accessToken: access },
          },
        },
      } = response;

      window.localStorage.setItem(CONSTANTS.REFRESH_TOKEN, refreshToken);
      this.#_accessToken = access;
    }
    return response;
  };

  responseInterceptorError = async (err) => {
    console.dir(err);

    const refreshToken = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
    if(err.response.status === 419 && refreshToken) {
      const {data: {data: {tokenPair}}} = await this.refresh({refreshToken});

      window.localStorage.setItem(CONSTANTS.REFRESH_TOKEN, tokenPair.refreshToken);
      this.#_accessToken = tokenPair.accessToken;

      err.config.headers.Authorization = `Bearer ${this.#_accessToken}`;

      return this.#_client(err.config);
    }


    if(err.response.status === 401 && refreshToken) {
      this.logout();
    }
    return Promise.reject(err);
  };
}

export default Auth;
