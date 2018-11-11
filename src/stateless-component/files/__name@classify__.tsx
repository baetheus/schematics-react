import * as React from 'react'; // This is needed to render jsx with inferno

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
