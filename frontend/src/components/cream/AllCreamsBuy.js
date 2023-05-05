// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import { useAuthContext } from "../../hooks/useAuthContext";
// //import ImageView from "../ImageView";

// export default function AllCreamsBuy() {
//     const [cream, setCream] = useState([]);
//     const [deleted, setDeleted] = useState(false);
//     const user = JSON.parse(localStorage.getItem('user'));

//     function addToCart(data){
//       //console.log(user);
//       //console.log(data);   
//     };

//     useEffect(()=>{
//         function getAllCreams(){
//             axios.get("http://localhost:8002/cream/get")
//             .then((res) => {
//               console.log(res);
//                 setCream(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         }
//         getAllCreams();
//         setDeleted(false);
//     },[deleted] );

//   return (
//     <div>
//     <br></br>
//     <h2 style={{textAlign: "center", display: "inline-block", marginLeft: "45%"}}>Creams</h2>
    
//     <hr></hr>
//     <div>
//         {cream.map((creamData) => (
//             <div className="card" style={{display: "inline-flex", margin: "20px"}} key={creamData._id}>
//             <div className="card-img-top"> 
//               {/* <ImageView image={creamData.imagePath}/> */}
//             </div> 
//             <div className="card-body">
//               <h5 className="card-title">{creamData.name}</h5>
//               <p className="card-text">{creamData.description}</p>
//               <Link to={`/oneCream/${creamData._id}`}><button className="btn btn-info btn-sm">See Details</button> </Link> 
//               <button onClick={() => addToCart(creamData)} style={{marginLeft: "5px"}} className="btn btn-warning btn-sm">Add To Cart</button>
//             </div>
//           </div>
//         ))}
//     </div>
//     </div>
//   );
// }
