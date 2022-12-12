import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Member from "./pages/Member";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/member" element={<Member/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
