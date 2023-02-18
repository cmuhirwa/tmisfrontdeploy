(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[23],{375:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"c",(function(){return r}));var a=function(e,t){var s=t.find((function(t){return e.position_code===t.position_code}));return{match_position:void 0!==s,position:void 0!==s?{position_code:null===s||void 0===s?void 0:s.position_code,position_name:null===s||void 0===s?void 0:s.position_name,qualification_id:null===s||void 0===s?void 0:s.qualification_id,qualification_name:null===s||void 0===s?void 0:s.qualification_name}:{position_code:"",position_name:e.position,qualification_id:"",qualification_name:""}}},r=function(e){var t,s,a,r,n=[];if(!e.user)return{validated:!1,errors:["You are not authenticated, please refresh your browser or login later"]};var i=e.user;return(null===(t=e.user)||void 0===t||!t.first_name||i.first_name.length<=2)&&n.push("First name is not valid"),(!i.last_name||i.last_name.length<=2)&&n.push("Last name is not valid"),(!i.full_name||i.full_name.length<=2)&&n.push("Full names"),(!i.hired_date||i.hired_date.length<=2)&&n.push("Hired date is not valid"),(!i.marital_status||i.marital_status.length<=2)&&n.push("Martial status not valid"),(!i.nid||i.nid.length<=4)&&n.push("NID is not valid"),(!i.phone_numbers||i.phone_numbers.length<=8)&&n.push("Phone number is not valid"),e.position&&e.position.position_code||n.push("You have no position, please ask your head teacher"),e.role&&e.role.role_id||n.push("There is no role assigned to you"),(!e.school||null===(s=e.school)||void 0===s||!s.school_name||(null===(a=e.school)||void 0===a?void 0:a.school_name.length)<=1)&&n.push("No schools found assigned to you!"),(!i.sex||i.sex.length<=2)&&n.push("No sex selected"),(!e.role||(null===(r=e.role)||void 0===r?void 0:r.role_id.length)<=0)&&n.push("Your role id is not validated"),{errors:n,validated:!(n.length>0)}};t.b=function(e){var t,s,a=[];return(!e.first_name||e.first_name.length<=2)&&a.push("First name is not valid"),(!e.last_name||e.last_name.length<=2)&&a.push("Last name is not valid"),(!e.full_name||e.full_name.length<=2)&&a.push("Full names"),(!e.hired_date||e.hired_date.length<=2)&&a.push("Hired date is not valid"),(!e.marital_status||e.marital_status.length<=2)&&a.push("Martial status not valid"),(!e.nationality||e.nationality.length<=2)&&a.push("Nationality is not valid"),(!e.nid||e.nid.length<=4)&&a.push("NID is not valid"),(!e.phone_numbers||e.phone_numbers.length<=8)&&a.push("Phone number is not valid"),(!e.position||e.position.length<=2)&&a.push("No selected position"),(!e.qualification||e.qualification.length<=1)&&a.push("No selected qualification"),(!e.role||e.role.length<=2)&&a.push("No selected role"),(!e.school||null===(t=e.school)||void 0===t||!t.school_name||(null===(s=e.school)||void 0===s?void 0:s.school_name.length)<=1)&&a.push("Invalid School"),(!e.sex||e.sex.length<=2)&&a.push("No sex selected"),(!e.specialization||e.specialization.length<=2)&&a.push("Invalid specialization"),(!e.staff_code||e.staff_code.length<=2)&&a.push("Invalid Staff category"),"1"===e.role_id&&(!e.teacher_hierarch||e.teacher_hierarch.length<=0)&&a.push("This user is a teacher, and must have at least one course"),(!e.role||e.role.length<=0)&&a.push("Your role id is not validated"),(!e.teaching_level_id||e.teaching_level_id.length<=2)&&a.push("Teaching level does not found"),(!e.education_certificate_id||e.education_certificate_id.length<=2)&&a.push("Education certificate does not found"),{errors:a,validated:!(a.length>0)}}},423:function(e,t,s){"use strict";s(4);var a=s(15),r=s(53),n=s(1);t.a=function(e){var t=e.title,s=e.name;return Object(n.jsx)(r.a,{className:"max-w-screen-sm mx-auto text-center animate__animated animate__zoomIn animate__faster",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("div",{className:"text-6xl p-4 rounded-full bg-red-100 text-red-700 inline-block ",children:Object(n.jsx)(a.l,{})}),Object(n.jsx)("h2",{className:"text-2xl font-bold",children:t}),Object(n.jsxs)("p",{className:"pt-4 text-gray-500",children:["To request a ",s," you must have experience of one year in education and one year at the current school."]})]})})}},425:function(e,t,s){"use strict";var a=s(28),r=s(4),n=s(42),i=s(15),o=s(23),c=s(1),l=void 0;t.a=function(e){var t=e.permutation,s=e.more,d=void 0!==s&&s,u=e.approveUser,m=e.approveReb,h=e.userRejectPermutation,b=e.loading,j=void 0!==b&&b,p=e.loading_reject_permutation,x=e.close,_=Object(r.useState)(!1),g=Object(a.a)(_,2),f=g[0],O=g[1],v=!0===d||f,N=t.usersInfo.find((function(e){return e.user_id===t.user_one})),y=t.usersInfo.find((function(e){return e.user_id===t.user_two})),w=t.schools.find((function(e){return e.school_code===t.school_one})),S=t.schools.find((function(e){return e.school_code===t.school_two})),k=function(e,t){return void 0===e||void 0===t?Object(c.jsx)("div",{className:"p-2 text-center text-lg",children:"No users found"}):Object(c.jsxs)("div",{className:"flex-1 w-full rounded bg-white border",children:[Object(c.jsxs)("div",{className:"rounded m-1 border flex ".concat(!0===v?"":"items-center"),children:[Object(c.jsx)("section",{children:Object(c.jsx)(i.b,{className:"text-gray-400",size:v?80:30})}),Object(c.jsx)("div",{className:"flex-1 pl-2",children:[{label:"Names: ",value:e.full_name,more:!0,inline:!1},{label:"Staff code: ",value:e.staff_code,more:!1,inline:!0},{label:"NID: ",value:e.nid,more:!1,inline:!0},{label:"Sex: ",value:e.sex,more:!1,inline:!0},{label:"Phone number: ",value:e.phone_numbers,inline:!0,more:!1},{label:"Martial status: ",value:e.marital_status,inline:!0,more:!1}].map((function(e,t){return!1===e.more&&!1===v?null:e.value?Object(c.jsxs)("section",{className:"border-b ".concat(!0===e.inline?"flex py-1 items-center":""),children:[Object(c.jsx)("span",{className:"text-sm text-gray-500 block",children:null===e||void 0===e?void 0:e.label}),Object(c.jsx)("h2",{className:" ".concat(!1===e.inline?"-mt-1":"pl-2"," font-bold block "),children:null===e||void 0===e?void 0:e.value})]},t):null}))})]}),Object(c.jsxs)("div",{className:"rounded m-1 border flex items-center mt-3",children:[Object(c.jsx)("section",{className:"px-4",children:Object(c.jsx)(n.k,{className:"text-gray-400",size:v?50:20})}),Object(c.jsx)("div",{className:"flex-1",children:[{label:"School code: ",value:t.school_code,inline:!0,more:!0},{label:"School name: ",value:t.school_name,inline:!0,more:!1}].map((function(e,t){return!0===e.more&&!1===v?null:e.value?Object(c.jsxs)("section",{className:"border-b ".concat(!0===e.inline?"flex py-1 items-center":""),children:[Object(c.jsx)("span",{className:"text-sm text-gray-500 block",children:null===e||void 0===e?void 0:e.label}),Object(c.jsx)("h2",{className:" ".concat(!1===e.inline?"-mt-1":"pl-2"," font-bold block "),children:null===e||void 0===e?void 0:e.value})]},t):null}))})]})]})};return Object(c.jsxs)("div",{className:"bg-white p-2 mb-3 rounded animate__animated animate__zoomIn animate__faster",children:[x&&!j&&Object(c.jsx)("div",{className:"text-right pb-2 border-b mb-2",children:Object(c.jsx)(o.a,{className:"",onClick:x,theme:"danger-light",children:"Close"})}),Object(c.jsxs)("div",{className:"items-center flex flex-col md:flex-row cursor-pointer",onClick:O.bind(l,!v),children:[k(N,w),Object(c.jsx)("div",{className:"-mx-2 z-40 ",children:Object(c.jsx)(i.Lb,{className:"rounded ".concat("Approved"===t.reb_status?"text-green-500":"text-accent-900"," "),size:50})}),k(y,S)]}),v&&Object(c.jsxs)("div",{className:"pt-3",children:[Object(c.jsx)("div",{className:"p-1 px-2 rounded mt-2 border grid lg:grid-cols-3 gap-1 ",children:[{label:"Permutation Code: ",value:t.permutation_code,inline:!0},{label:"Position: ",value:"".concat(t.position_code," - ").concat(t.position_name),inline:!0},{label:"Qualification name: ",value:t.qualification_name,inline:!0},{label:"Qualification name: ",value:t.role,inline:!0},{label:"Initiated date: ",value:t.user_one_date,inline:!0},{label:"Accepted date: ",value:t.user_two_date,inline:!0}].map((function(e,t){return Object(c.jsxs)("section",{className:"border-b border-l pl-2 ".concat(!0===e.inline?"flex py-1 items-center":""),children:[Object(c.jsx)("span",{className:"text-sm text-gray-500 block",children:null===e||void 0===e?void 0:e.label}),Object(c.jsx)("h2",{className:" ".concat(!1===e.inline?"-mt-1":"pl-2"," font-bold block "),children:null===e||void 0===e?void 0:e.value})]},t)}))}),Object(c.jsxs)("div",{className:"grid grid-cols-2 pt-3 items-center",children:[Object(c.jsxs)("div",{className:"flex gap-1",children:[t.reb_status&&Object(c.jsxs)("section",{className:"flex items-center gap-1 px-2 py-0.5 rounded-lg  ".concat("Accepted"===t.permutation_status?"bg-green-100 text-green-900":"bg-accent-400 text-accent-900"),children:[Object(c.jsx)("span",{className:"text-xs opacity-70",children:"User status"}),Object(c.jsx)("h5",{className:"text  block  font-bold ",children:t.permutation_status})]}),t.reb_status&&Object(c.jsxs)("section",{className:"flex items-center gap-1 px-2 py-0.5 rounded-lg  ".concat("Approved"===t.reb_status?"bg-green-100 text-green-900":"bg-accent-400 text-accent-900"),children:[Object(c.jsx)("span",{className:"text-xs opacity-70",children:"REB status"}),Object(c.jsx)("h5",{className:"text  block  font-bold ",children:t.reb_status})]})]}),Object(c.jsxs)("div",{className:"text-right grid gap-2",children:[u&&Object(c.jsx)(o.a,{onClick:u.bind(l,t.permutation_id),loading:j,size:"lg",children:"Accept permutation"}),h&&Object(c.jsx)(o.a,{onClick:h.bind(l,t.permutation_id),loading:p,size:"lg",theme:"danger-light",children:"Reject permutation"}),m&&Object(c.jsx)(c.Fragment,{children:"Approved"!==t.reb_status&&Object(c.jsx)(o.a,{onClick:m.bind(l,t.permutation_id),loading:j,size:"lg",children:"Approve permutation"})})]})]})]})]})}},609:function(e,t,s){"use strict";s.r(t),s.d(t,"CandidateSwaping",(function(){return I}));var a=s(41),r=s(10),n=s(19),i=s(20),o=s(21),c=s(22),l=s(4),d=s.n(l),u=s(15),m=s(36),h=s(13),b=s(144),j=s(47),p=s(23),x=s(53),_=s(423),g=s(1),f=function(e){var t=e.errors,s=e.title;return Object(g.jsx)(x.a,{className:"animate__animated animate__zoomIn animate__faster max-w-lg mx-auto",children:Object(g.jsxs)("div",{className:"py-8 text-center",children:[Object(g.jsx)("div",{className:"text-8xl",children:Object(g.jsx)(u.Pb,{className:"text-yellow-300 mx-auto"})}),Object(g.jsxs)("h3",{className:"text-2xl ",children:["Your can't request a ",s," ",Object(g.jsx)("br",{})," while your profile info is incomplete"]}),Object(g.jsx)("h4",{className:"pt-2 text-gray-600",children:"Please ask for your headmaster to complete your profile information!"}),Object(g.jsxs)("div",{className:"pt-4 max-w-sm mx-auto",children:[Object(g.jsx)("h4",{className:"pb-2 text-lg font-bold text-red-700",children:"Missing info:"}),t.map((function(e,t){return Object(g.jsx)("div",{className:"rounded p-1 border text-center mb-1 bg-red-100 text-red-800",children:e},t)}))]})]})})},O=s(92),v=s(39),N=s(24),y=s(375),w=function(e){var t=e.back,s=e.title;return Object(g.jsxs)("div",{className:"flex pt-2 border-b pb-2",children:[Object(g.jsxs)(p.a,{onClick:t,size:"sm",theme:"default",className:"flex flex-center items-center",children:[Object(g.jsx)(u.g,{size:20}),Object(g.jsx)("label",{className:"pl-1 flex-1 ",children:"Back"})]}),Object(g.jsx)("section",{className:"pl-3 text-gray-600",children:Object(g.jsxs)("h2",{className:"text-2xl ",children:[s," "]})})]})},S=s(425),k=function(e){var t=e.permutation,s=e.i,a=e.selectPermutation,r=t,n=r.usersInfo.find((function(e){return e.user_id===r.user_one})),i=r.usersInfo.find((function(e){return e.user_id===r.user_two})),o=r.schools.find((function(e){return e.school_code===r.school_one})),c=r.schools.find((function(e){return e.school_code===r.school_two}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("tr",{children:Object(g.jsx)("td",{className:"p-1"})}),Object(g.jsxs)("tr",{className:" cursor-pointer my-2 ".concat("Rejected"===r.permutation_status?"hover:bg-red-200 bg-red-100":"hover:bg-blue-200 bg-white"),onClick:a.bind(undefined,r.permutation_id+""),children:[Object(g.jsx)("td",{className:"border p-2 text-center",children:"Rejected"===r.permutation_status?Object(g.jsx)("span",{className:"text-center text-red-800 text-lg",children:Object(g.jsx)(u.Ob,{})}):s+1}),Object(g.jsxs)("td",{className:"border p-2 bg-blue-100 opacity-70",children:[Object(g.jsx)("h6",{className:"font-bold",children:null===n||void 0===n?void 0:n.full_name}),Object(g.jsx)("span",{title:"Staff code",className:"text-sm text-gray-400",children:null===n||void 0===n?void 0:n.staff_code})]}),Object(g.jsxs)("td",{className:"border p-2 bg-blue-200 opacity-90",children:[Object(g.jsx)("h6",{className:"font-bold",children:null===o||void 0===o?void 0:o.school_name}),Object(g.jsx)("span",{title:"School code",className:"text-sm text-gray-400",children:r.school_one})]}),Object(g.jsxs)("td",{className:"border p-2 bg-indigo-100 opacity-70",children:[Object(g.jsx)("h6",{className:"font-bold",children:null===i||void 0===i?void 0:i.full_name}),Object(g.jsx)("span",{title:"Staff code",className:"text-sm text-gray-400",children:null===i||void 0===i?void 0:i.staff_code})]}),Object(g.jsxs)("td",{className:"border p-2 bg-indigo-200 opacity-90",children:[Object(g.jsx)("h6",{className:"font-bold",children:null===c||void 0===c?void 0:c.school_name}),Object(g.jsx)("span",{title:"School code",className:"text-sm text-gray-400",children:r.school_two})]}),Object(g.jsxs)("td",{className:"border p-2",children:[Object(g.jsxs)("h6",{className:"text-sm",children:["User: ",Object(g.jsx)("b",{children:r.permutation_status})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("h6",{className:"text-sm",children:["REB: ",Object(g.jsx)("b",{children:r.reb_status})]})]}),Object(g.jsxs)("td",{className:"border p-2",children:[Object(g.jsxs)("h6",{className:"text-sm",children:["Created: ",Object(g.jsx)("b",{children:r.user_one_date})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("h6",{className:"text-sm",children:["User 2: ",Object(g.jsx)("b",{children:r.user_two_date})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("h6",{className:"text-sm",children:["REB: ",Object(g.jsx)("b",{children:r.user_two_date})]})]})]})]})},q=function(e){Object(o.a)(s,e);var t=Object(c.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).setTab=function(e){return i.setState({selected_option:e})},i.cleanError=function(){setTimeout((function(){i.setState({error:{msg:"",target:null}})}),2e3)},i.componentDidMount=function(){i.appStart()},i.appStart=function(){return console.log("loading the data"),i.props.auth.user?null===i.props.basic.academic_calender?(i.setState({error:{target:"main-error",msg:"Academic year does not found!"}}),void setTimeout((function(){i.appStart()}),1e3)):(i.setState({loading_permutations:!0}),void Object(b.b)(i.props.auth.user.user_id,i.props.basic.academic_calender.academic_year_id,(function(e,t,s){if(!0===e){if(!t)return i.cleanError(),i.setState({loading_permutations:!1,error:{target:"main-error",msg:s}});i.setState({loading_permutations:!1,my_permutations:t.user_permutations,has_request_transfer:!!t.has_request_transfer,error:{target:null,msg:""}})}else i.cleanError(),i.setState({loading_permutations:!1,error:{target:"main-error",msg:s}})}))):(i.cleanError(),i.setState({error:{target:"main-error",msg:"Failed to load your permutations, please try again later"}}))},i.searchUser=function(e){return e.preventDefault(),i.props.auth.user?16!==i.state.search_nid.length?(i.setState({error:{target:"search-user-error",msg:"National Id must be 16 digits"}}),void i.cleanError()):(console.log("submit search"),i.props.auth.user.nid===i.state.search_nid?(i.setState({error:{target:"search-user-error",msg:"You can't search using your own NID, please use the NID of the other teacher"}}),void i.cleanError()):(i.setState({loading_user:!0,error:{target:null,msg:""}}),void Object(h.Cb)(i.state.search_nid,(function(e,t,s){var a;!0===e?null===t?i.setState({user_2:t,loading_user:!1,error:{target:"search-user-error",msg:null===t?"The NID you are using is not valid":s}}):t.position_code!==(null===(a=i.props.auth.position)||void 0===a?void 0:a.position_code)?i.setState({user_2:null,loading_user:!1,error:{target:"search-user-error",msg:"You don't have the same position with ".concat(t.full_name,", the permutation can't be done")}}):i.setState({user_2:t,loading_user:!1}):i.setState({loading_user:!1,error:{target:"search-user-error",msg:null===t?"The NID you are using is not valid":s}})})))):(i.setState({error:{target:"search-user-error",msg:"You are not authenticated, please refresh your browser"}}),void i.cleanError())},i.userApprovePermutationUser=function(e){null!==e&&window.confirm("Are you sure you want to confirm this permutation?")&&(i.setState({loading_approve_permutation:!0}),Object(b.f)({permutation_id:e,permutation_status:"Accepted"},(function(t,s,n){if(!0===t){var o=i.state.found_permutations.find((function(t){return t.permutation_id===e}));void 0!==o&&(o=Object(r.a)(Object(r.a)({},o),{},{permutation_status:"Accepted"})),i.setState({loading_approve_permutation:!1,found_permutations:[],my_permutations:void 0===o?Object(a.a)(i.state.my_permutations):[].concat(Object(a.a)(i.state.my_permutations),[o]),error:{target:"approve-permutation-success",msg:"Your permutation has been approved successfully"},selected_option:null})}else i.setState({error:{target:"approve-permutation-error",msg:n},loading_approve_permutation:!1})})))},i.rejectPermutationUser=function(e){null!==e&&window.confirm("Are you sure you want to reject this permutation?")&&(i.setState({loading_reject_permutation:!0}),Object(b.f)({permutation_id:e,permutation_status:"Rejected"},(function(t,s,a){!0===t?i.setState({loading_reject_permutation:!1,my_permutations:i.state.my_permutations.map((function(t){return t.permutation_id===e?Object(r.a)(Object(r.a)({},t),{},{permutation_status:"Rejected"}):t})),error:{target:"approve-permutation-success",msg:"Your permutation has been rejected successfully"}}):i.setState({error:{target:"approve-permutation-error",msg:a},loading_reject_permutation:!1})})))},i.generatePermutation=function(){var e,t,s;if(!window.confirm("Are you sure ".concat(null===(e=i.state.user_2)||void 0===e?void 0:e.full_name," is aware of this request?")))return window.alert("Please contact ".concat(null===(t=i.state.user_2)||void 0===t?void 0:t.full_name," and make sure he/she agree with your permutation request"));if(!i.props.auth.user||!i.props.auth.school)return i.setState({error:{target:"permutation-error",msg:"Please reload your browser"}});if(!i.props.basic.academic_calender)return i.setState({error:{target:"permutation-error",msg:"Academic information can't be loaded, please reload your browser"}});if(null===i.state.user_2)return i.setState({error:{target:"permutation-error",msg:"Academic information can't be loaded, please reload your browser"}});var a={academic_year_id:null===(s=i.props.basic.academic_calender)||void 0===s?void 0:s.academic_year_id,position_code:i.state.user_2.position_code?i.state.user_2.position_code:"",qualification_id:i.state.user_2.qualification_id?i.state.user_2.qualification_id:"",role_id:i.state.user_2.role_id?i.state.user_2.role_id:"",school_one:i.props.auth.school.school_code,school_two:i.state.user_2.school_code?i.state.user_2.school_code:"",user_one:i.props.auth.user.user_id,user_two:i.state.user_2.user_id?i.state.user_2.user_id:""};i.setState({loading_request:!0}),Object(b.a)(a,(function(e,t,s){!0===e?i.setState({loading_request:!1,res_data:t,transfer_success:!0}):i.setState({loading_request:!1,error:{msg:s,target:"permutation-error"}})}))},i.searchUserByCode=function(){i.setState({loading_user_by_code:!0,error:{target:null,msg:""},found_permutations:[]}),Object(b.e)(i.state.search_code,(function(e,t,s){!0===e?t.length<=0?(console.log("no data found"),i.setState({found_permutations:[],loading_user_by_code:!1,error:{target:"search-code-error",msg:"No permutation request found"}})):i.setState({found_permutations:t,loading_user_by_code:!1}):(i.setState({found_permutations:[],loading_user_by_code:!1,error:{target:"search-code-error",msg:s}}),i.cleanError())}))},i.state={loading:!1,selected_option:null,search_nid:"",loading_user:!1,user_2:null,error:{msg:"",target:null},loading_request:!1,transfer_success:!1,res_data:null,search_code:"",loading_user_by_code:!1,permutation:null,found_permutations:[],my_permutations:[],loading_permutations:!1,selected_permutation:null,loading_approve_permutation:!1,selected_permutation_list:"",has_request_transfer:!1,loading_reject_permutation:!1},i}return Object(i.a)(s,[{key:"render",value:function(){var e,t,s=this;if(!this.props.auth.has_one_year)return Object(g.jsx)(_.a,{title:"You are not qualified to perform a permutation",name:"permutation"});var a=Object(y.c)(this.props.auth);if(a.errors.length>=1&&!1===a.validated)return Object(g.jsx)(f,{title:"transfer",errors:a.errors});if(!0===this.state.has_request_transfer)return Object(g.jsxs)(x.a,{className:"max-w-screen-md mx-auto py-4 text-center animate__animated animate__zoomIn animate__faster",children:[Object(g.jsx)("h2",{className:" text-6xl text-center text-red-400 pb-4",children:Object(g.jsx)(u.H,{className:"inline-block"})}),Object(g.jsxs)("h4",{className:"text-xl font-bold",children:["It looks like you have already requested for a transfer, ",Object(g.jsx)("br",{}),"You can't Request a permutation"]}),Object(g.jsxs)("p",{className:"text-gray-600 pt-2",children:["If you want to request for a permutation, ",Object(g.jsx)("br",{})," you will need to remove your transfer."]})]});var r=this.state.my_permutations.find((function(e){var t;return e.academic_year_id===(null===(t=s.props.basic.academic_calender)||void 0===t?void 0:t.academic_year_id)&&"Rejected"!==e.permutation_status}));return!0===this.state.transfer_success?Object(g.jsxs)(x.a,{className:"py-2 animate__animated animate__zoomIn animate__faster",children:[Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)(u.o,{className:"text-green-500 mx-auto",size:120}),Object(g.jsx)("h2",{className:"text-2xl font-bold pt-2 text-green-600",children:"Your Permutation request has been created!"}),Object(g.jsxs)("p",{className:"py-2 text-gray-600",children:["Now you need to send the code below to"," ",Object(g.jsx)("b",{children:null===(e=this.state.user_2)||void 0===e?void 0:e.full_name})," ",Object(g.jsx)("br",{}),"so that he/she can approve this transfer"]}),Object(g.jsxs)("div",{className:"mx-auto rounded my-1 border py-2 inline-block px-5 bg-gray-50",children:[Object(g.jsx)("h4",{className:"text-gray-500",children:"Permutation code:"}),Object(g.jsx)("h1",{className:"text-3xl font-bold",children:null===(t=this.state.res_data)||void 0===t?void 0:t.permutation_code})]})]}),Object(g.jsx)("div",{className:"text-right border-t py-3 mt-4"})]}):this.props.auth.user?Object(g.jsxs)(g.Fragment,{children:["main-error"===this.state.error.target&&Object(g.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),null===this.state.selected_option&&Object(g.jsxs)(g.Fragment,{children:[void 0===r&&!1===this.state.loading_permutations&&Object(g.jsxs)(x.a,{className:"animate__animated animate__zoomIn animate__faster",children:[Object(g.jsx)(O.a,{className:" py-2 lg:pb-3 lg:pt-2 font-light text-center text-gray-500",children:"Permutations"}),Object(g.jsx)("div",{className:"pt-2 flex gap-3 flex-col lg:flex-row",children:[{icon:u.d,title:"Generate new permutation request",id:1,description:"You will need the id of the teacher you want to swap with.",onClick:function(){return s.setTab(1)}},{icon:u.kb,title:"Find permutation by code",id:2,description:"You will need a code, that was generated by the other teacher",onClick:function(){return s.setTab(2)}}].map((function(e,t){var s=e.icon;return Object(g.jsxs)("div",{onClick:e.onClick,className:"p-2  group items-center rounded border flex flex-1 hover:bg-accent-400 cursor-pointer",children:[Object(g.jsx)("section",{className:"p-2 bg-accent-400 rounded group-hover:bg-accent-800 group-hover:text-white text-accent-800",children:Object(g.jsx)(s,{size:40})}),Object(g.jsxs)("section",{className:"flex-1 pl-3",children:[Object(g.jsx)("h2",{className:"text-xl  text-gray-900",children:e.title}),Object(g.jsx)("p",{className:"text-gray-400 text-sm",children:e.description})]})]},t)}))})]}),!0===this.state.loading_permutations&&Object(g.jsx)("div",{className:"py-6 text-center text-6xl text-accent-800",children:Object(g.jsx)(N.a,{className:"mx-auto text-2xl"})}),!(0===this.state.my_permutations.length)&&Object(g.jsxs)(x.a,{transparent:!0,className:"mt-3 animate__animated animate__fadeIn animate__faster",children:[Object(g.jsxs)("h2",{className:"text-center text-3xl pb-2 font-bold text-gray-500",children:["My permutations"," ",Object(g.jsx)("b",{children:"(".concat(this.state.my_permutations.length,")")})]}),!0===this.state.loading_permutations?Object(g.jsx)("div",{className:"py-6 text-center text-8xl",children:Object(g.jsx)(N.a,{className:"mx-auto text-2xl"})}):this.state.my_permutations.length<=0?Object(g.jsxs)("div",{className:"py-4 text-center bg-white",children:[Object(g.jsx)("h2",{className:"text-6xl text-gray-600",children:Object(g.jsx)(u.Pb,{className:"mx-auto"})}),Object(g.jsx)("h3",{className:"font-bold text-lg",children:"No permutation found!"}),Object(g.jsx)("h3",{className:"pt-1 text-gray-600",children:"Please try again later"})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"p-1 rounded",children:Object(g.jsxs)("table",{className:" w-full rounded",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"bg-white",children:[Object(g.jsx)("th",{className:"border p-2 text-left",children:"#"}),Object(g.jsxs)("th",{className:"border p-2 text-left bg-blue-50",children:["Candidate 1"," ",Object(g.jsx)("span",{className:"text-xs bg-yellow-500 px-2 py-0.5 rounded-full",children:"Initiator"})]}),Object(g.jsx)("th",{className:"border p-2 text-left bg-blue-50",children:"School 1"}),Object(g.jsx)("th",{className:"border p-2 text-left bg-blue-50",children:"Candidate 1"}),Object(g.jsx)("th",{className:"border p-2 text-left bg-blue-50",children:"School 1"}),Object(g.jsx)("th",{className:"border p-2 text-left",children:"Users status"}),Object(g.jsx)("th",{className:"border p-2 text-left",children:"Dates"})]})}),Object(g.jsxs)("tbody",{children:[this.state.my_permutations.filter((function(e){return"Rejected"!==e.permutation_status&&"Pending"!==e.permutation_status})).map((function(e,t){var a,r;return s.state.selected_permutation_list===e.permutation_id?Object(g.jsx)("tr",{className:"",children:Object(g.jsx)("td",{colSpan:30,className:"pt-1",children:Object(g.jsx)(S.a,{more:!0,permutation:e,userRejectPermutation:e.user_two===(null===(a=s.props.auth.user)||void 0===a?void 0:a.user_id)&&"Accepted"===e.permutation_status&&e.academic_year_id===(null===(r=s.props.basic.academic_calender)||void 0===r?void 0:r.academic_year_id)&&"Pending"===e.reb_status?s.rejectPermutationUser:void 0,loading_reject_permutation:s.state.loading_reject_permutation})})},t):Object(g.jsx)(k,{i:t,permutation:e,selectPermutation:function(e){return s.setState({selected_permutation_list:e})}})})),this.state.my_permutations.filter((function(e){return"Accepted"!==e.permutation_status})).map((function(e,t){var a,r;return s.state.selected_permutation_list===e.permutation_id?Object(g.jsx)("tr",{className:"",children:Object(g.jsx)("td",{colSpan:30,className:"pt-1",children:Object(g.jsx)(S.a,{more:!0,permutation:e,userRejectPermutation:e.user_two===(null===(a=s.props.auth.user)||void 0===a?void 0:a.user_id)&&"Accepted"===e.permutation_status&&e.academic_year_id===(null===(r=s.props.basic.academic_calender)||void 0===r?void 0:r.academic_year_id)&&"Pending"===e.reb_status?s.rejectPermutationUser:void 0,loading_reject_permutation:s.state.loading_reject_permutation})})},t):Object(g.jsx)(k,{i:t,permutation:e,selectPermutation:function(e){return s.setState({selected_permutation_list:e})}})}))]})]})})})]})]}),1===this.state.selected_option&&Object(g.jsxs)(x.a,{className:"animate__animated animate__zoomIn animate__faster",children:[Object(g.jsx)(w,{title:"Generate new permutation request",back:function(){if(null!==s.state.user_2)return s.setState({user_2:null});s.setTab(null)}}),null===this.state.user_2&&Object(g.jsxs)("div",{className:"py-6 text-center",children:[Object(g.jsx)(u.c,{size:70,className:"mx-auto text-gray-400"}),Object(g.jsx)("h3",{className:"font-bold text-gray-700 text-2xl pt-2",children:"Type the ID of the teacher you want to swap with?"}),Object(g.jsxs)("p",{className:"pt-1 text-gray-600",children:["Make sure that he/she is aware that you are choosing him/her",Object(g.jsx)("br",{}),"If he/she does not know the about this your request will not reach him/her"]}),Object(g.jsxs)("div",{className:"max-w-screen-sm mx-auto mt-3 ",children:["search-user-error"===this.state.error.target&&Object(g.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.searchUser,className:"pt-2 flex gap-1 items-center pb-1 w-full bg-gray-100 px-3 rounded  ".concat("search-user-error"===this.state.error.target?"animate__animated  animate__shakeX":""),children:[Object(g.jsx)(v.a,{onChange:function(e){s.state.search_nid.length<17&&s.setState({search_nid:e.target.value})},className:"flex-1",value:this.state.search_nid,error:"",label:"",placeholder:"",name:"",type:"number"}),Object(g.jsx)(p.a,{size:"lg",className:"w-48",loading:this.state.loading_user,type:"submit",children:"Search"})]})})]})]}),null!==this.state.user_2&&Object(g.jsxs)(g.Fragment,{children:[" ",!0===this.state.loading_user?Object(g.jsx)("div",{className:"py-6 mx-auto text-center",children:Object(g.jsx)(N.a,{})}):Object(g.jsxs)("div",{className:"p-2 animate__animated animate__fadeIn animate__faster",children:[Object(g.jsxs)("div",{className:" flex pt-2",children:[Object(g.jsx)("div",{className:"",children:Object(g.jsx)(u.b,{size:120,className:"text-gray-400"})}),Object(g.jsxs)("div",{className:"pl-3 flex-1",children:[Object(g.jsx)("h3",{className:"pb-0.5 text-xl font-bold text-gray-600 border-b mb-2",children:"User details"}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500 mb-0",children:"NID:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.nid})]}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500 mb-0",children:"Staff code:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.staff_code})]}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500",children:"Teacher names:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.full_name})]})]}),Object(g.jsxs)("div",{className:"pl-3 flex-1",children:[Object(g.jsx)("h3",{className:"pb-0.5 text-xl font-bold text-gray-600 border-b mb-2",children:"Academic details"}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500 mb-0",children:"School code:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.school_code})]}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500",children:"School name:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.school_name})]}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500",children:"School location:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.district_name})]}),Object(g.jsxs)("section",{className:"flex items-center pb-0.5",children:[Object(g.jsx)("label",{className:"text-sm text-gray-500 mb-0",children:"Position code:"}),Object(g.jsx)("h4",{className:"font-bold pl-1",children:this.state.user_2.position_code})]})]})]}),Object(g.jsx)("div",{className:"p-1 text-right border-t pt-2 mt-2",children:Object(g.jsx)(p.a,{onClick:this.generatePermutation,loading:this.state.loading_request,children:"Generate permutation request"})})]})]})]}),2===this.state.selected_option&&Object(g.jsx)(g.Fragment,{children:0===this.state.found_permutations.length?Object(g.jsxs)(x.a,{className:"animate__animated animate__zoomIn animate__faster",children:[Object(g.jsx)(w,{title:"Find permutation by code",back:this.setTab.bind(this,null)}),Object(g.jsx)("div",{className:"p-2",children:Object(g.jsxs)("div",{className:"py-6 text-center",children:[Object(g.jsx)(u.kb,{size:70,className:"mx-auto text-gray-400"}),Object(g.jsx)("h3",{className:"font-bold text-gray-700 text-2xl pt-2",children:"Find the permutation?"}),Object(g.jsx)("p",{className:"pt-1 text-gray-600",children:"Please enter the code your friend gave you below"}),Object(g.jsxs)("div",{className:"w-80 mx-auto mt-3 ",children:["search-code-error"===this.state.error.target&&Object(g.jsx)(j.a,{theme:"danger",children:this.state.error.msg}),Object(g.jsxs)("div",{className:"pt-2  flex gap-1 items-center pb-1 w-full bg-gray-100 px-3 rounded  ".concat("search-code-error"===this.state.error.target?"animate__animated  animate__shakeX":""),children:[Object(g.jsx)(v.a,{onChange:function(e){s.setState({search_code:e.target.value,error:{msg:"",target:null}})},disabled:this.state.loading_user_by_code,className:"flex-1",value:this.state.search_code,error:"",label:"",size:"lg",placeholder:"",name:"",type:"number",Input_className:""}),Object(g.jsx)(p.a,{size:"lg",className:"w-",loading:this.state.loading_user_by_code,onClick:this.searchUserByCode,children:"Check"})]})]})]})})]}):Object(g.jsxs)(x.a,{children:[Object(g.jsxs)("div",{className:"flex border-b p-2 mb-2 ",children:[Object(g.jsx)("h3",{className:"text-2xl font-bold text-gray flex-1",children:"Permutation"}),Object(g.jsx)(p.a,{theme:"danger-light",onClick:function(){return s.setState({found_permutations:[]})},children:"Close"})]}),Object(g.jsx)("div",{className:"",children:this.state.found_permutations.map((function(e,t){return Object(g.jsx)(S.a,{more:!0,permutation:e,approveUser:s.userApprovePermutationUser},t)}))})]})}),"approve-permutation-success"===this.state.error.target&&Object(g.jsx)(j.a,{fixed:!0,theme:"success",children:this.state.error.msg})]}):Object(g.jsx)(x.a,{children:Object(g.jsx)(j.a,{children:"Please refresh your account or login"})})}}]),s}(d.a.Component),I=Object(m.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(q)}}]);
//# sourceMappingURL=23.bda6b2fd.chunk.js.map