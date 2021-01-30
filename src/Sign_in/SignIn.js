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
                <div className="back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="text">
                        Sign In to <br/> View Your Profile Direct
                        </div>
                        <div className="col-md-4" >
                            <div className="signup">
                        if you don’t have an account<br/> logged in ever,  <a class="link" href="#">Signup here!</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="picture" ></div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                    <form>
                  <div class="form-group">
                  <input type="email" className="em form-control"  placeholder="Email/Phone number" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="pass form-control" placeholder="Password" id="exampleInputPassword1"/>
                  </div>
  
                  <button type="submit" class="button">Sign In</button>
                  
                  
                  </form>
                  </div> 
                  <div className="some"> Can Also sign in through</div>
                  {/* <div className="alternative">Can Also sign in through</div> */}
                  <div className="buttons d-flex justify-content-around">
                  <button className="google" ><img src={google}></img></button>
                  <button className="facebook"><img src={facebook}></img></button>
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