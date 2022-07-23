import React, { Component } from "react";
import axios from "axios";
//import regiimg from "../images/registartion.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      contactNo: "",
      dob: "",
    //   password: "",
    //   role:"",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/customers", this.state)
      .then((res) => {
        toast.success("Succesfully Register");
        console.log("User Registered");
      })
      .catch((error) => {
        toast.warn("Problem occured in posting Data");
      });
  };
  handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  render() {
    return (
      <>
         <div className="regdiv" >
       <ToastContainer autoClose={2000} pauseOnFocusLoss={false} draggablePercent={50}/>
      {/* <span className="msg" style={{color:${this.state.msgcolor}}}>{this.state.msg}</span> */}
<h2 className="Heading">Register</h2>
            <div className="imgreg">
            {/* <img  src={regiimg} alt=""></img> */}
            </div>
            <div className="regi">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label><br></br>
            <input
              required={true}
              type="text"
              placeholder=" Name "
              pattern="[A-za-z]{3,}"
              value={this.state.name}
              name="name"
              onChange={this.handler}
            /><br></br>
            <label>Email</label><br></br>
            <input
              required={true}
              type="email"
              placeholder=" Email"
              value={this.state.email}
              name="email"
              onChange={this.handler}
            /><br></br>
            <label>ContactNo</label><br></br>
            <input
              required={true}
              type="text"
              placeholder="Contact No "
              pattern="[0-9]{10}"
              value={this.state.contactNo}
              name="contactNo"
              onChange={this.handler}
            /><br></br>
            <label>Date of Birth</label><br></br>
            <input
              required={true}
              type="date"
              placeholder=" Date Of Birth"
              value={this.state.dob}
              name="dob"
              onChange={this.handler}
            /><br></br>
            {/* <label>Password</label><br></br>
            <input
              required={true}
              type="password"
              placeholder=" Password"
              pattern=".{8,}"
              title="Enter More than 8 Char"
              value={this.state.password}
              name="password"
              onChange={this.handler}
            /><br></br>
            <label>Role (A-admin,C-customer) </label><br></br>
            <input
              required={true}
              type="text"
              pattern="[A-C]"
              placeholder=" Role "
              value={this.state.role}
              name="role"
              onChange={this.handler}
            /><br></br> */}
            <br></br>
            <button className="btn">Submit</button>
          </div>
        </form>
        </div>
            </div>
      </>
    );
  }
}