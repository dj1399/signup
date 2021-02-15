import React from "react";
import "./SignIn.css";
import pic from "../Images/E-Commerce.svg";
import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";
export default class SignIn extends React.Component
{
    render() {
        return(
            <>
            <div className="SignIn">
                <div className="SignIn__back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="SignIn__text">
                        Sign In to <br/> View Your Profile Direct
                        </div>
                        <div className="SignIn__r2 row">
                        <div className="col-md-4" >
                            <div className="SignIn__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignIn__link" href="#">Signup here!</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <img src={pic} className="SignIn__picture"></img>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                    <form>
                  <div class="form-group">
                  <input type="email" className="SignIn__em form-control"  placeholder="Email/Phone number" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="SignIn__pass form-control" placeholder="Password" id="exampleInputPassword1"/>
                  </div>
  
                  <button type="submit" className="SignIn__button">Sign In</button>
                  
                  
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
                {/* </div> */}
            </div>
            </div>
            </>
        )
    }
}