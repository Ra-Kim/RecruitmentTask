import React from "react";
import Form from "./Form";
import { Container } from "./styled/PageStyles";

const Page = () => {
  return (
    <Container>
      <Form />
      <div className="order">
        <h5>YOUR ORDER</h5>
        <div className="order-div">
          <div className="order-div-item">
            <p>Apple Watch Sport</p>
            <p>$ 580</p>
          </div>
          <div className="order-div-item">
            <p>Total Modern Buckle</p>
            <p>$ 380</p>
          </div>
        </div>
        <div className="order-div">
          <div className="order-div-item">
            <p>Total Purchases</p>
            <p>$ 960.00</p>
          </div>
          <div className="order-div-item">
            <p>Estimated Tax</p>
            <p>$ 0</p>
          </div>
        </div>
        <div className="order-div total-div">
          <div className="order-div-item">
            <p>Total</p>
            <p className="total">$ 960</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
