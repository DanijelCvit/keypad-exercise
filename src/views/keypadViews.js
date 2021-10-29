import { KEYPAD_ID, LCD_ID } from "../constants.js";
import { keyPress } from "../listeners/keypadListeners.js";
import { createDOMElement } from "../utils/DOMutils.js";

export const createKeyElement = (key) => {
  const keyElement = createDOMElement("li");
  const buttonElement = createDOMElement("button");
  const audioElement = createDOMElement("audio");
  const sourceElement = createDOMElement("source");

  sourceElement.src = key.dialTone;
  sourceElement.type = "audio/mpeg";
  audioElement.preload = "auto";
  audioElement.id = key.char;
  buttonElement.textContent = key.char;

  audioElement.appendChild(sourceElement);
  keyElement.append(audioElement, buttonElement);

  keyElement.addEventListener("click", keyPress);

  return keyElement;
};

export const createKeyPadElement = (keys) => {
  const keyPadElement = createDOMElement("ul", { id: KEYPAD_ID });

  for (const key of keys) {
    const keyElement = createKeyElement(key);
    keyPadElement.appendChild(keyElement);
  }

  return keyPadElement;
};

export const createDisplayElement = () => {
  return createDOMElement("div", { id: LCD_ID });
};
