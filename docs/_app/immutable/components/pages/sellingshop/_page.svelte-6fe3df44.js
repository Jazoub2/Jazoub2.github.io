import{S as _e,i as ke,s as be,k as d,a as E,q as x,J as ye,l as p,h as n,c as S,m as v,r as C,n as t,Z as X,p as I,D as l,b as Z,O as ie,u as M,B as ge,H as ze,R as Ne,e as me}from"../../../chunks/index-d013c92a.js";function he(o,a,s){const e=o.slice();return e[6]=a[s],e[8]=s,e}function Ee(o){let a,s,e,i,u,b=o[6].info.price+"",z,V,_=o[6].info.carName+"",m,y;return{c(){a=d("div"),s=d("img"),i=E(),u=d("p"),z=x(b),V=E(),m=x(_),y=E(),this.h()},l(k){a=p(k,"DIV",{class:!0});var h=v(a);s=p(h,"IMG",{class:!0,src:!0,alt:!0,style:!0}),i=S(h),u=p(h,"P",{class:!0});var f=v(u);z=C(f,b),V=S(f),m=C(f,_),f.forEach(n),y=S(h),h.forEach(n),this.h()},h(){t(s,"class","h-auto max-w-full rounded-lg smallimg svelte-o9azik"),X(s.src,e=o[6].imgSrc)||t(s,"src",e),t(s,"alt",""),t(s,"style",o[8]===2?"filter: brightness(100%);":"filter: brightness(50%);"),t(u,"class","scrollInfo svelte-o9azik"),t(a,"class","svelte-o9azik")},m(k,h){Z(k,a,h),l(a,s),l(a,i),l(a,u),l(u,z),l(u,V),l(u,m),l(a,y)},p(k,h){h&2&&!X(s.src,e=k[6].imgSrc)&&t(s,"src",e),h&2&&b!==(b=k[6].info.price+"")&&M(z,b),h&2&&_!==(_=k[6].info.carName+"")&&M(m,_)},d(k){k&&n(a)}}}function ve(o){let a,s=o[8]<5&&Ee(o);return{c(){s&&s.c(),a=me()},l(e){s&&s.l(e),a=me()},m(e,i){s&&s.m(e,i),Z(e,a,i)},p(e,i){e[8]<5&&s.p(e,i)},d(e){s&&s.d(e),e&&n(a)}}}function Se(o){let a,s,e,i,u,b=o[0][j]+"",z,V,_,m,y,k,h,f,w,q=o[1][j].info.carName+"",U,Q,D,F=o[1][j].info.price+"",H,W,P,G,Y,B,$,T,ee,te,A,le,se,re,O=o[1],g=[];for(let c=0;c<O.length;c+=1)g[c]=ve(he(o,O,c));return{c(){a=d("link"),s=E(),e=d("main"),i=d("div"),u=d("p"),z=x(b),V=E(),_=d("div"),m=d("div"),y=d("img"),h=E(),f=d("div"),w=d("p"),U=x(q),Q=E(),D=d("p"),H=x(F),W=E(),P=d("button"),G=d("i"),Y=E(),B=d("div");for(let c=0;c<g.length;c+=1)g[c].c();$=E(),T=d("button"),ee=x("RightArrow"),te=E(),A=d("button"),le=x("LeftArrow"),this.h()},l(c){const N=ye("svelte-1a1t2x7",document.head);a=p(N,"LINK",{href:!0,rel:!0,class:!0}),N.forEach(n),s=S(c),e=p(c,"MAIN",{class:!0});var r=v(e);i=p(r,"DIV",{id:!0,class:!0});var L=v(i);u=p(L,"P",{id:!0,class:!0});var ce=v(u);z=C(ce,b),ce.forEach(n),L.forEach(n),V=S(r),_=p(r,"DIV",{class:!0});var J=v(_);m=p(J,"DIV",{class:!0});var R=v(m);y=p(R,"IMG",{class:!0,src:!0,alt:!0}),h=S(R),f=p(R,"DIV",{style:!0,class:!0});var K=v(f);w=p(K,"P",{id:!0,style:!0,class:!0});var oe=v(w);U=C(oe,q),oe.forEach(n),Q=S(K),D=p(K,"P",{id:!0,style:!0,class:!0});var ne=v(D);H=C(ne,F),ne.forEach(n),K.forEach(n),W=S(R),P=p(R,"BUTTON",{id:!0,class:!0});var fe=v(P);G=p(fe,"I",{class:!0,style:!0}),v(G).forEach(n),fe.forEach(n),R.forEach(n),Y=S(J),B=p(J,"DIV",{class:!0});var ue=v(B);for(let ae=0;ae<g.length;ae+=1)g[ae].l(ue);ue.forEach(n),J.forEach(n),$=S(r),T=p(r,"BUTTON",{class:!0,id:!0});var de=v(T);ee=C(de,"RightArrow"),de.forEach(n),te=S(r),A=p(r,"BUTTON",{class:!0,id:!0});var pe=v(A);le=C(pe,"LeftArrow"),pe.forEach(n),r.forEach(n),this.h()},h(){t(a,"href","https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"),t(a,"rel","stylesheet"),t(a,"class","svelte-o9azik"),t(u,"id","textcart"),t(u,"class","svelte-o9azik"),t(i,"id","cart"),t(i,"class","svelte-o9azik"),t(y,"class","h-auto max-w-full rounded-lg selected svelte-o9azik"),X(y.src,k=o[1][j].imgSrc)||t(y,"src",k),t(y,"alt","gg"),t(w,"id","selectedName"),I(w,"display","inline"),t(w,"class","svelte-o9azik"),t(D,"id","selectedPrice"),I(D,"display","inline"),t(D,"class","svelte-o9azik"),I(f,"display","flex"),I(f,"justify-content","space-between"),I(f,"gap","50px"),I(f,"position","relative"),I(f,"bottom","30px"),I(f,"margin-left","10px"),I(f,"margin-right","10px"),t(f,"class","svelte-o9azik"),t(G,"class","bx bx-cart-add svelte-o9azik"),I(G,"font-size","40px"),t(P,"id","cartbutton"),t(P,"class","svelte-o9azik"),t(m,"class","container  svelte-o9azik"),t(B,"class","grid grid-cols-5 gap-4 svelte-o9azik"),t(_,"class","Grid grid gap-4 svelte-o9azik"),t(T,"class","scroll svelte-o9azik"),t(T,"id","rightscrollbutton"),t(A,"class","scroll svelte-o9azik"),t(A,"id","leftscrollbutton"),t(e,"class","svelte-o9azik")},m(c,N){l(document.head,a),Z(c,s,N),Z(c,e,N),l(e,i),l(i,u),l(u,z),l(e,V),l(e,_),l(_,m),l(m,y),l(m,h),l(m,f),l(f,w),l(w,U),l(f,Q),l(f,D),l(D,H),l(m,W),l(m,P),l(P,G),l(_,Y),l(_,B);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(B,null);l(e,$),l(e,T),l(T,ee),l(e,te),l(e,A),l(A,le),se||(re=[ie(P,"click",o[5]),ie(T,"click",o[2]),ie(A,"click",o[3])],se=!0)},p(c,[N]){if(N&1&&b!==(b=c[0][j]+"")&&M(z,b),N&2&&!X(y.src,k=c[1][j].imgSrc)&&t(y,"src",k),N&2&&q!==(q=c[1][j].info.carName+"")&&M(U,q),N&2&&F!==(F=c[1][j].info.price+"")&&M(H,F),N&2){O=c[1];let r;for(r=0;r<O.length;r+=1){const L=he(c,O,r);g[r]?g[r].p(L,N):(g[r]=ve(L),g[r].c(),g[r].m(B,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=O.length}},i:ge,o:ge,d(c){n(a),c&&n(s),c&&n(e),ze(g,c),se=!1,Ne(re)}}}let j=2;function Ie(o,a,s){let e=[],i=[{info:{carName:"Verdant Voyager X3000",price:"100£"},imgSrc:"sellingshopimg/oldcar.jpg"},{info:{carName:"Flycar",price:"200£"},imgSrc:"sellingshopimg/flycar.jpg"},{info:{carName:"Familycar",price:"300£"},imgSrc:"sellingshopimg/familycar.jpg"},{info:{carName:"Robotcar",price:"400£"},imgSrc:"sellingshopimg/robotcar.jpg"},{info:{carName:"Goofycar",price:"999£"},imgSrc:"sellingshopimg/goofycar.jpg"},{info:{carName:"Playingcar",price:"250£"},imgSrc:"sellingshopimg/playingcar.jpg"},{info:{carName:"Fastcar",price:"1000£"},imgSrc:"sellingshopimg/fastcar.jpg"},{info:{carName:"Boxcar",price:"20000£"},imgSrc:"sellingshopimg/boxcar.jpg"}];function u(){i.push(i.shift()),s(1,i=[...i])}function b(){i.unshift(i.pop()),s(1,i=[...i])}function z(){s(0,e=[...e,i[j].info]),console.log(e)}return[e,i,u,b,z,()=>{z()}]}class Ve extends _e{constructor(a){super(),ke(this,a,Ie,Se,be,{})}}export{Ve as default};
