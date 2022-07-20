import { ADD_STUDENT, DELETE_STUDENT } from "./types";

export const addStudent = (item) => (dispatch) => {
  dispatch({ type: ADD_STUDENT, payload: item });
};

export const deleteStudent = (student) => (dispatch) => {
  dispatch({ type: DELETE_STUDENT, payload: student });
};
