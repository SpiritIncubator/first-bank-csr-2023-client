'use client';
import { createContext as _createContext, useContext as _useContext, PropsWithChildren, useMemo, useReducer } from 'react';


const enum MessageEvent {
  SEND_MESSAGE = 'SEND_MESSAGE',
}

interface Action<T> {
  type: MessageEvent,
  payload: Partial<T>;
}

const initialState = {};

function createContext<T extends object>(componentName: string, defaultValue: T) {
  const Context = _createContext<T>(defaultValue);

  function reducer(state: T, action: Action<T>) {
    switch (action.type) {
      case MessageEvent.SEND_MESSAGE:
        
        return state;
    }
  }
  
  function Provider(props: PropsWithChildren<T>) {
    const { children, ...options } = props;
    const [state, dispatch] = useReducer(reducer, initialState as T);

    const value = useMemo(() => {
      return {
        ...state,
        ...options,
        dispatch,
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]) as T;

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContext() {
    const context = _useContext(Context);

    if (context) return context;

    throw Error(`Your context must be inside of the ${componentName} component.`);
  }

  return [Provider, useContext];
}

export {
  createContext
}