import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Members from "./pages/Members";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/members/add" element={<AddMember/>}/>
          <Route path="/members/edit/:id" element={<EditMember/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
