import renderer from 'react-test-renderer';


describe('Comic', () => {
  var subject;
  var tree;

  beforeEach(() => {
    subject = renderer.create("<Comic />");
    tree = subject.toJSON();
  });

  it('is expected to match the snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
