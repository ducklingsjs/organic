import {Vendor} from './../resources/Vendor';
import useSWR, {SWRResponse} from 'swr';

import {AppCollection} from '../store';
import {apiClient} from '../network/apiClient';
import {HttpMethod} from '../enums/HttpMethod';
import {useDatx} from './useDatx/useDatx';

const vendorFetcher = async (url: string, datx: AppCollection) => {
  const vendorResponse = await apiClient(url, HttpMethod.Get, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = <Array<Vendor>>(<unknown>datx.add(vendorResponse, 'vendor'));

  return data;
};

export const useVendors = (id: string): SWRResponse<Array<Vendor>, any> => {
  const datx = useDatx();

  const key = `${Vendor.type}`;
  const {data, mutate, ...rest} = useSWR(
    key,
    () => vendorFetcher(`events/${id}/vendors`, datx),
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
