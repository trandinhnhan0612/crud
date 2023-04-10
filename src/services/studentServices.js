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
const deleteStudent = async (id) => {
  return axios.delete(`http://localhost:3000/student/${id}`);
  // let arr = await axios.get("http://localhost:3000/student");
  // for (let index = 0; index < arr.data.length; index++) {
  //   if (arr.data[index].id === Number(id)) {
  //     arr.data.splice(index, 1);
  //   }
  // }
  // console.log(arr.data);
};
const detailStudent = (id) => {
  return axios.get(`http://localhost:3000/student/${id}`);
};
async function detailStudent(id) {
  let arr = await axios.get("http://localhost:3000/student");
  for (let i = 0; i < arr.data.length; i++) {
    if (arr.data[i].id === Number(id)) {
      return arr.data[i];
    }
  }
  // for...of
  // for (let value of arr.data) {
  //   if (value.id === Number(id)) {
  //     return value;
  //   }
  // }
  // while...
}
// lay getAll mang , tim id trong mang do
// const searchStudent = (name) => {
//   return axios.get(`http://localhost:3000/student?name=${name}`);
// };
const studentServices = {
  getListStudent,
  createStudent,
  editStudent,
  detailStudent,
  deleteStudent,
};
export default studentServices;
