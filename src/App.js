import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/table/Table";
import CreateModal from "./crudModal/CreateModal";
import EditModal from "./crudModal/EditModal";
import ViewDetailModal from "./crudModal/ViewDetailModal";
import { deleteStudent, viewStudents } from "./redux/studentActions";
import Swal from "sweetalert2";

function App() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
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
  //   // getAllList();jc

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

  // DELETE STUDENT REDUX
  const handleDelete = (id) => {
    // if (window.confirm("Are you delete this content?")) {
    //   dispatch(deleteStudent(id));
    //   alert("Delete success!");
    // }
    Swal.fire({
      title: "Are you delete this information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteStudent(id));
        Swal.fire("Delete Sucess!", "Information have been delete!", "success");
      }
    });
  };
  // Create modal
  const [showCreate, setShowCreate] = useState(false);
  const handleShowCreate = () => setShowCreate(true);
  const handleHideCreate = () => setShowCreate(false);
  // Edit modal
  const [showEdit, setShowEdit] = useState(false);
  const [idSelect, setIdSelect] = useState();
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (id) => {
    // const id = e.target.getAttribute("idselect");
    setIdSelect(id);
    setShowEdit(true);
  };
  // View detail student
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = (id) => {
    setIdSelect(id);
    setShowDetail(true);
  };
  const handleHideDetail = () => setShowDetail(false);
  return (
    <div>
      <div className="text-center mb-5 text-lg font-bold">CRUD Simple</div>
      <div className="flex gap-5">
        <div>
          <div className="mb-3">
            <Button variant="primary" onClick={handleShowCreate}>
              Create new
            </Button>
          </div>
          <CreateModal showCreate={showCreate} hideCreate={handleHideCreate} />
          <EditModal
            showEdit={showEdit}
            idSelect={idSelect}
            handleClose={handleCloseEdit}
          />
          <ViewDetailModal
            showDetail={showDetail}
            idSelect={idSelect}
            handleClose={handleHideDetail}
          />
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
                          {/* <button
                        className="w-[80px] text-white bg-orange-500 p-2 rounded-lg"
                        onClick={() => navigate(`/details-redux?id=${item.id}`)}
                      >
                        Details
                      </button> */}
                          <Button
                            onClick={(e) => handleShowDetail(item.id)}
                            // idselect={item.id}
                            variant="warning"
                          >
                            Detail
                          </Button>
                          <Button
                            onClick={(e) => handleShowEdit(item.id)}
                            // idselect={item.id}
                            variant="success"
                          >
                            Update
                          </Button>
                          {/* <button
                        onClick={() => navigate(`/edit-redux?id=${item.id}`)}
                        className="w-[80px] text-white bg-blue-500 p-2 rounded-lg"
                      >
                        Edit
                      </button> */}
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
      </div>
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
