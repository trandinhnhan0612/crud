import axios from "axios";

// export const getListStudent = async () => {
//   const response = await axios.get("http://localhost:3000/student");
//   return response.data;
// };
// export const createStudent = async (data) => {
//   const response = await axios.post("http://localhost:3000/student", data);
//   return response.data;
// };
// export const editStudent = (id, data) => {
//   return axios.put(`http://localhost:3000/student/${id}`, data);
// };
// export const deleteStudent = async (id) => {
//   await axios.delete(`http://localhost:3000/student/${id}`);
// };
// export const detailStudent = async (id) => {
//   return axios.get(`http://localhost:3000/student/${id}`);
// };

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getListStudent = () => {
  return axios.get("http://localhost:3000/student");
};
const createStudent = (data) => {
  return axios.post("http://localhost:3000/student", data);
};
const editStudent = (id, data) => {
  return axios.put(`http://localhost:3000/student/${id}`, data);
};
const deleteStudent = (id) => {
  return axios.delete(`http://localhost:3000/student/${id}`);
};
const detailStudent = (id) => {
  return axios.get(`http://localhost:3000/student/${id}`);
};
const studentServices = {
  getListStudent,
  createStudent,
  editStudent,
  detailStudent,
  deleteStudent,
};
export default studentServices;
