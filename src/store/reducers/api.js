import actions from '../actionTypes';
import { createReducer } from 'redux-create-reducer';

export const initialApiState = {
    data: null,
};

const saveProjects = (state, {data}) => ({...state, data});

const actionHandlers = {
    [actions.SET_DATA]: saveProjects,
};


export default createReducer(initialApiState, actionHandlers);