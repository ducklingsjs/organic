import {HttpMethod} from '../enums/HttpMethod';

export const API_URL = 'http://10.1.128.234:3000/v1/';

export const apiClient = async (
  resourceUrl: string,
  method: HttpMethod,
  options?: Record<string, any>,
) => {
  const headers = {
    ...options?.headers,
  };

  const requestOptions = {
    headers,
    method,
    body: options?.body,
  };

  const response = await fetch(`${API_URL}${resourceUrl}`, requestOptions);

  if (response.status === 204) {
    return {
      statusCode: 204,
      data: {},
    };
  } else if (response.status >= 500) {
    throw response;
  }

  const {data} = await response.json();

  if (data) {
    return data;
  }

  if (!data.success) {
    throw data as any;
  }

  throw data as any;
};
