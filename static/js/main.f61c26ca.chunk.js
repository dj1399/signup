(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{40:function(e,s,c){},41:function(e,s,c){},42:function(e,s,c){},62:function(e,s,c){},68:function(e,s,c){"use strict";c.r(s);var n=c(0),t=c(1),i=c.n(t),a=c(31),r=c.n(a),o=(c(40),c(41),c(9)),l=c(10),j=c(14),d=c(12),b=c(11),m=(c(42),c.p+"static/media/E-Commerce.feb3f39f.svg"),u=c.p+"static/media/google.14c0d49c.svg",g=c.p+"static/media/facebook.f4929eff.svg",h=c(18),p=c.n(h),x=c(32),O=c(33),_=c.n(O),v=function(){var e=Object(x.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s),e.next=3,_.a.post("https://project31-heroku.herokuapp.com/api/v11/user/login",s).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),f=function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){var e;return Object(o.a)(this,c),(e=s.call(this)).handleUserEntry=function(s){e.setState({userEntry:s.target.value})},e.handlePassword=function(s){e.setState({password:s.target.value})},e.state={userEntry:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e.checkUserEntry=e.checkUserEntry.bind(Object(j.a)(e)),e}return Object(l.a)(c,[{key:"checkUserEntry",value:function(e){var s=/\S+@\S+\.\S+/.test(e),c=/^\d{10}$/.test(e);return!0===s?"email":!0===c?"mob":"error in email or mob no."}},{key:"handleSubmit",value:function(){var e=this.checkUserEntry(this.state.userEntry);if("email"===e||"mob"===e){var s=new FormData;"email"===e?s.append("email",this.state.userEntry):s.append("contact",this.state.userEntry),s.append("password",this.state.password),console.log(s),v(s).then((function(e){console.log(e),"success"===e.data.status&&alert("Success "+e.data.message)})).catch((function(e){return console.log(e)}))}else alert("wrong email or mobile number entered")}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"SignIn",children:Object(n.jsx)("div",{className:"SignIn__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"SignIn__section col-md-7",children:Object(n.jsxs)("div",{className:"SignIn__left",children:[Object(n.jsxs)("div",{className:"SignIn__text",children:["Sign In to ",Object(n.jsx)("br",{})," View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignIn__r2 row",children:[Object(n.jsxs)("div",{className:"SignIn__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignIn__link",href:"#",children:"Signup here!"})]}),Object(n.jsx)("img",{src:m,className:"SignIn__picture"})]})]})}),Object(n.jsxs)("div",{className:"SignIn__section col-md-5 ",children:[Object(n.jsx)("div",{className:"SignIn_Form row",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"text",name:"userEntry",id:"userEntry",className:"SignIn__em form-control",placeholder:"Email/Phone number","aria-describedby":"emailHelp",onChange:this.handleUserEntry})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"password",name:"password",id:"password",class:"SignIn__pass form-control",placeholder:"Password",onChange:this.handlePassword})}),Object(n.jsx)("button",{type:"submit",className:"SignIn__button",onClick:this.handleSubmit,children:"Sign In"})]})}),Object(n.jsx)("div",{className:"SignIn__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignIn__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignIn__google",children:Object(n.jsx)("img",{src:u})}),Object(n.jsx)("button",{className:"SignIn__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})})})}}]),c}(i.a.Component),S=c(19),N=(c(62),function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=s.call(this,e)).handleClickNext=function(e){e.preventDefault(),n.setState({verificationDiv:!0,mainDiv:!1,successDiv:!1})},n.handleClick=function(e){e.preventDefault(),n.setState({verificationDiv:!1,mainDiv:!1,successDiv:!0})},n.changeColor1=function(e){e.preventDefault(),n.setState({bgColor1:"white",bgColor2:"rgba(243, 239, 239, 0.5)",color1:"yellow",color2:"black"})},n.changeColor2=function(e){e.preventDefault(),n.setState({bgColor1:"rgba(243, 239, 239, 0.5)",bgColor2:"white",color1:"black",color2:"yellow"})},n.state={mainDiv:!0,verificationDiv:!1,successDiv:!1,white:!0,bgColor1:"rgba(243, 239, 239, 0.5)",bgColor2:"rgba(243, 239, 239, 0.5)",color1:"black",color2:"black"},n}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"SignUp",children:[this.state.mainDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",children:["Sign Up to ",Object(n.jsx)("br",{})," View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsxs)("div",{className:" SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]}),Object(n.jsx)("img",{src:m,className:" SignUp__picture"})]})]}),Object(n.jsxs)("div",{className:"SignUp__section col-md-5 ",children:[Object(n.jsx)("div",{className:"SignUp_Form row",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"email",name:"",id:"",className:"SignUp__em form-control",placeholder:"Email/Phone number","aria-describedby":"emailHelp"})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",Object(S.a)({type:"password",name:"",id:"",class:"SignUp__pass form-control",placeholder:"Enter Password"},"id","exampleInputPassword1"))}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",Object(S.a)({type:"password",name:"",id:"",class:"SignUp__pass form-control",placeholder:"Confirm Password"},"id","exampleInputPassword1"))}),Object(n.jsx)("button",{className:"SignUp__next",onClick:this.handleClickNext,children:" Next"})]})}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignUp__google",children:Object(n.jsx)("img",{src:u})}),Object(n.jsx)("button",{className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})}),this.state.verificationDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",style:{marginBottom:"20px"},children:["Verify Urself to",Object(n.jsx)("br",{}),"Activate Your Profile Account"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsx)("div",{className:"SignUp__section col-md-4",children:Object(n.jsxs)("div",{className:"SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:m,className:" SignUp__picture"})})]})]}),Object(n.jsxs)("div",{className:"col-md-5 ",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"SignUp__verify",style:{marginLeft:"20px"},children:"Verification Code"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:" SignUp_code row d-flex space-around",children:[Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})})]}),Object(n.jsxs)("div",{className:"SignUp__verifytext",children:["Enter your Verification code in here and ",Object(n.jsx)("br",{})," Click on SignUp!"]}),Object(n.jsx)("button",{type:"submit",className:"SignUp__button",onClick:this.handleClick,children:"Signup"})]})]}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignUp__google",children:Object(n.jsx)("img",{src:u})}),Object(n.jsx)("button",{className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})}),this.state.successDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",children:["Sign Up to",Object(n.jsx)("br",{}),"View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:m,alt:"pic",className:" SignUp__picture"})})]})]}),Object(n.jsxs)("div",{className:"SignUp__section col-md-5 ",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"SignUp__success",children:["You have successfully ",Object(n.jsx)("br",{})," sign up !"]})}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignUp__google",children:Object(n.jsx)("img",{src:u})}),Object(n.jsx)("button",{className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})})]})}}]),c}(i.a.Component)),U=c(15),y=c(2),w=function(e){Object(d.a)(c,e);var s=Object(b.a)(c);function c(){return Object(o.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U.b,{to:"/Register",children:"Sign Up"}),Object(n.jsx)("br",{}),Object(n.jsx)(U.b,{to:"/SignIn",children:"Sign In"}),Object(n.jsx)("br",{})]})}}]),c}(i.a.Component);var k=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(U.a,{children:Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{path:"/registration",component:w,exact:!0}),Object(n.jsx)(y.a,{path:"/",component:w,exact:!0}),Object(n.jsx)(y.a,{path:"/Register",component:N,exact:!0}),Object(n.jsx)(y.a,{path:"/SignIn",component:f,exact:!0}),Object(n.jsx)(y.a,{path:"/signup",component:w,exact:!0})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(s){var c=s.getCLS,n=s.getFID,t=s.getFCP,i=s.getLCP,a=s.getTTFB;c(e),n(e),t(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.f61c26ca.chunk.js.map