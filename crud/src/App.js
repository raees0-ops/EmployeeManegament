
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterCompomemts from './component/FooterCompomemts';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';

function App() {
  return (
    <div>
    <Router>
    <HeaderComponent/>
    <div className='container'>
    <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
    </div>    
     <FooterCompomemts/>
    </Router>
  
    </div>
  );
}

export default App;
