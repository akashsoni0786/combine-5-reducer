import { clear_add_oprtn, clear_div_oprtn, clear_minus_oprtn, clear_mul_oprtn, clear_oprtn, divide_oprtn, minus_oprtn, multiply_oprtn, plus_oprtn } from "./Action";

export const mappropstostate = (state) => {
  return { ...state };
};

export const mappropstodispatch = (dispatch) => {
  return {
    add_prop: (e1,e2) => dispatch(plus_oprtn(e1,e2)),
    minus_prop: (e1,e2) => dispatch(minus_oprtn(e1,e2)),
    multiply_prop: (e1,e2) => dispatch(multiply_oprtn(e1,e2)),
    divide_prop: (e1,e2) => dispatch(divide_oprtn(e1,e2)),
    clear_prop: () => dispatch(clear_oprtn()),
    add_clear: () => dispatch(clear_add_oprtn()),
    minus_clear: () => dispatch(clear_minus_oprtn()),
    multi_clear: () => dispatch(clear_mul_oprtn()),
    divide_clear: () => dispatch(clear_div_oprtn()),
  };
};
