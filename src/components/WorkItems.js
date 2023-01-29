import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { statusChange } from "../store/actions";
function WorkItems() {
  const dispatch = useDispatch();
  const workItems = useSelector((state) => state.workItems);
  console.log(workItems);
  const statusHandler = (workId) => {
    dispatch(statusChange(workId));
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Work Item</th>
            <th>Username</th>
            <th>Status</th>
            <th>Box</th>
          </tr>
        </thead>
        <tbody>
          {workItems.map((item) => {
            return (
              <tr key={item.workId}>
                <td>{item.workId}</td>
                <td>{item.workItem}</td>
                <td>{item.userName}</td>
                <td>{item.status}</td>
                <td>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      checked={item.status === "Completed" ? true : false}
                      onChange={() => statusHandler(item.workId)}
                    />
                  </Form.Group>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default WorkItems;
