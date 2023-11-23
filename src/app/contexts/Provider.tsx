'use client';

import React, { ReactNode } from 'react'
import { createContext } from './globalContext';

const Provider = ({children}: {children: ReactNode}) => {
  const [GlobalProvider] = createContext<any>('globalContext', {});

  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default Provider