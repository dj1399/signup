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
             bgColor1:"rgba(243, 239, 239, 0.5)",
             bgColor2:"rgba(243, 239, 239, 0.5)",
             color1:"black",
             color2:"black",
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
         changeColor1= (event) =>
         {event.preventDefault()
           this.setState({
            bgColor1:"white",
            bgColor2:"rgba(243, 239, 239, 0.5)",
            color1:"yellow",
            color2:"black",
           })
    }
        changeColor2= (event) =>
        {event.preventDefault()
          this.setState({
           bgColor1:"rgba(243, 239, 239, 0.5)",
           bgColor2:"white",
           color1:"black",
           color2:"yellow",
          })
   }
    render()
    {
        
        return(<div className="SignUp">
                 {
                   
                 this.state.mainDiv && <div className="SignUp__main">
                     <div className="SignUp__back">
                <div className="row ">
                    <div className="SignUp__section col-md-7">
                        <div className="SignUp__text">
                        Sign Up to <br/> View Your Profile Direct
                        </div>
                        <div className="SignUp__r2 row">
                        {/* <div className="col-md-2" > */}
                            <div className=" SignUp__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignUp__link" href="#">Signup here!</a>
                        {/* </div> */}
                        </div>
                        {/* <div className="col-md-2 mr-2"> */}
                            {/* <div className="picture" ></div> */}
                            <img src={pic} className=" SignUp__picture"></img>
                        {/* </div>
                         */}
                        
                        
                    </div>
                    </div>
                    <div className="SignUp__section col-md-5 ">
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
                   <button type="button" className="SignUp__gender"  onClick={this.changeColor1} style={{background:this.state.bgColor1,color:this.state.color1}}>Male</button>
                   </div>
                   
                   <div class="col ">
                   <button type="button" className="SignUp__gender"  onClick={this.changeColor2} style={{backgroundColor:this.state.bgColor2,color:this.state.color2}}>Female</button>
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
                    <div className="SignUp__section col-md-7">
                        <div className="SignUp__text" style={{marginBottom:"20px"}}>
                        Verify Urself to<br/>Activate Your Profile Account
                        </div>
                        <div className="SignUp__r2 row">
                        <div className="SignUp__section col-md-4" >
                            <div className="SignUp__signup">
                        if you don’t have an account<br/> logged in ever,  <a className="SignUp__link" href="#">Signup here!</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <img src={pic} className=" SignUp__picture"></img>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-5 ">
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
                  {/* </form> */}
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
                    <div className="SignUp__section col-md-7">
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
                        <img src={pic} className=" SignUp__picture"></img>
                        </div>
                    </div>
                    </div>
                    <div className="SignUp__section col-md-5 ">
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