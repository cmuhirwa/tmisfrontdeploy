(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[62],{586:function(e,t,c){"use strict";c.r(t),c.d(t,"DistributedVaccantReport",(function(){return x}));var a=c(19),r=c(20),s=c(21),i=c(22),b=c(4),d=c.n(b),l=c(36),n=c(13),o=c(47),j=c(139),g=c(92),h=c(24),p=c(1),m=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).state={loading:!0,data:[],error:{target:null,msg:""}},r}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;if(!this.props.basic.academic_calender)return this.setState({error:{target:"main-error",msg:"No academic_calender found!, please try again later"}});this.setState({loading:!0}),Object(n.y)(this.props.basic.academic_calender.academic_year_id,(function(t,c,a){e.setState({loading:!1,data:c,error:t?{msg:"",target:null}:{target:"main-error",msg:a}})}))}},{key:"render",value:function(){var e,t;return!0===this.state.loading?Object(p.jsx)("div",{className:"py-8 text-center text-4xl",children:Object(p.jsx)(h.a,{})}):Object(p.jsxs)("div",{className:"max-w-screen-lg  mx-auto bg-white p-2 rounded ",children:["main-error"===this.state.error.target&&Object(p.jsx)(o.a,{theme:"danger",children:this.state.error.msg}),"main-success"===this.state.error.target&&Object(p.jsx)(o.a,{theme:"success",children:this.state.error.msg}),Object(p.jsxs)("div",{className:"p-1 py-2 flex",children:[Object(p.jsxs)("section",{className:"flex-1",children:[Object(p.jsx)(g.a,{children:"Distributed Vacant Posts"}),Object(p.jsx)("h4",{className:"text-gray-700",children:null===(e=this.props.basic.academic_calender)||void 0===e?void 0:e.academic_year_name})]}),Object(p.jsx)("section",{children:Object(p.jsx)(j.a,{fileData:this.state.data,fileName:"REPORT OF DISTRIBUTED VACANT POSTS ".concat(null===(t=this.props.basic.academic_calender)||void 0===t?void 0:t.academic_year_name),btnName:"Download EXCEL"})})]}),Object(p.jsx)("div",{className:"overflow-x-auto",children:Object(p.jsxs)("table",{className:"",children:[Object(p.jsxs)("thead",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"p-2 border",rowSpan:2,children:"#"}),Object(p.jsx)("th",{className:"p-2 border",rowSpan:2,children:"District code"}),Object(p.jsx)("th",{className:"p-2 border",rowSpan:2,children:"District name"}),Object(p.jsx)("th",{className:"p-2 border bg-blue-100",colSpan:4,children:"A0"}),Object(p.jsx)("th",{className:"p-2 border bg-yellow-100",colSpan:4,children:"A1"}),Object(p.jsx)("th",{className:"p-2 border bg-indigo-100",colSpan:4,children:"A2"}),Object(p.jsx)("th",{className:"p-2 border bg-green-100",colSpan:4,children:"District"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-blue-100",children:"distributed"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-blue-100",children:"limits"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-blue-100",children:"remaining"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-blue-100",children:"total"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-yellow-100",children:"distributed"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-yellow-100",children:"limits"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-yellow-100",children:"remaining"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-yellow-100",children:"total"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-indigo-100",children:"distributed"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-indigo-100",children:"limits"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-indigo-100",children:"remaining"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-indigo-100",children:"total"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-green-100",children:"District distributed"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-green-100",children:"District limits"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-green-100",children:"District remaining"}),Object(p.jsx)("th",{className:"p-2 border bg-opacity-50 bg-green-100",children:"District total"})]})]}),Object(p.jsx)("tbody",{children:this.state.data.length<=0?Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:40,children:"No data found"})}):this.state.data.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"p-2 border",children:t+1}),Object(p.jsx)("td",{className:"p-2 border",children:e.district_code}),Object(p.jsx)("td",{className:"p-2 border",children:e.district_name}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-blue-100",children:e.A0_distributed}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-blue-100",children:e.A0_limits}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-blue-100",children:e.A0_remaining}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-blue-100",children:e.A0_total}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-yellow-100",children:e.A1_distributed}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-yellow-100",children:e.A1_limits}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-yellow-100",children:e.A1_remaining}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-yellow-100",children:e.A1_total}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-indigo-100",children:e.A2_distributed}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-indigo-100",children:e.A2_limits}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-indigo-100",children:e.A2_remaining}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-indigo-100",children:e.A2_total}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-green-100",children:e.district_total_distributed}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-green-100",children:e.district_total_limits}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-green-100",children:e.district_total_remaining}),Object(p.jsx)("td",{className:"p-2 border bg-opacity-40 bg-green-100",children:e.district_total})]},t)}))})]})})]})}}]),c}(d.a.Component),x=Object(l.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(m)}}]);
//# sourceMappingURL=62.06351cf1.chunk.js.map