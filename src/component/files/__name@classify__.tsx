import * as React from 'react';
import { useState } from 'react';

import './<%= classify(name) %>.css';

export interface <%= classify(name) %>Props {
  text: string;
}

/**
 * @render react
 * @name <%= classify(name) %>
 * @example
 * <<%= classify(name) %> text="Hello World" />
 */
export const <%= classify(name) %>: React.SFC<<%= classify(name) %>Props> = ({ text }) => {
  const [state, setState] = useState({ count: 0 });
  const step = (i: number) => () =>
    setState(s => ({ ...s, count: s.count + i }));
  const inc = step(1);
  const dec = step(-1);

  return (
    <section className="ba-7 ba-sm-2 ba-solid">
      <h1>{ text }</h1>
      <p>Count: {state.count}</p>
      <p>Click to increase count.</p>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </section>
  )
};

export default <%= classify(name) %>;