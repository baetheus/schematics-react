import React, { SFC, useState } from 'react';

import './<%= classify(name) %>.css';

export interface <%= classify(name) %>Props {
}

/**
 * @render react
 * @name <%= classify(name) %>
 * @example
 * <<%= classify(name) %> text="Hello World" />
 */
export const <%= classify(name) %>: SFC<<%= classify(name) %>Props> = ({}) => {
  return (
    <section className="">
      <h1>{}</h1>
    </section>
  )
};
