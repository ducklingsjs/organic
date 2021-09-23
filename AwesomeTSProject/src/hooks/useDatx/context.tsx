import React, {createContext, FC} from 'react';
import {SWRConfig} from 'swr';

import {AppCollection} from '../../store';

export const DatxContext = createContext<AppCollection | null>(null);

interface IDatxProviderProps {
  client: AppCollection;
}

export const DatxProvider: FC<IDatxProviderProps> = ({client, children}) => {
  return (
    <DatxContext.Provider value={client}>
      <SWRConfig>{children}</SWRConfig>
    </DatxContext.Provider>
  );
};
