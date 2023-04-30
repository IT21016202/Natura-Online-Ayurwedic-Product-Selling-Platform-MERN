import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NavBar from './components/NavBar';

import BuyerDashboard from "./components/buyer/BuyerDashboard";
import SellerDashboard from './components/seller/SellerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import BuyerReqests from './components/admin/BuyerReqests';
import Orders from './components/buyer/Orders';

import AddNewCream from './components/cream/AddNewCream';
import AllCreams from './components/cream/AllCreams';
import OneCream from './components/cream/OneCream';
import EditCream from './components/cream/EditCream';
import AllCreamsView from "./components/cream/AllCreamsView";

import ViewFeedbacks from "./components/feedback/viewFeedbacks";
import AddNewFeedback from "./components/feedback/AddNewFeedback";


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="pages">
          <Routes>
            {/* <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            /> */}
            {/* <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/buyer"
              element={user ? <BuyerDashboard/> : <Navigate to="/login" />}
            /> */}
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/buyer" element={<BuyerDashboard/>} />
            <Route path="/seller" element={<SellerDashboard/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/allCreams" element={<AllCreams/>} />
            <Route path="/allCreamsView" element={<AllCreamsView/>} />  
            <Route path="/addNewCream" element={<AddNewCream/>} />
            <Route path="/editCream/:id" element={<EditCream/>} />
            <Route path="/oneCream/:id" element={<OneCream/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/buyerRequest" element={<BuyerReqests/>} />
            <Route path="/viewFeedback" element={<ViewFeedbacks/>} />
            <Route path="/addFeedback" element={<AddNewFeedback/>} />
           </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
