'use client'

import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { createActorContext } from '@xstate/react';

import { conversationMachine } from './xstate/conversationMachine';

type LayoutProps = {
  children: ReactNode;
}

export const ConversationContext = createActorContext(conversationMachine);

const Layout = ({ children }: LayoutProps) => {

  return (
    <ConversationContext.Provider>
      <Box width={2560} height={1440}>
        {children}
      </Box>
    </ConversationContext.Provider>
  )
}

export default Layout;