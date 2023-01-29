import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Employee from "./components/Employee";
import WorkItem from "./components/WorkItem";
import WorkItems from "./components/WorkItems";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/addworkitem" element={<WorkItem />} />
          <Route path="/workitems" element={<WorkItems />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
