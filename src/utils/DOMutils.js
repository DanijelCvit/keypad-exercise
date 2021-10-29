export const createDOMElement = (tag, options) => {
  const { id, type } = options || {};
  const tagElement = document.createElement(tag);

  if (id !== null) {
    tagElement.id = id;
  }

  return tagElement;
};

export const getDOMElement = (id) => {
  return document.getElementById(id);
};

export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = "";
};
