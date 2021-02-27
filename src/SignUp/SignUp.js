import React from "react";
import "./SignUp.css";
import google from "../Images/google.svg";
import facebook from "../Images/facebook.svg";
import pic from "../Images/E-Commerce.svg";
import {checkSignIn} from '../DataService/Signup';

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
             userEntry:"",
             password:"",
             confirmPassword:"",
             isPwdSame:"",
             role:"patient"
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

handleUserEntry = (e) =>{
    this.setState({userEntry:e.target.value});
}

handleUserPassword = (e)=> {
    this.setState({password:e.target.value});
}

handleConfirmPassword =(e)=>{
    if(this.state.password === e.target.value){
        this.setState({isPwdSame:true});
    }
    else{
        this.setState({isPwdSame:false});
    }

    this.setState({confirmPassword:e.target.value});
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
            data['passwordConfirm']=this.state.confirmPassword;
            data['role'] = this.state.role;
        console.log(data);

        checkSignIn(data)
        .then((response)=>{
            console.log(response)
            if (response.data.status === "success") {
                alert("account created");
                console.log(response.data)
            }
        })
        .catch((error)=>console.log(error));
    }
    else {
        alert('wrong email or mobile number entered')
    }
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
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <input type="email" onChange={this.handleUserEntry} name="userEntry" id="userEntry" className="SignUp__em form-control"
                                            placeholder="Email/Phone number" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" onChange={this.handleUserPassword} name="password" id="password" class="SignUp__pass form-control" 
                                             placeholder="Enter Password" autoComplete="off" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" onChange={this.handleConfirmPassword} name="confirmPassword" id="confirmPassword" class="SignUp__pass form-control" 
                                            placeholder="Confirm Password" 
                                            
                                            autoComplete="off" />
                                            {this.state.isPwdSame ? <small>password matched</small>:<small>confirm password should be same as password</small>}
                                        </div>
                                        <button className="SignUp__next" 
                                       // onClick={this.handleClickNext}
                                        type='submit'
                                        > submit</button>
                                    </form>
                                </div>
                                <div className="SignUp__some"> Can Also sign in through</div>
                                {/* <div className="alternative">Can Also sign in through</div> */}
                                <div className="SignUp__buttons d-flex justify-content-around">
                                    <button type='button' className="SignUp__google" ><img src={google}></img></button>
                                    <button type='button' className="SignUp__facebook"><img src={facebook}></img></button>
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
                        <img src={pic} alt="pic" className=" SignUp__picture"></img>
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