import actions from "../actionTypes";
import { createReducer } from "redux-create-reducer";

export const initialApiState = {
  data: [],
};

const saveProjects = (state, { data }) => ({ ...state, data });
const setCurerncyData = (state, { data }) => ({
  ...state,
  [`${data.currency}`]: data,
});

const actionHandlers = {
  [actions.SET_DATA]: saveProjects,
  [actions.SET_CURRENCY_DATA]: setCurerncyData,
};

export default createReducer(initialApiState, actionHandlers);
