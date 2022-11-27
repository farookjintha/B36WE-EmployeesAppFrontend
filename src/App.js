import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from "./Components/CreateEmployee";
import EmployeeList from "./Components/EmployeeList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ResetPassword from "./Components/ResetPassword";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import UpdateEmployee from "./Components/UpdateEmployee";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='/employees' element={<EmployeeList />} />
            <Route path='/employees/add' element={<CreateEmployee />} />
            <Route path='/employees/:empID/update' element={ <UpdateEmployee />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
