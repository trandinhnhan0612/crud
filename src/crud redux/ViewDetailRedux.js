/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { viewDetailStudent } from "../redux/studentActions";

const ViewDetailRedux = () => {
  const [params] = useSearchParams();
  const studentId = params.get("id");
  const [viewDetail, setViewDetail] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.data.students);
  useEffect(() => {
    dispatch(viewDetailStudent(studentId));
  }, [dispatch]);
  useEffect(() => {
    if (students) {
      setViewDetail({ ...students });
    }
  }, [students]);
  return (
    <div>
      <h1 className="font-bold mt-5 mb-3 text-2xl text-green-500">
        View detail information
      </h1>
      {viewDetail && (
        <div key={viewDetail.id} className="flex flex-col gap-y-3">
          <div>
            <label className="text-lg font-medium">The name</label>
            <p>{viewDetail.name}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The job</label>
            <p>{viewDetail.job}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The address</label>
            <p>{viewDetail.address}</p>
          </div>
          <div>
            <label className="text-lg font-medium">The hometown</label>
            <p>{viewDetail.hometown}</p>
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

export default ViewDetailRedux;
