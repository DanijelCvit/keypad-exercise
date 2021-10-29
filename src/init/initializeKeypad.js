import { USER_INTERFACE_ID } from "../constants.js";
import { keypadData } from "../data.js";
import { createDOMElement, getDOMElement } from "../utils/DOMutils.js";
import {
  createDisplayElement,
  createKeyPadElement,
} from "../views/keypadViews.js";

const initializeKeypad = () => {
  const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);
  const displayElement = createDisplayElement();
  const keyPad = createKeyPadElement(keypadData.keys);
  userInterfaceContainer.append(displayElement, keyPad);
};

window.addEventListener("load", initializeKeypad);
