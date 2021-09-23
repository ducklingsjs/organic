import {VendorDetails} from './../resources/VendorDetails';
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

  const data = <VendorDetails>(
    (<unknown>datx.add(vendorResponse, 'vendor_details'))
  );

  return data;
};

export const useVendor = (id: string): SWRResponse<VendorDetails, any> => {
  const datx = useDatx();

  const key = `${VendorDetails.type}`;

  const {data, mutate, ...rest} = useSWR(
    key,
    () => vendorFetcher(`vendors/${id}`, datx),
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
