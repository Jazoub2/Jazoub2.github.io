import{S as F,i as U,s as Y,k as v,l as g,m as k,h as u,n as p,b as d,D as I,t as T,d as W,f as E,I as Z,a2 as z,a3 as A,a4 as C,g as L,B as J,a7 as K,q as j,r as q,u as S,a as w,c as R,H as Q,Z as O,T as X,e as D,U as $,O as x}from"../../../chunks/index-d013c92a.js";import{s as N}from"../../../chunks/stores-fb421621.js";import{f as P}from"../../../chunks/index-11e80d5a.js";let ee=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function B(n,e,i){const s=n.slice();return s[4]=e[i],s}function te(n){let e,i,s,t;return{c(){e=v("p"),i=j("STORY FOR ID "),s=j(n[0]),t=j(" MISSING")},l(l){e=g(l,"P",{});var f=k(e);i=q(f,"STORY FOR ID "),s=q(f,n[0]),t=q(f," MISSING"),f.forEach(u)},m(l,f){d(l,e,f),I(e,i),I(e,s),I(e,t)},p(l,f){f&1&&S(s,l[0])},d(l){l&&u(e)}}}function le(n){let e,i,s,t=n[1].message+"",l,f,o,r=n[1].img&&M(n),c=n[1].html&&V(n),b=n[1].choices,m=[];for(let a=0;a<b.length;a+=1)m[a]=G(B(n,b,a));return{c(){r&&r.c(),e=w(),c&&c.c(),i=w(),s=v("p"),l=j(t),f=w(),o=v("div");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){r&&r.l(a),e=R(a),c&&c.l(a),i=R(a),s=g(a,"P",{});var h=k(s);l=q(h,t),h.forEach(u),f=R(a),o=g(a,"DIV",{class:!0});var _=k(o);for(let y=0;y<m.length;y+=1)m[y].l(_);_.forEach(u),this.h()},h(){p(o,"class","row svelte-1qejnfu")},m(a,h){r&&r.m(a,h),d(a,e,h),c&&c.m(a,h),d(a,i,h),d(a,s,h),I(s,l),d(a,f,h),d(a,o,h);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(o,null)},p(a,h){if(a[1].img?r?r.p(a,h):(r=M(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),a[1].html?c?c.p(a,h):(c=V(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),h&2&&t!==(t=a[1].message+"")&&S(l,t),h&6){b=a[1].choices;let _;for(_=0;_<b.length;_+=1){const y=B(a,b,_);m[_]?m[_].p(y,h):(m[_]=G(y),m[_].c(),m[_].m(o,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=b.length}},d(a){r&&r.d(a),a&&u(e),c&&c.d(a),a&&u(i),a&&u(s),a&&u(f),a&&u(o),Q(m,a)}}}function M(n){let e,i,s;return{c(){e=v("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){O(e.src,i=n[1].img)||p(e,"src",i),p(e,"alt",s=n[1].message),p(e,"class","svelte-1qejnfu")},m(t,l){d(t,e,l)},p(t,l){l&2&&!O(e.src,i=t[1].img)&&p(e,"src",i),l&2&&s!==(s=t[1].message)&&p(e,"alt",s)},d(t){t&&u(e)}}}function V(n){let e,i=n[1].html+"",s;return{c(){e=new X(!1),s=D(),this.h()},l(t){e=$(t,!1),s=D(),this.h()},h(){e.a=s},m(t,l){e.m(i,t,l),d(t,s,l)},p(t,l){l&2&&i!==(i=t[1].html+"")&&e.p(i)},d(t){t&&u(s),t&&e.d()}}}function G(n){let e,i=n[4].text+"",s,t,l;function f(){return n[3](n[4])}return{c(){e=v("button"),s=j(i)},l(o){e=g(o,"BUTTON",{});var r=k(e);s=q(r,i),r.forEach(u)},m(o,r){d(o,e,r),I(e,s),t||(l=x(e,"click",f),t=!0)},p(o,r){n=o,r&2&&i!==(i=n[4].text+"")&&S(s,i)},d(o){o&&u(e),t=!1,l()}}}function H(n){let e,i,s,t;function l(r,c){return r[1]?le:te}let f=l(n),o=f(n);return{c(){e=v("div"),o.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var c=k(e);o.l(c),c.forEach(u),this.h()},h(){p(e,"class","container svelte-1qejnfu")},m(r,c){d(r,e,c),o.m(e,null),t=!0},p(r,c){f===(f=l(r))&&o?o.p(r,c):(o.d(1),o=f(r),o&&(o.c(),o.m(e,null)))},i(r){t||(r&&z(()=>{t&&(s&&s.end(1),i=A(e,P,{x:800,duration:750}),i.start())}),t=!0)},o(r){i&&i.invalidate(),r&&(s=C(e,P,{x:-800,duration:750})),t=!1},d(r){r&&u(e),o.d(),r&&s&&s.end()}}}function ie(n){let e,i,s=n[0],t=H(n);return{c(){e=v("main"),i=v("div"),t.c(),this.h()},l(l){e=g(l,"MAIN",{class:!0});var f=k(e);i=g(f,"DIV",{class:!0});var o=k(i);t.l(o),o.forEach(u),f.forEach(u),this.h()},h(){p(i,"class","grid svelte-1qejnfu"),p(e,"class","svelte-1qejnfu")},m(l,f){d(l,e,f),I(e,i),t.m(i,null)},p(l,[f]){f&1&&Y(s,s=l[0])?(L(),T(t,1,1,J),W(),t=H(l),t.c(),E(t,1),t.m(i,null)):t.p(l,f)},i(l){E(t)},o(l){T(t)},d(l){l&&u(e),t.d(l)}}}function se(n,e,i){let s,t,l;Z(n,N,o=>i(2,l=o));const f=o=>{K(N,l=o.id,l)};return n.$$.update=()=>{n.$$.dirty&4&&i(0,s=l),n.$$.dirty&1&&i(1,t=ee.find(o=>o.id==s))},[s,t,l,f]}class ne extends F{constructor(e){super(),U(this,e,se,ie,Y,{})}}export{ne as default};
