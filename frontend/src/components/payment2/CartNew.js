import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CartNew() {
  const [cartItems, setCartItems] = useState([]);
  const [deleted, setDeleted] = useState(false);
  //const [itemCount, setItemCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));
  let totalPrice = 0;
  let commision = 0.05;
  let netTotal = 0;

  useEffect(() => {
    axios
      .get(`http://localhost:8002/cart/get/${user.user._id}`)
      .then((res) => {
        console.log(res);
        setCartItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setDeleted(false);
  }, [deleted]);


  function removeFromCart(id) {
    const response = window.confirm("Are you sure ?");
    if (response) {
      axios
        .delete(`http://localhost:8002/cart/delete/${id}`)
        .then(() => {
          window.alert("Deleted From Cart !");
          setDeleted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function saveBuyerReq(){
    const userID = user.user._id;
    const productsList = cartItems;
    const createdAt = new Date();
    const status = 'Pending';
    const total = totalPrice;

    const newReq = {userID, productsList, createdAt, status, total};

    axios.post('http://localhost:8002/buyerReq/add', newReq)
    .then(()=>{
      console.log(newReq);
      console.log("Req Saved");
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div style={{padding: "50px"}}>
  
      <h3>My Cart Items</h3>
      <hr/>
      <br/>
      {cartItems.map((cartItemsData) => (
        <div>
          <div style={{ display: "inline-block"}}>
            <img src={cartItemsData.image} style={{width : "200px", borderRadius: "10px"}} />
          </div>
          
          <div style={{display: "inline-block", marginLeft : "20px", position: "relative", top :"25px"}}>
            <p>Name : {cartItemsData.productName}</p>
            <p>Price : Rs {cartItemsData.price}.00</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(cartItemsData._id)}>
              Remove From Cart
            </button>
          </div>
          <p style={{ visibility: "hidden" }}>
            {(totalPrice = totalPrice + cartItemsData.price)}
          </p>
          
        </div>
      ))}
      
      <hr></hr>
      <br/>
      <p>Commision is 5% = Rs {(commision = totalPrice * commision)}.00</p>
      <h4>Total is : {totalPrice + commision}</h4>
      <br/>
      <button className="btn btn-success" onClick={saveBuyerReq} >Proceed To Pay ➡️</button>
    </div>
  );
}
