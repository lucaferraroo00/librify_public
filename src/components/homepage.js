import React from "react";
import logo from "./Logo_Biblioteche_d0.jpg";
import dorian from "./dorian_gray.jpg";
import SideBar from "./sidebar";
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage(props) {
  return (
    <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
      <div className="text-center mt-1" >
        <img
          src={logo}
          style={{ width: "auto", height: "200px" }} // Adjust size as needed
        />
      </div>      
      <div className="container mt-5">
        <RectangleComponent
          title="Dorian Gray"
          text="This is some text inside the rectangle.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa asmasmaaaaaaaaa  nnn"
          borderColor="blue" // Change the color as needed
          image={dorian}
        />
      </div>
      <div className="container mt-5">
        <RectangleComponent
          title="Sofia Peleggi"
          text="This is some text inside the rectangle."
          borderColor="blue" // Change the color as needed
        />
      </div>
      <div className="container mt-5">
        <RectangleComponent
          title="My Title"
          text="This is some text inside the rectangle."
          borderColor="blue" // Change the color as needed
        />
      </div>
      <div className="container mt-5">
        <RectangleComponent
          title="My Title"
          text="This is some text inside the rectangle."
          borderColor="blue" // Change the color as needed
        />
      </div>
      <div className="container mt-5">
        <RectangleComponent
          title="My Title"
          text="This is some text inside the rectangle."
          borderColor="blue" // Change the color as needed
        />
      </div>
      </div>
    </div>
  );
}

function RectangleComponent({ title, text, borderColor, image }) {
  return (
    <div
      style={{
        borderColor: borderColor,
        borderWidth: "5px",
        borderStyle: "solid",
        borderRadius: "20px",
      }}
    >
      <h2 className="text-center" style={{ textDecoration: "underline" }}>
        {image && (
          <img
            src={image}
            alt="Icon"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              marginTop: "10px",
              borderRadius: "50%",
            }}
          />
        )}{" "}
        {/* Adjust size and margin */}
        {title}
      </h2>
      <p className="text-center">{text}</p>
    </div>
  );
}

export { HomePage };
