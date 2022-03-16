import createMountElement from 'utils/createMountElement';

describe('', () => {
  it('should create and append an element to the document', () => {
    const element = createMountElement('root');
    expect(element).toBeInTheDocument();
  });
});
