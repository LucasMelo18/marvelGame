import React from 'react';
import renderer from 'react-test-renderer';

import Quiz from './Quiz';

describe('Quiz', () => {
  var subject;
  var tree;

  beforeEach(() => {
    subject = renderer.create(<Quiz />);
    tree = subject.toJSON();
  });

  it('is expected to match the snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
