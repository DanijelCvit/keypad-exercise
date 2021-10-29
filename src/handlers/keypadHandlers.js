import { LCD_ID } from "../constants.js";
import { keypadData } from "../data.js";
import { getDOMElement } from "../utils/DOMutils.js";

export const handleKeyPress = (key) => {
  // Print char to display
  const display = getDOMElement(LCD_ID);
  display.textContent += key.textContent;

  // Play key dial tone
  const dialTone = getDOMElement(key.textContent);

  if (keypadData.currentlyPlaying) {
    keypadData.currentlyPlaying.pause();
    keypadData.currentlyPlaying.currentTime = 0;
  }
  keypadData.currentlyPlaying = dialTone;

  dialTone.play();
};
