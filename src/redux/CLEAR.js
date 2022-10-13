import { CLEAR } from "./Constants";

const initialstate = {
  inpt1: 0,
  inpt2: 0,
};

export const Clear = (state = initialstate, actions) => {
  if (actions.type === CLEAR) {
    if (window.confirm("Do you really want to clear")) {
      return {
        ...state
      };
    }
  }
  return { ...state };
};
