/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ViewDetails = () => {
  const [params] = useSearchParams();
  const studentId = params.get("id");
  const [list, setList] = useState({});
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/student/${studentId}`
      );
      console.log(response.data);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="font-bold mt-5 mb-3 text-2xl text-green-500">
        View detail information
      </h1>
      {list && (
        <div key={list.id} className="flex flex-col gap-y-3">
          <div>
            <label className="text-lg font-medium">The name</label>
            <p>{list.name}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The job</label>
            <p>{list.job}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The address</label>
            <p>{list.address}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The hometown</label>
            <p>{list.hometown}</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-orange-500 w-[150px] p-3 text-white font-medium"
          >
            Back to home
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
