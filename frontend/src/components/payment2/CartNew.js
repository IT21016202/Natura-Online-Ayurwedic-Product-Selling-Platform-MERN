import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CartNew() {
  const [cartItems, setCartItems] = useState([]);
  const [deleted, setDeleted] = useState(false);
  //const [itemCount, setItemCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));
  let totalPrice = 0;

  useEffect(() => {
    axios
      .get(`http://localhost:8002/cart/get/${user.user._id}`)
      .then((res) => {
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
    <div>
      <h2>Hello {user.user.firstname}😀</h2>
      <h5>My Cart Items</h5>
      {cartItems.map((cartItemsData) => (
        <div>
          <p>Name : {cartItemsData.productName}</p>
          <p>Price : {cartItemsData.price}</p>
          <button onClick={() => removeFromCart(cartItemsData._id)}>
            Remove From Cart ❌
          </button>
          <p style={{ visibility: "hidden" }}>
            {(totalPrice = totalPrice + cartItemsData.price)}
          </p>
          <br />
        </div>
      ))}
      <hr></hr>
      <p>Total is : {totalPrice}</p>
      <button onClick={saveBuyerReq} >Proceed To Pay ➡️</button>
    </div>
  );
}
