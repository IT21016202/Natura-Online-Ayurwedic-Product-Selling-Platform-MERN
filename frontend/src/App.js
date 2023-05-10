import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

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

import ViewFeedbacks from "./components/feedback/viewFeedbacks";
import AddNewFeedback from "./components/feedback/AddNewFeedback";

import { ToastContainer } from "react-toastify";

import Home2 from "./components/payment/Home";
import NotFound from "./components/payment/NotFound";
import Cart from "./components/payment/Cart";

import "react-toastify/dist/ReactToastify.css";
import CheckoutSuccess from "./components/payment/CheckoutSuccess";
import CartNew from './components/payment2/CartNew';

import NotAuthorized from "./pages/NotAuthorized";


function App() {
  const { user } = useAuthContext();
  const user1 = JSON.parse(localStorage.getItem('user'));
  console.log(user1);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUser(null));
  // }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
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
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/buyer"
              element={user ? <BuyerDashboard/> : <Navigate to="/login" />}
            /> */}
            <Route path="/" element={<Home/>} />
            <Route path='/home' element={<Home2/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/buyer" element={user1 && user1.user.type == 'buyer' ? <BuyerDashboard/> : <NotAuthorized/>} />
            <Route path="/seller" element={user1 && user1.user.type == 'seller' ? <SellerDashboard/> : <NotAuthorized/>} />
            <Route path="/admin" element={user1 && user1.user.type == 'admin' ? <AdminDashboard/> : <NotAuthorized/>} />

            <Route path="/allCreams" element={<AllCreams/>} />
            <Route path="/addNewCream" element={<AddNewCream/>} />
            <Route path="/editCream/:id" element={<EditCream/>} />
            <Route path="/oneCream/:id" element={<OneCream/>} />   

            <Route path="/orders" element={<Orders/>} />
            <Route path="/buyerRequest" element={<BuyerReqests/>} />
            <Route path="/viewFeedback" element={<ViewFeedbacks/>} />
            <Route path="/addFeedback" element={<AddNewFeedback/>} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/cartNew" element={<CartNew/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
