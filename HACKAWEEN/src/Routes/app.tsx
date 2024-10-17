import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Body';  
import Login from '../Containers/Login';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/body" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
