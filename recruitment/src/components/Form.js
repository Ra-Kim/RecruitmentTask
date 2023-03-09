import React, { useState } from "react";
import Input from "./Input";
import one from "../assets/svgs/number1.svg";
import two from "../assets/svgs/number2.svg";
import padlock from "../assets/svgs/padlock.svg";
import cart from "../assets/svgs/cart.svg";
import visa from "../assets/svgs/visa.svg";
import question from "../assets/svgs/question.svg";
import "../style.css";
import CountrySelect from "./CountrySelect";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postal: "",
    phone: "",
    cardNumber: "",
    expiration: "",
    ccv: ""
  });
  const { firstName, lastName, email, postal, phone, cardNumber, expiration, ccv } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  return (
    <form>
      <p className="header">
        <img src={one} alt="one" />
        <span>PERSONAL INFORMATION</span>
      </p>
      <div className="form-twin-div ">
        <div className="input-box short-input">
          <Input
            width="short"
            type="text"
            id="fname"
            name="firstName"
            value={firstName}
            onChange = {handleChange}
          />
          <span>First Name</span>
        </div>
        <div className="input-box short-input">
          <Input
            width="short"
            type="text"
            id="lname"
            name="lastName"
            value={lastName}
            onChange = {handleChange}
          />
          <span>Last Name</span>
        </div>
      </div>
      <div className="form-single-div">
        <div className="input-box">
          <Input
            width="long"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange = {handleChange}
          />
          <span>Email</span>
        </div>
      </div>
      <div className="form-twin-div ">
        <div className="input-box short-input">
          <CountrySelect />
          <span>Country</span>
        </div>
        <div className="input-box short-input">
          <Input
            width="short"
            id="postal"
            name="postal"
            type="text"
            pattern="[0-9]*"
            value={postal}
            onChange = {handleChange}
          />
          <span>Postal Code</span>
        </div>
      </div>
      <div className="form-single-div">
        <div className="input-box">
          <Input
            width="long"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
            value={phone}
            onChange = {handleChange}
          />
          <span>Phone number</span>
        </div>
      </div>
      <p className="header">
        <img src={two} alt="two" />
        <span>PAYMENT DETAILS</span>
        <img src={padlock} alt="secured" />
      </p>
      <div className="form-single-div">
        <div className="input-box">
          <Input
            width="long"
            name="cardNumber"
            value={cardNumber}
            pattern="[0-9]*"
            onChange = {handleChange}
          />
          <span>Credit Card Number</span>
          <img
            src={visa}
            alt=""
            style={{
              position: "absolute",
              right: "10%",
              top: "10%",
              marginTop: "3%",
            }}
          ></img>
        </div>
      </div>
      <div className="form-twin-div ">
        <div className="input-box short-input">
          <Input 
              width="short" 
              type="password" 
              name = "ccv"
              value={ccv} 
              onChange = {handleChange}
          />
          <span>Security Code</span>
          <img
            src={question}
            alt=""
            style={{
              position: "absolute",
              right: "5%",
              top: "10%",
              marginTop: "3%",
            }}
          ></img>
        </div>
        <div className="input-box short-input">
          <Input
            width="short"
            type="text"
            pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
            value={expiration}
            name = "expiration"
            onChange = {handleChange}
          />
          <span>Expiration Date</span>
        </div>
      </div>
      <div className="form-single-div">
        <button>
          <img src={cart} alt="purchase" />
          <p>COMPLETE PURCHASE</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
