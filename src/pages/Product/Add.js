import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/actions";
import "./Add.css";

function Add() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    var body = {
      studentname: event.target.elements.studentname.value,
      class: event.target.elements.class.value,
      score: event.target.elements.score.value,
      result: event.target.elements.result.value,
      grade: event.target.elements.grade.value,
    };
    dispatch(addStudent(body));
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <h3 className="heading">Products</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              name="studentname"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Class</Form.Label>
            <Form.Control type="text" name="class" placeholder="" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Score</Form.Label>
            <Form.Control type="number" name="score" placeholder="" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Result</Form.Label>
            <Form.Control type="text" name="result" placeholder="" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Grade</Form.Label>
            <Form.Control type="text" name="grade" placeholder="" required />
          </Form.Group>
          <div className="button-div">
            <Button type="submit">Add Product</Button>
            <Button type="reset">Clear Form</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Add;
