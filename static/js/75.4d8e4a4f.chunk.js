(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[75],{612:function(e,t,a){"use strict";a.r(t),a.d(t,"SuspendedTeacherListClass",(function(){return S}));var c=a(19),n=a(20),i=a(21),l=a(22),s=a(4),r=a(36),d=a(7),j=a.n(d),o=a(95),b=a(8),h=a(41),u=a(28),x=a(39),m=a(138),O=a(92),f=a(1),p=function(e){var t=e.InternalRequested,a=e.qualification,c=Object(s.useState)(""),n=Object(u.a)(c,2),i=n[0],l=n[1],r=Object(s.useState)(""),d=Object(u.a)(r,2),j=d[0],o=d[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"mt-3",children:[Object(f.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center px-3 rounded",children:[Object(f.jsx)("div",{className:"flex-1 pr-2",children:Object(f.jsx)(x.a,{error:"",label:"Search",name:"",onChange:function(e){return l(e.target.value)},placeholder:"Search by district name",value:i,size:"sm"})}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)(m.a,{data:[{title:"All qualifications",value:""}].concat(Object(h.a)(a.map((function(e){return{title:e.qualification_name,value:e.qualification_id}})))),error:"",name:"select_level",onChange:function(e){return o(e.target.value)},label:"Qualification",placeholder:"Select",value:j,size:"sm"})})]}),Object(f.jsxs)("table",{className:"w-full text-left",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"text-center",children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"Qualification"}),Object(f.jsx)("th",{children:"Position"}),Object(f.jsx)("th",{children:"Current School"}),Object(f.jsx)("th",{children:"Requested Date"}),Object(f.jsx)("th",{children:"Status"}),Object(f.jsx)("th",{className:"w-80",children:"Reason"})]})}),Object(f.jsx)("tbody",{children:t.length<=0?Object(f.jsx)("tr",{children:Object(f.jsx)("td",{colSpan:6,className:"p-6 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(f.jsx)(O.a,{size:"md",children:"No results found"})})}):Object(f.jsx)(f.Fragment,{})})]})]})})},v=function(e){var t=e.InternalRequested,a=e.qualification,c=Object(s.useState)(""),n=Object(u.a)(c,2),i=n[0],l=n[1],r=Object(s.useState)(""),d=Object(u.a)(r,2),j=d[0],o=d[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"mt-3",children:[Object(f.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center px-3 rounded",children:[Object(f.jsx)("div",{className:"flex-1 pr-2",children:Object(f.jsx)(x.a,{error:"",label:"Search",name:"",onChange:function(e){return l(e.target.value)},placeholder:"Search by district name",value:i,size:"sm"})}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)(m.a,{data:[{title:"All qualifications",value:""}].concat(Object(h.a)(a.map((function(e){return{title:e.qualification_name,value:e.qualification_id}})))),error:"",name:"select_level",onChange:function(e){return o(e.target.value)},label:"Qualification",placeholder:"Select",value:j,size:"sm"})})]}),Object(f.jsxs)("table",{className:"w-full text-left",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"text-center",children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"Qualification"}),Object(f.jsx)("th",{children:"Position"}),Object(f.jsx)("th",{children:"Current School"}),Object(f.jsx)("th",{children:"Requested Date"}),Object(f.jsx)("th",{children:"Status"}),Object(f.jsx)("th",{className:"w-80",children:"Reason"})]})}),Object(f.jsx)("tbody",{children:t.length<=0?Object(f.jsx)("tr",{children:Object(f.jsx)("td",{colSpan:6,className:"p-6 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(f.jsx)(O.a,{size:"md",children:"No results found"})})}):Object(f.jsx)(f.Fragment,{})})]})]})})},g=a(12),N=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getQualification()},n.state={openTab:1,loading:!1,qualification:[],error:{target:null,msg:""}},n}return Object(n.a)(a,[{key:"getQualification",value:function(){var e=this;Object(b.a)(),j.a.get("".concat(g.e,"/qualifications")).then((function(e){return e.data})).then((function(t){e.setState({qualification:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(o.a,{title:"Suspended / Terminate (".concat(null===(e=this.props.basic.academic_calender)||void 0===e?void 0:e.academic_year_name,")"),subTitle:"",children:Object(f.jsx)("div",{className:"flex flex-wrap",children:Object(f.jsxs)("div",{className:"w-full",children:[Object(f.jsxs)("ul",{className:"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row",role:"tablist",children:[Object(f.jsx)("li",{className:"-mb-px mr-2 last:mr-0 flex-auto text-center",children:Object(f.jsx)("a",{className:"text-xs font-bold uppercase px-5 py-3 rounded block leading-normal "+(1===this.state.openTab?"text-white bg-accent-800":"text-slate-600 bg-gray-400"),onClick:function(e){e.preventDefault(),t.setState({openTab:1})},"data-toggle":"tab",href:"#link1",role:"tablist",children:"List of Suspended Teachers"})}),Object(f.jsx)("li",{className:"-mb-px mr-2 last:mr-0 flex-auto text-center",children:Object(f.jsx)("a",{className:"text-xs font-bold uppercase px-5 py-3 rounded block leading-normal "+(2===this.state.openTab?"text-white bg-accent-800":"text-slate-600 bg-gray-400"),onClick:function(e){e.preventDefault(),t.setState({openTab:2})},"data-toggle":"tab",href:"#link2",role:"tablist",children:"List Of Terminated Teachers"})})]}),Object(f.jsx)("div",{className:"relative flex flex-col min-w-0 break-word w-full",children:Object(f.jsx)("div",{className:"px-4 py-5 flex-auto",children:Object(f.jsxs)("div",{className:"tab-content tab-space",children:[1===this.state.openTab&&Object(f.jsx)("div",{id:"link1",children:Object(f.jsx)(v,{InternalRequested:[],qualification:this.state.qualification})}),2===this.state.openTab&&Object(f.jsx)("div",{id:"link2",children:Object(f.jsx)(p,{InternalRequested:[],qualification:this.state.qualification})})]})})})]})})})})}}]),a}(s.Component),S=Object(r.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(N)}}]);
//# sourceMappingURL=75.4d8e4a4f.chunk.js.map