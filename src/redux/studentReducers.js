import {
  VIEW_STUDENT,
  VIEW_STUDENT_ERROR,
  VIEW_STUDENT_REQUEST,
  CREATE_STUDENT,
  EDIT_STUDENT,
  EDIT_STUDENT_ERORR,
  DETAIL_STUDENT,
  DELETE_STUDENT,
  SEARCH_STUDENT_REQUEST,
  SEARCH_STUDENT_SUCCESS,
  SEARCH_STUDENT_FAILED,
} from "./studentActions";

const initialState = {
  students: [],
  student: {},
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
        student: action.payload,
      };
    case EDIT_STUDENT:
      let arrNew = [...state.students];
      const index = arrNew.findIndex((x) => x.id === action.payload.id);
      arrNew[index] = action.payload;
      return {
        ...state,
        students: arrNew,
        request: false,
        // students: action.payload,
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
    case SEARCH_STUDENT_REQUEST:
      return {};
    case SEARCH_STUDENT_SUCCESS:
      return {};
    case SEARCH_STUDENT_FAILED:
      return {};

    default:
      return state;
  }
}
export default studentReducers;
