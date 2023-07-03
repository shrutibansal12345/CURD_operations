import EmployeeInfoTable from "./pages/EmployeeInfoTable";
import CreateEmployee from "./pages/CreateEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeInfoTable />}></Route>
        <Route path="/create" element={<CreateEmployee />}></Route>
        <Route path="/update/:id" element={<UpdateEmployee />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
