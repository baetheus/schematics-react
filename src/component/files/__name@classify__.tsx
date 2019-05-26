import './<%= classify(name) %>.css';

import React from 'react';

export interface <%= classify(name) %>Props {
}

/**
 * @render react
 * @name <%= classify(name) %>
 * @example
 * <<%= classify(name) %> />
 */
export const <%= classify(name) %>: React.FC<<%= classify(name) %>Props> = ({}) => {
  return (
    <section className="">
    </section>
  )
};
