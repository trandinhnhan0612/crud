/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { editStudent, viewDetailStudent } from "../redux/studentActions";

const EditRedux = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
  const [params] = useSearchParams();
  const studentId = params.get("id");
  const [infoStudent, setInfoStudent] = useState({
    name: "",
    job: "",
    address: "",
    hometown: "",
  });
  const { name, job, address, hometown } = infoStudent;
  useEffect(() => {
    dispatch(viewDetailStudent(studentId));
  }, [dispatch]);
  useEffect(() => {
    if (students) {
      setInfoStudent({ ...students });
    }
  }, [students]);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInfoStudent({ ...infoStudent, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editStudent(studentId, infoStudent));
    alert("Update infor success");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold mt-5 mb-3 text-lg text-blue-500">
        Edit student
      </h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 mb-5">
          <div className="flex flex-col items-start gap-y-2.5 mb-5">
            <label htmlFor="input-name" className="cursor-pointer font-medium">
              Name
            </label>
            <input
              value={name || ""}
              onChange={handleInputChange}
              name="name"
              id="input-name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-500 rounded-lg p-2 w-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2.5 mb-5">
            <label htmlFor="input-job" className="cursor-pointer font-medium">
              Job
            </label>
            <input
              value={job || ""}
              name="job"
              onChange={handleInputChange}
              id="input-job"
              type="text"
              placeholder="Enter your job"
              className="border border-gray-500 rounded-lg p-2 w-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2.5 mb-5">
            <label
              htmlFor="input-address"
              className="cursor-pointer font-medium"
            >
              Address
            </label>
            <input
              value={address || ""}
              onChange={handleInputChange}
              name="address"
              id="input-address"
              type="text"
              placeholder="Enter your address"
              className="border border-gray-500 rounded-lg p-2 w-[400px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2.5 mb-5">
            <label
              htmlFor="input-hometown"
              className="cursor-pointer font-medium"
            >
              Hometown
            </label>
            <input
              value={hometown || ""}
              onChange={handleInputChange}
              name="hometown"
              id="input-hometown"
              type="text"
              placeholder="Enter your hometown"
              className="border border-gray-500 rounded-lg p-2 w-[400px]"
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <button
            type="submit"
            className="rounded-lg bg-blue-500 w-[150px] p-3 text-white font-medium"
          >
            Update info
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-orange-500 w-[150px] p-3 text-white font-medium"
          >
            Back to home
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRedux;
