(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{39:function(e,s,t){},40:function(e,s,t){},41:function(e,s,t){},61:function(e,s,t){},67:function(e,s,t){"use strict";t.r(s);var n=t(0),c=t(1),i=t.n(c),r=t(32),a=t.n(r),o=(t(39),t(40),t(9)),l=t(10),d=t(16),j=t(12),u=t(11),b=(t(41),t.p+"static/media/E-Commerce.feb3f39f.svg"),m=t.p+"static/media/google.14c0d49c.svg",g=t.p+"static/media/facebook.f4929eff.svg",h=t(13),p=t.n(h),x=t(17),O=t(18),f=t.n(O),_=function(){var e=Object(x.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s),e.next=3,f.a.post("https://project31-heroku.herokuapp.com/api/v11/user/login",s).then((function(e){return console.log(e),e.data})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),v=function(e){Object(j.a)(t,e);var s=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=s.call(this)).handleUserEntry=function(s){e.setState({userEntry:s.target.value})},e.handlePassword=function(s){e.setState({password:s.target.value})},e.handleSubmit=function(s){s.preventDefault();var t=e.checkUserEntry(e.state.userEntry);if("email"===t||"mob"===t){console.log("trigersedddddddddd");var n={};"email"===t?n.email=e.state.userEntry:n.contact=e.state.userEntry,n.password=e.state.password,n.role=e.state.role,console.log(n),_(n).then((function(e){console.log(e),"success"===e.data.status&&(alert("logged in"),console.log(e.data))})).catch((function(e){return console.log(e)}))}else alert("wrong email or mobile number entered")},e.state={userEntry:"",password:"",role:"patient"},e.checkUserEntry=e.checkUserEntry.bind(Object(d.a)(e)),e}return Object(l.a)(t,[{key:"checkUserEntry",value:function(e){var s=/\S+@\S+\.\S+/.test(e),t=/^\d{10}$/.test(e);return!0===s?"email":!0===t?"mob":"error in email or mob no."}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"SignIn",children:Object(n.jsx)("div",{className:"SignIn__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"SignIn__section col-md-7",children:Object(n.jsxs)("div",{className:"SignIn__left",children:[Object(n.jsxs)("div",{className:"SignIn__text",children:["Sign In to ",Object(n.jsx)("br",{})," View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignIn__r2 row",children:[Object(n.jsxs)("div",{className:"SignIn__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignIn__link",href:"#",children:"Signup here!"})]}),Object(n.jsx)("img",{src:b,className:"SignIn__picture"})]})]})}),Object(n.jsxs)("div",{className:"SignIn__section col-md-5 ",children:[Object(n.jsx)("div",{className:"SignIn_Form row",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"text",name:"userEntry",id:"userEntry",className:"SignIn__em form-control",placeholder:"Email/Phone number","aria-describedby":"emailHelp",onChange:this.handleUserEntry,required:!0})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"password",name:"password",id:"password",class:"SignIn__pass form-control",placeholder:"Password",onChange:this.handlePassword,autoComplete:"off",required:!0})}),Object(n.jsx)("button",{type:"submit",className:"SignIn__button",children:"Sign In"})]})}),Object(n.jsx)("div",{className:"SignIn__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignIn__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignIn__google",children:Object(n.jsx)("img",{src:m})}),Object(n.jsx)("button",{className:"SignIn__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})})})}}]),t}(i.a.Component),S=(t(61),function(){var e=Object(x.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s),e.next=3,f.a.post("https://project31-heroku.herokuapp.com/api/v11/user/signup",s).then((function(e){return console.log(e),e.data})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),N=function(e){Object(j.a)(t,e);var s=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).handleClickNext=function(e){e.preventDefault(),n.setState({verificationDiv:!0,mainDiv:!1,successDiv:!1})},n.handleClick=function(e){e.preventDefault(),n.setState({verificationDiv:!1,mainDiv:!1,successDiv:!0})},n.changeColor1=function(e){e.preventDefault(),n.setState({bgColor1:"white",bgColor2:"rgba(243, 239, 239, 0.5)",color1:"yellow",color2:"black"})},n.changeColor2=function(e){e.preventDefault(),n.setState({bgColor1:"rgba(243, 239, 239, 0.5)",bgColor2:"white",color1:"black",color2:"yellow"})},n.handleUserEntry=function(e){n.setState({userEntry:e.target.value})},n.handleUserPassword=function(e){n.setState({password:e.target.value})},n.handleConfirmPassword=function(e){n.state.password===e.target.value?n.setState({isPwdSame:!0}):n.setState({isPwdSame:!1}),n.setState({confirmPassword:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var s=n.checkUserEntry(n.state.userEntry);if("email"===s||"mob"===s){console.log("trigersedddddddddd");var t={};"email"===s?t.email=n.state.userEntry:t.contact=n.state.userEntry,t.password=n.state.password,t.passwordConfirm=n.state.confirmPassword,t.role=n.state.role,console.log(t),S(t).then((function(e){console.log(e),"success"===e.data.status&&(alert("account created"),console.log(e.data))})).catch((function(e){return console.log(e)}))}else alert("wrong email or mobile number entered")},n.state={mainDiv:!0,verificationDiv:!1,successDiv:!1,white:!0,bgColor1:"rgba(243, 239, 239, 0.5)",bgColor2:"rgba(243, 239, 239, 0.5)",color1:"black",color2:"black",userEntry:"",password:"",confirmPassword:"",isPwdSame:"",role:"patient"},n}return Object(l.a)(t,[{key:"checkUserEntry",value:function(e){var s=/\S+@\S+\.\S+/.test(e),t=/^\d{10}$/.test(e);return!0===s?"email":!0===t?"mob":"error in email or mob no."}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"SignUp",children:[this.state.mainDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",children:["Sign Up to ",Object(n.jsx)("br",{})," View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsxs)("div",{className:" SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]}),Object(n.jsx)("img",{src:b,className:" SignUp__picture"})]})]}),Object(n.jsxs)("div",{className:"SignUp__section col-md-5 ",children:[Object(n.jsx)("div",{className:"SignUp_Form row",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"email",onChange:this.handleUserEntry,name:"userEntry",id:"userEntry",className:"SignUp__em form-control",placeholder:"Email/Phone number","aria-describedby":"emailHelp"})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{type:"password",onChange:this.handleUserPassword,name:"password",id:"password",class:"SignUp__pass form-control",placeholder:"Enter Password",autoComplete:"off"})}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("input",{type:"password",onChange:this.handleConfirmPassword,name:"confirmPassword",id:"confirmPassword",class:"SignUp__pass form-control",placeholder:"Confirm Password",autoComplete:"off"}),this.state.isPwdSame?Object(n.jsx)("small",{children:"password matched"}):Object(n.jsx)("small",{children:"confirm password should be same as password"})]}),Object(n.jsx)("button",{className:"SignUp__next",type:"submit",children:" submit"})]})}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{type:"button",className:"SignUp__google",children:Object(n.jsx)("img",{src:m})}),Object(n.jsx)("button",{type:"button",className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})}),this.state.verificationDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",style:{marginBottom:"20px"},children:["Verify Urself to",Object(n.jsx)("br",{}),"Activate Your Profile Account"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsx)("div",{className:"SignUp__section col-md-4",children:Object(n.jsxs)("div",{className:"SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:b,className:" SignUp__picture"})})]})]}),Object(n.jsxs)("div",{className:"col-md-5 ",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"SignUp__verify",style:{marginLeft:"20px"},children:"Verification Code"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:" SignUp_code row d-flex space-around",children:[Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})}),Object(n.jsx)("div",{class:"form-group col",children:Object(n.jsx)("input",{type:"number",className:"SignUp__num form-control"})})]}),Object(n.jsxs)("div",{className:"SignUp__verifytext",children:["Enter your Verification code in here and ",Object(n.jsx)("br",{})," Click on SignUp!"]}),Object(n.jsx)("button",{type:"submit",className:"SignUp__button",onClick:this.handleClick,children:"Signup"})]})]}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignUp__google",children:Object(n.jsx)("img",{src:m})}),Object(n.jsx)("button",{className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})}),this.state.successDiv&&Object(n.jsx)("div",{className:"SignUp__main",children:Object(n.jsx)("div",{className:"SignUp__back",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsxs)("div",{className:"SignUp__section col-md-7",children:[Object(n.jsxs)("div",{className:"SignUp__text",children:["Sign Up to",Object(n.jsx)("br",{}),"View Your Profile Direct"]}),Object(n.jsxs)("div",{className:"SignUp__r2 row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"SignUp__signup",children:["if you don\u2019t have an account",Object(n.jsx)("br",{})," logged in ever,  ",Object(n.jsx)("a",{className:"SignUp__link",href:"#",children:"Signup here!"})]})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:b,alt:"pic",className:" SignUp__picture"})})]})]}),Object(n.jsxs)("div",{className:"SignUp__section col-md-5 ",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"SignUp__success",children:["You have successfully ",Object(n.jsx)("br",{})," sign up !"]})}),Object(n.jsx)("div",{className:"SignUp__some",children:" Can Also sign in through"}),Object(n.jsxs)("div",{className:"SignUp__buttons d-flex justify-content-around",children:[Object(n.jsx)("button",{className:"SignUp__google",children:Object(n.jsx)("img",{src:m})}),Object(n.jsx)("button",{className:"SignUp__facebook",children:Object(n.jsx)("img",{src:g})})]})]})]})})})]})}}]),t}(i.a.Component),U=t(15),w=t(2),y=function(e){Object(j.a)(t,e);var s=Object(u.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U.b,{to:"/Register",children:"Sign Up"}),Object(n.jsx)("br",{}),Object(n.jsx)(U.b,{to:"/SignIn",children:"Sign In"}),Object(n.jsx)("br",{})]})}}]),t}(i.a.Component);var k=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(U.a,{children:Object(n.jsxs)(w.c,{children:[Object(n.jsx)(w.a,{path:"/registration",component:y,exact:!0}),Object(n.jsx)(w.a,{path:"/",component:y,exact:!0}),Object(n.jsx)(w.a,{path:"/Register",component:N,exact:!0}),Object(n.jsx)(w.a,{path:"/SignIn",component:v,exact:!0}),Object(n.jsx)(w.a,{path:"/signup",component:y,exact:!0})]})})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,i=s.getLCP,r=s.getTTFB;t(e),n(e),c(e),i(e),r(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.b0493247.chunk.js.map