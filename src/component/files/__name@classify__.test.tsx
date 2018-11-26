import React from 'react';
import renderer from 'react-test-renderer';

import { <%= classify(name) %> } from './<%= classify(name) %>';

test('<%= classify(name) %> changes the class when hovered', () => {
  const component = renderer.create(
    <<%= classify(name) %> />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});