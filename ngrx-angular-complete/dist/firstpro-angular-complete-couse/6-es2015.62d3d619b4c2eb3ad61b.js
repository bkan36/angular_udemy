(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class t{}var o=u("pMnS"),e=u("4BU0");class s{}var r=i.nb({encapsulation:0,styles:[[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #9c5d0e;border-radius:50%;-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;border-color:#ff852c transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]],data:{}});function a(l){return i.Gb(0,[(l()(),i.pb(0,0,null,null,4,"div",[["class","lds-ring"]],null,null,null,null,null)),(l()(),i.pb(1,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),i.pb(2,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),i.pb(3,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),i.pb(4,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}var b=u("s7LF");class d{constructor(l){this.viewContainerRef=l}}var c=u("SVse"),g=u("VYMa");class p{constructor(l,n,u){this.authService=l,this.route=n,this.cptFactoryResolver=u,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(l){if(!l.valid)return;const n=l.value.email,u=l.value.password;let i;this.isLoading=!0,(i=this.isLoginMode?this.authService.login(n,u):this.authService.signup(n,u)).subscribe(l=>{console.log(l),this.isLoading=!1,this.route.navigate(["/recipes"])},l=>{console.log(l),this.error=l,this.showErrorAlert(l),this.isLoading=!1}),l.reset()}onHandleError(){this.error=null}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}showErrorAlert(l){const n=this.cptFactoryResolver.resolveComponentFactory(g.a),u=this.alertHost.viewContainerRef;u.clear();const i=u.createComponent(n);i.instance.message=l,this.closeSub=i.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),u.clear()})}}var m=u("qXBG"),h=u("iInd"),v=i.nb({encapsulation:2,styles:[],data:{}});function f(l){return i.Gb(0,[(l()(),i.eb(0,null,null,0))],null,null)}function A(l){return i.Gb(0,[(l()(),i.pb(0,0,null,null,2,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),i.pb(1,0,null,null,1,"app-loading-spinner",[],null,null,null,a,r)),i.ob(2,49152,null,0,s,[],null,null)],null,null)}function C(l){return i.Gb(0,[(l()(),i.pb(0,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==i.Ab(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==i.Ab(l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit(i.Ab(l,2))&&t),t}),null,null)),i.ob(1,16384,null,0,b.D,[],null,null),i.ob(2,4210688,[["authForm",4]],0,b.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i.Cb(2048,null,b.b,null,[b.t]),i.ob(4,16384,null,0,b.s,[[4,b.b]],null,null),(l()(),i.pb(5,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i.pb(6,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["E-Mail"])),(l()(),i.pb(8,0,null,null,8,"input",[["class","form-control"],["email",""],["id","email"],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==i.Ab(l,9)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==i.Ab(l,9).onTouched()&&t),"compositionstart"===n&&(t=!1!==i.Ab(l,9)._compositionStart()&&t),"compositionend"===n&&(t=!1!==i.Ab(l,9)._compositionEnd(u.target.value)&&t),t}),null,null)),i.ob(9,16384,null,0,b.c,[i.B,i.k,[2,b.a]],null,null),i.ob(10,16384,null,0,b.y,[],{required:[0,"required"]},null),i.ob(11,16384,null,0,b.d,[],{email:[0,"email"]},null),i.Cb(1024,null,b.o,(function(l,n){return[l,n]}),[b.y,b.d]),i.Cb(1024,null,b.p,(function(l){return[l]}),[b.c]),i.ob(14,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),i.Cb(2048,null,b.q,null,[b.u]),i.ob(16,16384,null,0,b.r,[[4,b.q]],null,null),(l()(),i.pb(17,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i.pb(18,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Password"])),(l()(),i.pb(20,0,null,null,8,"input",[["class","form-control"],["id","password"],["minlength","6"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==i.Ab(l,21)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==i.Ab(l,21).onTouched()&&t),"compositionstart"===n&&(t=!1!==i.Ab(l,21)._compositionStart()&&t),"compositionend"===n&&(t=!1!==i.Ab(l,21)._compositionEnd(u.target.value)&&t),t}),null,null)),i.ob(21,16384,null,0,b.c,[i.B,i.k,[2,b.a]],null,null),i.ob(22,16384,null,0,b.y,[],{required:[0,"required"]},null),i.ob(23,540672,null,0,b.n,[],{minlength:[0,"minlength"]},null),i.Cb(1024,null,b.o,(function(l,n){return[l,n]}),[b.y,b.n]),i.Cb(1024,null,b.p,(function(l){return[l]}),[b.c]),i.ob(26,671744,null,0,b.u,[[2,b.b],[6,b.o],[8,null],[6,b.p]],{name:[0,"name"],model:[1,"model"]},null),i.Cb(2048,null,b.q,null,[b.u]),i.ob(28,16384,null,0,b.r,[[4,b.q]],null,null),(l()(),i.pb(29,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),i.pb(30,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),i.Fb(31,null,["",""])),(l()(),i.Fb(-1,null,[" | "])),(l()(),i.pb(33,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onSwitchMode()&&i),i}),null,null)),(l()(),i.Fb(34,null,["Switch to ",""]))],(function(l,n){l(n,10,0,""),l(n,11,0,""),l(n,14,0,"email",""),l(n,22,0,""),l(n,23,0,"6"),l(n,26,0,"password","")}),(function(l,n){var u=n.component;l(n,0,0,i.Ab(n,4).ngClassUntouched,i.Ab(n,4).ngClassTouched,i.Ab(n,4).ngClassPristine,i.Ab(n,4).ngClassDirty,i.Ab(n,4).ngClassValid,i.Ab(n,4).ngClassInvalid,i.Ab(n,4).ngClassPending),l(n,8,0,i.Ab(n,10).required?"":null,i.Ab(n,16).ngClassUntouched,i.Ab(n,16).ngClassTouched,i.Ab(n,16).ngClassPristine,i.Ab(n,16).ngClassDirty,i.Ab(n,16).ngClassValid,i.Ab(n,16).ngClassInvalid,i.Ab(n,16).ngClassPending),l(n,20,0,i.Ab(n,22).required?"":null,i.Ab(n,23).minlength?i.Ab(n,23).minlength:null,i.Ab(n,28).ngClassUntouched,i.Ab(n,28).ngClassTouched,i.Ab(n,28).ngClassPristine,i.Ab(n,28).ngClassDirty,i.Ab(n,28).ngClassValid,i.Ab(n,28).ngClassInvalid,i.Ab(n,28).ngClassPending),l(n,30,0,!i.Ab(n,2).valid),l(n,31,0,u.isLoginMode?"login":"Sign up"),l(n,34,0,u.isLoginMode?"Sign up":"Login")}))}function y(l){return i.Gb(0,[i.Db(671088640,1,{alertHost:0}),(l()(),i.eb(16777216,null,null,1,null,f)),i.ob(2,16384,[[1,4]],0,d,[i.M],null,null),(l()(),i.pb(3,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.pb(4,0,null,null,4,"div",[["class","col-xs-12 col-md-6 col-md-offset-3"]],null,null,null,null,null)),(l()(),i.eb(16777216,null,null,1,null,A)),i.ob(6,16384,null,0,c.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,null,1,null,C)),i.ob(8,16384,null,0,c.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,6,0,u.isLoading),l(n,8,0,!u.isLoading)}),null)}function w(l){return i.Gb(0,[(l()(),i.pb(0,0,null,null,1,"app-auth",[],null,null,null,y,v)),i.ob(1,180224,null,0,p,[m.a,h.k,i.j],null,null)],null,null)}var M=i.lb("app-auth",p,w,{},{},[]),S=u("PCNd");u.d(n,"AuthModuleNgFactory",(function(){return k}));var k=i.mb(t,[],(function(l){return i.yb([i.zb(512,i.j,i.X,[[8,[o.a,e.a,M]],[3,i.j],i.v]),i.zb(4608,c.k,c.j,[i.s,[2,c.q]]),i.zb(4608,b.B,b.B,[]),i.zb(1073742336,c.b,c.b,[]),i.zb(1073742336,b.A,b.A,[]),i.zb(1073742336,b.m,b.m,[]),i.zb(1073742336,h.o,h.o,[[2,h.t],[2,h.k]]),i.zb(1073742336,S.a,S.a,[]),i.zb(1073742336,t,t,[]),i.zb(1024,h.i,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);