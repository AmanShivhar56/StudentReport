/* eslint-disable import/no-anonymous-default-export */
import { ADD_STUDENT, DELETE_STUDENT } from "./types";

var initialState = {
  students: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const studentid = Object.keys(state.students).length + 1;
      state.students[studentid] = { ...action.payload, studentid };
      return {
        ...state,
      };
    case DELETE_STUDENT:
      delete state.students[action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
}
