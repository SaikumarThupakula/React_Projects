let intialState = {
  number: "",
  result: "",
};
const Calculator = (state = intialState, action) => {
  let { type, payload } = action;
  if (type === "BUTTONS") {
    return {
      ...state,
      ...payload,
      number: state.number.concat(action.payload),
    };
  } else if (type === "CLEAR_ALL") {
    return {
      ...state,
      ...payload,
      number: "",
      result: "",
    };
  } else if (type === "CALCULATION") {
    return {
      ...state,
      ...payload,
      // eslint-disable-next-line no-eval
      result: eval(state.number),
    };
  } else if (type === "BACK_SPACE") {
    return {
      ...state,
      ...payload,
      number: state.number.slice(0, -1),
      result: "",
    };
  }
  return state;
};
export default Calculator;
