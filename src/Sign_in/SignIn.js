import React from "react";
import "./SignIn.css";
import pic from "../Images/E-Commerce.svg";
import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";
import {checkLogin} from "../DataService/Login";


export default class SignIn extends React.Component
{
    constructor(){
        super();
        this.state = {
            userEntry : "",
            password : "",
            role:"patient"
        }
     
        this.checkUserEntry = this.checkUserEntry.bind(this);
    }

    handleUserEntry = (e) =>{
        this.setState({userEntry:e.target.value});
    }

    handlePassword = (e)=> {
        this.setState({password:e.target.value});
    }

    checkUserEntry(check){
        var re = /\S+@\S+\.\S+/;
        var phoneno = /^\d{10}$/;
        let isEmail = re.test(check);
        let isPhone = phoneno.test(check);
        if(isEmail === true){
            return "email";
        }
        else if(isPhone === true){
            return "mob";
        }
        else{
            return "error in email or mob no."
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();   
        let status = this.checkUserEntry(this.state.userEntry);
        if (status === "email" || status === "mob") {
            console.log("trigersedddddddddd")
            var data = {};
            if (status === "email") {
                // data.append("email", this.state.userEntry);
                data['email'] = this.state.userEntry;
            }
            else {
               // data.append("contact", this.state.userEntry);
                data['contact'] = this.state.userEntry;
            }
            //data.append("password", this.state.password);
                data['password'] = this.state.password;
                data['role'] = this.state.role;
            console.log(data);

            checkLogin(data)
            .then((response)=>{
                console.log(response)
                if (response.data.status === "success") {
                    alert("logged in");
                    console.log(response.data)
                }
            })
            .catch((error)=>console.log(error));
        }
        else {
            alert('wrong email or mobile number entered')
        }
    }
    

    render() {
        return(
            <>
                <div className="SignIn">
                    <div className="SignIn__back">
                        <div className="row ">
                            <div className="SignIn__section col-md-7">
                            <div className="SignIn__left">
                                <div className="SignIn__text">
                                    Sign In to <br /> View Your Profile Direct
                        </div>
                                <div className="SignIn__r2 row">
                                    {/* <div className="col-md-4" > */}
                                    <div className="SignIn__signup">
                                        if you don’t have an account<br /> logged in ever,  <a className="SignIn__link" href="#">Signup here!</a>
                                        {/* </div> */}
                                    </div>
                                    {/* <div className="col-md-4"> */}
                                    <img src={pic} className="SignIn__picture"></img>
                                </div>
                                {/* </div> */}
                                </div>
                            </div>
                            <div className="SignIn__section col-md-5 ">
                                <div className="SignIn_Form row">
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <input 
                                            type="text" 
                                            name="userEntry" 
                                            id="userEntry" 
                                            className="SignIn__em form-control" 
                                            placeholder="Email/Phone number" 
                                            aria-describedby="emailHelp"
                                            onChange={this.handleUserEntry}
                                            required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            class="SignIn__pass form-control" 
                                            placeholder="Password" 
                                            onChange={this.handlePassword}
                                            autoComplete="off"
                                            required
                                            />
                                        </div>
                                        <button 
                                        type="submit" 
                                        className="SignIn__button"
                                        
                                        >Sign In</button>
                                    </form>
                                </div>
                                <div className="SignIn__some"> Can Also sign in through</div>
                                {/* <div className="alternative">Can Also sign in through</div> */}
                                <div className="SignIn__buttons d-flex justify-content-around">
                                    <button className="SignIn__google" ><img src={google}></img></button>
                                    <button className="SignIn__facebook"><img src={facebook}></img></button>
                                </div>
                            </div>
                        </div>
                        </div> 
                        </div>
                        
      
            </>
        )
    }
}