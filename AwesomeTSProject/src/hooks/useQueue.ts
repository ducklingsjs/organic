import useSWR, {SWRResponse} from 'swr';

import {AppCollection} from '../store';
import {apiClient} from '../network/apiClient';
import {HttpMethod} from '../enums/HttpMethod';
import {useDatx} from './useDatx/useDatx';
import {Queue} from './../resources/Queue';

const queueFetcher = async (url: string, datx: AppCollection) => {
  const queueResponse = await apiClient(url, HttpMethod.Get, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = <Array<Queue>>(<unknown>datx.add(queueResponse, 'queue'));

  return data;
};

export const useQueue = (): SWRResponse<Array<Queue>, any> => {
  const datx = useDatx();

  const key = `${Queue.type}`;

  const {data, mutate, ...rest} = useSWR(
    key,
    () => queueFetcher('queue', datx),
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    },
  );

  return {
    data,
    mutate,
    ...rest,
  };
};
