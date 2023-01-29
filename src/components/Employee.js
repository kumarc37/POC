import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { fetchEmployeesFailure, fetchEmployeesSuccess } from "../store/actions";
function Employee() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchEmployeesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchEmployeesFailure());
      });
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Employee;
