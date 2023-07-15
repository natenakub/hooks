import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const products = [
  {
    id: 0,
    name: "Shirt",
    price: 300,
    image: "tshirt.jpg",
  },
  {
    id: 1,
    name: "hat",
    price: 500,
    image: "hat.jpg",
  },
  {
    id: 2,
    name: "Shorts",
    price: 900,
    image: "shorts.jpg",
  },
];

function Product(props) {
  return (
    <>
      <div>
        <img src={props.image} className="img-fluid" alt={props.name}></img>
      </div>
      <div>{props.name}</div>
      <div>{props.price} Baht</div>
    </>
  );
}

function App() {
  // return (
  //   <Container className='p-3 my-3' style={{ backgroundColor: "ghostwhite" }}>
  //     <h1>Hello</h1>
  //     <Button style={{ margin: "0px 3px" }}>Click Me</Button>
  //     <Button variant="success" style={{ margin: "0px 3px" }}>Click Me</Button>
  //     <Button variant="danger" style={{ margin: "0px 3px" }}>Click Me</Button>
  //     <img src="hat.jpg" className="img-fluid" alt="view" style={{ marginTop: "10px" }}></img>
  //   </Container>
  // );

  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShirt, setTotalShirt] = useState(0);
  const [totalHat, setTotalHat] = useState(0);
  const [totalShorts, setTotalShorts] = useState(0);

  return (
    <Container className="p-3 my-3">
      <Row className="border">
        <Col className="text-center">
          <Product
            name={products[0].name}
            price={products[0].price}
            image={products[0].image}
          ></Product>
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItem + 1);
              setTotalPrice(totalPrice + products[0].price);
              setTotalShirt(totalShirt + 1);
            }}
          >
            Add To Cart
          </Button>
        </Col>
        <Col className="text-center">
          <Product
            name={products[1].name}
            price={products[1].price}
            image={products[1].image}
          ></Product>
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItem + 1);
              setTotalPrice(totalPrice + products[1].price);
              setTotalHat(totalHat + 1);
            }}
          >
            Add To Cart
          </Button>
        </Col>
        <Col className="text-center">
          <Product
            name={products[2].name}
            price={products[2].price}
            image={products[2].image}
          ></Product>
          <Button
            style={{ margin: "5px 0px" }}
            onClick={() => {
              setTotalItem(totalItem + 1);
              setTotalPrice(totalPrice + products[2].price);
              setTotalShorts(totalShorts + 1);
            }}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
      <Row className="border mt-2">
        <Col className="text-center">
          <h3>Total in Cart {totalItem} Item</h3>
          <h3>Total Price {totalPrice} Baht</h3>
          <h3>Total Shirt {totalShirt} Item</h3>
          <h3>Total Hat {totalHat} Item</h3>
          <h3>Total Shorts {totalShorts} Item</h3>
        </Col>
      </Row>
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
