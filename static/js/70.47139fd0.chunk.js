(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[70],{589:function(e,t,c){"use strict";c.r(t),c.d(t,"PlacementPlacementSummaryREB",(function(){return m}));var s=c(28),r=c(4),a=c(36),l=c(13),d=c(47),n=c(53),j=c(92),o=c(138),b=c(24),i=c(16),h=c(1),m=Object(a.b)((function(e){return{auth:e.auth}}),{})((function(e){e.auth;var t=Object(r.useState)(!1),c=Object(s.a)(t,2),a=c[0],m=c[1],x=Object(r.useState)(i.d[(new Date).getMonth()]),O=Object(s.a)(x,2),p=O[0],u=O[1],N=Object(r.useState)(""),f=Object(s.a)(N,2),_=f[0],g=f[1],v=Object(r.useState)({district_total_summary:[],pla_district_total_summary:[]}),y=Object(s.a)(v,2),S=y[0],R=y[1];Object(r.useEffect)((function(){!0===a&&Object(l.U)(p,"1",(function(e,t,c){null!==t&&R(t),""!==_&&g(c),m(!1)}))}),[a,p,_]);var w=0,M=0,P=0,T=0;return Object(h.jsxs)(n.a,{children:[Object(h.jsxs)("div",{className:"py-1 border-b flex items-center",children:[Object(h.jsxs)("div",{className:"flex-1",children:[Object(h.jsx)(j.a,{children:"Non Reported placement report"}),Object(h.jsxs)("p",{className:"text-gray-500",children:["List of districts, with the reported and non reported ","(","Placement report",")"]})]}),Object(h.jsx)("div",{className:"pr-2",children:"Register the stuff"}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(o.a,{onChange:function(e){u(e.target.value),e.target.value!==p&&m(!0)},value:p,error:"",label:"Select month",placeholder:"Select month",name:"",data:i.d.map((function(e){return{title:e,value:e}}))})})]}),""!==_&&Object(h.jsx)(d.a,{theme:"danger",children:_}),Object(h.jsxs)("table",{className:"w-full",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"text-left",children:[Object(h.jsx)("th",{className:"p-2 border",children:"#"}),Object(h.jsx)("th",{className:"p-2 border",children:"District name"}),Object(h.jsx)("th",{className:"p-2 border",children:"Total schools"}),Object(h.jsx)("th",{className:"p-2 border",children:"Reported schools"}),Object(h.jsx)("th",{className:"p-2 border",children:"Reported schools %"}),Object(h.jsx)("th",{className:"p-2 border",children:"Non Reported schools"})]})}),Object(h.jsxs)("tbody",{children:[!0===a&&Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:8,className:"py-8 text-center",children:Object(h.jsx)(b.a,{})})}),!1===a&&0===S.district_total_summary.length&&Object(h.jsx)("tr",{children:Object(h.jsxs)("td",{colSpan:8,className:"py-8 text-center",children:[Object(h.jsx)("h2",{className:"text-2xl",children:"No placement found!"}),Object(h.jsx)("p",{children:"No placement found!"})]})}),S.district_total_summary.map((function(e,t){var c=S.pla_district_total_summary.find((function(t){return t.district_code===e.district_code})),s=+e.total,r=c?c.total:0,a=Object(i.l)(+r,+e.total),l=c?+e.total-+c.total:e.total;return w+=s,P=+P+ +r,M=+M+ +a,T=+T+ +l,Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"border p-2",children:t+1}),Object(h.jsx)("td",{className:"border p-2",children:e.district_name}),Object(h.jsx)("td",{className:"border p-2",children:e.total}),Object(h.jsx)("td",{className:"border p-2",children:r}),Object(h.jsxs)("td",{className:"border p-2 font-bold  ".concat(100===a?"text-green-900 bg-green-50":"text-blue-800"),children:[a,"%"]}),Object(h.jsx)("td",{className:"border p-2 text-red-800 font-bold",children:l})]})})),S.district_total_summary.length>=1&&Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"border p-2",colSpan:2}),Object(h.jsx)("td",{className:"border p-2",children:w}),Object(h.jsx)("td",{className:"border p-2",children:P}),Object(h.jsxs)("td",{className:"border p-2 font-bold text-blue",children:[Object(i.l)(+P,+w),"%"]}),Object(h.jsx)("td",{className:"border p-2 font-bold text-red-800",children:T})]})]})]})]})}))}}]);
//# sourceMappingURL=70.47139fd0.chunk.js.map