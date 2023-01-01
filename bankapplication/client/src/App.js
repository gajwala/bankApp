import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components";
import { Error } from "./screens";
import {
  AddProblem,
  AllProblems,
  Profile,
  SharedLayout,
} from "./screens/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<SharedLayout />}>
          <Route path="profile" exact element={<Profile />} />
          <Route path="all-problems" exact element={<AllProblems />} />
          <Route path="add-problem" exact element={<AddProblem />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
