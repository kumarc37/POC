export const fetchEmployeesSuccess = (data) => {
  return {
    type: "EMPLOYEE_FETCHED_SUCCESSFULLY",
    payload: data,
  };
};
export const fetchEmployeesFailure = () => {
  return {
    type: "EMPLOYEE_FETCHED_ERROR",
    payload: "",
  };
};

export const addWorkItem = (workItem) => {
  return {
    type: "ADD_WORK_ITEM",
    payload: workItem,
  };
};

export const statusChange = (workId) => {
  return {
    type: "UPDATE_STATUS",
    payload: workId,
  };
};
