import React from "react";
import "./SignUp.css";
import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";
import pic from "../Images/E-Commerce.svg";

export default class SignUp extends React.Component{
    constructor (props) {
        super(props)
         this.state = {
             mainDiv:true,
             verificationDiv:false,
             successDiv:false,
             white:true,
             
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
         changeColor(){
            this.setState({white: !this.state.white})
        }
        changeColorFem()
        {
            this.setState({white: !this.state.white})
        }
    render()
    {
        let btn_class = this.state.white ? "SignUp__gender" : "SignUp__gender_clicked";
        let btn1_class = this.state.white ? "SignUp__gender" : "SignUp__gender_clicked" ;
        return(<div className="SignUp">
                 {
                   
                 this.state.mainDiv && <div className="SignUp__main">
                     <div className="SignUp__back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="SignUp__text">
                        Sign Up to <br/> View Your Profile Direct
                        </div>
                        <div className="SignUp__r2 row">
                        {/* <div className="col-md-2" > */}
                            <div className="SignUp__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignUp__link" href="#">Signup here!</a>
                        {/* </div> */}
                        </div>
                        {/* <div className="col-md-2 mr-2"> */}
                            {/* <div className="picture" ></div> */}
                            <img src={pic} className="SignUp__picture"></img>
                        {/* </div>
                         */}
                        
                        
                    </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="SignUp_Form row">
                    <form>
                    <div class="form-group">
                  <input type="text" className="SignUp__nam form-control"  placeholder="First Name"/>
                  </div>
                  <div class="form-group">
                  <input type="email" className="SignUp__em form-control"  placeholder="Email/Phone number" aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="SignUp__pass form-control" placeholder="Enter Password" id="exampleInputPassword1"/>
                  </div>
                  <div class="form-group">
                   <input type="password" class="SignUp__pass form-control" placeholder="Confirm Password" id="exampleInputPassword1"/>
                  </div>
                  <div className="row">
                
                  <div class="col ">
                   <button type="button" className={btn_class}  onClick={this.changeColor.bind(this)}>Male</button>
                   </div>
                   
                   <div class="col ">
                   <button type="button" className={btn1_class}  onClick={this.changeColorFem.bind(this)}>Female</button>
                  </div>
                  </div>
                  
                  <button className="SignUp__next" onClick={this.handleClickNext}> Next</button>
                  
                  
                  </form>
                  </div> 
                  <div className="SignUp__some"> Can Also sign in through</div>
                  {/* <div className="alternative">Can Also sign in through</div> */}
                  <div className="SignUp__buttons d-flex justify-content-around">
                  <button className="SignUp__google" ><img src={google}></img></button>
                  <button className="SignUp__facebook"><img src={facebook}></img></button>
                  </div>
                  </div>
                  
                {/* </div> */}
            </div>
           
                     
                    </div>
                    </div>
                 }
                
                     {
                   
                        this.state.verificationDiv && <div className="SignUp__main">
                            {/* <button onClick={this.handleClickNext}> next</button> */}
                            <div className="SignUp__back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="SignUp__text" style={{marginBottom:"20px"}}>
                        Verify Urself to<br/>Activate Your Profile Account
                        </div>
                        <div className="SignUp__r2 row">
                        <div className="col-md-4" >
                            <div className="SignUp__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignUp__link" href="#">Signup here!</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="SignUp__picture" ></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                        <div className="SignUp__verify" style={{marginLeft:"20px"}}>Verification Code</div>
                    <form>
                        <div className=" SignUp_code row d-flex space-around">
                  <div class="form-group col">
                   <input type="number" className="SignUp__num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="SignUp__num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="SignUp__num form-control" />
                  </div>
                  <div class="form-group col">
                   <input type="number" className="SignUp__num form-control" />
                  </div>
                  {/*  */}
                  </div>
                  <div className="SignUp__verifytext">
                  Enter your Verification code in here and <br/> Click on SignUp!
                  </div>
                  <button type="submit" className="SignUp__button" onClick={this.handleClick}>Signup</button>
                  
                  
                  </form>
                  </div> 
                  <div className="SignUp__some"> Can Also sign in through</div>
                  {/* <div className="alternative">Can Also sign in through</div> */}
                  <div className="SignUp__buttons d-flex justify-content-around">
                  <button className="SignUp__google" ><img src={google}></img></button>
                  <button className="SignUp__facebook"><img src={facebook}></img></button>
                  </div>
                  </div>
                  </div>
                {/* </div> */}
            </div>
                            </div>
                        }
                        {
                                            
                   
                        this.state.successDiv && <div className="SignUp__main">
                            {/* <button onClick={this.handleClickNext}> next</button> */}
                            <div className="SignUp__back">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="SignUp__text">
                        Sign Up to<br/>View Your Profile Direct
                        </div>
                        <div className="SignUp__r2 row">
                        <div className="col-md-4" >
                            <div className="SignUp__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignUp__link" href="#">Signup here!</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="SignUp__picture" ></div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                        <div className="SignUp__success">You have successfully <br/> sign up !</div>
                    
                  </div> 
                  <div className="SignUp__some"> Can Also sign in through</div>
                  {/* <div className="alternative">Can Also sign in through</div> */}
                  <div className="SignUp__buttons d-flex justify-content-around">
                  <button className="SignUp__google" ><img src={google}></img></button>
                  <button className="SignUp__facebook"><img src={facebook}></img></button>
                  </div>
                  </div>
                  
                {/* </div> */}
            </div>
                            </div>
                        </div>
                        }
         </div>)
    }
}