// redux core
// import { VIEW_STUDENT } from "../redux/studentActions";

// const initialState = {
//   students: [],
// };
// function studentReducer(state = initialState, action) {
//   switch (action.type) {
//     case VIEW_STUDENT:
//       return {
//         ...state,
//         students: action.payload,
//       };

//     default:
//       return state;
//   }
// }
// export default studentReducer;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// redux toolkit
// library IMMERjs help write code mutation, but help us receive result immutation
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import studentServices from "../services/studentServices";

// export const fetchStudents = () => async (dispatch) => {
//   try {
//     dispatch(viewStudentStart());
//     const students = await studentServices.getListStudent();
//     dispatch(viewStudentSuccess(students));
//   } catch (error) {
//     dispatch(viewStudentError(error.toString()));
//   }
// };
// export const fetchStudents = createAsyncThunk(
//   "students/fetchStudents",
//   async () => {
//     try {
//       const response = await studentServices.getListStudent();
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const studentSlice = createSlice({
//   name: "students",
//   initialState: {
//     students: [],
//     error: null,
//     request: false,
//   },
//   reducers: {
//     viewStudentStart: (state) => {
//       state.request = true;
//     },
//     viewStudentSuccess: (state, action) => {
//       state.request = false;
//       state.students = action.payload;
//     },
//     viewStudentError: (state, action) => {
//       state.request = false;
//       state.error = action.payload;
//     },
//     // action (viewStudentSuccess): {type: students/viewStudentSuccess}
//   },
// });

// thunk action(function) and thunk action creator () => {return thunk action}
// export function viewStudents(data) {
//   return function viewStudentThunk(dispatch, getState) {
//     dispatch(studentSlice.actions.viewStudentSuccess(data));
//   };
// }

// export const { viewStudentStart, viewStudentSuccess, viewStudentError } =
//   studentSlice.actions;
// export default studentSlice.reducer;
