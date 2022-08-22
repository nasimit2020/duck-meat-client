import './App.css';
import Home from './components/Home/Home.js';
import Admin from './components/Admin/Admin.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import OrderSubmit from './components/CheckOut/OrderSubmit';
import CustomersOrder from './components/Orders/CustomersOrder';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/*" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/orderSubmit" element={<OrderSubmit />} />
            <Route path="/orders" element={<CustomersOrder/>} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
