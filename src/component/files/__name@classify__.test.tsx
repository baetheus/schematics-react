import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { <%= classify(name) %> } from './<%= classify(name) %>';

test('<%= classify(name) %> changes the class when hovered', () => {
  const component = renderer.create(<<%= classify(name) %> text="Hello World" />);
  let tree = component.toJSON();

  if (tree === null) {
    throw new Error('component.toJSON returned null');
  }

  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();
  expect(tree).toMatchSnapshot();
});
