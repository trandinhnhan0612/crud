import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editStudent, viewDetailStudent } from "../redux/studentActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditModal = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const student = useSelector((state) => state.data.student);
  const studentId = props.idSelect;
  const [infoStudent, setInfoStudent] = useState({
    name: "",
    job: "",
    address: "",
    hometown: "",
  });
  const { name, job, address, hometown } = infoStudent;
  useEffect(() => {
    dispatch(viewDetailStudent(studentId));
  }, [dispatch, studentId]);
  useEffect(() => {
    if (student) {
      setInfoStudent({ ...student });
    }
  }, [student]);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInfoStudent({ ...infoStudent, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editStudent(studentId, infoStudent));
    toast.success("Update information success", {
      pauseOnHover: false,
      delay: 0,
    });
  };
  return (
    <>
      <Modal show={props.showEdit} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate} id="updateForm" autoComplete="off">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
                value={name || ""}
                onChange={handleInputChange}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job"
                autoFocus
                value={job || ""}
                name="job"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                autoFocus
                value={address || ""}
                onChange={handleInputChange}
                name="address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Hometown</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your hometown"
                autoFocus
                value={hometown || ""}
                onChange={handleInputChange}
                name="hometown"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Back
          </Button>
          <Button
            type="submit"
            variant="primary"
            form="updateForm"
            onClick={props.handleClose}
          >
            Update student
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default EditModal;
