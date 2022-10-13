import { DIVIDE, DIVIDE_CLEAR } from "./Constants";

const initialstate = {
  result_divide : 0
};

export const Divide = (state = initialstate, actions) => {
  if (actions.type === DIVIDE) {
    return {
      result_divide : actions.value.v1 / actions.value.v2
    }
  }
  if (actions.type === DIVIDE_CLEAR) {
    return {
      result_divide : 0
    }
  }
  return { ...state };
};
