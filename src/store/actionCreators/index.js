import actions from "../actionTypes";

export const getData = () => ({
  type: actions.GET_DATA,
});

export const setData = (data) => ({
  type: actions.SET_DATA,
  data,
});

export const getCurrencyData = (data) => ({
  type: actions.GET_CURRENCY_DATA,
  data,
});

export const setCurrencyData = (data) => ({
  type: actions.SET_CURRENCY_DATA,
  data,
});
