import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpList from './Component/EmpList';
import AddEmployee from './Component/AddEmployee';
import EditEmployee from './Component/EditEmployee';
import DetailsEmployee from './Component/DetailsEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpList/>}></Route>
        <Route path='/AddEmp' element={<AddEmployee/>}></Route>
        <Route path='/EditEmp/:id' element={<EditEmployee/>}></Route>
        <Route path='/DetailEmp' element={<DetailsEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
