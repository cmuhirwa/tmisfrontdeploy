(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[24],{361:function(e,t,s){"use strict";s.d(t,"f",(function(){return r})),s.d(t,"d",(function(){return o})),s.d(t,"e",(function(){return n})),s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return h})),s.d(t,"c",(function(){return b}));var a,l,c,i=s(17),r=100;!function(e){e.GOVERNMENT_AIDED="GOVERNMENT_AIDED",e.PRIVATE="GOVERNMENT_AIDED",e.PUBLIC="PUBLIC"}(a||(a={})),function(e){e.EXIST="Exist",e.NEW="new"}(l||(l={})),function(e){e.role="role",e.district_name="district_name",e.full_name="full_name",e.phone_numbers="phone_numbers",e.email="email",e.sex="sex",e.dob="dob",e.marital_status="marital_status",e.nid="nid",e.position="position",e.specialization="specialization",e.qualification="qualification",e.status="status",e.school_code="school_code",e.school_name="school_name",e.school_category="school_category",e.school_status="school_status",e.subjects="subjects",e.grades="grades",e.date_in_school="date_in_school",e.date_of_hire="date_of_hire"}(c||(c={}));var o=[{key:c.full_name,title:"Staff Full Names",status:!0,isChangeAllowed:!0},{key:c.nid,title:"National ID",status:!0,isChangeAllowed:!1},{key:c.sex,title:"Sex",status:!0,isChangeAllowed:!0},{key:c.dob,title:"Date of Birth",status:!0,isChangeAllowed:!0},{key:c.marital_status,title:"Marital status",status:!0,isChangeAllowed:!0},{key:c.phone_numbers,title:"Staff Phone",status:!0,isChangeAllowed:!0},{key:c.email,title:"Staff Email",status:!0,isChangeAllowed:!0},{key:c.qualification,title:"Qualification",status:!0,isChangeAllowed:!0},{key:c.position,title:"Position",status:!0,isChangeAllowed:!0},{key:c.subjects,title:"Subjects",status:!0,isChangeAllowed:!0},{key:c.grades,title:"Grade (No of Group)",status:!0,isChangeAllowed:!0},{key:c.specialization,title:"Specialization",status:!0,isChangeAllowed:!0},{key:c.role,title:"Staff role",status:!0,isChangeAllowed:!0},{key:c.status,title:"Status",status:!0,isChangeAllowed:!0},{key:c.date_of_hire,title:"Date to hire",status:!0,isChangeAllowed:!0},{key:c.date_in_school,title:"Date in school",status:!0,isChangeAllowed:!0},{key:c.school_name,title:"School Name",status:!0,isChangeAllowed:!0},{key:c.school_code,title:"School Code",status:!0,isChangeAllowed:!0},{key:c.school_category,title:"School Category",status:!0,isChangeAllowed:!0},{key:c.school_status,title:"School Status",status:!0,isChangeAllowed:!0},{key:c.district_name,title:"District Name",status:!0,isChangeAllowed:!0}],n={system:["26","Admin"],country:["REB","4","RTB","300","MINECOFIN","27","26","Admin"],district:["DDE","3","Human Resource","25"],school:["Head Teacher","Teacher","2"]},d=function(e){return null===e?"":b(e)?Object(i.a)(e):e},h=function(e){var t="",s=[],a="",l={grade_names:[],grade_codes:[],courses:[],group:[]},c=0;if(e){var r=function(a){var r=e[a];if(s.includes(r.course_code)||(s.push(r.course_code),t+=Object(i.j)(t)?r.course_name:", "+r.course_name),l.grade_codes.includes(r.grade_code)){if(l.courses.findIndex((function(e){return e===r.course_code}))>=0){var o=l.courses.findIndex((function(e){return e===r.course_code}));l.group[o]+=JSON.parse(r.grade_group).length}}else l.grade_codes.push(r.grade_code),l.grade_names.push(r.grade_name),l.courses.push(r.course_code),l.group.push(Object(i.b)(JSON.parse(r.grade_group)));c+=Number(r.teaching_period)*JSON.parse(r.grade_group).length};for(var o in e)r(o);for(var n in l.courses)a+=Object(i.j)(a)?"".concat(l.grade_names[n]," (").concat(l.group[n],")"):", ".concat(l.grade_names[n]," (").concat(l.group[n],")")}return{courses:t,grades:a,periods:c.toString()}},b=function(e){if(null===e)return!1;var t=new Date(e);return!isNaN(t.getDate())}},375:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"c",(function(){return l}));var a=function(e,t){var s=t.find((function(t){return e.position_code===t.position_code}));return{match_position:void 0!==s,position:void 0!==s?{position_code:null===s||void 0===s?void 0:s.position_code,position_name:null===s||void 0===s?void 0:s.position_name,qualification_id:null===s||void 0===s?void 0:s.qualification_id,qualification_name:null===s||void 0===s?void 0:s.qualification_name}:{position_code:"",position_name:e.position,qualification_id:"",qualification_name:""}}},l=function(e){var t,s,a,l,c=[];if(!e.user)return{validated:!1,errors:["You are not authenticated, please refresh your browser or login later"]};var i=e.user;return(null===(t=e.user)||void 0===t||!t.first_name||i.first_name.length<=2)&&c.push("First name is not valid"),(!i.last_name||i.last_name.length<=2)&&c.push("Last name is not valid"),(!i.full_name||i.full_name.length<=2)&&c.push("Full names"),(!i.hired_date||i.hired_date.length<=2)&&c.push("Hired date is not valid"),(!i.marital_status||i.marital_status.length<=2)&&c.push("Martial status not valid"),(!i.nid||i.nid.length<=4)&&c.push("NID is not valid"),(!i.phone_numbers||i.phone_numbers.length<=8)&&c.push("Phone number is not valid"),e.position&&e.position.position_code||c.push("You have no position, please ask your head teacher"),e.role&&e.role.role_id||c.push("There is no role assigned to you"),(!e.school||null===(s=e.school)||void 0===s||!s.school_name||(null===(a=e.school)||void 0===a?void 0:a.school_name.length)<=1)&&c.push("No schools found assigned to you!"),(!i.sex||i.sex.length<=2)&&c.push("No sex selected"),(!e.role||(null===(l=e.role)||void 0===l?void 0:l.role_id.length)<=0)&&c.push("Your role id is not validated"),{errors:c,validated:!(c.length>0)}};t.b=function(e){var t,s,a=[];return(!e.first_name||e.first_name.length<=2)&&a.push("First name is not valid"),(!e.last_name||e.last_name.length<=2)&&a.push("Last name is not valid"),(!e.full_name||e.full_name.length<=2)&&a.push("Full names"),(!e.hired_date||e.hired_date.length<=2)&&a.push("Hired date is not valid"),(!e.marital_status||e.marital_status.length<=2)&&a.push("Martial status not valid"),(!e.nationality||e.nationality.length<=2)&&a.push("Nationality is not valid"),(!e.nid||e.nid.length<=4)&&a.push("NID is not valid"),(!e.phone_numbers||e.phone_numbers.length<=8)&&a.push("Phone number is not valid"),(!e.position||e.position.length<=2)&&a.push("No selected position"),(!e.qualification||e.qualification.length<=1)&&a.push("No selected qualification"),(!e.role||e.role.length<=2)&&a.push("No selected role"),(!e.school||null===(t=e.school)||void 0===t||!t.school_name||(null===(s=e.school)||void 0===s?void 0:s.school_name.length)<=1)&&a.push("Invalid School"),(!e.sex||e.sex.length<=2)&&a.push("No sex selected"),(!e.specialization||e.specialization.length<=2)&&a.push("Invalid specialization"),(!e.staff_code||e.staff_code.length<=2)&&a.push("Invalid Staff category"),"1"===e.role_id&&(!e.teacher_hierarch||e.teacher_hierarch.length<=0)&&a.push("This user is a teacher, and must have at least one course"),(!e.role||e.role.length<=0)&&a.push("Your role id is not validated"),(!e.teaching_level_id||e.teaching_level_id.length<=2)&&a.push("Teaching level does not found"),(!e.education_certificate_id||e.education_certificate_id.length<=2)&&a.push("Education certificate does not found"),{errors:a,validated:!(a.length>0)}}},381:function(e,t,s){"use strict";s(4);var a=s(361),l=s(92),c=s(1);t.a=function(e){var t=e.placement_list,s=e.footer,i=e.header;return Object(c.jsx)("div",{className:"fixed top-0 bottom-0 right-0 left-0 animate__animated animate__fadeIn  bg-black bg-opacity-95 z-60 overflow-auto",children:Object(c.jsxs)("div",{className:"w-full mx-auto bg-white px-3 py-8 animate__animated animate__zoomIn animate__faster",children:[i&&i,Object(c.jsx)("div",{className:"overflow-auto ",children:Object(c.jsxs)("table",{className:"border w-full ",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"text-left",children:[Object(c.jsx)("th",{className:"p-1 border",children:"No"}),Object(c.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(c.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(c.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"NID"}),Object(c.jsx)("th",{className:"p-1 border",children:"Names"}),Object(c.jsx)("th",{className:"p-1 border",children:"First name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(c.jsx)("th",{className:"p-1 border",children:"Email"}),Object(c.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(c.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(c.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(c.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(c.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(c.jsx)("th",{className:"p-1 border",children:"Position"}),Object(c.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(c.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(c.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(c.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(c.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(c.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(c.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(c.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(c.jsx)("tbody",{children:t.filter((function(e){return"Active"===e.status})).map((function(e,t){var s,l,i,r,o,n,d=Object(a.a)(e.teacher_hierarch);return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"p-1 border",children:t+1}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.district_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(o=e.school)||void 0===o?void 0:o.school_category}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(n=e.school)||void 0===n?void 0:n.school_status}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.middle_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.hired_date}),Object(c.jsx)("th",{className:"p-1 border",children:d.courses}),Object(c.jsx)("th",{className:"p-1 border",children:d.periods}),Object(c.jsx)("th",{className:"p-1 border",children:d.grades}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(c.jsx)("br",{}),Object(c.jsx)(l.a,{className:"text-center",children:"Others candidates on placement list"}),Object(c.jsx)("div",{className:"overflow-auto ",children:Object(c.jsxs)("table",{className:"border w-full ",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"text-left",children:[Object(c.jsx)("th",{className:"p-1 border",children:"No"}),Object(c.jsx)("th",{className:"p-1 border",children:"District Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"District Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Category"}),Object(c.jsx)("th",{className:"p-1 border",children:"School Status"}),Object(c.jsx)("th",{className:"p-1 border",children:"Staff Category"}),Object(c.jsx)("th",{className:"p-1 border",children:"Staff Code"}),Object(c.jsx)("th",{className:"p-1 border",children:"NID"}),Object(c.jsx)("th",{className:"p-1 border",children:"Names"}),Object(c.jsx)("th",{className:"p-1 border",children:"First name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Last name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Middle name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Phone Number"}),Object(c.jsx)("th",{className:"p-1 border",children:"Email"}),Object(c.jsx)("th",{className:"p-1 border",children:"DOB"}),Object(c.jsx)("th",{className:"p-1 border",children:"Sex"}),Object(c.jsx)("th",{className:"p-1 border",children:"Nationality"}),Object(c.jsx)("th",{className:"p-1 border",children:"Martial Status"}),Object(c.jsx)("th",{className:"p-1 border",children:"Qualification"}),Object(c.jsx)("th",{className:"p-1 border",children:"Position"}),Object(c.jsx)("th",{className:"p-1 border",children:"Specialization"}),Object(c.jsx)("th",{className:"p-1 border",children:"Date in Education"}),Object(c.jsx)("th",{className:"p-1 border",children:"Date to School"}),Object(c.jsx)("th",{className:"p-1 border",children:"Subjects"}),Object(c.jsx)("th",{className:"p-1 border",children:"Periods"}),Object(c.jsx)("th",{className:"p-1 border",children:"Grades"}),Object(c.jsx)("th",{className:"p-1 border",children:"RSSB"}),Object(c.jsx)("th",{className:"p-1 border",children:"Bank Account"}),Object(c.jsx)("th",{className:"p-1 border",children:"Bank Name"}),Object(c.jsx)("th",{className:"p-1 border",children:"Status"})]})}),Object(c.jsx)("tbody",{children:t.filter((function(e){return"Active"!==e.status})).map((function(e,t){var s,a,l,i,r,o;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"p-1 border",children:t+1}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.district_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(a=e.location)||void 0===a?void 0:a.district_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(l=e.school)||void 0===l?void 0:l.school_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(i=e.school)||void 0===i?void 0:i.school_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(r=e.school)||void 0===r?void 0:r.school_category}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e||null===(o=e.school)||void 0===o?void 0:o.school_status}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_category}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.staff_code}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nid}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.full_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.first_name}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.last_name}),Object(c.jsx)("th",{className:"p-1 border"}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.phone_numbers}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.email}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.dob}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.sex}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.nationality_id}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.marital_status}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.qualification}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.position}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.specialization}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.start_date_in_the_school}),Object(c.jsx)("th",{className:"p-1 border"}),Object(c.jsx)("th",{className:"p-1 border"}),Object(c.jsx)("th",{className:"p-1 border"}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.rssb_number}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.bank_account}),Object(c.jsx)("th",{className:"p-1 border"}),Object(c.jsx)("th",{className:"p-1 border",children:null===e||void 0===e?void 0:e.status})]},t)}))})]})}),Object(c.jsx)("div",{className:"",children:s&&s})]})})}},570:function(e,t,s){"use strict";s.r(t),s.d(t,"CreatePlacementList",(function(){return k}));var a=s(10),l=s(41),c=s(19),i=s(20),r=s(21),o=s(22),n=s(4),d=s.n(n),h=s(15),b=s(36),u=s(37),j=s(13),m=s(47),p=s(23),x=s(54),_=s(92),v=s(138),O=s(39),f=s(24),N=s(381),g=s(5),S=s(17),y=s(375),C=s(1),w=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var a,l,i,r,o,n,d,h;return Object(c.a)(this,s),(h=t.call(this,e)).submitLogin=function(e){e.preventDefault()},h.componentDidMount=function(){var e;Object(g.a)(null===(e=h.props.auth.role)||void 0===e?void 0:e.access,g.b.HEADTEACHER_CREATE_PLACEMENT_LIST,(function(){h.startApp()}))},h.startApp=function(){if(null===h.props.basic.academic_calender)h.setState({error:{target:"main-error",msg:"failed to load data, please reload the page (Refresh)"}});else if(null===h.props.auth.school)h.setState({error:{target:"main-error",msg:"No school assigned to you"}});else{var e=h.props.auth.school.school_code;h.setState({error:{target:null,msg:""}}),Object(j.tb)(e,(function(t,s,a){!0===t&&null!==s?(console.log({teachers:s.staff}),h.setState({loading_data:!1,data:s.staff,roles:s.role,placement_list:s.staff.filter((function(e){return Object(y.b)(e).validated}))}),Object(j.pb)(e,(function(e,t,a){!0===e?h.setState({schools_positions:t,school_positions_loading:!1,placement_list:s.staff.filter((function(e){return Object(y.b)(e).validated&&Object(y.a)(e,t).match_position}))}):h.setState({schools_positions:[],school_positions_loading:!1,error:{msg:a,target:"main-error"}})}))):h.setState({loading_data:!1,error:{msg:a,target:"main-error"}})}))}},h.UpdatePlacement=function(e,t){},h.submitList=function(e){var t;if(e.preventDefault(),null===h.props.basic.academic_calender||null===h.props.auth.school)return h.setState({error:{target:"submit-list-error",msg:"You don't has a district assigned to you"}});var s=h.props.auth.school.school_code.substring(0,2);h.setState({loading_placement_submit:!0}),Object(j.kc)({academic_year_id:null===(t=h.props.basic.academic_calender)||void 0===t?void 0:t.academic_year_id,district_code:s,list:JSON.stringify(h.state.placement_list),month:S.d[(new Date).getMonth()],school_code:h.props.auth.school.school_code,ht_comment:h.state.ht_comment},(function(e,t,s){!0===e?(h.setState({loading_placement_submit:!1,error:{target:"submit-list-success",msg:"Placement list for ".concat(h.state.selected_month," has been submitted successfully")}}),setTimeout((function(){h.setState({error:{target:"submit-list-success-redirect",msg:""}})}),2e3)):h.setState({loading_placement_submit:!1,error:{target:"submit-list-error",msg:s}})}))},h.setApprovedList=function(){return h.setState({approved_list:!h.state.approved_list})},h.SelectAll=function(){return h.setState({placement_list:h.state.data})},h.DeSelectAll=function(){return h.setState({placement_list:[]})},h.state={schools_positions:[],school_positions_loading:!0,approved_list:!1,loading:!1,data:[],placement_list:[],roles:[],error:{target:null,msg:""},loading_data:!0,selected_role:"",selected_request_id:"",selected_value:"0",selected_comment:"",selected_auto_level:"",search:"",selected_qualification:"",selected_month:"",loading_placement_submit:!1,ht_comment:"I,  ".concat(null===(a=h.props.auth.user)||void 0===a?void 0:a.first_name," ").concat(null===(l=h.props.auth.user)||void 0===l?void 0:l.middle_name," ").concat(null===(i=h.props.auth.user)||void 0===i?void 0:i.last_name," with Staff code: ").concat(null===(r=h.props.auth.user)||void 0===r?void 0:r.staff_code," and with NID: ").concat(null===(o=h.props.auth.user)||void 0===o?void 0:o.nid,", Head Teacher of ").concat(null===(n=h.props.auth.school)||void 0===n?void 0:n.school_name," - ").concat(null===(d=h.props.auth.school)||void 0===d?void 0:d.school_code,", confirm that the list of teachers displayed on this teacher placement report for ").concat(S.d[(new Date).getMonth()]," generated on ").concat(Object(S.a)(new Date)," is valid. I also confirm that every teacher is assigned to his/her teaching qualification as per their appointment letters. "),accepted_changes:!1,selected_check_validation:""},h}return Object(i.a)(s,[{key:"render",value:function(){var e,t,s,c,i=this;if("submit-list-success-redirect"===this.state.error.target)return Object(C.jsx)(u.a,{to:"/placement-list-ht"});var r=""===this.state.selected_role?this.state.data:this.state.data.filter((function(e){return e.role_id===i.state.selected_role}));return r=""===this.state.selected_qualification?r:r.filter((function(e){return e.qualification===i.state.selected_qualification})),r=Object(S.n)(r,this.state.search,{email:!0,first_name:!0,full_name:!0,last_name:!0,phone_numbers:!0,qualification:!0,role:!0,role_id:!0,status:!0,user_id:!0,username:!0}),!0===this.state.loading_data?Object(C.jsx)("div",{className:"p-8 text-center",children:Object(C.jsx)("div",{className:"mx-auto",children:Object(C.jsx)(f.a,{})})}):"main-error"===this.state.error.target?Object(C.jsx)(m.a,{theme:"danger",fixed:!0,children:this.state.error.msg}):!0===this.state.approved_list?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{placement_list:this.state.placement_list,header:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)("div",{className:"flex-1",children:Object(C.jsxs)("div",{className:"text-xl",children:[Object(C.jsxs)("h2",{children:["School code:"," ",Object(C.jsx)("b",{children:null===(e=this.props.auth.school)||void 0===e?void 0:e.school_code})]}),Object(C.jsxs)("h2",{children:["School name:"," ",Object(C.jsx)("b",{children:null===(t=this.props.auth.school)||void 0===t?void 0:t.school_name})]}),Object(C.jsxs)("h2",{children:["Done by: ",Object(C.jsx)("b",{children:null===(s=this.props.auth.user)||void 0===s?void 0:s.full_name})]})]})}),Object(C.jsx)("div",{className:"flex-1 text-right",children:Object(C.jsx)(p.a,{size:"lg",theme:"danger-light",onClick:this.setApprovedList,disabled:this.state.loading_placement_submit,type:"button",children:"Close"})})]}),Object(C.jsx)("h1",{className:"text-center text-3xl font-bold mb-4 ",children:"Placement list"})]}),footer:Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("form",{onSubmit:this.submitList,children:Object(C.jsxs)("div",{className:"mt-5 flex border-t pt-3",children:[Object(C.jsx)("div",{className:"lg:flex-1"}),Object(C.jsxs)("div",{className:"flex-1",children:["submit-list-success"===this.state.error.target&&Object(C.jsx)(m.a,{theme:"success",children:this.state.error.msg}),"submit-list-error"===this.state.error.target&&Object(C.jsx)(m.a,{theme:"danger",children:this.state.error.msg}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("span",{children:"Comment:"}),Object(C.jsx)("div",{className:"w-full  border-2 bg-blue-100 border-blue-900  rounded p-2",children:this.state.ht_comment})]}),Object(C.jsxs)("div",{onClick:function(){return i.setState({accepted_changes:!i.state.accepted_changes})},className:"flex my-2 p-1 bg-gray-100 rounded gap-2 cursor-pointer ".concat(!0===this.state.accepted_changes?"text-green-600":"text-gray-800"),children:[Object(C.jsx)("div",{className:"",children:!0===this.state.accepted_changes?Object(C.jsx)(h.m,{className:"text-3xl"}):Object(C.jsx)(h.n,{className:"text-3xl"})}),Object(C.jsx)("div",{className:"flex-1 ",children:Object(C.jsx)("p",{className:"text-xl",children:"I have read and agree/agreed with the comment."})})]}),Object(C.jsxs)("div",{className:"flex w-full items-end gap-4",children:[Object(C.jsx)("div",{className:"flex-1",children:Object(C.jsx)(v.a,{data:[{title:S.d[(new Date).getMonth()],value:S.d[(new Date).getMonth()]}],label:"Current month",name:"selected-month",onChange:function(e){return i.setState({selected_month:e.target.value,error:{target:null,msg:""}})},placeholder:"Select month",value:this.state.selected_month,error:"submit-month-error"===this.state.error.target?this.state.error.msg:"",disabled:!0})}),!0===this.state.accepted_changes&&Object(C.jsx)("div",{className:"flex-1 pb-2 animate__animated animate__zoomIn animate__faster",children:Object(C.jsx)(p.a,{full:!0,size:"lg",className:"flex-1",loading:this.state.loading_placement_submit,children:"Submit placement list"})})]})]})]})})})})}):Object(C.jsxs)(C.Fragment,{children:["main-success"===this.state.error.target&&Object(C.jsx)(m.a,{theme:"success",fixed:!0,children:this.state.error.msg}),Object(C.jsxs)("div",{className:"fixed bottom-0 right-0 flex left-0 bg-white shadow-lg border-t-2 px-3 items-center",children:[Object(C.jsx)("div",{className:"main-side-spacer"}),Object(C.jsxs)("div",{className:"flex-1 p-2 flex items-center",children:[Object(C.jsxs)("div",{className:"mr-4 bg-green-50 text-green-700 px-2",children:[Object(C.jsx)("span",{className:"text-sm",children:"Total validated"}),Object(C.jsx)("h3",{className:"font-bold text-2xl -mt-1",children:this.state.placement_list.length})]}),Object(C.jsxs)("div",{className:"px-2 bg-gray-50 rounded",children:[Object(C.jsx)("span",{className:"text-sm",children:"Total Teachers"}),Object(C.jsx)("h3",{className:"font-bold text-2xl -mt-1",children:this.state.data.length})]}),Object(C.jsx)("div",{className:"flex-1"}),Object(C.jsx)("div",{className:"",children:this.state.placement_list.length>=1&&Object(C.jsx)(p.a,{theme:"accent",onClick:this.setApprovedList,className:"animate__animated animate__zoomIn animate__faster",children:"Preview list"})})]})]}),Object(C.jsxs)(x.a,{children:["main"===this.state.error.target&&Object(C.jsx)(m.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),"loading-update-error"===this.state.error.target&&Object(C.jsx)(m.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),Object(C.jsx)("div",{className:"flex items-center",children:Object(C.jsxs)("div",{className:"flex-1",children:[Object(C.jsx)(_.a,{children:"Placement List Approval Process"}),Object(C.jsx)("p",{className:"opacity-60 text-lg -mt-1 font-bold text-accent-900 dark:text-accent-800",children:null===(c=this.props.auth.school)||void 0===c?void 0:c.school_name})]})}),Object(C.jsxs)("div",{className:"mt-3",children:[Object(C.jsxs)("div",{className:"border border-t mt-2 mb-1 flex items-center pl-3 pr-2 rounded",children:[Object(C.jsx)("div",{className:"flex-1 pr-2",children:Object(C.jsx)(O.a,{error:"",label:"Search",name:"",type:"search",onChange:function(e){return i.setState({search:e.target.value})},placeholder:"Search by teacher name",value:this.state.search,size:"sm"})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(v.a,{data:[{title:"All Roles",value:""}].concat(Object(l.a)(this.state.roles.map((function(e){return{title:e.role,value:e.role_id}})))),error:"",name:"select_role",onChange:function(e){return i.setState({selected_role:e.target.value})},label:"Role",placeholder:"Select role",value:this.state.selected_role,size:"sm"})}),null!==this.props.basic.qualifications&&Object(C.jsx)("div",{className:"px-2",children:Object(C.jsx)(v.a,{data:[{title:"All",value:""}].concat(Object(l.a)(this.props.basic.qualifications.map((function(e){return{title:e.qualification_name,value:e.qualification_name}})))),error:"",name:"select_qualification",onChange:function(e){return i.setState({selected_qualification:e.target.value})},label:"Qualification",placeholder:"Select Qualification",value:this.state.selected_qualification,size:"sm"})})]}),Object(C.jsx)("div",{className:"p-2 flex"}),Object(C.jsxs)("table",{className:"w-full text-left table-auto border",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Names"}),Object(C.jsx)("th",{children:"First name"}),Object(C.jsx)("th",{children:"Last name"}),Object(C.jsx)("th",{children:"Phone number"}),Object(C.jsx)("th",{children:"Role"}),Object(C.jsx)("th",{children:"Qualification"})]})}),Object(C.jsx)("tbody",{children:r.length<=0?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:8,className:"p-8 border rounded border-opacity-25 animate__animated animate__fadeIn text-center",children:Object(C.jsx)(_.a,{size:"md",className:"opacity-60 font-light",children:"No results found"})})}):r.map((function(e,t){var s=i.state.placement_list.findIndex((function(t){return t.user_id===e.user_id})),c=Object(y.b)(e),r=Object(y.a)(e,i.state.schools_positions);return!1===r.match_position&&(c=Object(a.a)(Object(a.a)({},c),{},{errors:[].concat(Object(l.a)(c.errors),["Position: ".concat(r.position.position_name," is not assigned to this school")])})),Object(C.jsxs)(n.Fragment,{children:[Object(C.jsxs)("tr",{className:"group border rounded hover:bg-blue-500 hover:bg-opacity-20 ".concat(s<0?"":"bg-green-600 bg-opacity-10"," "),children:[Object(C.jsx)("td",{className:"p-1 border cursor-pointer",onClick:i.UpdatePlacement.bind(i,e,s),children:s<0?Object(C.jsx)("button",{onClick:function(){return i.setState({selected_check_validation:e.user_id})},children:Object(C.jsx)(h.Ob,{className:"text-3xl text-yellow-500 mx-auto",title:"This teacher is not validated"})}):Object(C.jsx)(h.m,{className:"text-3xl text-green-600 mx-auto"})},t),Object(C.jsx)("td",{className:"p-2 border",children:e.full_name}),Object(C.jsx)("td",{className:"p-2 border",children:e.first_name}),Object(C.jsx)("td",{className:"p-2 border",children:e.last_name}),Object(C.jsx)("td",{className:"p-2 border",children:e.phone_numbers}),Object(C.jsx)("td",{className:"p-2 border",children:e.role}),Object(C.jsx)("td",{className:"p-2 border",children:e.qualification})]}),i.state.selected_check_validation===e.user_id&&Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:10,className:"pb-5",children:Object(C.jsxs)("div",{className:"pb-2 rounded-b-lg -mt-1 animate__animated animate__zoomIn animate__faster border bg-red-100",children:[Object(C.jsxs)("div",{className:"p-1 px-2 flex bg-red-200",children:[Object(C.jsxs)("h2",{className:"flex-1 text-lg text-red-800 font-bold",children:[Object(C.jsx)("span",{className:"p-0.5 text-center rounded-full bg-red-600 pr-1 inline-block text-white",children:c.errors.length})," ","Items to be validated"]}),Object(C.jsx)(p.a,{className:"",size:"sm",theme:"danger-light",onClick:function(){return i.setState({selected_check_validation:""})},children:"Close"})]}),Object(C.jsx)("div",{className:"px-2 gap-1 rounded grid md:grid-cols-2 lg:grid-cols-3 pt-2",children:c.errors.map((function(e,t){return Object(C.jsxs)("div",{className:"border rounded full mb-1 mx-2 border-red-300 bg-white p-1 flex",children:[Object(C.jsx)(h.Ob,{className:"pr-1 text-xl inline-block text-yellow-600"})," ",Object(C.jsx)("p",{children:e})]},t)}))})]})})})]},t)}))})]})]})]}),Object(C.jsx)("div",{className:"h-24"})]})}}]),s}(d.a.Component),k=Object(b.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(w)}}]);
//# sourceMappingURL=24.85f3d493.chunk.js.map