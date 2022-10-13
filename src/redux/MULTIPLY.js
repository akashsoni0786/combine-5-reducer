import { MULTIPLY, MULTIPLY_CLEAR } from "./Constants";

const initialstate = {
  result_multiply:0
};

export const Multiply = (state = initialstate, actions) => {
  if (actions.type === MULTIPLY) {
    return {
      result_multiply : actions.value.v1 * actions.value.v2
    }
  }
  if (actions.type === MULTIPLY_CLEAR) {
    return {
      result_multiply : 0
    }
  }
  return { ...state };
};
