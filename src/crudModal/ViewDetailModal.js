import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { viewDetailStudent } from "../redux/studentActions";

const ViewDetailModal = (props) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.data.student);
  // debugger;
  useEffect(() => {
    props.showDetail && dispatch(viewDetailStudent(props.idSelect));
  }, [dispatch, props.idSelect, props.showDetail]);
  return (
    <>
      <Modal show={props.showDetail} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Detail student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {student && (
            <Form id="updateForm" key={student.id}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control value={student.name} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Job</Form.Label>
                <Form.Control value={student.job} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control value={student.address} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Hometown</Form.Label>
                <Form.Control value={student.hometown} disabled />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Back to home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewDetailModal;
