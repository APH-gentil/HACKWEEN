import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Body';  
import Login from '../Containers/Login';  
import Register from '../Containers/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/body" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
