(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[72],{623:function(e,t,a){"use strict";a.r(t),a.d(t,"RequestVacantPositions",(function(){return w}));var c=a(41),s=a(19),r=a(20),n=a(21),i=a(22),o=a(4),l=a.n(o),d=a(36),h=a(13),j=a(47),b=a(23),u=a(54),m=a(92),x=a(24),p=a(10),_=a(28),g=a(15),O=a(138),f=a(39),v=a(27),N=a(68),y=a(17),S=a(1),q={target:null,error:""},z=function(e){var t=e.close,a=e.loading_assets,s=e.assets,r=e.saveData,n=e.school_code,i=e.user_id,l=e.hierarchy_data,d=e.loading_hierarchy,u=Object(o.useState)([]),m=Object(_.a)(u,2),z=m[0],C=m[1],w=Object(o.useState)(""),k=Object(_.a)(w,2),T=k[0],A=k[1],E=Object(o.useState)(""),I=Object(_.a)(E,2),P=I[0],R=I[1],D=Object(o.useState)(!1),V=Object(_.a)(D,2),F=V[0],G=V[1],M=Object(o.useState)(!1),J=Object(_.a)(M,2),L=J[0],W=J[1],Q=Object(o.useState)(q),Y=Object(_.a)(Q,2),B=Y[0],H=Y[1],K=Object(o.useState)(!1),U=Object(_.a)(K,2),X=U[0],Z=U[1],$=z.reduce((function(e,t){return e+ +t.teaching_period}),0),ee=Object(y.n)(l,T,{level_code:!0,level_name:!0,combination_code:!0}),te=Object(o.useState)(null),ae=Object(_.a)(te,2),ce=ae[0],se=ae[1],re=Object(o.useState)(null),ne=Object(_.a)(re,2),ie=ne[0],oe=ne[1],le=function(e){console.log(e,z);var t=z.find((function(t){return t.school_study_hierarchy_id===e.school_study_hierarchy_id}));C(t?z.filter((function(t){return t.school_study_hierarchy_id!==e.school_study_hierarchy_id})):[].concat(Object(c.a)(z),[e]))};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(v.c,{backDrop:!0,theme:v.b.default,close:function(){null===ce&&null===ie||window.confirm("Once you close you will lose the selected data, \n do ypu want to close?"),t()},backDropClose:!1,widthSizeClass:v.a.large,displayClose:!0,title:"Add new post on school",padding:{title:!0,body:void 0,footer:void 0},children:["main-error"===B.target&&Object(S.jsx)(j.a,{theme:"danger",children:B.error}),"main-success"===B.target&&Object(S.jsx)(j.a,{theme:"success",children:B.error}),Object(S.jsx)("form",{onSubmit:function(e){return e.preventDefault(),null===ce?H({target:"position",error:"Required"}):null===ie?H({target:"specialization",error:"Required"}):""===P?H({target:"teaching-level",error:"Required"}):0===z.length?(H({target:"subjects",error:"Please select subject(s)"}),void setTimeout((function(){H({target:null,error:""})}),2e3)):(H(q),Z(!0),void Object(h.Yb)({district_code:n.substring(0,2),school_code:n,occupation:ce.position_code,specialization_id:ie.specialization_id,subjects:z.map((function(e){return e.school_study_hierarchy_id})),education_level:ce.qualification_id,need_post:"",requested_by:i,approved_by:"",approved_date:"",status:"WAITING",total_period:$,teaching_level:P,teaching_level_id:P},(function(e,a,c){if(!0===e){var i=null===s||void 0===s?void 0:s.teaching_level.find((function(e){return e.teaching_level_id===P}));r({school_need_post_id:(null===a||void 0===a?void 0:a.id)+"",district_code:n,district_name:"",school_code:n,school_name:"",occupation:ce.position_code,position_name:ce.position_name,specialization_id:ie.specialization_id,specialization_name:ie.specialization_name,education_level:"",qualification_name:ce.qualification_name,need_post:"",status:"WAITING",total_period:$,teaching_level:i?i.teaching_level:"",teaching_level_id:P}),Z(!1),H({target:"main-success",error:"New request created successfully"}),setTimeout((function(){t()}),1e3)}else Z(!1),H({target:"main-error",error:"Error: ".concat(c)})})))},children:!0===a?Object(S.jsx)("div",{className:"py-8 text-center mx-auto",children:Object(S.jsx)(x.a,{})}):null===s?Object(S.jsx)("div",{className:"py-8 text-center text-lg text-red-600",children:"No data found!"}):Object(S.jsxs)("div",{className:"border-t p-4",children:[Object(S.jsx)("div",{className:"pb-3",children:F?Object(S.jsx)(N.a,{loading:!1,id:"position_code",title:"title",close:function(){return G(!F)},data:s.school_positions.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{title:"".concat(e.position_code," - ").concat(e.position_name," (").concat(e.qualification_name,")")})})),click:function(e){se(e),G(!1)}}):Object(S.jsx)("div",{onClick:function(){return!1===X&&G(!F)},children:Object(S.jsx)(f.a,{onChange:function(e){},value:ce?"".concat(ce.position_code," - ").concat(ce.position_name," (").concat(ce.qualification_name,")"):"",error:"position"===B.target?B.error:"",label:"Position",placeholder:"Position",name:"",disabled:!0})})}),Object(S.jsx)("div",{className:"pb-3",onClick:function(){return!1===X&&G(!F)},children:Object(S.jsx)(f.a,{onChange:function(e){},value:ce?"".concat(ce.qualification_name):"",error:"position"===B.target?B.error:"",label:"Level of Education",placeholder:"Select the position",name:"",disabled:!0})}),Object(S.jsx)("div",{className:"pb-3",children:L?Object(S.jsx)(N.a,{loading:!1,id:"id",title:"title",close:function(){return W(!L)},data:s.specializations.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{title:"".concat(e.specialization_name),id:e.specialization_id})})),click:function(e){W(!1),oe(e)}}):Object(S.jsx)("div",{onClick:function(){return!1===X&&W(!L)},children:Object(S.jsx)(f.a,{onChange:function(e){},value:ie?ie.specialization_name:"",error:"specialization"===B.target?B.error:"",label:"Specialization",placeholder:"Specialization",name:"specialization_name",disabled:!0})})}),Object(S.jsx)("div",{className:"pb-3",children:Object(S.jsx)(O.a,{onChange:function(e){return R(e.target.value)},value:P,error:"teaching-level"===B.target?B.error:"",label:"Teaching level",placeholder:"Teaching level",name:"teaching_level",data:[{title:"",value:""}].concat(Object(c.a)(s.teaching_level.map((function(e){return{title:e.teaching_level+"",value:e.teaching_level_id+""}}))))})}),!0===d?Object(S.jsxs)("div",{className:"py-8 text-center pb-2 bg-gray-100 mb-3 mt-1 rounded",children:[Object(S.jsx)(x.a,{}),Object(S.jsx)("h4",{className:"text-gray-500",children:"Loading subjects"})]}):Object(S.jsxs)("div",{className:"pb-2 bg-gray-100 mb-3 mt-1 rounded  ".concat("subjects"===B.target?"border-red-500 border-2":""),children:[Object(S.jsxs)("div",{className:"pb-1 flex items-center px-2",children:[Object(S.jsx)("section",{className:"flex-1",children:Object(S.jsx)(f.a,{onChange:function(e){return A(e.target.value)},value:T,error:"",label:"",placeholder:"Search subject",name:"",size:"sm"})}),Object(S.jsxs)("section",{className:"px-2 rounded bg-gray-100",children:[Object(S.jsx)("span",{className:"text-sm text-gray-400",children:"Subjects:"}),Object(S.jsx)("h4",{className:"text-xl -mt-1 font-bold",children:z.length})]}),Object(S.jsxs)("section",{className:"px-2 rounded bg-gray-100",children:[Object(S.jsx)("span",{className:"text-sm text-gray-400",children:"Total periods:"}),Object(S.jsx)("h4",{className:"text-xl -mt-1 font-bold",children:$})]})]}),Object(S.jsx)("div",{className:"h-56 overflow-y-auto",children:Object(S.jsxs)("table",{className:"w-full",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"border p-1"}),Object(S.jsx)("th",{className:"border p-1",children:"Course name"}),Object(S.jsx)("th",{className:"border p-1",children:"Combination"}),Object(S.jsx)("th",{className:"border p-1",children:"Grade name"}),Object(S.jsx)("th",{className:"border p-1",children:"Teaching period"})]})}),Object(S.jsx)("tbody",{className:"",children:ee.map((function(e,t){var a=z.find((function(t){return e.school_study_hierarchy_id===t.school_study_hierarchy_id}));return Object(S.jsxs)("tr",{className:"cursor-pointer ".concat(void 0===a?"":"bg-green-200 bg-opacity-40"),onClick:le.bind(undefined,e),children:[Object(S.jsx)("td",{className:"border p-1 text-center text-2xl ".concat(void 0===a?"":"text-green-500"),children:void 0===a?Object(S.jsx)(g.n,{}):Object(S.jsx)(g.m,{})}),Object(S.jsx)("td",{className:"border p-1",children:e.course_name}),Object(S.jsx)("td",{className:"border p-1",children:e.combination_name}),Object(S.jsx)("td",{className:"border p-1",children:e.grade_name}),Object(S.jsx)("td",{className:"border p-1",children:e.teaching_period})]},t)}))})]})})]}),"subjects"===B.target&&Object(S.jsx)("span",{className:"text-red-800 text-center",children:B.error}),Object(S.jsx)("div",{className:"pb-2 text-right",children:"main-success"!==B.target&&Object(S.jsx)(b.a,{type:"submit",loading:X,children:"Request New vacant"})})]})})]})})},C=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).cleanError=function(){return r.setState({error:{target:null,msg:""}})},r.addNewItem=function(e){return r.setState({data:[].concat(Object(c.a)(r.state.data),[e])})},r.removeItem=function(e){window.confirm("Are you sure you want to remove this record?")&&(r.setState({delete_loading:!0,deleting_item:""}),Object(h.s)(e,(function(t,a){!0===t?r.setState({delete_loading:!1,deleting_item:"",error:{target:"main-success",msg:"Record removed successfully"},data:r.state.data.filter((function(t){return t.school_need_post_id!==e}))}):(r.setState({delete_loading:!1,deleting_item:"",error:{target:"main-error",msg:"Error: ".concat(a)}}),setTimeout((function(){r.setState({error:{msg:"",target:null}})}),2e3))})))},r.state={error:{target:null,msg:""},loading_assets:!1,create_request:!1,assets:null,data:[],loading_data:!1,hierarchy_data:[],loading_hierarchy:!1,delete_loading:!1,deleting_item:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(null===this.props.auth.school)return this.setState({error:{target:"main-error",msg:"No school assigned to you"}});this.setState({loading_assets:!0,loading_data:!0,loading_hierarchy:!0}),Object(h.ab)(this.props.auth.school.school_code,(function(t,a,c){!0===t?e.setState({loading_assets:!1,assets:a}):e.setState({loading_assets:!1,error:{target:"main-error",msg:"Error: ".concat(c)}})})),Object(h.Eb)(this.props.auth.school.school_code,(function(t,a,c){!0===t?e.setState({data:a,loading_data:!1}):e.setState({data:[],loading_data:!1,error:{target:"main-error",msg:"Error: ".concat(c)}})})),Object(h.E)(this.props.auth.school.school_code,(function(t,a,c){!0===t?e.setState({hierarchy_data:a,loading_hierarchy:!1}):e.setState({hierarchy_data:[],loading_hierarchy:!1,error:{target:"main-error",msg:"Error: ".concat(c)}})}))}},{key:"render",value:function(){var e=this,t=this.state.data.filter((function(e){return"A0"===e.qualification_name})).length,a=this.state.data.filter((function(e){return"A1"===e.qualification_name})).length,c=this.state.data.filter((function(e){return"A2"===e.qualification_name})).length;return Object(S.jsxs)(S.Fragment,{children:["main-error"===this.state.error.target&&Object(S.jsx)(j.a,{theme:"danger",fixed:!0,onClick:this.cleanError,children:this.state.error.msg}),"main-success"===this.state.error.target&&Object(S.jsx)(j.a,{theme:"success",fixed:!0,onClick:this.cleanError,children:this.state.error.msg}),!0===this.state.create_request&&null!==this.props.auth.school&&this.props.auth.user&&Object(S.jsx)(z,{close:function(){return e.setState({create_request:!1})},loading_assets:this.state.loading_assets,assets:this.state.assets,saveData:this.addNewItem,school_code:this.props.auth.school.school_code,school_name:this.props.auth.school.school_name,user_id:this.props.auth.user.user_id,hierarchy_data:this.state.hierarchy_data,loading_hierarchy:this.state.loading_hierarchy}),Object(S.jsx)("section",{className:"sticky top-1 z-50 mx-auto",children:Object(S.jsx)(u.a,{children:Object(S.jsxs)("div",{className:"w-full flex items-center",children:[Object(S.jsxs)("section",{className:"flex-1",children:[Object(S.jsx)(m.a,{size:"md",children:"Vacant posts to be filled"}),Object(S.jsx)("p",{className:"m-0 text-gray-400 text-sm",children:"Vacant posts to be filled"})]}),Object(S.jsx)("section",{children:Object(S.jsx)(b.a,{type:"button",onClick:function(){return e.setState({create_request:!e.state.create_request})},children:"Add vacant"})})]})})}),Object(S.jsxs)(u.a,{children:[Object(S.jsxs)("div",{className:"flex gap-2 mb-2 text-center",children:[Object(S.jsxs)("section",{className:"border p-1 px-6 rounded bg-gray-100",children:[Object(S.jsx)("span",{children:"A0"}),Object(S.jsx)("h2",{className:"font-bold text-2xl -mt-1",children:t})]}),Object(S.jsxs)("section",{className:"border p-1 px-6 rounded bg-gray-100",children:[Object(S.jsx)("span",{children:"A1"}),Object(S.jsx)("h2",{className:"font-bold text-2xl -mt-1",children:a})]}),Object(S.jsxs)("section",{className:"border p-1 px-6 rounded bg-gray-100",children:[Object(S.jsx)("span",{children:"A2"}),Object(S.jsx)("h2",{className:"font-bold text-2xl -mt-1",children:c})]}),Object(S.jsx)("div",{className:"flex-1"}),Object(S.jsxs)("section",{className:"border p-1 px-6 rounded bg-gray-100",children:[Object(S.jsx)("span",{children:"Total"}),Object(S.jsx)("h2",{className:"font-bold text-2xl -mt-1",children:c+a+t})]})]}),Object(S.jsxs)("table",{className:"w-full",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"text-left",children:[Object(S.jsx)("th",{className:"p-2 border",children:"#"}),Object(S.jsx)("th",{className:"p-2 border",children:"Code"}),Object(S.jsx)("th",{className:"p-2 border",children:"Position name"}),Object(S.jsx)("th",{className:"p-2 border",children:"Qualification "}),Object(S.jsx)("th",{className:"p-2 border",children:"Specialization"}),Object(S.jsx)("th",{className:"p-2 border",children:"Total Period"}),Object(S.jsx)("th",{className:"p-2 border",children:"Teaching level"}),Object(S.jsx)("th",{className:"p-2 border",children:"Status"}),Object(S.jsx)("th",{className:"p-2 border"})]})}),Object(S.jsx)("tbody",{children:!0===this.state.loading_data?Object(S.jsx)("tr",{children:Object(S.jsx)("td",{className:"py-8 text-center",colSpan:10,children:Object(S.jsx)(x.a,{})})}):0===this.state.data.length?Object(S.jsx)("tr",{children:Object(S.jsx)("td",{className:"py-8 text-center",colSpan:10,children:Object(S.jsx)("h2",{className:"text-2xl font-bold text-gray-600",children:"No results found"})})}):Object(S.jsx)(S.Fragment,{children:this.state.data.map((function(t,a){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{className:"border p-2",children:a+1}),Object(S.jsx)("td",{className:"border p-2",children:t.school_code}),Object(S.jsx)("td",{className:"border p-2",children:t.position_name}),Object(S.jsx)("td",{className:"border p-2",children:t.qualification_name}),Object(S.jsx)("td",{className:"border p-2",children:t.specialization_name}),Object(S.jsx)("td",{className:"border p-2",children:t.total_period}),Object(S.jsx)("td",{className:"border p-2",children:t.teaching_level}),Object(S.jsx)("td",{className:"border p-2 text-center",children:Object(S.jsx)("span",{className:"p-1 rounded-lg text-xs ".concat("APPROVED"===t.status?"bg-green-100 text-green-700":"bg-gray-200"),children:t.status})}),Object(S.jsx)("td",{className:"border p-2 text-center",children:Object(S.jsx)(b.a,{theme:"danger-light",type:"button",onClick:e.removeItem.bind(e,t.school_need_post_id),disabled:e.state.delete_loading,loading:e.state.deleting_item===t.school_need_post_id,children:"Remove"})})]},a)}))})})]})]})]})}}]),a}(l.a.Component),w=Object(d.b)((function(e){return{auth:e.auth}}),{})(C)}}]);
//# sourceMappingURL=72.9115c192.chunk.js.map