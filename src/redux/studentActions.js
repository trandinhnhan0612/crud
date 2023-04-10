import service from "../services/studentServices";

export const VIEW_STUDENT_REQUEST = "VIEW_STUDENT_REQUEST";
export const VIEW_STUDENT = "VIEW_STUDENT";
export const VIEW_STUDENT_ERROR = "VIEW_STUDENT_ERROR";
export const CREATE_STUDENT = "CREATE_STUDENT";
export const EDIT_STUDENT = "EDIT_STUDENT";
export const EDIT_STUDENT_ERORR = "EDIT_STUDENT_ERROR";
export const DETAIL_STUDENT = "DETAIL_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const DELETE_STUDENT_FAILED = "DELETE_STUDENT_FAILED";
export const SEARCH_STUDENT_REQUEST = "SEARCH_STUDENT_REQUEST";
export const SEARCH_STUDENT_SUCCESS = "SEARCH_STUDENT_SUCCESS";
export const SEARCH_STUDENT_FAILED = "SEARCH_STUDENT_FAILED";

// export const fetchData = () => {
//   return function (dispatch) {
//     axios.get("http://localhost:3000/student").then((res) => {
//       dispatch(viewStudents(res.data));
//     });
//   };
// };
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// export const viewStudents = () => async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:3000/student");
//     dispatch({ type: VIEW_STUDENT, payload: response.data });
//   } catch (error) {
//     dispatch({ type: VIEW_STUDENT, payload: error });
//   }
// };
// ++++++++++++++++++++++++++++++++++++++++++
// export const viewStudents = async () => {
//   const res = await service.getListStudent();
//   // debugger;
//   return {
//     type: VIEW_STUDENT,
//     payload: res.data,
//   };
// };
export const viewStudents = () => async (dispatch) => {
  try {
    dispatch({ type: VIEW_STUDENT_REQUEST });
    const res = await service.getListStudent();
    dispatch({
      type: VIEW_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: VIEW_STUDENT_ERROR });
  }
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// export const fetchData = () => {
//   return (dispatch) => {
//     return axios.get("http://localhost:3000/student").then((res) => {
//       dispatch(viewStudents(res.data));
//     });
//   };
// };
// export const viewStudents = (student) => {
//   return {
//     type: VIEW_STUDENT,
//     payload: [student],
//   };
// };
export const createStudent = (student) => async (dispatch) => {
  // createStudent here is thunk
  // Thunk là một function được bao lại để tạm dừng nó cho đến khi được gọi
  try {
    const res = await service.createStudent(student);
    dispatch({
      type: CREATE_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const viewDetailStudent = (id) => async (dispatch) => {
  try {
    const res = await service.detailStudent(id);
    dispatch({
      type: DETAIL_STUDENT,
      payload: res,
    });
  } catch (error) {}
};
export const editStudent = (id, updateStudent) => async (dispatch) => {
  try {
    const res = await service.editStudent(id, updateStudent);
    dispatch({
      type: EDIT_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: EDIT_STUDENT_ERORR });
    console.log(error);
  }
};
export const deleteStudent = (id) => async (dispatch) => {
  try {
    const res = await service.deleteStudent(id);
    dispatch({
      type: DELETE_STUDENT,
      payload: res,
    });
    dispatch(viewStudents());
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAILED,
    });
    console.log(error);
  }
};
export const searchStudent = (student) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_STUDENT_REQUEST });
    const res = await service.searchStudent(student);
    dispatch({
      type: SEARCH_STUDENT_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: SEARCH_STUDENT_FAILED });
  }
};
