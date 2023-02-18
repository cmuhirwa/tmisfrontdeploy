(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[76],{620:function(e,t,a){"use strict";a.r(t),a.d(t,"SwappingTwoTeachers",(function(){return R}));var s=a(10),c=a(19),r=a(20),i=a(21),o=a(22),l=a(4),n=a.n(l),d=a(15),h=a(36),b=a(13),j=a(47),m=a(23),_=a(53),u=a(92),g=a(39),x=a(42),O=a(1),N=function(e){var t=e.data;return Object(O.jsxs)("div",{className:"p-2 border rounded",children:[Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)("div",{className:"pr-2 text-5xl text-accent-900 opacity-50",children:Object(O.jsx)(d.b,{})}),Object(O.jsxs)("div",{className:"flex-1",children:[Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"National ID: "}),Object(O.jsx)("b",{className:" text-lg ",children:t.nid})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"Full name: "}),Object(O.jsx)("b",{className:"",children:t.full_name})]})]})]}),Object(O.jsxs)("div",{className:"flex pt-3 border-t",children:[Object(O.jsx)("div",{className:"lg:pr-2 text-5xl text-accent-900 opacity-50",children:Object(O.jsx)(x.k,{})}),Object(O.jsxs)("div",{className:"flex-1",children:[Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"School code: "}),Object(O.jsx)("b",{className:"",children:t.school_code})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"School name: "}),Object(O.jsx)("b",{className:"",children:t.school_name})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"Position code: "}),Object(O.jsx)("b",{className:"",children:t.position_code})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"Position: "}),Object(O.jsx)("b",{className:"",children:t.position_name})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"Qualification: "}),Object(O.jsx)("b",{className:"",children:t.qualification_name})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"Role: "}),Object(O.jsx)("b",{className:"",children:t.role})]}),Object(O.jsxs)("div",{className:"border-b border-gray-100 p-1 mt-4",children:[Object(O.jsx)("label",{className:" text-gray-500 mb-0",children:"District: "}),Object(O.jsx)("b",{className:"",children:t.district_name})]})]})]})]})},p={target:null,msg:""},v=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).searchTeachers=function(e){var t;if(e.preventDefault(),null===(t=r.props.auth.district)||void 0===t||!t.district_code)return r.setState({error:{target:"MAIN-ERROR",msg:"You have no district assigned to you"}});var a=r.props.auth.district.district_code;return 16!==r.state.nid_1.length?r.setState({error:{target:"NID-INPUT-ERROR-1",msg:"NID must be 16 digits"}}):16!==r.state.nid_2.length?r.setState({error:{target:"NID-INPUT-ERROR-2",msg:"NID must be 16 digits"}}):r.state.nid_1===r.state.nid_2?r.setState({error:{target:"NID-INPUT-ERROR-2",msg:"Both NID can't be the same"}}):(r.setState({search_loading:!0}),void Object(b.cc)({district_code:a,nid_one:r.state.nid_1,nid_two:r.state.nid_2},(function(e,t,s){if(console.log({status:e,data:t,msg:s}),!0===e){var c=r.validateSwapping(t,a);r.setState({search_loading:!1,data:t,error:c.error,results_success:c.success})}else r.setState({search_loading:!1,error:{target:"MAIN-ERROR",msg:"Error: ".concat(s)}})})))},r.validateSwapping=function(e,t){return null===e?{success:!1,error:{target:"MAIN-ERROR",msg:"Users are not exists"}}:null===e.teacher_one&&null===e.teacher_two?{success:!1,error:{target:"MAIN-ERROR",msg:"Both NID does not found in the system"}}:null===e.teacher_one?{success:!1,error:{target:"TEACHER-1",msg:"Nid: ".concat(r.state.nid_1," does not found!")}}:null===e.teacher_two?{success:!1,error:{target:"TEACHER-2",msg:"Nid: ".concat(r.state.nid_2," does not found!")}}:e.teacher_two.district_code!==e.teacher_one.district_code?{success:!1,error:{target:"SEARCH-ERROR",msg:"Teachers have different districts"}}:e.teacher_two.district_code!==t?{success:!1,error:{target:"SEARCH-ERROR",msg:"These teachers does not belong in your district"}}:e.teacher_two.position_code!==e.teacher_one.position_code?{success:!1,error:{target:"SEARCH-ERROR",msg:"Positions does not match."}}:e.teacher_two.qualification_id!==e.teacher_one.qualification_id?{success:!1,error:{target:"SEARCH-ERROR",msg:"Qualifications does not match."}}:+e.teacher_two.school_code===+e.teacher_one.school_code?{success:!1,error:{target:"SEARCH-ERROR",msg:"Both teachers are on the same schools."}}:+e.teacher_two.role_id!==+e.teacher_one.role_id?{success:!1,error:{target:"SEARCH-ERROR",msg:"Both candidates must have same roles on their schools."}}:{success:!0,error:p}},r.submitTeachersSwapping=function(){var e,t,a,c,i;if(null===(e=r.props.auth.district)||void 0===e||!e.district_code)return r.setState({error:{target:"MAIN-ERROR",msg:"No district assigned to you"}});if(null===(t=r.props.basic.academic_calender)||void 0===t||!t.academic_year_id)return r.setState({error:{target:"MAIN-ERROR",msg:"No academic calendar found"}});r.validateSwapping(r.state.data,null===(a=r.props.auth.district)||void 0===a?void 0:a.district_code).success&&(null!==r.state.data&&null!==r.state.data.teacher_one&&null!==r.state.data.teacher_two&&!0===window.confirm("Are you sure you want to send \n ".concat(r.state.data.teacher_one.full_name," to ").concat(r.state.data.teacher_two.school_name," \n and \n ").concat(r.state.data.teacher_two.full_name," to ").concat(r.state.data.teacher_one.school_name))&&(r.setState({swap_loading:!0}),Object(b.fc)({academic_year_id:null===(c=r.props.basic.academic_calender)||void 0===c?void 0:c.academic_year_id,district_code:null===(i=r.props.auth.district)||void 0===i?void 0:i.district_code,position_code:r.state.data.teacher_one.position_code,qualification_id:r.state.data.teacher_one.qualification_id,role_id:r.state.data.teacher_one.role_id,school_one:r.state.data.teacher_one.school_code,school_two:r.state.data.teacher_two.school_code,user_one:r.state.data.teacher_one.user_id,user_two:r.state.data.teacher_two.user_id},(function(e,t,a){if(!0===e){var c,i=r.state.data;null!==i&&(i=Object(s.a)(Object(s.a)({},i),{},{teacher_one:null!==i.teacher_one?Object(s.a)(Object(s.a)({},i.teacher_one),{},{school_code:i.teacher_two?i.teacher_two.school_code:i.teacher_one.school_code,school_name:i.teacher_two?i.teacher_two.school_name:i.teacher_one.school_name}):i.teacher_one,teacher_two:null!==i.teacher_two?Object(s.a)(Object(s.a)({},i.teacher_two),{},{school_code:i.teacher_one?null===(c=i.teacher_one)||void 0===c?void 0:c.school_code:i.teacher_two.school_code,school_name:i.teacher_one?i.teacher_one.school_name:i.teacher_two.school_name}):i.teacher_two})),r.setState({swap_loading:!1,error:{target:"MAIN-SUCCESS",msg:"Success: ".concat(null===t||void 0===t?void 0:t.msg)},data:i})}else r.setState({swap_loading:!1,error:{target:"MAIN-ERROR",msg:"Error: ".concat(a)}})}))))},r.state={error:p,nid_1:"",nid_2:"",search_loading:!1,data:null,results_success:!1,swap_loading:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e,t,a,s,c,r,i,o,l=this;return Object(O.jsxs)(_.a,{children:[Object(O.jsxs)("div",{className:"py-2 border-b",children:[Object(O.jsx)(u.a,{children:"District Internal permutation"}),Object(O.jsx)("p",{className:"opacity-50",children:"Changing two teachers who are in the same district"})]}),(null===this.state.data||null===this.state.data.teacher_one||null===this.state.data.teacher_two)&&Object(O.jsx)("form",{onSubmit:this.searchTeachers,className:"mt-4",children:Object(O.jsxs)("div",{className:"flex gap-2 w-full",children:[Object(O.jsx)("div",{className:"p-1 flex-1",children:Object(O.jsx)(g.a,{onChange:function(e){return l.setState({nid_1:e.target.value,error:p})},value:this.state.nid_1,error:"NID-INPUT-ERROR-1"===this.state.error.target?this.state.error.msg:"",label:"First NID",placeholder:"National Identification (Indangamuntu yambere) ",name:"nid-input-1",disabled:this.state.search_loading,type:"number"})}),Object(O.jsx)("div",{className:"p-1 flex-1",children:Object(O.jsx)(g.a,{onChange:function(e){return l.setState({nid_2:e.target.value,error:p})},value:this.state.nid_2,error:"NID-INPUT-ERROR-2"===this.state.error.target?this.state.error.msg:"",label:"Second NID",placeholder:"National Identification (Indangamuntu yakabiri) ",name:"nid-input-1",disabled:this.state.search_loading,type:"number"})}),Object(O.jsxs)("div",{className:"p-1",children:[Object(O.jsx)("div",{className:"block pb-1.5 opacity-0",children:" search"}),Object(O.jsx)(m.a,{size:"lg",type:"submit",loading:this.state.search_loading,children:"Search"})]})]})}),null!==this.state.data&&!1===this.state.search_loading&&Object(O.jsxs)("div",{className:"",children:[Object(O.jsxs)("div",{className:"border flex p-2 bg-gray-100 rounded",children:[Object(O.jsxs)("section",{className:"flex-1",children:[Object(O.jsx)("h1",{className:"text-xl font-bold",children:"Search results"}),Object(O.jsx)("p",{className:"text-gray-400 -mt-1 text-sm",children:"Check if the information are correct and place the teachers"})]}),Object(O.jsx)("section",{children:Object(O.jsx)(m.a,{theme:"danger-light",onClick:function(){l.setState({data:null,error:p})},children:"Cancel"})})]}),"MAIN-ERROR"===this.state.error.target&&Object(O.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),"MAIN-SUCCESS"===this.state.error.target&&Object(O.jsx)(j.a,{theme:"success",children:this.state.error.msg}),Object(O.jsxs)("div",{className:"lg:flex gap-4 w-full  my-2 rounded",children:[Object(O.jsxs)("div",{className:"flex-1 ",children:["TEACHER-1"===this.state.error.target&&Object(O.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),null!==this.state.data.teacher_one&&Object(O.jsx)(N,{data:this.state.data.teacher_one})]}),Object(O.jsxs)("div",{className:"flex-1",children:["TEACHER-2"===this.state.error.target&&Object(O.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),null!==this.state.data.teacher_two&&Object(O.jsx)(N,{data:this.state.data.teacher_two})]})]}),Object(O.jsxs)("div",{className:"lg:flex w-full text-right",children:[Object(O.jsx)("div",{className:"flex-1",children:"SEARCH-ERROR"===this.state.error.target&&Object(O.jsx)(j.a,{theme:"danger",children:this.state.error.msg})}),this.state.results_success&&"MAIN-SUCCESS"!==this.state.error.target&&Object(O.jsxs)("div",{className:"w-full flex flex-1 items-center p-2 rounded bg-green-100 ",children:[Object(O.jsxs)("div",{className:" text-left text-sm flex-1 pr-3 pl-3",children:[Object(O.jsxs)("p",{className:"m-0 ",children:[Object(O.jsx)("b",{children:null===(e=this.state.data)||void 0===e||null===(t=e.teacher_one)||void 0===t?void 0:t.full_name})," ",Object(O.jsx)(d.i,{className:"inline opacity-60"})," ",Object(O.jsx)("b",{children:null===(a=this.state.data)||void 0===a||null===(s=a.teacher_two)||void 0===s?void 0:s.school_name})]}),Object(O.jsxs)("p",{className:"m-0 ",children:[Object(O.jsx)("b",{children:null===(c=this.state.data)||void 0===c||null===(r=c.teacher_two)||void 0===r?void 0:r.full_name})," ",Object(O.jsx)(d.i,{className:"inline opacity-60"})," ",Object(O.jsx)("b",{children:null===(i=this.state.data)||void 0===i||null===(o=i.teacher_one)||void 0===o?void 0:o.school_name})]})]}),Object(O.jsx)(m.a,{size:"lg",theme:"success",onClick:this.submitTeachersSwapping,loading:this.state.swap_loading,children:Object(O.jsx)("span",{className:"font-normal text-2xl",children:"Yes, I Approve"})})]})]})]})]})}}]),a}(n.a.Component),R=Object(h.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(v)}}]);
//# sourceMappingURL=76.6479af21.chunk.js.map