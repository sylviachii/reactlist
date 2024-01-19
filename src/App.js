
import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './profile/Home';
import About from './profile/About';
import Order from './profile/Order';
import Detil from './profile/Detil';
import Add from './profile/Add';
import Conunt from './Count';
import Edit from './profile/Edit';
import Axios from "axios";
import { useState } from 'react';


//import { AccordionButton } from 'react-bootstrap';


const getEmployee = () => {
  Axios.get("151.106.97.232/chiweiorder").then((response) => {
    console.log(response);
  });
};



function App() {
  const [employeeList , setEmployeeList] = useState([]);
  return (
    <div className="App">
<button onClick={getEmployee}>Show Employees</button>
      <div className="content">
        <Header />
        <main>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/home">訂單</Link>
                  </li>
                  <li>
                    <Link to="/detil">統計</Link>
                  </li>
                  <li>
                    <Link to="/order">採購</Link>
                  </li>
                  <li>
                    <Link to="/add">新增</Link>
                  </li>
                </ul>
              </nav>
              <Routes className="contents">
                <Route path="/" ></Route>
                <Route path="/Add" element={<Add />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/conunt" element={<Conunt />}></Route>
                <Route path="/detil" element={<Detil />}></Route>
                <Route path="/edit" element={<Edit />}></Route>
              </Routes>
            </div>
          </Router>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
