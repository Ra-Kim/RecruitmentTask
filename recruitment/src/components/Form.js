import React from "react";
import Input from "./Input";
import one from "../assets/svgs/number1.svg";
import two from '../assets/svgs/number2.svg'
import padlock from '../assets/svgs/padlock.svg'
import cart from '../assets/svgs/cart.svg'
import "../style.css";
import CountrySelect from "./CountrySelect";

const Form = () => {
  return (
    <form>
      <p className="header">
        <img src={one} alt="one" />
        <p>PERSONAL INFORMATION</p>
      </p>
      <div className="form-twin-div ">
        <div className="input-box short-input">
          <Input width="short" type="text" id="fname" name="firstName"/>
          <span>First Name</span>
        </div>
        <div className="input-box short-input">
          <Input width="short" type="text" id="lname" name="lastName"/>
          <span>Last Name</span>
        </div>
      </div>
      <div className="form-single-div">
        <div className="input-box">
          <Input width="long" type="email" id="email" name="email"/>
          <span>Email</span>
        </div>
      </div>
      <div className="form-twin-div ">
        <div className="input-box short-input">
            <CountrySelect />
          <span>Country</span>
        </div>
        <div className="input-box short-input">
          <Input width="short" id="postal" name="postal" type="text" pattern="[0-9]*" />
          <span>Postal Code</span>
        </div>
      </div>
      <div className="form-single-div">
        <div className="input-box">
          <Input width="long" type="tel" id="phone" name="phone" pattern="[0-9]{4}[0-9]{3}[0-9]{4}"/>
          <span>Phone number</span>
        </div>
      </div>
      <p className="header">
        <img src={two} alt="two" />
        <p>PAYMENT DETAILS</p>
        <img src={padlock} alt="secured" />
      </p>
      <div className="form-single-div">
        <div className="input-box">
          <Input width="long" />
          <span>Credit Card Number</span>
        </div>
      </div>
      <div className="form-twin-div ">
        <div className="input-box short-input">
          <Input width="short" type = "password"/>
          <span>Security Code</span>
        </div>
        <div className="input-box short-input">
          <Input width="short"  type="text" pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"/>
          <span>Expiration Date</span>
        </div>
      </div>
      <div className="form-single-div">
      <button>
        <img src={cart} alt = "purchase"/>
        <p>COMPLETE PURCHASE</p>
      </button>
      </div>
    </form>
  );
};

export default Form;
