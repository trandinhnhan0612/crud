import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../redux/studentActions";

const CreateRedux = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    const newStudent = { name, job, address, hometown };
    dispatch(createStudent(newStudent));
    setName("");
    setJob("");
    setAddress("");
    setHometown("");
    alert("Create new sucess!!");
    return navigate("/");
  };
  return (
    <div>
      <h1 className="font-bold mt-5 mb-3 text-lg text-green-500">
        Create new student
      </h1>
      <form onSubmit={handleCreate}>
        <div className="grid grid-cols-1 mb-5">
          <div className="flex flex-col items-start gap-y-2.5 mb-5">
            <label htmlFor="input-name" className="cursor-pointer font-medium">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={job}
              onChange={(e) => setJob(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
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
            className="rounded-lg bg-green-500 w-[150px] p-3 text-white font-medium"
          >
            Create new
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

export default CreateRedux;
