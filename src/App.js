
import './assets/index.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/auth/login';
import DataPage from './components/pages/DataDisplay';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/PWP-Secrets_Calculator/" element={<Main />} />
      <Route path="/PWP-Secrets_Calculator/Data" element={<DataPage />} />
    
      </Routes>
    </Router>
  );
}

export default App;