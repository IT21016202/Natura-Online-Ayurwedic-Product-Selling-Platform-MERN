import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewFeedback() {

    const navigate = useNavigate();
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");

    function sendFeedbackData(event){
        event.preventDefault();

        const newFeedback = {
            topic, description
        };

        axios.post("http://localhost:8001/api/feedback/add-feedback", newFeedback)
        .then((res)=>{
            console.log(res);
            window.alert("Feedback Added Successfully !");
            navigate("/viewFeedback")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    
  return (
    <div>
        <h3>Add New Feedback</h3>
        <hr/>
        <br/>
        
        <div>
      <form style={{marginLeft: "30%", marginTop: "20px"}}>

        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Feedback Topic :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setTopic(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Description :
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        
        <div className="row md-6" style={{ marginTop: '10px', marginLeft: "1px"}}>
          <button
            style={{width: "80px"}}
            className="btn btn-success"
            type="button"
            onClick={sendFeedbackData}
          >
            Add
          </button>
        </div>
      </form>
    </div>

    </div>
  )
}
