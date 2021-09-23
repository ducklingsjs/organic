import useSWR, {SWRResponse} from 'swr';

import {AppCollection} from '../store';
import {apiClient} from '../network/apiClient';
import {HttpMethod} from '../enums/HttpMethod';
import {useDatx} from './useDatx/useDatx';
import {Event} from '../resources/Event';
import {mock_events} from '../mock/events';

const eventsFetcher = async (url: string, datx: AppCollection) => {
  const eventResponse = await apiClient(url, HttpMethod.Get, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = <Array<Event>>(<unknown>datx.add(eventResponse, 'event'));

  return data;
};

export const useEvents = (): SWRResponse<Array<Event>, any> => {
  const datx = useDatx();

  const key = `${Event.type}`;

  const {data, mutate, ...rest} = useSWR(
    key,
    () => eventsFetcher('events', datx),
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
