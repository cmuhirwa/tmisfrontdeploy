(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[33],{112:function(e,t,s){"use strict";s.d(t,"f",(function(){return o})),s.d(t,"d",(function(){return i})),s.d(t,"e",(function(){return d})),s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return h})),s.d(t,"c",(function(){return b}));var a,c,l,r=s(19),o=100;!function(e){e.GOVERNMENT_AIDED="GOVERNMENT_AIDED",e.PRIVATE="GOVERNMENT_AIDED",e.PUBLIC="PUBLIC"}(a||(a={})),function(e){e.EXIST="Exist",e.NEW="new"}(c||(c={})),function(e){e.role="role",e.district_name="district_name",e.full_name="full_name",e.first_name="first_name",e.last_name="last_name",e.phone_numbers="phone_numbers",e.email="email",e.sex="sex",e.dob="dob",e.marital_status="marital_status",e.nid="nid",e.rssb_number="rssb_number",e.bank_account="bank_account",e.position="position",e.specialization="specialization",e.qualification="qualification",e.staff_category="staff_category",e.staff_code="staff_code",e.status="status",e.school_code="school_code",e.school_name="school_name",e.school_category="school_category",e.school_status="school_status",e.region_code="region_code",e.village_name="village_name",e.cell_name="cell_name",e.cell_code="cell_code",e.sector_name="sector_name",e.sector_code="sector_code",e.district_code="district_code",e.province_name="province_name",e.province_code="province_code",e.subjects="subjects",e.grades="grades",e.periods="periods",e.date_in_school="date_in_school",e.date_of_hire="date_of_hire",e.nationality="nationality",e.middle_name="middle_name",e.bank_name="bank_name"}(l||(l={}));var i=[{key:l.staff_code,title:"Staff code",status:!0,isChangeAllowed:!1},{key:l.nid,title:"National ID",status:!0,isChangeAllowed:!1},{key:l.full_name,title:"Staff Full Names",status:!0,isChangeAllowed:!0},{key:l.first_name,title:"Staff First Name",status:!0,isChangeAllowed:!0},{key:l.middle_name,title:"Staff Middle Name",status:!0,isChangeAllowed:!0},{key:l.last_name,title:"Staff Last Name",status:!0,isChangeAllowed:!0},{key:l.phone_numbers,title:"Staff Phone",status:!0,isChangeAllowed:!0},{key:l.email,title:"Staff Email",status:!0,isChangeAllowed:!0},{key:l.dob,title:"Date of Birth",status:!0,isChangeAllowed:!0},{key:l.sex,title:"Sex",status:!0,isChangeAllowed:!0},{key:l.marital_status,title:"Marital status",status:!0,isChangeAllowed:!0},{key:l.qualification,title:"Qualification",status:!0,isChangeAllowed:!0},{key:l.specialization,title:"Specialization",status:!0,isChangeAllowed:!0},{key:l.rssb_number,title:"RSSB",status:!0,isChangeAllowed:!0},{key:l.bank_name,title:"Bank name",status:!0,isChangeAllowed:!0},{key:l.bank_account,title:"Bank account",status:!0,isChangeAllowed:!0},{key:l.position,title:"Position",status:!0,isChangeAllowed:!0},{key:l.role,title:"Staff role",status:!0,isChangeAllowed:!0},{key:l.district_code,title:"District Code",status:!0,isChangeAllowed:!0},{key:l.district_name,title:"District Name",status:!0,isChangeAllowed:!0},{key:l.school_code,title:"School Code",status:!0,isChangeAllowed:!0},{key:l.school_name,title:"School Name",status:!0,isChangeAllowed:!0},{key:l.school_category,title:"School Category",status:!0,isChangeAllowed:!0},{key:l.school_status,title:"School Status",status:!0,isChangeAllowed:!0},{key:l.nationality,title:"Nationality",status:!0,isChangeAllowed:!0},{key:l.date_of_hire,title:"Date to hire",status:!0,isChangeAllowed:!0},{key:l.date_in_school,title:"Date in school",status:!0,isChangeAllowed:!0},{key:l.subjects,title:"Subjects",status:!0,isChangeAllowed:!0},{key:l.grades,title:"Grade (No of Group)",status:!0,isChangeAllowed:!0},{key:l.periods,title:"Periods",status:!0,isChangeAllowed:!0}],d={system:["26","Admin"],country:["REB","4","RTB","300","MINECOFIN","27","26","Admin"],district:["DDE","3","Human Resource","25"],school:["Head Teacher","Teacher","2"]},n=function(e){return null===e?"":b(e)?Object(r.a)(e):e},h=function(e){var t="",s=[],a="",c={grade_names:[],grade_codes:[],courses:[],group:[]},l=0;if(e){var o=function(a){var o=e[a];if(s.includes(o.course_code)||(s.push(o.course_code),t+=Object(r.f)(t)?o.course_name:", "+o.course_name),c.grade_codes.includes(o.grade_code)){if(c.courses.findIndex((function(e){return e===o.course_code}))>=0){var i=c.courses.findIndex((function(e){return e===o.course_code}));c.group[i]+=JSON.parse(o.grade_group).length}}else c.grade_codes.push(o.grade_code),c.grade_names.push(o.grade_name),c.courses.push(o.course_code),c.group.push(JSON.parse(o.grade_group).length);l+=Number(o.teaching_period)*JSON.parse(o.grade_group).length};for(var i in e)o(i);for(var d in c.courses)a+=Object(r.f)(a)?"".concat(c.grade_names[d]," (").concat(c.group[d],")"):", ".concat(c.grade_names[d]," (").concat(c.group[d],")")}return{courses:t,grades:a,periods:l.toString()}},b=function(e){if(null===e)return!1;var t=new Date(e);return!isNaN(t.getDate())}},125:function(e,t,s){"use strict";s(2);var a=s(112),c=s(44),l=s(1);t.a=function(e){var t=e.placement_list,s=e.footer,r=e.header;return Object(l.jsx)("div",{className:"fixed top-0 bottom-0 right-0 left-0 animate__animated animate__fadeIn  bg-black bg-opacity-95 z-60 overflow-auto",children:Object(l.jsxs)("div",{className:"w-full mx-auto bg-white px-3 py-8 animate__animated animate__zoomIn animate__faster",children:[r&&r,Object(l.jsx)("div",{className:"overflow-auto ",children:Object(l.jsxs)("table",{className:"border w-full ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"text-left",children:[Object(l.jsx)("th",{className:"p-1 border",children:"No"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"NID"}),Object(l.jsx)("th",{className:"p-1 border",children:"Names"}),Object(l.jsx)("th",{className:"p-1 border",children:"First name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(l.jsx)("th",{className:"p-1 border",children:"Email"}),Object(l.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(l.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(l.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(l.jsx)("th",{className:"p-1 border",children:"Position"}),Object(l.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(l.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(l.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(l.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(l.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(l.jsx)("tbody",{children:t.filter((function(e){return"Active"===e.status})).map((function(e,t){var s,c,r,o,i,d,n=Object(a.a)(e.teacher_hierarch);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"p-1 border",children:t+1}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(c=e.location)||void 0===c?void 0:c.district_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(o=e.school)||void 0===o?void 0:o.school_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(d=e.school)||void 0===d?void 0:d.school_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.middle_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.hired_date}),Object(l.jsx)("th",{className:"p-1 border",children:n.courses}),Object(l.jsx)("th",{className:"p-1 border",children:n.periods}),Object(l.jsx)("th",{className:"p-1 border",children:n.grades}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(l.jsx)("br",{}),Object(l.jsx)(c.a,{className:"text-center",children:"Others candidates on placement list"}),Object(l.jsx)("div",{className:"overflow-auto ",children:Object(l.jsxs)("table",{className:"border w-full ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"text-left",children:[Object(l.jsx)("th",{className:"p-1 border",children:"No"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(l.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(l.jsx)("th",{className:"p-1 border",children:"NID"}),Object(l.jsx)("th",{className:"p-1 border",children:"Names"}),Object(l.jsx)("th",{className:"p-1 border",children:"First name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(l.jsx)("th",{className:"p-1 border",children:"Email"}),Object(l.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(l.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(l.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(l.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(l.jsx)("th",{className:"p-1 border",children:"Position"}),Object(l.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(l.jsx)("th",{className:"p-1 border",children:"Date to School"}),Object(l.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(l.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(l.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(l.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(l.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(l.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(l.jsx)("tbody",{children:t.filter((function(e){return"Active"!==e.status})).map((function(e,t){var s,a,c,r,o,i;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"p-1 border",children:t+1}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.district_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(c=e.school)||void 0===c?void 0:c.school_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(o=e.school)||void 0===o?void 0:o.school_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality_id}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(l.jsx)("th",{className:"p-1 border"}),Object(l.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(l.jsx)("div",{className:"",children:s&&s})]})})}},160:function(e,t,s){"use strict";s.r(t),s.d(t,"PlacementListHT",(function(){return v}));var a=s(29),c=s(30),l=s(31),r=s(32),o=s(2),i=s.n(o),d=s(17),n=s(11),h=s(10),b=s(25),j=s(27),m=s(33),u=s(44),x=s(43),p=s(125),O=s(7),N=s(1),_=function(e){Object(l.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).selectItem=function(e){return c.setState({selected:e})},c.submitLogin=function(e){e.preventDefault()},c.componentDidMount=function(){var e;Object(O.a)(null===(e=c.props.auth.role)||void 0===e?void 0:e.access,O.b.HEADTEACHER_VIEW_PLACEMENT_LIST,(function(){c.startApp()}))},c.startApp=function(){if(null===c.props.basic.academic_calender)c.setState({error:{target:"main-error",msg:"failed to load data, please reload the page (Refresh)"}});else if(null===c.props.auth.school)c.setState({error:{target:"main-error",msg:"No school assigned to you"}});else{var e=c.props.auth.school.school_code;c.setState({error:{target:null,msg:""}}),c.props.FC_GetPlacementBySchool({school_code:e,academic_id:c.props.basic.academic_calender.academic_year_id},(function(e,t){!0===e?(console.log({status:e,msg:t}),c.setState({loading:!1})):c.setState({loading:!1,error:{msg:t,target:"main-error"}})}))}},c.state={loading:!0,data:[],error:{target:null,msg:""},selected:null},c}return Object(c.a)(s,[{key:"render",value:function(){var e,t=this,s=this.props.placement.placements;return!0===this.state.loading?Object(N.jsx)("div",{className:"p-8 text-center",children:Object(N.jsx)("div",{className:"mx-auto",children:Object(N.jsx)(x.a,{})})}):"main-error"===this.state.error.target?Object(N.jsx)(b.a,{theme:"danger",fixed:!0,children:this.state.error.msg}):null!==this.state.selected?(console.log({original:this.state.selected.list}),console.log({data:JSON.parse(this.state.selected.list),data_old:this.state.selected}),JSON.parse(this.state.selected.list)?Object(N.jsx)(p.a,{placement_list:JSON.parse(this.state.selected.list),header:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"flex",children:[Object(N.jsxs)("div",{className:"text-xl flex-1",children:[Object(N.jsxs)("h2",{children:["School code: ",Object(N.jsx)("b",{children:this.state.selected.school_code})]}),Object(N.jsxs)("h2",{children:["School name: ",Object(N.jsx)("b",{children:this.state.selected.school_name})]}),Object(N.jsxs)("h2",{children:["Done by: ",Object(N.jsx)("b",{children:this.state.selected.head_teacher_name})]})]}),Object(N.jsx)("div",{className:"flex-1 text-right",children:Object(N.jsx)(j.a,{theme:"danger-light",onClick:this.selectItem.bind(this,null),children:"Close"})})]}),Object(N.jsxs)("h1",{className:"text-center text-3xl font-bold mb-4 my-3",children:["Placement list for ",Object(N.jsx)("b",{children:this.state.selected.month})]})]}),footer:Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"py-3",children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsxs)("h5",{children:[Object(N.jsx)("b",{children:"Headteacher comment: "}),this.state.selected.ht_comment]}),Object(N.jsxs)("h5",{children:[Object(N.jsx)("b",{children:"DDE comment: "}),this.state.selected.dde_comment]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})})}):Object(N.jsxs)("div",{className:"py-8 text-gray-600",children:[Object(N.jsx)("h2",{className:"text-2xl text-red-700",children:"Failed to load data!"}),Object(N.jsx)("p",{children:"The placement list format for this school has a problem, please contact the administrator"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"mx-auto",children:Object(N.jsx)(j.a,{theme:"danger-light",onClick:this.selectItem.bind(this,null),children:"Close"})})]})):Object(N.jsxs)(N.Fragment,{children:["main-success"===this.state.error.target&&Object(N.jsx)(b.a,{theme:"success",fixed:!0,children:this.state.error.msg}),Object(N.jsxs)(m.a,{children:[Object(N.jsxs)("div",{className:"flex items-center",children:[Object(N.jsxs)("div",{className:"flex-1",children:[Object(N.jsx)(u.a,{children:"Create placement list"}),Object(N.jsx)("p",{className:"opacity-60 text-lg -mt-1 font-bold text-accent-900 dark:text-accent-800",children:null===(e=this.props.auth.school)||void 0===e?void 0:e.school_name})]}),Object(N.jsx)("div",{className:"",children:Object(N.jsx)(n.b,{to:"/create-placement-list",children:Object(N.jsx)(j.a,{children:"Generate new list"})})})]}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsxs)("table",{className:"w-full text-left table-auto border",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"border",children:[Object(N.jsx)("th",{className:"border"}),Object(N.jsx)("th",{className:"border",children:"Month"}),Object(N.jsx)("th",{className:"border",children:"Created by"}),Object(N.jsx)("th",{className:"border",children:"Approved by"}),Object(N.jsx)("th",{className:"border",children:"Approved date"}),Object(N.jsx)("th",{className:"border",children:"Status"}),Object(N.jsx)("th",{className:"border"})]})}),Object(N.jsx)("tbody",{children:s.length<=0?Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(N.jsx)(u.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):s.map((function(e,s){var a;return Object(N.jsx)(o.Fragment,{children:Object(N.jsxs)("tr",{className:"group border rounded hover:bg-blue-500 hover:bg-opacity-20  ",children:[Object(N.jsx)("td",{className:"p-1 border cursor-pointer text-center",children:s+1},s),Object(N.jsx)("td",{className:"p-2 border",children:e.month}),Object(N.jsx)("td",{className:"p-2 border",children:e.head_teacher_name}),Object(N.jsx)("td",{className:"p-2 border",children:e.dde_name}),Object(N.jsx)("td",{className:"p-2 border",children:null===e||void 0===e?void 0:e.approved_date}),Object(N.jsx)("td",{className:"p-2 border",children:"1"===e.dde_approval_status?Object(N.jsx)("span",{className:"p-0.5 text-sm rounded-full px-2 bg-green-200 font-bold text-green-700",children:"Approved"}):Object(N.jsx)("span",{className:"p-0.5 font-bold text-sm rounded-full px-2 bg-gray-200 text-gray-700",children:"Waiting"})}),Object(N.jsxs)("td",{className:"p-2 w-48 text-right",children:[Object(N.jsx)(j.a,{size:"sm",onClick:t.selectItem.bind(t,e),theme:"accent-light",children:"View list"}),!1===Object(O.c)(null===(a=t.props.auth.role)||void 0===a?void 0:a.role,O.b.HEADTEACHER_UPDATE_PLACEMENT_LIST)&&Object(N.jsx)(N.Fragment,{children:"0"===e.dde_approval_status&&Object(N.jsx)(n.b,{to:"/update-placement-list/".concat(e.placement_list_approval_id),children:Object(N.jsx)(j.a,{size:"sm",theme:"success",className:"ml-2 animate__animated animate__tada animate__infinite animate__slow",children:"Update"})})})]})]})},s)}))})]})})]}),Object(N.jsx)("div",{className:"h-24"})]})}}]),s}(i.a.Component),v=Object(d.b)((function(e){return{auth:e.auth,basic:e.basic,placement:e.placement}}),{FC_GetPlacementBySchool:h.x})(_)}}]);
//# sourceMappingURL=33.be51cafd.chunk.js.map