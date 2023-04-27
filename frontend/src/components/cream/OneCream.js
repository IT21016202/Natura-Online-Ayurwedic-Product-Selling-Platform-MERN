import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OneCream() {

    const {id} = useParams();
    const [cream, setCream] = useState([]);

    useEffect(()=>{
        function getOncCream(){
            axios.get(`http://localhost:8002/cream/getOne/${id}`)
            .then((res) => {
                setCream(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        getOncCream();
    },[])


  return (
    <div> 
       <table style={{marginTop: "6%", fontSize: "18px", display: "inline", float: 'right', marginRight: '20%', textAlign:"left"}}>
        <tr style={{height: "50px"}}>
            <th style={{width: "200px"}}>Name : </th>
            <td>{cream.name}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Description : </th>
            <td>{cream.description}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Price : </th>
            <td>{cream.price}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Quantity : </th>
            <td>{cream.quantity}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Weight : </th>
            <td>{cream.weight}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Type : </th>
            <td>{cream.type}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Manufactured Date : </th>
            <td>{new Date(cream.mfd).toLocaleDateString()}</td>
        </tr>
        <tr style={{height: "50px"}}>
            <th>Expiry Date : </th>
            <td>{new Date(cream.exp).toLocaleDateString()}</td>
        </tr>
       </table>

       <div style={{display: "inline" ,float: 'left', marginLeft: "10%", marginTop: "10%"}}>
        <img src='https://picsum.photos/200' style={{width: "350px", borderRadius: "10px"}}/>
       </div>
    </div>
  )
}

