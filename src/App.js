
import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Home from './profile/Home';
import About from './profile/About';
import Order from './profile/Order';
import Detil from './profile/Detil';
import DetilList from './orderlist/DetilList';
import Add from './profile/Add';
import Conunt from './Count';
import Edit from './profile/Edit';
import Axios from "axios";
import { useState } from 'react';
import Lists from './orderlist/DetilId';
import ListsContainer from './ListsContainer';

//import { AccordionButton } from 'react-bootstrap';






function App() {
  const [employeeList , setEmployeeList] = useState([]);
  console.log(employeeList);
  return (
    <div className="App">

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
                <Route exact path="/listscontainer/:id" element={<ListsContainer />} />
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
