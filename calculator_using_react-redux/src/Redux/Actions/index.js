export const buttons = (number) => {
  return {
    type: "BUTTONS",
    payload: number,
  };
};
export const clearAll = (number) => {
  return {
    type: "CLEAR_ALL",
    payload: number,
  };
};
export const backSpace = (number) => {
  return {
    type: "BACK_SPACE",
    payload: number,
  };
};
export const calculation = (number) => {
  return {
    type: "CALCULATION",
    payload: number,
  };
};
