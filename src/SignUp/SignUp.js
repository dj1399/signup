import React from "react";
import "./SignUp.css";
import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";

export default class SignUp extends React.Component{
    constructor (props) {
        super(props)
         this.state = {
             mainDiv:true,
             verificationDiv:false,
             successDiv:false
         }}
         handleClickNext = (event) =>
         {
              event.preventDefault()
              this.setState({
                  verificationDiv:true,
                  mainDiv:false,
                  successDiv:false
              })
            }
              
              handleClick = (event) =>
              {event.preventDefault()
                this.setState({
                    verificationDiv:false,
                    mainDiv:false,
                    successDiv:true
                })
         }
    render()
    {
        return(<div className="SignUp">
                 {
                   
                 this.state.mainDiv && <div className="main">
                     <div className="back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="text">
                        Sign Up to <br/> View Your Profile Direct
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
                  <input type="text" className="nam form-control"  placeholder="First Name"/>
                  </div>
                  <div class="form-group">
                  <input type="email" className="em form-control"  placeholder="Email/Phone number" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="pass form-control" placeholder="Enter Password" id="exampleInputPassword1"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="pass form-control" placeholder="Confirm Password" id="exampleInputPassword1"/>
                  </div>
                  <div className="row">
                      
                  <div class="col form-group">
                   <button type="button" className="gender"  id="exampleInputPassword1">Male</button>
                   </div>
                   
                   <div class="col form-group">
                   <button type="button" className="gender"  id="exampleInputPassword1">Female</button>
                  </div>
                  </div>
                  <button className="next" onClick={this.handleClickNext}> Next</button>
                  
                  
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
                 }
                
                     {
                   
                        this.state.verificationDiv && <div className="main">
                            {/* <button onClick={this.handleClickNext}> next</button> */}
                            <div className="back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="text">
                        Verify Urself to<br/>Activate Your Profile Account
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
                        <div className="verify">Verification Code</div>
                    <form>
                        <div className=" SignUp_code row d-flex space-around">
                  <div class="form-group col">
                   <input type="number" className="num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="num form-control" />
                  </div>
                  </div>
                  <button type="submit" class="button" onClick={this.handleClick}>Signup</button>
                  
                  
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
                        }
                        {
                                            
                   
                        this.state.successDiv && <div className="main">
                            {/* <button onClick={this.handleClickNext}> next</button> */}
                            <div className="back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="text">
                        Sign Up to<br/>View Your Profile Direct
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
                        <div className="success">You have successfully <br/> sign up !</div>
                    
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
                        
                        }
         </div>)
    }
}