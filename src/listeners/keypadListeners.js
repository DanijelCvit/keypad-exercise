import { handleKeyPress } from "../handlers/keypadHandlers.js";

export const keyPress = (event) => {
  console.log(event.target.textContent);
  handleKeyPress(event.target);
};
