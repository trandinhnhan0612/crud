import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createStudent } from "../redux/studentActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateModal({ ...props }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    const newStudent = { name, job, address, hometown };
    dispatch(createStudent(newStudent));
    toast.success("Create new success", {
      pauseOnHover: false,
      delay: 0,
    });
    setName("");
    setJob("");
    setAddress("");
    setHometown("");
  };

  return (
    <>
      <Modal show={props.showCreate} onHide={props.hideCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Create new student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreate} id="createForm" autoComplete="off">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job"
                autoFocus
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Hometown</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your hometown"
                autoFocus
                value={hometown}
                onChange={(e) => setHometown(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideCreate}>
            Back
          </Button>
          <Button
            type="submit"
            variant="primary"
            form="createForm"
            onClick={props.hideCreate}
          >
            Create new
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
export default CreateModal;
