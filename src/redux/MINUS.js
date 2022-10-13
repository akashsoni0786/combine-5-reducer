import { MINUS, MINUS_CLEAR } from "./Constants";

const initialstate = {
  result_minus : 0
};

export const Minus = (state = initialstate, actions) => {
  if (actions.type === MINUS) {
    return {
      result_minus : actions.value.v1 - actions.value.v2
    }
  }
  if (actions.type === MINUS_CLEAR) {
    return {
      result_minus : 0
    }
  }
  return { ...state };
};
