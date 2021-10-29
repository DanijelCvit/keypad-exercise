import { handleKeyPress } from "../handlers/keypadHandlers.js";

export const keyPress = (event) => {
  handleKeyPress(event.target);
};
