import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from './Navbar';

describe('Navbar', () => {
  var subject;
  var tree;

  beforeEach(() => {
    subject = renderer.create(<Navbar />);
    tree = subject.toJSON();
  });

  it('is expected to match the snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
