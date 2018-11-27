import * as React from 'react';

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
export const <%= classify(name) %>: React.SFC<<%= classify(name) %>Props> = ({ text }) => (
  <span>{text}</span>
);

export default <%= classify(name) %>;