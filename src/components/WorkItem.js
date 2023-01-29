import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { addWorkItem } from "../store/actions";
function WorkItem() {
  const dispatch = useDispatch();
  const [workItem, setWorkItem] = useState({
    workId: "",
    workItem: "",
    userName: "",
    userId: "",
    status: "Not Completed",
  });
  const employees = useSelector((state) => state.employees);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(workItem);
    workItem.workId = Math.round(Math.random() * 100000);
    dispatch(addWorkItem(workItem));
  };
  const changeHandler = (event) => {
    console.log(event.target.value, event.target.name);
    setWorkItem((prevItem) => {
      if (event.target.name === "userId") {
        const values = event.target?.value.split("@@");
        return {
          ...prevItem,
          [event.target.name]: values[0],
          userName: values[1],
        };
      }
      return {
        ...prevItem,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Work Item</Form.Label>
          <Form.Control
            name="workItem"
            as="textarea"
            rows={3}
            placeholder="Enter work item"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Select
            name="userId"
            aria-label="Default select example"
            onChange={changeHandler}
          >
            <option> -- select -- </option>
            {employees.map((employee) => (
              <option
                key={employee.id}
                value={`${employee.id}@@${employee.name}`}
              >
                {employee.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Add Work Item
        </Button>
      </Form>
    </div>
  );
}

export default WorkItem;
