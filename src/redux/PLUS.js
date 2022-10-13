import { PLUS, PLUS_CLEAR } from "./Constants";

const initialstate = {
  result_plus : 0
};

export const Plus = (state = initialstate, actions) => {
  if (actions.type === PLUS) {
    return {
      result_plus : actions.value.v1 + actions.value.v2
    }
  }
  if (actions.type === PLUS_CLEAR) {
    return {
      result_plus : 0
    }
  }
  return { ...state };
};
