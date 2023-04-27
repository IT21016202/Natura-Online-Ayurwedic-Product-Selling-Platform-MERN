import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
//import ImageView from "../ImageView";

export default function AllCreams() {
    const [cream, setCream] = useState([]);
    const [deleted, setDeleted] = useState(false);

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

    useEffect(()=>{
        function getAllCreams(){
            axios.get("http://localhost:8002/cream/get")
            .then((res) => {
              console.log(res);
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
              {/* <ImageView image={creamData.imagePath}/> */}
            </div> 
            <div className="card-body">
              <h5 className="card-title">{creamData.name}</h5>
              <p className="card-text">{creamData.description}</p>
              <Link to={`/oneCream/${creamData._id}`}><button className="btn btn-info btn-sm">See Details</button> </Link> 
              <Link to={`/editCream/${creamData._id}`}><button className="btn btn-warning btn-sm">Edit</button></Link>
              <button style={{marginLeft: "5px"}} onClick={() => deleteCream(creamData._id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}
