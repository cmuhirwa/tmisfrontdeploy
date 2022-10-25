(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[23],{342:function(e,t,s){"use strict";s(4);var a=s(124),c=s(2);t.a=function(e){var t=e.onChange,s=e.value,l=e.error,r=e.label,i=e.placeholder,n=e.disabled,o=void 0!==n&&n,d=e.name,h=e.Input_className,b=void 0===h?"":h,j=e.Label_className,m=void 0===j?"":j,u=e.InputContainer_className,p=void 0===u?"":u,x=e.MainContainer_className,O=void 0===x?"":x,_=e.size,v=void 0===_?"md":_,N=e.data;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"w-full my-2 ".concat(O),children:[r&&Object(c.jsx)("label",{htmlFor:"login-form-email",className:"text-primary-900 dark:text-primary-100 ".concat(m),children:r}),Object(c.jsxs)("div",{className:"rounded relative ".concat(p),children:[Object(c.jsx)("select",{name:d,placeholder:i,onChange:t,className:"\n                     w-full text-lg rounded border-2 \n                     ".concat(Object(a.a)(v),"\n                     ").concat(""!==l?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900 ","\n                     px-3 ").concat(b),value:s,disabled:o,children:N.map((function(e,t){return Object(c.jsx)("option",{value:e.value,children:e.title},t)}))}),""!==l&&Object(c.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:l})]})]})})}},349:function(e,t,s){"use strict";s.d(t,"f",(function(){return i})),s.d(t,"d",(function(){return n})),s.d(t,"e",(function(){return o})),s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return h})),s.d(t,"c",(function(){return b}));var a,c,l,r=s(18),i=100;!function(e){e.GOVERNMENT_AIDED="GOVERNMENT_AIDED",e.PRIVATE="GOVERNMENT_AIDED",e.PUBLIC="PUBLIC"}(a||(a={})),function(e){e.EXIST="Exist",e.NEW="new"}(c||(c={})),function(e){e.role="role",e.district_name="district_name",e.full_name="full_name",e.phone_numbers="phone_numbers",e.email="email",e.sex="sex",e.dob="dob",e.marital_status="marital_status",e.nid="nid",e.position="position",e.specialization="specialization",e.qualification="qualification",e.status="status",e.school_code="school_code",e.school_name="school_name",e.school_category="school_category",e.school_status="school_status",e.subjects="subjects",e.grades="grades",e.date_in_school="date_in_school",e.date_of_hire="date_of_hire"}(l||(l={}));var n=[{key:l.full_name,title:"Staff Full Names",status:!0,isChangeAllowed:!0},{key:l.nid,title:"National ID",status:!0,isChangeAllowed:!1},{key:l.sex,title:"Sex",status:!0,isChangeAllowed:!0},{key:l.dob,title:"Date of Birth",status:!0,isChangeAllowed:!0},{key:l.marital_status,title:"Marital status",status:!0,isChangeAllowed:!0},{key:l.phone_numbers,title:"Staff Phone",status:!0,isChangeAllowed:!0},{key:l.email,title:"Staff Email",status:!0,isChangeAllowed:!0},{key:l.qualification,title:"Qualification",status:!0,isChangeAllowed:!0},{key:l.position,title:"Position",status:!0,isChangeAllowed:!0},{key:l.subjects,title:"Subjects",status:!0,isChangeAllowed:!0},{key:l.grades,title:"Grade (No of Group)",status:!0,isChangeAllowed:!0},{key:l.specialization,title:"Specialization",status:!0,isChangeAllowed:!0},{key:l.role,title:"Staff role",status:!0,isChangeAllowed:!0},{key:l.status,title:"Status",status:!0,isChangeAllowed:!0},{key:l.date_of_hire,title:"Date to hire",status:!0,isChangeAllowed:!0},{key:l.date_in_school,title:"Date in school",status:!0,isChangeAllowed:!0},{key:l.school_name,title:"School Name",status:!0,isChangeAllowed:!0},{key:l.school_code,title:"School Code",status:!0,isChangeAllowed:!0},{key:l.school_category,title:"School Category",status:!0,isChangeAllowed:!0},{key:l.school_status,title:"School Status",status:!0,isChangeAllowed:!0},{key:l.district_name,title:"District Name",status:!0,isChangeAllowed:!0}],o={system:["26","Admin"],country:["REB","4","RTB","300","MINECOFIN","27","26","Admin"],district:["DDE","3","Human Resource","25"],school:["Head Teacher","Teacher","2"]},d=function(e){return null===e?"":b(e)?Object(r.a)(e):e},h=function(e){var t="",s=[],a="",c={grade_names:[],grade_codes:[],courses:[],group:[]},l=0;if(e){var i=function(a){var i=e[a];if(s.includes(i.course_code)||(s.push(i.course_code),t+=Object(r.h)(t)?i.course_name:", "+i.course_name),c.grade_codes.includes(i.grade_code)){if(c.courses.findIndex((function(e){return e===i.course_code}))>=0){var n=c.courses.findIndex((function(e){return e===i.course_code}));c.group[n]+=JSON.parse(i.grade_group).length}}else c.grade_codes.push(i.grade_code),c.grade_names.push(i.grade_name),c.courses.push(i.course_code),c.group.push(Object(r.b)(JSON.parse(i.grade_group)));l+=Number(i.teaching_period)*JSON.parse(i.grade_group).length};for(var n in e)i(n);for(var o in c.courses)a+=Object(r.h)(a)?"".concat(c.grade_names[o]," (").concat(c.group[o],")"):", ".concat(c.grade_names[o]," (").concat(c.group[o],")")}return{courses:t,grades:a,periods:l.toString()}},b=function(e){if(null===e)return!1;var t=new Date(e);return!isNaN(t.getDate())}},367:function(e,t,s){"use strict";s(4);var a=s(349),c=s(81),l=s(2);t.a=function(e){var t=e.placement_list,s=e.footer,r=e.header;return Object(l.jsx)("div",{className:"fixed top-0 bottom-0 right-0 left-0 animate__animated animate__fadeIn  bg-black bg-opacity-95 z-60 overflow-auto",children:Object(l.jsxs)("div",{className:"w-full mx-auto bg-white px-3 py-8 animate__animated animate__zoomIn animate__faster",children:[r&&r,Object(l.jsx)("div",{className:"overflow-auto ",children:Object(l.jsxs)("table",{className:"border w-full ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"text-left",children:[Object(l.jsx)("th",{className:"p-1 border",children:"No"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"NID"}),Object(l.jsx)("th",{className:"p-1 border",children:"Names"}),Object(l.jsx)("th",{className:"p-1 border",children:"First name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(l.jsx)("th",{className:"p-1 border",children:"Email"}),Object(l.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(l.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(l.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(l.jsx)("th",{className:"p-1 border",children:"Position"}),Object(l.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(l.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(l.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(l.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(l.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(l.jsx)("tbody",{children:t.filter((function(e){return"Active"===e.status})).map((function(e,t){var s,c,r,i,n,o,d=Object(a.a)(e.teacher_hierarch);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"p-1 border",children:t+1}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(c=e.location)||void 0===c?void 0:c.district_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(n=e.school)||void 0===n?void 0:n.school_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(o=e.school)||void 0===o?void 0:o.school_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.middle_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.hired_date}),Object(l.jsx)("th",{className:"p-1 border",children:d.courses}),Object(l.jsx)("th",{className:"p-1 border",children:d.periods}),Object(l.jsx)("th",{className:"p-1 border",children:d.grades}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(l.jsx)("br",{}),Object(l.jsx)(c.a,{className:"text-center",children:"Others candidates on placement list"}),Object(l.jsx)("div",{className:"overflow-auto ",children:Object(l.jsxs)("table",{className:"border w-full ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"text-left",children:[Object(l.jsx)("th",{className:"p-1 border",children:"No"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"NID"}),Object(l.jsx)("th",{className:"p-1 border",children:"Names"}),Object(l.jsx)("th",{className:"p-1 border",children:"First name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(l.jsx)("th",{className:"p-1 border",children:"Email"}),Object(l.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(l.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(l.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(l.jsx)("th",{className:"p-1 border",children:"Position"}),Object(l.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date to School"}),Object(l.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(l.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(l.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(l.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(l.jsx)("tbody",{children:t.filter((function(e){return"Active"!==e.status})).map((function(e,t){var s,a,c,r,i,n;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"p-1 border",children:t+1}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.district_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(c=e.school)||void 0===c?void 0:c.school_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(n=e.school)||void 0===n?void 0:n.school_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality_id}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(l.jsx)("div",{className:"",children:s&&s})]})})}},576:function(e,t,s){"use strict";s.r(t),s.d(t,"UpdatePlacementList",(function(){return w}));var a=s(28),c=s(29),l=s(30),r=s(31),i=s(4),n=s.n(i),o=s(45),d=s(17),h=s(33),b=s(26),j=s(13),m=s(56),u=s(40),p=s(55),x=s(81),O=s(342),_=s(64),v=s(35),N=s(367),f=s(5),g=s(18),S=s(127),y=s(2),C=function(e){Object(l.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).submitLogin=function(e){e.preventDefault()},c.componentDidMount=function(){var e;if(0===c.props.placement.placements.length)return Object(y.jsx)(b.a,{to:"/placement-list-ht"});Object(f.a)(null===(e=c.props.auth.role)||void 0===e?void 0:e.access,f.b.HEADTEACHER_UPDATE_PLACEMENT_LIST,(function(){c.startApp()}))},c.startApp=function(){if(null===c.props.basic.academic_calender)c.setState({error:{target:"main-error",msg:"failed to load data, please reload the page (Refresh)"}});else if(null===c.props.auth.school)c.setState({error:{target:"main-error",msg:"No school assigned to you"}});else{var e=c.props.auth.school.school_code;c.setState({error:{target:null,msg:""}}),Object(j.eb)(e,(function(e,t,s){if(!0===e&&null!==t){var a=c.props.placement.placements.find((function(e){return e.placement_list_approval_id===c.props.placement_id}));c.setState({selected_placement:void 0===a?null:a,ht_comment:void 0===a?"":null===a||void 0===a?void 0:a.ht_comment,loading_data:!1,data:t.staff,roles:t.role,placement_list:t.staff.filter((function(e){return Object(S.b)(e).validated}))})}else c.setState({loading_data:!1,error:{msg:s,target:"main-error"}})}))}},c.UpdatePlacement=function(e,t){},c.submitList=function(e){return e.preventDefault(),null===c.props.basic.academic_calender||null===c.props.auth.school?c.setState({error:{target:"submit-list-error",msg:"You don't has a district assigned to you"}}):null===c.state.selected_placement?c.setState({error:{target:"main-error",msg:"No placement list selected"}}):(c.setState({loading_placement_submit:!0}),void c.props.FC_UpdatePlacementList(c.state.selected_placement.placement_list_approval_id,{academic_year_id:c.state.selected_placement.academic_year_id,district_code:c.state.selected_placement.district_code,list:JSON.stringify(c.state.placement_list),month:c.state.selected_placement.month,school_code:c.state.selected_placement.school_code,ht_comment:c.state.ht_comment},(function(e,t){!0===e?c.setState({loading_placement_submit:!1,error:{target:"submit-list-success",msg:"Placement list for ".concat(c.state.selected_month," has been updated successfully")}}):c.setState({loading_placement_submit:!1,error:{target:"submit-list-error",msg:t}}),setTimeout((function(){c.setState({error:{msg:"",target:null}})}),3e3)})))},c.setApprovedList=function(){return c.setState({approved_list:!c.state.approved_list})},c.SelectAll=function(){return c.setState({placement_list:c.state.data})},c.DeSelectAll=function(){return c.setState({placement_list:[]})},c.state={approved_list:!1,selected_placement:null,loading:!0,data:[],placement_list:[],roles:[],error:{target:null,msg:""},loading_data:!0,selected_role:"",selected_request_id:"",selected_value:"0",selected_comment:"",selected_auto_level:"",search:"",selected_qualification:"",selected_month:"",loading_placement_submit:!1,ht_comment:"",selected_check_validation:""},c}return Object(c.a)(s,[{key:"render",value:function(){var e,t,s,a,c,l,r,n=this,h=""===this.state.selected_role?this.state.data:this.state.data.filter((function(e){return e.role_id===n.state.selected_role}));return h=""===this.state.selected_qualification?h:h.filter((function(e){return e.qualification===n.state.selected_qualification})),h=Object(g.k)(h,this.state.search,{email:!0,first_name:!0,full_name:!0,last_name:!0,phone_numbers:!0,qualification:!0,role:!0,role_id:!0,status:!0,user_id:!0,username:!0}),!0===this.state.loading_data?Object(y.jsx)("div",{className:"p-8 text-center",children:Object(y.jsx)("div",{className:"mx-auto",children:Object(y.jsx)(v.a,{})})}):"main-error"===this.state.error.target?Object(y.jsx)(m.a,{theme:"danger",fixed:!0,children:this.state.error.msg}):!0===this.state.approved_list?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(N.a,{placement_list:this.state.placement_list,header:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)("div",{className:"flex-1",children:Object(y.jsxs)("div",{className:"text-xl",children:[Object(y.jsxs)("h2",{children:["School code:"," ",Object(y.jsx)("b",{children:null===(e=this.state.selected_placement)||void 0===e?void 0:e.school_code})]}),Object(y.jsxs)("h2",{children:["School name:"," ",Object(y.jsx)("b",{children:null===(t=this.state.selected_placement)||void 0===t?void 0:t.school_name})]}),Object(y.jsxs)("h2",{children:["Done by:"," ",Object(y.jsx)("b",{children:null===(s=this.state.selected_placement)||void 0===s?void 0:s.head_teacher_name})]}),Object(y.jsxs)("h2",{children:["Month: ",Object(y.jsx)("b",{children:null===(a=this.state.selected_placement)||void 0===a?void 0:a.month})]}),Object(y.jsxs)("h2",{children:["District:"," ",Object(y.jsx)("b",{children:null===(c=this.state.selected_placement)||void 0===c?void 0:c.district_name})]})]})}),Object(y.jsx)("div",{className:"",children:Object(y.jsx)(u.a,{size:"lg",theme:"danger-light",onClick:this.setApprovedList,disabled:this.state.loading_placement_submit,type:"button",children:"Close"})})]}),Object(y.jsx)("h1",{className:"text-center text-3xl font-bold mb-4",children:"Placement list"})]}),footer:Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("form",{onSubmit:this.submitList,children:Object(y.jsxs)("div",{className:"mt-5 flex border-t pt-3",children:[Object(y.jsx)("div",{className:"flex-1"}),Object(y.jsxs)("div",{className:"flex-1",children:["submit-list-success"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"success",children:this.state.error.msg}),"submit-list-error"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"danger",children:this.state.error.msg}),Object(y.jsxs)("div",{className:"",children:[Object(y.jsx)("span",{children:"Comment:"}),Object(y.jsx)("textarea",{value:this.state.ht_comment,readOnly:!0,className:"w-full h-32 border-2   rounded p-2"})]}),Object(y.jsx)("div",{className:"text-right",children:Object(y.jsx)(u.a,{theme:"success",size:"lg",className:"flex-1 animate__animated animate__pulse animate__infinite",loading:this.state.loading_placement_submit,children:"Update placement list"})})]})]})})})})}):Object(y.jsxs)(y.Fragment,{children:["main-success"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"success",fixed:!0,children:this.state.error.msg}),"submit-list-success"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"success",fixed:!0,children:this.state.error.msg}),"submit-list-error"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),Object(y.jsxs)("div",{className:"fixed bottom-0 right-0 flex left-0 bg-white shadow-lg border-t-2 px-3 items-center",children:[Object(y.jsx)("div",{className:"main-side-spacer"}),Object(y.jsxs)("div",{className:"flex-1 p-2 flex items-center",children:[Object(y.jsxs)("div",{className:"mr-4 bg-green-50 text-green-700 px-2",children:[Object(y.jsx)("span",{className:"text-sm",children:"Total selected"}),Object(y.jsx)("h3",{className:"font-bold text-2xl -mt-1",children:this.state.placement_list.length})]}),Object(y.jsxs)("div",{className:"px-2 bg-gray-50 rounded",children:[Object(y.jsx)("span",{className:"text-sm",children:"Total Teachers"}),Object(y.jsx)("h3",{className:"font-bold text-2xl -mt-1",children:this.state.data.length})]}),Object(y.jsx)("div",{className:"flex-1"}),Object(y.jsxs)("div",{className:"animate__animated animate__zoomIn animate__faster flex",children:[this.state.placement_list.length>=1&&Object(y.jsx)(u.a,{theme:"accent-light",onClick:this.setApprovedList,className:" animate__faster",children:"Preview list"}),Object(y.jsx)("form",{onSubmit:this.submitList,children:Object(y.jsx)(u.a,{theme:"success",className:"animate__animated animate__pulse animate__infinite ml-1",loading:this.state.loading_placement_submit,children:"Update placement list"})})]})]})]}),Object(y.jsxs)(p.a,{children:["main"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"danger",children:this.state.error.msg}),"loading-update-error"===this.state.error.target&&Object(y.jsx)(m.a,{theme:"danger",children:this.state.error.msg}),Object(y.jsx)("div",{className:"flex items-center",children:Object(y.jsxs)("div",{className:"flex-1",children:[Object(y.jsxs)(x.a,{children:["Update placement list ",null===(l=this.state.selected_placement)||void 0===l?void 0:l.month," "]}),Object(y.jsx)("p",{className:"opacity-60 text-lg -mt-1 font-bold text-accent-900 dark:text-accent-800",children:null===(r=this.props.auth.school)||void 0===r?void 0:r.school_name})]})}),Object(y.jsxs)("div",{className:"mt-3",children:[Object(y.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center pl-3 pr-2 rounded",children:[Object(y.jsx)("div",{className:"flex-1 pr-2",children:Object(y.jsx)(_.a,{error:"",label:"Search",name:"",type:"search",onChange:function(e){return n.setState({search:e.target.value})},placeholder:"Search by teacher name",value:this.state.search,size:"sm"})}),Object(y.jsx)("div",{className:"",children:Object(y.jsx)(O.a,{data:[{title:"All Roles",value:""}].concat(Object(o.a)(this.state.roles.map((function(e){return{title:e.role,value:e.role_id}})))),error:"",name:"select_role",onChange:function(e){return n.setState({selected_role:e.target.value})},label:"Role",placeholder:"Select role",value:this.state.selected_role,size:"sm"})}),null!==this.props.basic.qualifications&&Object(y.jsx)("div",{className:"px-2",children:Object(y.jsx)(O.a,{data:[{title:"All",value:""}].concat(Object(o.a)(this.props.basic.qualifications.map((function(e){return{title:e.qualification_name,value:e.qualification_name}})))),error:"",name:"select_qualification",onChange:function(e){return n.setState({selected_qualification:e.target.value})},label:"Qualification",placeholder:"Select Qualification",value:this.state.selected_qualification,size:"sm"})})]}),Object(y.jsx)("div",{className:"p-2 flex"}),Object(y.jsxs)("table",{className:"w-full text-left table-auto border",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{}),Object(y.jsx)("th",{children:"Names"}),Object(y.jsx)("th",{children:"First name"}),Object(y.jsx)("th",{children:"Last name"}),Object(y.jsx)("th",{children:"Phone number"}),Object(y.jsx)("th",{children:"Role"}),Object(y.jsx)("th",{children:"Qualification"})]})}),Object(y.jsx)("tbody",{children:h.length<=0?Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(y.jsx)(x.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):h.map((function(e,t){var s=n.state.placement_list.findIndex((function(t){return t.user_id===e.user_id})),a=Object(S.b)(e);return Object(y.jsxs)(i.Fragment,{children:[Object(y.jsxs)("tr",{className:"group border rounded hover:bg-blue-500 hover:bg-opacity-20 ".concat(s<0?"":"bg-green-100 bg-opacity-10"," "),children:[Object(y.jsx)("td",{className:"p-1 border cursor-pointer",onClick:n.UpdatePlacement.bind(n,e,s),children:s<0?Object(y.jsx)("button",{onClick:function(){return n.setState({selected_check_validation:e.user_id})},children:Object(y.jsx)(d.lb,{className:"text-3xl text-yellow-500 mx-auto",title:"This teacher is not validated"})}):Object(y.jsx)(d.l,{className:"text-3xl text-green-600 mx-auto"})},t),Object(y.jsx)("td",{className:"p-2 border",children:e.full_name}),Object(y.jsx)("td",{className:"p-2 border",children:e.first_name}),Object(y.jsx)("td",{className:"p-2 border",children:e.last_name}),Object(y.jsx)("td",{className:"p-2 border",children:e.phone_numbers}),Object(y.jsx)("td",{className:"p-2 border",children:e.role}),Object(y.jsx)("td",{className:"p-2 border",children:e.qualification})]}),n.state.selected_check_validation===e.user_id&&Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:10,className:"pb-5",children:Object(y.jsxs)("div",{className:"pb-2 rounded-b-lg -mt-1 animate__animated animate__zoomIn animate__faster border bg-red-100",children:[Object(y.jsxs)("div",{className:"p-1 px-2 flex bg-red-200",children:[Object(y.jsxs)("h2",{className:"flex-1 text-lg text-red-800 font-bold",children:[Object(y.jsx)("span",{className:"p-0.5 text-center rounded-full bg-red-600 pr-1 inline-block text-white",children:a.errors.length})," ","Items to be validated"]}),Object(y.jsx)(u.a,{className:"",size:"sm",theme:"danger-light",onClick:function(){return n.setState({selected_check_validation:""})},children:"Close"})]}),Object(y.jsx)("div",{className:"px-2 gap-1 rounded grid md:grid-cols-2 lg:grid-cols-3 pt-2",children:a.errors.map((function(e,t){return Object(y.jsxs)("div",{className:"border rounded full mb-1 mx-2 border-red-300 bg-white p-1 flex",children:[Object(y.jsx)(d.lb,{className:"pr-1 text-xl inline-block text-yellow-600"})," ",Object(y.jsx)("p",{children:e})]},t)}))})]})})})]},t)}))})]})]})]}),Object(y.jsx)("div",{className:"h-24"})]})}}]),s}(n.a.Component),k=Object(h.b)((function(e){return{auth:e.auth,basic:e.basic,placement:e.placement}}),{FC_UpdatePlacementList:j.Sb})(C),w=function(e){Object(l.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(y.jsx)(k,{placement_id:this.props.match.params.placement_id})}}]),s}(n.a.Component)}}]);
//# sourceMappingURL=23.4f44e1c7.chunk.js.map