import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ImageView from "../ImageView";

export default function AllCreams() {
    const [cream, setCream] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    
    function deleteCream(id){
      const ans = window.confirm("Are you sure ?");
      if(ans){
        axios.delete(`http://localhost:8002/cream/deleteCream/${id}`)
        .then((res)=>{
          window.alert("Cream Deleted !")
          setDeleted(true);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    };

    function addToCart(item){
      const userID = user.user._id;
      const productID = item._id;
      const productName = item.name;
      const price = item.price;
      const image = item.imageUrl;
      const cartItem = {userID, productID, productName, price, image};
      
      axios.post('http://localhost:8002/cart/add', cartItem)
      .then(()=>{
        window.alert('Item Added To Cart !');
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    useEffect(()=>{
        function getAllCreams(){
            axios.get("http://localhost:8002/cream/get")
            .then((res) => {
                setCream(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        getAllCreams();
        setDeleted(false);
    },[deleted] );

  return (
    <div>
    <br></br>
    <h2 style={{textAlign: "center", display: "inline-block", marginLeft: "45%"}}>Creams</h2>
    <Link to={`/addNewCream`}><button className="btn btn-success" style={{display: "inline-block", float: "right", marginRight: '10px'}}>AddNewCream</button> </Link> 
    <hr></hr>
    <div>
        {cream.map((creamData) => (
            <div className="card" style={{display: "inline-flex", margin: "20px"}} key={creamData._id}>
            <div className="card-img-top"> 
              <img src={creamData.imageUrl} style={{width: "200px"}}/>
            </div> 
            <div className="card-body">
              <h5 className="card-title">{creamData.name}</h5>
              <p className="card-text">{creamData.description}</p>
              <Link to={`/oneCream/${creamData._id}`}><button className="btn btn-info btn-sm">See Details</button> </Link> 
              {(user.user.type == 'seller' || user.user.type == 'admin') && (<Link to={`/editCream/${creamData._id}`}><button className="btn btn-warning btn-sm">Edit</button></Link>)}
              {(user.user.type == 'seller' || user.user.type == 'admin') && (<button style={{marginLeft: "5px"}} onClick={() => deleteCream(creamData._id)} className="btn btn-danger btn-sm">Delete</button>)}
              {(user.user.type == 'buyer' && <button onClick={() => addToCart(creamData)} className="btn btn-success btn-sm">Add To Cart</button>)}
            </div>
          </div>
        ))}
    </div> 
    </div>
  );
}
