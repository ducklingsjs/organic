import {useContext} from 'react';

import {AppCollection} from '../../store';
import {DatxContext} from './context';

export const useDatx = (): AppCollection => {
  const client = useContext(DatxContext);

  if (!client) {
    throw Error('useDatx should be used inside DatxProvider');
  }

  return client as AppCollection;
};
