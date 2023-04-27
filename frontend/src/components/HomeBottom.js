import React from "react";
import imageOne from "../images/giniraja.jpg";
import imageTwo from "../images/banyan.jpg";
import imageThree from "../images/brahmi.png";
import imageFour from "../images/disna.jpg";
import imageFive from "../images/women.jpg";
import imageSix from "../images/siddhaleepa.jpeg";

export default function HomeBottom() {
  return (

    <div style={{display:"inline-flex"}}>
    <div
      class="card"
      style={{
        width: "15rem",
        border: "1px solid black",
        borderRadius: "15px", marginRight:"15px"
      }}
    >
      <center>
        <img
          class="card-img-top"
          src={imageOne}
          alt="giniraja"
          style={{ width: "200px" }}
        />
        <div class="card-body">
          <h3 class="card-title" style={{ color: "Green" }}>
            Giniraja Herbal Oil
          </h3>
          <h2>Rs 5000.00</h2>
        </div>
      </center>
    </div>



    <div
      class="card"
      style={{
        width: "15rem",
        border: "1px solid black",
        borderRadius: "15px",
        marginRight:"15px"
      }}
    >
      <center>
        <img
          class="card-img-top"
          src={imageTwo}
          alt="giniraja"
          style={{ width: "200px" }}
        />
        <div class="card-body">
          <h3 class="card-title" style={{ color: "Green" }}>
            Banyan Body Cleanse
          </h3>
          <h2>Rs 2000.00</h2>
        </div>
      </center>
    </div>


    <div
      class="card"
      style={{
        width: "15rem",
        border: "1px solid black",
        borderRadius: "15px",
        marginRight:"15px"
      }}
    >
      <center>
        <img
          class="card-img-top"
          src={imageThree}
          alt="giniraja"
          style={{ width: "200px" }}
        />
        <div class="card-body">
          <h3 class="card-title" style={{ color: "Green" }}>
            Brahmi Memory Support
          </h3>
          <h2>Rs 2500.00</h2>
        </div>
      </center>
    </div>


    <div
      class="card"
      style={{
        width: "15rem",
        border: "1px solid black",
        borderRadius: "15px",
        marginRight:"15px"
      }}
    >
      <center>
        <img
          class="card-img-top"
          src={imageFour}
          alt="giniraja"
          style={{ width: "200px" }}
        />
        <div class="card-body">
          <h3 class="card-title" style={{ color: "Green" }}>
            Disna FacePack
          </h3>
          <h2>Rs 1500.00</h2>
        </div>
      </center>
    </div>



    <div
      class="card"
      style={{
        width: "15rem",
        border: "1px solid black",
        borderRadius: "15px",
        marginRight:"15px"
      }}
    >
      <center>
        <img
          class="card-img-top"
          src={imageFive}
          alt="giniraja"
          style={{ width: "200px" }}
        />
        <div class="card-body">
          <h3 class="card-title" style={{ color: "Green" }}>
            Brahmi Woman's Support
          </h3>
          <h2>Rs 2000.00</h2>
        </div>
      </center>
    </div>
    </div>

  );
}