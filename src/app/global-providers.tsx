'use client';

import { store } from '@/shared/store';
import { Provider as ReduxProvider } from 'react-redux';

export const GlobalProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
