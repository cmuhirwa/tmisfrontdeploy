(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[37],{138:function(t,e,a){"use strict";a.r(e),a.d(e,"PostLimitsNational",(function(){return _}));var i=a(4),s=a(26),r=a(27),c=a(28),n=a(29),l=a(2),o=a.n(l),d=a(16),m=a(12),b=a(24),h=a(25),j=a(30),u=a(39),p=a(48),x=a(7),f=a(18),O=a(1),g=function(t){Object(c.a)(a,t);var e=Object(n.a)(a);function a(t){var r;return Object(s.a)(this,a),(r=e.call(this,t)).componentDidMount=function(){var t;Object(x.a)(null===(t=r.props.auth.role)||void 0===t?void 0:t.access,x.b.ADD_COUNTRY_POST_LIMITATION,(function(){r.startProcess()}))},r.onChangeData=function(t,e){r.setState({limits:r.state.limits.map((function(a){return a.qualification_id===t?Object(i.a)(Object(i.a)({},a),{},{limits:parseInt(e)}):a}))})},r.SendData=function(){var t=r.state.limits;for(var e in t){var a=t[e];if(isNaN(a.limits))return r.setState({error:{target:"input-".concat(a.qualification_id),msg:"Please provide the correct value"}})}r.setState({loading:!0}),r.props.FC_SavePostLimit(r.state.limits.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{limits:+t.limits})})),(function(t,e){!0===t?r.setState({loading:!1,error:{target:"main-success",msg:"Updated successfully"}}):r.setState({loading:!1,error:{target:"main-error",msg:e}}),setTimeout((function(){r.setState({error:{target:"",msg:""}})}),3e3)}))},r.state={loading:!1,loading_posts:!0,error:{msg:"",target:""},limits:[]},r}return Object(r.a)(a,[{key:"startProcess",value:function(){var t=this;if(null!==this.props.basic.academic_calender&&null!==this.props.basic.qualifications){var e=this.props.basic.academic_calender.academic_year_id;this.setState({limits:this.props.basic.qualifications.map((function(t){return{academic_year_id:e,limits:0,qualification_id:t.qualification_id,qualification_name:t.qualification_name,current_teachers:"0",total_teachers:"0"}})),loading_posts:!0}),this.props.FC_GetPosyLimit(e,(function(a,i,s){!0===a&&null!=i?t.setState({loading:!1,limits:t.props.basic.qualifications.map((function(t){var a=i.limits.find((function(a){return a.academic_year_id===e&&a.qualification_id===t.qualification_id})),s=i.current_teacher.find((function(e){return e.qualification_id===t.qualification_id})),r=void 0===s?0:+s.total_teachers;return{academic_year_id:e,limits:void 0===a?0:a.limits,qualification_id:t.qualification_id,qualification_name:t.qualification_name,current_teachers:r+"",total_teachers:"0"}})),loading_posts:!1}):t.setState({loading:!1,loading_posts:!1,error:{target:"main-error-danger",msg:s}})}))}else this.setState({error:{msg:"",target:""}})}},{key:"render",value:function(){var t,e=this;if(!0===this.state.loading_posts)return Object(O.jsx)("div",{className:"p-8 text-center",children:Object(O.jsx)(p.a,{})});var a=Object(f.c)(this.state.limits.map((function(t){return+t.current_teachers}))),i=Object(f.c)(this.state.limits.map((function(t){return+t.limits}))),s=Object(f.c)(this.state.limits.map((function(t){return+t.current_teachers+ +t.limits})));return Object(O.jsxs)(j.a,{container:!0,children:[Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsxs)("div",{className:"flex-1",children:[Object(O.jsx)(u.a,{children:"Posts Limits"}),Object(O.jsx)(u.a,{size:"sm",theme:"accent",children:Object(O.jsx)("b",{children:null===(t=this.props.basic.academic_calender)||void 0===t?void 0:t.academic_year_name})})]}),Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsxs)("div",{className:"p-1 px-3 bg-blue-100 rounded mx-2",children:[Object(O.jsx)("p",{className:"text-sm",children:"Existing teachers"}),Object(O.jsx)("h2",{className:"text-2xl -mt-1 font-bold",children:isNaN(a)?"":a})]}),Object(O.jsxs)("div",{className:"p-1 px-3 bg-blue-100 rounded mx-2",children:[Object(O.jsx)("p",{className:"text-sm",children:"New posts"}),Object(O.jsx)("h2",{className:"text-2xl -mt-1 font-bold",children:isNaN(i)?"":i})]}),Object(O.jsxs)("div",{className:"p-1 px-3 bg-blue-100 rounded ml-2",children:[Object(O.jsx)("p",{className:"text-sm",children:"Total posts"}),Object(O.jsx)("h2",{className:"text-2xl -mt-1 font-bold",children:isNaN(s)?"":s})]})]})]}),"main-success"===this.state.error.target&&Object(O.jsx)(b.a,{theme:"success",fixed:!0,children:this.state.error.msg}),"main-error"===this.state.error.target&&Object(O.jsx)(b.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),"main-error-danger"===this.state.error.target&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),Object(O.jsx)("div",{className:"p-3",children:Object(O.jsx)(h.a,{className:"mx-auto block",onClick:this.startProcess.bind(this),children:"Try again"})})]}),"main-error-danger"!==this.state.error.target&&Object(O.jsx)("div",{className:"mt-2",children:Object(O.jsxs)("table",{className:"w-full",children:[Object(O.jsx)("thead",{className:"text-left bg-gray-100 dark:bg-dark-900",children:Object(O.jsxs)("tr",{className:"border",children:[Object(O.jsx)("th",{className:"w-10 p-1 border",children:"#"}),Object(O.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(O.jsx)("th",{className:"p-1 border",children:"Existing teachers"}),Object(O.jsx)("th",{className:"p-1 border",children:"New posts"}),Object(O.jsx)("th",{className:"p-1 border",children:"Total posts"})]})}),Object(O.jsxs)("tbody",{children:[this.state.limits.map((function(t,a){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"border p-2 opacity-50",children:a+1}),Object(O.jsx)("td",{className:"border p-2",children:Object(O.jsx)("b",{children:t.qualification_name})}),Object(O.jsx)("td",{className:"border p-2",children:Object(O.jsx)("b",{children:t.current_teachers})}),Object(O.jsxs)("td",{className:"border w-60",children:[Object(O.jsx)("input",{type:"number",className:"w-full p-2 bg-blue-50 hover:bg-blue-100 dark:hover:bg-primary-900 border-2 dark:bg-dark-900 ".concat(e.state.error.target==="input-".concat(t.qualification_id)?"border-2 border-red-600":""),value:t.limits,onChange:function(a){return e.onChangeData(t.qualification_id,a.target.value)},disabled:e.state.loading}),e.state.error.target==="input-".concat(t.qualification_id)&&Object(O.jsx)("p",{className:"text-red-700 text-sm",children:e.state.error.msg})]}),Object(O.jsx)("td",{className:"border p-2",children:Object(O.jsx)("b",{children:+t.current_teachers+ +t.limits})})]},a)})),Object(O.jsxs)("tr",{className:"",children:[Object(O.jsx)("td",{colSpan:3,className:"p-1 text-right pt-2"}),Object(O.jsx)("td",{className:"pt-2",children:Object(O.jsx)(h.a,{full:!0,onClick:this.SendData,loading:this.state.loading,children:"Save changes"})})]})]})]})})]})}}]),a}(o.a.Component),_=Object(d.b)((function(t){return{auth:t.auth,basic:t.basic}}),{FC_GetPosyLimit:m.t,FC_SavePostLimit:m.Q})(g)}}]);
//# sourceMappingURL=37.2cf84aef.chunk.js.map