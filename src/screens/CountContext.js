/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// eslint-disable-next-line prettier/prettier
import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('incresing...')
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const values = {
    count,
    increment,
    decrement,
    reset,
  };

  return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>;
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};