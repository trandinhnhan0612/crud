/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [params] = useSearchParams();
  const studentId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/student/${studentId}`
        );
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().then((listStudent) => {
      setName(listStudent.name);
      setJob(listStudent.job);
      setAddress(listStudent.address);
      setHometown(listStudent.hometown);
    });
  }, []);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const navigate = useNavigate();
  const data = {
    name: name,
    job: job,
    address: address,
    hometown: hometown,
  };
  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`http://localhost:3000/student/${studentId}`, data);
      alert("Update infor success");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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

export default Edit;
