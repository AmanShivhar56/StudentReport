import React, { useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, DELETE_STUDENT } from "../../redux/types";
import "./Display.css";

function Display(props) {
  const [refresh, setRefresh] = useState(false);
  const products = useSelector((state) => state.students);
  const productsData = Object.values(products);
  console.log(productsData);
  const dispatch = useDispatch();

  const handleDelete = (studentid) => () => {
    dispatch({ type: DELETE_STUDENT, payload: studentid });
    props.onChange();
    setRefresh(!refresh);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Class</th>
          <th>Score</th>
          <th>Result</th>
          <th>Grade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productsData.map((item) => (
          <tr>
            <td>{item.studentid}</td>
            <td>{item.studentname}</td>
            <td>{item.class}</td>
            <td>{item.score}</td>
            <td>{item.result}</td>
            <td>{item.grade}</td>
            <td>
              <button onClick={handleDelete(item.studentid)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Display;
