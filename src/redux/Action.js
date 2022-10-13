import { CLEAR, DIVIDE, DIVIDE_CLEAR, MINUS, MINUS_CLEAR, MULTIPLY, MULTIPLY_CLEAR, PLUS, PLUS_CLEAR } from "./Constants"

export const plus_oprtn =(e1,e2)=>{
    return {
        type:PLUS,
        value : {"v1":e1,"v2":e2}
    }
}

export const minus_oprtn =(e1,e2)=>{
    return {
        type:MINUS,
        value : {"v1":e1,"v2":e2}
    }
}

export const multiply_oprtn =(e1,e2)=>{
    return {
        type:MULTIPLY,
        value : {"v1":e1,"v2":e2}
    }
}

export const divide_oprtn =(e1,e2)=>{
    return {
        type:DIVIDE,
        value : {"v1":e1,"v2":e2}
    }
}

export const clear_oprtn =()=>{
    return {
        type:CLEAR,
    }
}

export const clear_add_oprtn =()=>{
    return {
        type:PLUS_CLEAR,
        value : 0
    }
}
export const clear_minus_oprtn =()=>{
    return {
        type:MINUS_CLEAR,
        value : 0
    }
}
export const clear_mul_oprtn =()=>{
    return {
        type:MULTIPLY_CLEAR,
        value : 0
    }
}
export const clear_div_oprtn =()=>{
    return {
        type:DIVIDE_CLEAR,
        value : 0
    }
}