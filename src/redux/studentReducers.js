import {
  VIEW_STUDENT,
  VIEW_STUDENT_ERROR,
  VIEW_STUDENT_REQUEST,
  CREATE_STUDENT,
  EDIT_STUDENT,
  EDIT_STUDENT_ERORR,
  DETAIL_STUDENT,
  DELETE_STUDENT,
} from "./studentActions";

const initialState = {
  students: [],
  error: null,
  request: false,
};
function studentReducers(state = initialState, action) {
  switch (action.type) {
    case VIEW_STUDENT_REQUEST:
      return {
        ...state,
        request: true,
      };
    case VIEW_STUDENT:
      return {
        ...state,
        students: action.payload,
        request: false,
      };
    case VIEW_STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
        request: false,
      };
    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case DETAIL_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case EDIT_STUDENT:
      return {
        // ...state,
        // request: false,
        // students: action.payload,
        ...state,
        students: state.students,
        request: false,
      };
    case EDIT_STUDENT_ERORR:
      return {
        ...state,
        error: action.payload,
        request: false,
      };
    case DELETE_STUDENT:
      return {
        ...state,
      };

    default:
      return state;
  }
}
export default studentReducers;
