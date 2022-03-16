function createMountElement(id: string) {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
}

export default createMountElement;
