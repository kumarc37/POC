const initialState = {
  loading: true,
  error: false,
  employees: [],
  workItems: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPLOYEE_FETCHED_SUCCESSFULLY": {
      return { ...state, loading: false, employees: action.payload };
    }
    case "EMPLOYEE_FETCHED_ERROR":
      return { ...state, loading: false, error: true };
    case "ADD_WORK_ITEM":
      return { ...state, workItems: [...state.workItems, action.payload] };
    case "UPDATE_STATUS":
      const workItems = state.workItems.map((item) => {
        if (item.workId === action.payload) {
          if (item.status === "Completed") {
            item.status = "Not Completed";
          } else {
            item.status = "Completed";
          }
          return item;
        }
        return item;
      });
      return { ...state, workItems: workItems };
    default:
      return state;
  }
};

export default appReducer;
