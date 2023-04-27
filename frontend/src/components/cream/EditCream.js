import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCream() {
  const { id } = useParams();
  const [cream, setCream] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8002/cream/getOne/${id}`)
      .then((res) => {
        console.log(res);
        setCream(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [name, setName] = useState(cream.name);
  const [price, setPrice] = useState(cream.price);
  const [quantity, setQuantity] = useState(cream.quantity);
  const [description, setDescription] = useState(cream.description);
  const [type, setType] = useState(cream.type);
  const [mfd, setMfd] = useState(cream.mfd);
  const [exp, setExp] = useState(cream.exp);
  const [weight, setWeight] = useState(cream.weight);

  function updateCream(event) {
    event.preventDefault();

    const updated = {
        name, description, price, quantity, weight, mfd, exp, type
    }

    axios.put(`http://localhost:8002/cream/updateCream/${id}`, updated)
    .then((res)=>{
        console.log(res);
        window.alert("Cream Updated !")
        navigate('/allCreams')
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  return (
    <div style={{marginLeft: "30%", marginTop: "20px"}}>
      <br></br>
      <h3>Edit {cream.name} </h3>
      <br></br>
      <div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Cream Name :
            </label>
            <input
              type="text"
              className="form-control"
              required
              defaultValue={cream.name}
              onChange={(event)=>{
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              defaultValue={cream.description}
              onChange={(event)=>{
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Price
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={cream.price}
            onChange={(event)=>{
                setPrice(event.target.value);
              }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Type
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={cream.type}
            onChange={(event)=>{
                setType(event.target.value);
              }}
          />
        </div>
      </div>
      <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={cream.weight}
            onChange={(event)=>{
                setWeight(event.target.value);
              }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Quantity
          </label>
          <input
            type="text"
            className="form-control"
            required
            defaultValue={cream.quantity}
            onChange={(event)=>{
                setQuantity(event.target.value);
              }}
          />
        </div>
      </div>
      <div className="row md-6">
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Manufactured Date
          </label>
          <input
            type="date"
            className="form-control"
            required
            defaultValue={new Date(cream.mfd).toLocaleDateString()}
            onChange={(event)=>{
                setMfd(event.target.value);
              }}
          />
        </div>
        <div className="col-md-3">
          <label className="labels" style={{ float: "left" }}>
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            required
            defaultValue={new Date(cream.exp).toLocaleDateString()}
            onChange={(event)=>{
                setExp(event.target.value);
              }}
          />
        </div>
      </div>
      <div className="row md-6" style={{marginLeft: "1px", marginTop: "10px"}}>
        <button  className="btn btn-warning" type="button" onClick={updateCream}>
          Update
        </button>
      </div>
    </div>
  );
}
