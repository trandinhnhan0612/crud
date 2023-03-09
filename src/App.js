import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "./components/table/Table";
import {
  createStudent,
  deleteStudent,
  viewStudents,
} from "./redux/studentActions";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
  // redux core +++++++++++++++++++++++++
  // VIEW LIST STUDENT REDUX
  useEffect(() => {
    dispatch(viewStudents());
  }, [dispatch]);

  // VIEW LIST STUDENT
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/student");
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   // cách 1
  //   // const getAllList = async () => {
  //   //   const allList = await fetchData();
  //   //   if (allList) setRenderList(allList);
  //   // };
  //   // getAllList();

  //   // cách 2: promise chaining để lấy final result, sau đó set vào setState
  //   fetchData().then((listStudent) => {
  //     setRenderList(listStudent);
  //   });
  // }, []);

  // DELETE normal
  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:3000/student/${id}`);
  //   alert("Delete success!!!");
  // };

  // CREATE STUDENT REDUX
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const handleCreate = (e) => {
    // e.preventDefault();
    const newStudent = { name, job, address, hometown };
    dispatch(createStudent(newStudent));
    setName("");
    setJob("");
    setAddress("");
    setHometown("");
    alert("Create new sucess!!");
    // return navigate("/");
  };

  // DELETE STUDENT REDUX
  const handleDelete = (id) => {
    if (window.confirm("Are you delete this content?")) {
      dispatch(deleteStudent(id));
      alert("Delete success!");
    }
  };
  useEffect(() => {
    const exampleModal = document.getElementById("exampleModal");
    exampleModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const recipient = button.getAttribute("data-bs-whatever");
      const modalTitle = exampleModal.querySelector(".modal-title");
      const modalBodyInput = exampleModal.querySelector(".modal-body input");

      modalTitle.textContent = `Create new stduent ${recipient}`;
      modalBodyInput.value = recipient;
    });
  }, []);
  return (
    // BOOTSTRAP Modal ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // CREATE HTML
    <div>
      <div className="text-center mb-5 text-lg font-bold">CRUD Simple</div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever=""
      >
        Create new student
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createLabel">
                Create new student
              </h1>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleCreate}>
                <div className="mb-3">
                  <label htmlFor="name-student" className="col-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-student"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="job-student" className="col-form-label">
                    Job
                  </label>
                  <input
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    type="text"
                    className="form-control"
                    id="job-student"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address-student" className="col-form-label">
                    Address
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address-student"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="hometown-student" className="col-form-label">
                    Hometown
                  </label>
                  <input
                    value={hometown}
                    onChange={(e) => setHometown(e.target.value)}
                    type="text"
                    className="form-control"
                    id="hometown-student"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                Create new
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
            <th>Address</th>
            <th>Hometown</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students)
            ? students.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.address}</td>
                  <td>{item.hometown}</td>
                  <td>
                    <div className="flex gap-x-3">
                      <button
                        className="w-[80px] text-white bg-orange-500 p-2 rounded-lg"
                        onClick={() => navigate(`/details-redux?id=${item.id}`)}
                      >
                        Details
                      </button>
                      <button
                        onClick={() => navigate(`/edit-redux?id=${item.id}`)}
                        className="w-[80px] text-white bg-blue-500 p-2 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="w-[80px] text-white bg-red-600 p-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
// Tailwin ++++++++++++++++++++++++++++++++++++++++++
// <div className="mt-5">
//   <div className="text-center mb-5 text-lg font-bold">CRUD Simple</div>
//   <button
//     onClick={() => navigate("/create-redux")}
//     className="w-[100px] text-white bg-green-600 p-2 rounded-lg mb-5"
//   >
//     Add new
//   </button>
//   <Table>
//     <thead>
//       <tr>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Address</th>
//         <th>Hometown</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {Array.isArray(students)
//         ? students.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.job}</td>
//               <td>{item.address}</td>
//               <td>{item.hometown}</td>
//               <td>
//                 <div className="flex gap-x-3">
//                   <button
//                     className="w-[80px] text-white bg-orange-500 p-2 rounded-lg"
//                     onClick={() => navigate(`/details-redux?id=${item.id}`)}
//                   >
//                     Details
//                   </button>
//                   <button
//                     onClick={() => navigate(`/edit-redux?id=${item.id}`)}
//                     className="w-[80px] text-white bg-blue-500 p-2 rounded-lg"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="w-[80px] text-white bg-red-600 p-2 rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))
//         : null}
//     </tbody>
//   </Table>
// </div>
