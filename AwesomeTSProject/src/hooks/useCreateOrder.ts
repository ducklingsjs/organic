import {useMemo} from 'react';
import useSWR, {SWRResponse} from 'swr';

import {apiClient} from '../network/apiClient';
import {HttpMethod} from '../enums/HttpMethod';

export const useCreateOrder = (): SWRResponse<any, any> => {
  const swr = useSWR('create_order', null, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
  });

  const handlers = useMemo(
    () => ({
      createOrder: async (menuItemID: string) => {
        const fetcher = async () => {
          await apiClient('orders', HttpMethod.Post, {
            body: JSON.stringify({
              menuItemId: menuItemID,
            }),
          });
        };

        try {
          await swr.mutate(fetcher, false);
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    [swr],
  );

  return {
    ...swr,
    ...handlers,
  };
};
