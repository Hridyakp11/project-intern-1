import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Register from './register';
import Update from './update';
import Delete from './delete';
import Items from  './items';
import ProtectedRoute from  './ProtectedRoute';

function App() {
  // eslint-disable-next-line
const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://ek11.onrender.com")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/update'   element={<Update/>}/>
            <Route exact path='/delete'   element={<Delete/>}/>
            <Route exact path='/items'   element={<Items/>}/>
            <Route exact path='/ProtetedRoute'   element={<ProtectedRoute/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App








