<<<<<<< HEAD:static/js/41.ee7acbea.chunk.js
(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[41],{137:function(e,t,s){"use strict";var a=s(29),i=s(30),n=s(31),r=s(32),c=s(2),l=s(17),o=s(10),d=s(25),h=s(33),m=s(44),j=s(43),b=s(19),u=s(13),x=s(27),p=s(129),O=s(111),N=s(1),f=Object(l.b)(null,{FC_GetAllTermination:o.l})((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(h.a,{className:"animate__animated animate__zoomIn animate__faster",children:[Object(N.jsxs)("div",{className:"py-2 flex items-center",children:[Object(N.jsx)("div",{className:"flex-1",children:Object(N.jsxs)(m.a,{children:["View ",e.thisViewIsFor," progress"]})}),Object(N.jsx)("div",{className:"",children:Object(N.jsx)(x.a,{onClick:function(){return e.setThiTermination(null)},theme:"default",children:"Close"})})]}),Object(N.jsxs)("div",{className:"bg-white p-3 shadow-sm rounded-sm",children:[Object(N.jsxs)("div",{className:"flex items-center space-x-2 font-semibold text-gray-900 leading-8",children:[Object(N.jsx)("span",{className:"text-primary-800",children:Object(N.jsx)(u.R,{size:25})}),Object(N.jsx)("span",{className:"tracking-wide",children:"Staff info"})]}),Object(N.jsx)("div",{className:"text-gray-700",children:Object(N.jsxs)("div",{className:"grid md:grid-cols-2 text-sm",children:[Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"Full Name"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.techer_name})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"School"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.school_name})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"School code"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.school_code})]})]})})]}),Object(N.jsxs)("div",{className:"bg-white p-3 border rounded",children:[Object(N.jsxs)("div",{className:"flex items-center px-2 py-1 bg-gray-200 rounded",children:[Object(N.jsx)(u.J,{className:"w-8"}),Object(N.jsx)("p",{children:e.thiTermination.reason_name})]}),Object(N.jsxs)("div",{className:"flex flex-col mt-3",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Comment:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_by_comment})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Start date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_to_suspend_from&&!Object(b.f)(e.thiTermination.requested_to_suspend_from)?Object(b.a)(e.thiTermination.requested_to_suspend_from):"-"})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"End date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_to_suspend_to&&!Object(b.f)(e.thiTermination.requested_to_suspend_to)?Object(b.a)(e.thiTermination.requested_to_suspend_to):"-"})]}),Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Request date:"}),Object(N.jsx)("p",{className:"text-base",children:Object(b.a)(e.thiTermination.requested_by_date)})]})]}),e.thiTermination.status!==O.a.PENDING&&e.thiTermination.status!==O.a.PENDING_SUSPENSION&&Object(N.jsxs)("section",{children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Feedback:"}),Object(N.jsxs)("div",{className:"bg-white p-3 border rounded",children:[Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Decision:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.status})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Start date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_to_suspend_from&&!Object(b.f)(e.thiTermination.decided_to_suspend_from)?Object(b.a)(e.thiTermination.decided_to_suspend_from):"-"})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"End date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_to_suspend_to&&!Object(b.f)(e.thiTermination.decided_to_suspend_to)?Object(b.a)(e.thiTermination.decided_to_suspend_to):"-"})]}),e.thiTermination.status!==O.a.REJECTED&&e.thiTermination.mayor_letter&&Object(N.jsx)(p.a,{linkFor:"uploaded",first_id:e.thiTermination.mayor_letter,last_id:"",title:"Confirmation letter"}),Object(N.jsxs)("div",{className:"flex flex-col",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Comment:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_by_comment})]}),Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Done on:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_by_date?Object(b.a)(e.thiTermination.decided_by_date):"-"})]})]})]}),Object(N.jsx)("section",{className:"flex items-center justify-between bg-gray-50 rounded mt-3",children:Object(N.jsx)("div",{className:"mx-4 my-4",children:Object(N.jsx)("span",{className:"".concat(e.thiTermination.status===O.a.PENDING||e.thiTermination.status===O.a.PENDING_SUSPENSION?"text-yellow-700":e.thiTermination.status===O.a.REJECTED?"text-red-700":"text-green-700"," italic font-semibold"),children:e.thiTermination.status===O.a.PENDING||e.thiTermination.status===O.a.PENDING_SUSPENSION?"Pending":e.thiTermination.status===O.a.REJECTED?"Canceled":"Confirmed"})})})]})})})),_=s(107),g=s(34),T=s(115),v=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setThisStatus=function(e){i.setState({thisStatus:e})},i.filterTerminations=function(e,t){var s=e;return s=e.filter((function(e){return e.status!==O.a.PENDING&&e.status!==O.a.TERMINATED&&null!==e.requested_to_suspend_from})),"all"!==t&&(s=s.filter((function(e){return e.status===t}))),s},i.state={search:"",thisStatus:"all"},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"mt-3",children:[Object(N.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center flex-col-reverse sm:flex-row pl-3 pr-2 rounded",children:[Object(N.jsx)("div",{className:"w-full sm:flex-1 pr-2",children:Object(N.jsx)(g.a,{error:"",label:"Search",name:"",type:"search",onChange:function(t){return e.setState({search:t.target.value})},placeholder:"Search by name, reason, date, status",value:this.state.search,size:"sm",disabled:null===this.props.suspensionItems||0===this.filterTerminations(this.props.suspensionItems,this.state.thisStatus).length})}),Object(N.jsx)("div",{className:"w-full sm:w-auto",children:Object(N.jsx)(_.a,{data:[{title:"All",value:"all"},{title:"Pending",value:O.a.PENDING_SUSPENSION},{title:"Suspended",value:O.a.SUSPENDED},{title:"Rejected",value:O.a.REJECTED}],error:"",name:"select_status",onChange:function(t){return e.setState({thisStatus:t.target.value})},label:"Status",placeholder:"Select status",value:this.state.thisStatus,size:"sm"})})]}),Object(N.jsx)("div",{className:"my-3 w-full overflow-x-auto",children:Object(N.jsxs)("table",{className:"w-full text-left table-auto",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"p-2",children:"#"}),Object(N.jsx)("th",{className:"p-2",children:"Names"}),Object(N.jsx)("th",{className:"p-2",children:"School"}),Object(N.jsx)("th",{className:"p-2",children:"Reason"}),Object(N.jsx)("th",{className:"p-2",children:"Date"}),Object(N.jsx)("th",{className:"p-2",children:"Status"}),Object(N.jsx)("th",{className:"p-2"})]})}),Object(N.jsx)("tbody",{children:this.props.loading?Object(N.jsx)(T.a,{cols:6}):null===this.props.suspensionItems||this.filterTerminations(this.props.suspensionItems,this.state.thisStatus).length<=0?Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(N.jsx)(m.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):Object(b.g)(this.filterTerminations(this.props.suspensionItems,this.state.thisStatus),this.state.search).map((function(t,s){return Object(N.jsxs)("tr",{className:"group border-b border-t rounded hover:bg-accent-800 hover:bg-opacity-20 cursor-pointer",onClick:function(){return e.props.setThisTermination(t)},children:[Object(N.jsx)("td",{className:"p-2",children:s+1}),Object(N.jsx)("td",{className:"p-2",children:t.techer_name}),Object(N.jsx)("td",{className:"p-2",children:t.school_name}),Object(N.jsx)("td",{className:"p-2",children:t.reason_name}),Object(N.jsx)("td",{className:"p-2",children:t.status===O.a.PENDING_SUSPENSION?Object(b.a)(t.requested_by_date):t.decided_by_date&&Object(b.a)(t.decided_by_date)}),Object(N.jsx)("td",{className:"p-2",children:t.status}),Object(N.jsx)("td",{className:"p-1 text-center",children:Object(N.jsx)(x.a,{onClick:function(){return e.props.setThisTermination(t)},children:"View"})})]},s+t.change_staff_status_id)}))})]})})]})}}]),s}(c.Component),S=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setThisStatus=function(e){i.setState({thisStatus:e})},i.filterTerminations=function(e,t){console.log("===================================="),console.log({allData:e}),console.log("====================================");var s=e;return s=e.filter((function(e){return e.status!==O.a.PENDING_SUSPENSION&&e.status!==O.a.SUSPENDED&&(null===e.requested_to_suspend_from||Object(b.f)(e.requested_to_suspend_from))})),"all"!==t&&(s=s.filter((function(e){return e.status===t}))),s},i.state={search:"",thisStatus:"all"},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"mt-3",children:[Object(N.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center flex-col-reverse sm:flex-row pl-3 pr-2 rounded",children:[Object(N.jsx)("div",{className:"w-full sm:flex-1 pr-2",children:Object(N.jsx)(g.a,{error:"",label:"Search",name:"",type:"search",onChange:function(t){return e.setState({search:t.target.value})},placeholder:"Search by name, reason, date, status",value:this.state.search,size:"sm",disabled:null===this.props.terminations||0===this.filterTerminations(this.props.terminations,this.state.thisStatus).length})}),Object(N.jsx)("div",{className:"w-full sm:w-auto",children:Object(N.jsx)(_.a,{data:[{title:"All",value:"all"},{title:"Pending",value:O.a.PENDING},{title:"Terminated",value:O.a.TERMINATED},{title:"Rejected",value:O.a.REJECTED}],error:"",name:"select_status",onChange:function(t){return e.setState({thisStatus:t.target.value})},label:"Status",placeholder:"Select status",value:this.state.thisStatus,size:"sm"})})]}),Object(N.jsx)("div",{className:"my-3 w-full overflow-x-auto",children:Object(N.jsxs)("table",{className:"w-full text-left table-auto",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"p-2",children:"#"}),Object(N.jsx)("th",{className:"p-2",children:"Names"}),Object(N.jsx)("th",{className:"p-2",children:"School"}),Object(N.jsx)("th",{className:"p-2",children:"Reason"}),Object(N.jsx)("th",{className:"p-2",children:"Date"}),Object(N.jsx)("th",{className:"p-2",children:"Status"}),Object(N.jsx)("th",{className:"p-2"})]})}),Object(N.jsx)("tbody",{children:this.props.loading?Object(N.jsx)(T.a,{cols:6}):null===this.props.terminations||this.filterTerminations(this.props.terminations,this.state.thisStatus).length<=0?Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(N.jsx)(m.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):Object(b.g)(this.filterTerminations(this.props.terminations,this.state.thisStatus),this.state.search).map((function(t,s){return Object(N.jsxs)("tr",{className:"group border-b border-t rounded hover:bg-accent-800 hover:bg-opacity-20 cursor-pointer",onClick:function(){return e.props.setThisTermination(t)},children:[Object(N.jsx)("td",{className:"p-2",children:s+1}),Object(N.jsx)("td",{className:"p-2",children:t.techer_name}),Object(N.jsx)("td",{className:"p-2",children:t.school_name}),Object(N.jsx)("td",{className:"p-2",children:t.reason_name}),Object(N.jsx)("td",{className:"p-2",children:t.status===O.a.PENDING?Object(b.a)(t.requested_by_date):t.decided_by_date&&Object(b.a)(t.decided_by_date)}),Object(N.jsx)("td",{className:"p-2",children:t.status}),Object(N.jsx)("td",{className:"p-1 text-center",children:Object(N.jsx)(x.a,{onClick:function(){return e.props.setThisTermination(t)},children:"View"})})]},s+t.change_staff_status_id)}))})]})})]})}}]),s}(c.Component),y=s(127),E=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setLoading=function(e){i.setState({loading:e})},i.setError=function(e){i.setState({error:e})},i.setThisTermination=function(e){i.setState({thisTermination:e})},i.getTerminationById=function(e,t){return e.find((function(e){return e.change_staff_status_id===t}))},i.componentDidMount=function(){i.props.FC_GetAllTermination("hd",(function(e,t,s){i.setLoading(e),e||Object(b.f)(s)||i.setError({target:"main-error",msg:s})}))},i.state={loading:!0,error:{target:null,msg:""},thisTermination:null},i}return Object(i.a)(s,[{key:"render",value:function(){return this.state.loading?Object(N.jsx)("div",{className:"p-8 text-center",children:Object(N.jsx)("div",{className:"mx-auto",children:Object(N.jsx)(j.a,{})})}):Object(N.jsxs)(N.Fragment,{children:["main-success"===this.state.error.target&&Object(N.jsx)(d.a,{theme:"success",children:this.state.error.msg}),"main-error"===this.state.error.target&&Object(N.jsx)(d.a,{theme:"danger",children:this.state.error.msg}),null===this.state.thisTermination?Object(N.jsxs)(h.a,{children:[Object(N.jsx)(m.a,{children:this.props.thisPage}),this.props.thisPage===y.a.terminationTab?Object(N.jsx)(S,{terminations:this.props.terminations.allTermination,loading:this.state.loading,setThisTermination:this.setThisTermination}):Object(N.jsx)(v,{suspensionItems:this.props.terminations.allTermination,loading:this.state.loading,setThisTermination:this.setThisTermination})]}):Object(N.jsx)(f,{setThiTermination:this.setThisTermination,thiTermination:this.getTerminationById(this.props.terminations.allTermination,this.state.thisTermination.change_staff_status_id),thisViewIsFor:this.props.thisPage===y.a.terminationTab?"termination":"suspension"})]})}}]),s}(c.Component);t.a=Object(l.b)((function(e){return{auth:e.auth,basic:e.basic,terminations:e.terminations}}),{FC_GetAllTermination:o.l})(E)},165:function(e,t,s){"use strict";s.r(t),s.d(t,"HTSuspension",(function(){return r}));var a=s(127),i=s(137),n=s(1),r=function(){return Object(n.jsx)(i.a,{thisPage:a.a.suspensionTab})}}}]);
//# sourceMappingURL=41.ee7acbea.chunk.js.map
=======
(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[41],{137:function(e,t,s){"use strict";var a=s(29),i=s(30),n=s(31),r=s(32),c=s(2),l=s(17),o=s(10),d=s(27),h=s(33),m=s(44),j=s(43),b=s(19),u=s(13),x=s(26),p=s(129),O=s(110),N=s(1),f=Object(l.b)(null,{FC_GetAllTermination:o.l})((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(h.a,{className:"animate__animated animate__zoomIn animate__faster",children:[Object(N.jsxs)("div",{className:"py-2 flex items-center",children:[Object(N.jsx)("div",{className:"flex-1",children:Object(N.jsxs)(m.a,{children:["View ",e.thisViewIsFor," progress"]})}),Object(N.jsx)("div",{className:"",children:Object(N.jsx)(x.a,{onClick:function(){return e.setThiTermination(null)},theme:"default",children:"Close"})})]}),Object(N.jsxs)("div",{className:"bg-white p-3 shadow-sm rounded-sm",children:[Object(N.jsxs)("div",{className:"flex items-center space-x-2 font-semibold text-gray-900 leading-8",children:[Object(N.jsx)("span",{className:"text-primary-800",children:Object(N.jsx)(u.R,{size:25})}),Object(N.jsx)("span",{className:"tracking-wide",children:"Staff info"})]}),Object(N.jsx)("div",{className:"text-gray-700",children:Object(N.jsxs)("div",{className:"grid md:grid-cols-2 text-sm",children:[Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"Full Name"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.techer_name})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"School"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.school_name})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)("div",{className:"px-4 py-2 font-semibold",children:"School code"}),Object(N.jsx)("div",{className:"px-4 py-2",children:e.thiTermination.school_code})]})]})})]}),Object(N.jsxs)("div",{className:"bg-white p-3 border rounded",children:[Object(N.jsxs)("div",{className:"flex items-center px-2 py-1 bg-gray-200 rounded",children:[Object(N.jsx)(u.J,{className:"w-8"}),Object(N.jsx)("p",{children:e.thiTermination.reason_name})]}),Object(N.jsxs)("div",{className:"flex flex-col mt-3",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Comment:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_by_comment})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Start date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_to_suspend_from&&!Object(b.f)(e.thiTermination.requested_to_suspend_from)?Object(b.a)(e.thiTermination.requested_to_suspend_from):"-"})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"End date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.requested_to_suspend_to&&!Object(b.f)(e.thiTermination.requested_to_suspend_to)?Object(b.a)(e.thiTermination.requested_to_suspend_to):"-"})]}),Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Request date:"}),Object(N.jsx)("p",{className:"text-base",children:Object(b.a)(e.thiTermination.requested_by_date)})]})]}),e.thiTermination.status!==O.a.PENDING&&e.thiTermination.status!==O.a.PENDING_SUSPENSION&&Object(N.jsxs)("section",{children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Feedback:"}),Object(N.jsxs)("div",{className:"bg-white p-3 border rounded",children:[Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Decision:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.status})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Start date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_to_suspend_from&&!Object(b.f)(e.thiTermination.decided_to_suspend_from)?Object(b.a)(e.thiTermination.decided_to_suspend_from):"-"})]}),"suspension"===e.thisViewIsFor&&Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"End date:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_to_suspend_to&&!Object(b.f)(e.thiTermination.decided_to_suspend_to)?Object(b.a)(e.thiTermination.decided_to_suspend_to):"-"})]}),e.thiTermination.status!==O.a.REJECTED&&e.thiTermination.mayor_letter&&Object(N.jsx)(p.a,{linkFor:"uploaded",first_id:e.thiTermination.mayor_letter,last_id:"",title:"Confirmation letter"}),Object(N.jsxs)("div",{className:"flex flex-col",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Comment:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_by_comment})]}),Object(N.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(N.jsx)("span",{className:"text-sm text-gray-500",children:"Done on:"}),Object(N.jsx)("p",{className:"text-base",children:e.thiTermination.decided_by_date?Object(b.a)(e.thiTermination.decided_by_date):"-"})]})]})]}),Object(N.jsx)("section",{className:"flex items-center justify-between bg-gray-50 rounded mt-3",children:Object(N.jsx)("div",{className:"mx-4 my-4",children:Object(N.jsx)("span",{className:"".concat(e.thiTermination.status===O.a.PENDING||e.thiTermination.status===O.a.PENDING_SUSPENSION?"text-yellow-700":e.thiTermination.status===O.a.REJECTED?"text-red-700":"text-green-700"," italic font-semibold"),children:e.thiTermination.status===O.a.PENDING||e.thiTermination.status===O.a.PENDING_SUSPENSION?"Pending":e.thiTermination.status===O.a.REJECTED?"Canceled":"Confirmed"})})})]})})})),_=s(106),g=s(34),T=s(114),v=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setThisStatus=function(e){i.setState({thisStatus:e})},i.filterTerminations=function(e,t){var s=e;return s=e.filter((function(e){return e.status!==O.a.PENDING&&e.status!==O.a.TERMINATED&&null!==e.requested_to_suspend_from})),"all"!==t&&(s=s.filter((function(e){return e.status===t}))),s},i.state={search:"",thisStatus:"all"},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"mt-3",children:[Object(N.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center flex-col-reverse sm:flex-row pl-3 pr-2 rounded",children:[Object(N.jsx)("div",{className:"w-full sm:flex-1 pr-2",children:Object(N.jsx)(g.a,{error:"",label:"Search",name:"",type:"search",onChange:function(t){return e.setState({search:t.target.value})},placeholder:"Search by name, reason, date, status",value:this.state.search,size:"sm",disabled:null===this.props.suspensionItems||0===this.filterTerminations(this.props.suspensionItems,this.state.thisStatus).length})}),Object(N.jsx)("div",{className:"w-full sm:w-auto",children:Object(N.jsx)(_.a,{data:[{title:"All",value:"all"},{title:"Pending",value:O.a.PENDING_SUSPENSION},{title:"Suspended",value:O.a.SUSPENDED},{title:"Rejected",value:O.a.REJECTED}],error:"",name:"select_status",onChange:function(t){return e.setState({thisStatus:t.target.value})},label:"Status",placeholder:"Select status",value:this.state.thisStatus,size:"sm"})})]}),Object(N.jsx)("div",{className:"my-3 w-full overflow-x-auto",children:Object(N.jsxs)("table",{className:"w-full text-left table-auto",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"p-2",children:"#"}),Object(N.jsx)("th",{className:"p-2",children:"Names"}),Object(N.jsx)("th",{className:"p-2",children:"School"}),Object(N.jsx)("th",{className:"p-2",children:"Reason"}),Object(N.jsx)("th",{className:"p-2",children:"Date"}),Object(N.jsx)("th",{className:"p-2",children:"Status"}),Object(N.jsx)("th",{className:"p-2"})]})}),Object(N.jsx)("tbody",{children:this.props.loading?Object(N.jsx)(T.a,{cols:6}):null===this.props.suspensionItems||this.filterTerminations(this.props.suspensionItems,this.state.thisStatus).length<=0?Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(N.jsx)(m.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):Object(b.g)(this.filterTerminations(this.props.suspensionItems,this.state.thisStatus),this.state.search).map((function(t,s){return Object(N.jsxs)("tr",{className:"group border-b border-t rounded hover:bg-accent-800 hover:bg-opacity-20 cursor-pointer",onClick:function(){return e.props.setThisTermination(t)},children:[Object(N.jsx)("td",{className:"p-2",children:s+1}),Object(N.jsx)("td",{className:"p-2",children:t.techer_name}),Object(N.jsx)("td",{className:"p-2",children:t.school_name}),Object(N.jsx)("td",{className:"p-2",children:t.reason_name}),Object(N.jsx)("td",{className:"p-2",children:t.status===O.a.PENDING_SUSPENSION?Object(b.a)(t.requested_by_date):t.decided_by_date&&Object(b.a)(t.decided_by_date)}),Object(N.jsx)("td",{className:"p-2",children:t.status}),Object(N.jsx)("td",{className:"p-1 text-center",children:Object(N.jsx)(x.a,{onClick:function(){return e.props.setThisTermination(t)},children:"View"})})]},s+t.change_staff_status_id)}))})]})})]})}}]),s}(c.Component),S=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setThisStatus=function(e){i.setState({thisStatus:e})},i.filterTerminations=function(e,t){console.log("===================================="),console.log({allData:e}),console.log("====================================");var s=e;return s=e.filter((function(e){return e.status!==O.a.PENDING_SUSPENSION&&e.status!==O.a.SUSPENDED&&(null===e.requested_to_suspend_from||Object(b.f)(e.requested_to_suspend_from))})),"all"!==t&&(s=s.filter((function(e){return e.status===t}))),s},i.state={search:"",thisStatus:"all"},i}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"mt-3",children:[Object(N.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center flex-col-reverse sm:flex-row pl-3 pr-2 rounded",children:[Object(N.jsx)("div",{className:"w-full sm:flex-1 pr-2",children:Object(N.jsx)(g.a,{error:"",label:"Search",name:"",type:"search",onChange:function(t){return e.setState({search:t.target.value})},placeholder:"Search by name, reason, date, status",value:this.state.search,size:"sm",disabled:null===this.props.terminations||0===this.filterTerminations(this.props.terminations,this.state.thisStatus).length})}),Object(N.jsx)("div",{className:"w-full sm:w-auto",children:Object(N.jsx)(_.a,{data:[{title:"All",value:"all"},{title:"Pending",value:O.a.PENDING},{title:"Terminated",value:O.a.TERMINATED},{title:"Rejected",value:O.a.REJECTED}],error:"",name:"select_status",onChange:function(t){return e.setState({thisStatus:t.target.value})},label:"Status",placeholder:"Select status",value:this.state.thisStatus,size:"sm"})})]}),Object(N.jsx)("div",{className:"my-3 w-full overflow-x-auto",children:Object(N.jsxs)("table",{className:"w-full text-left table-auto",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"p-2",children:"#"}),Object(N.jsx)("th",{className:"p-2",children:"Names"}),Object(N.jsx)("th",{className:"p-2",children:"School"}),Object(N.jsx)("th",{className:"p-2",children:"Reason"}),Object(N.jsx)("th",{className:"p-2",children:"Date"}),Object(N.jsx)("th",{className:"p-2",children:"Status"}),Object(N.jsx)("th",{className:"p-2"})]})}),Object(N.jsx)("tbody",{children:this.props.loading?Object(N.jsx)(T.a,{cols:6}):null===this.props.terminations||this.filterTerminations(this.props.terminations,this.state.thisStatus).length<=0?Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(N.jsx)(m.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):Object(b.g)(this.filterTerminations(this.props.terminations,this.state.thisStatus),this.state.search).map((function(t,s){return Object(N.jsxs)("tr",{className:"group border-b border-t rounded hover:bg-accent-800 hover:bg-opacity-20 cursor-pointer",onClick:function(){return e.props.setThisTermination(t)},children:[Object(N.jsx)("td",{className:"p-2",children:s+1}),Object(N.jsx)("td",{className:"p-2",children:t.techer_name}),Object(N.jsx)("td",{className:"p-2",children:t.school_name}),Object(N.jsx)("td",{className:"p-2",children:t.reason_name}),Object(N.jsx)("td",{className:"p-2",children:t.status===O.a.PENDING?Object(b.a)(t.requested_by_date):t.decided_by_date&&Object(b.a)(t.decided_by_date)}),Object(N.jsx)("td",{className:"p-2",children:t.status}),Object(N.jsx)("td",{className:"p-1 text-center",children:Object(N.jsx)(x.a,{onClick:function(){return e.props.setThisTermination(t)},children:"View"})})]},s+t.change_staff_status_id)}))})]})})]})}}]),s}(c.Component),y=s(127),E=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).setLoading=function(e){i.setState({loading:e})},i.setError=function(e){i.setState({error:e})},i.setThisTermination=function(e){i.setState({thisTermination:e})},i.getTerminationById=function(e,t){return e.find((function(e){return e.change_staff_status_id===t}))},i.componentDidMount=function(){i.props.FC_GetAllTermination("hd",(function(e,t,s){i.setLoading(e),e||Object(b.f)(s)||i.setError({target:"main-error",msg:s})}))},i.state={loading:!0,error:{target:null,msg:""},thisTermination:null},i}return Object(i.a)(s,[{key:"render",value:function(){return this.state.loading?Object(N.jsx)("div",{className:"p-8 text-center",children:Object(N.jsx)("div",{className:"mx-auto",children:Object(N.jsx)(j.a,{})})}):Object(N.jsxs)(N.Fragment,{children:["main-success"===this.state.error.target&&Object(N.jsx)(d.a,{theme:"success",children:this.state.error.msg}),"main-error"===this.state.error.target&&Object(N.jsx)(d.a,{theme:"danger",children:this.state.error.msg}),null===this.state.thisTermination?Object(N.jsxs)(h.a,{children:[Object(N.jsx)(m.a,{children:this.props.thisPage}),this.props.thisPage===y.a.terminationTab?Object(N.jsx)(S,{terminations:this.props.terminations.allTermination,loading:this.state.loading,setThisTermination:this.setThisTermination}):Object(N.jsx)(v,{suspensionItems:this.props.terminations.allTermination,loading:this.state.loading,setThisTermination:this.setThisTermination})]}):Object(N.jsx)(f,{setThiTermination:this.setThisTermination,thiTermination:this.getTerminationById(this.props.terminations.allTermination,this.state.thisTermination.change_staff_status_id),thisViewIsFor:this.props.thisPage===y.a.terminationTab?"termination":"suspension"})]})}}]),s}(c.Component);t.a=Object(l.b)((function(e){return{auth:e.auth,basic:e.basic,terminations:e.terminations}}),{FC_GetAllTermination:o.l})(E)},165:function(e,t,s){"use strict";s.r(t),s.d(t,"HTSuspension",(function(){return r}));var a=s(127),i=s(137),n=s(1),r=function(){return Object(n.jsx)(i.a,{thisPage:a.a.suspensionTab})}}}]);
//# sourceMappingURL=41.6bac2f84.chunk.js.map
>>>>>>> 0a7aa555305892b71d461279e6da26d356924de4:static/js/41.6bac2f84.chunk.js
