"use strict";(self.webpackChunkLeaderboard_project=self.webpackChunkLeaderboard_project||[]).push([[826],{192:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"body{background-color:#f6f6f6;font-family:'Courier New', Courier, monospace}button{height:1.5rem;width:4rem}.leader-board{display:flex;gap:1rem}.leader-board article{border:1px solid black;padding:2em}.leader-board .recent-scores .recent-title{display:flex;align-items:center;gap:1rem}.leader-board .recent-scores .scores-container{border:1px solid red}.leader-board .recent-scores .scores-container .score-item{list-style:none}.leader-board .add-score{display:flex;flex-direction:column;gap:1rem}.leader-board .add-score .form{display:flex;flex-direction:column;gap:1rem}.leader-board .add-score #submit{align-self:flex-end}\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=r(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},280:(e,t,n)=>{var r=n(379),a=n.n(r),o=n(795),s=n.n(o),c=n(569),i=n.n(c),l=n(565),u=n.n(l),d=n(216),p=n.n(d),f=n(589),m=n.n(f),h=n(192),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;class y{constructor(){this.list=[]}}const b=(e,t)=>{document.querySelector("#refresh").addEventListener("click",(()=>{(async(e,t)=>{e.list=await(async(e="yVWfxt83ZzUTJiUF6itj")=>{const t=new Request(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${e}/scores`),n=await fetch(t);return(await n.json()).result})(t),(async e=>{const t=document.querySelector(".scores-container");for(;t.firstChild;)t.removeChild(t.firstChild);e.forEach((e=>{const n=document.createElement("li");n.className="score-item",n.textContent=`${e.user}: ${e.score}`,t.appendChild(n)}))})(e.list)})(e,t)})),document.querySelector("#submit").addEventListener("click",(e=>{e.preventDefault();const n=document.querySelector("#new-name"),r=document.querySelector("#new-score");""!==n.value&&""!==r.value?((async(e,t,n)=>{const r={user:t,score:`${n}`},a=new Request(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${e}/scores`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});await fetch(a)})(t,n.value,r.value),n.value="",r.value=""):alert("Please fill both fields")}))};(async()=>{const e=new y,t=localStorage.getItem("ID")||await(async()=>{const e=new Request("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Salim's game"})}),t=await fetch(e),n=(await t.json()).result.split(" ")[3];return localStorage.setItem("ID",n),n})();b(e,t)})()}},e=>{e(e.s=280)}]);