(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[18],{108:function(e,t,a){"use strict";a(2);var s=a(52),r=a(1);t.a=function(e){var t=e.onChange,a=e.value,c=e.error,o=e.label,n=e.placeholder,l=e.disabled,i=void 0!==l&&l,d=e.name,u=e.Input_className,h=void 0===u?"":u,m=e.Label_className,p=void 0===m?"":m,b=e.InputContainer_className,j=void 0===b?"":b,g=e.MainContainer_className,f=void 0===g?"":g,x=e.size,_=void 0===x?"md":x,O=e.data;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"w-full my-2 ".concat(f),children:[o&&Object(r.jsx)("label",{htmlFor:"login-form-email",className:"text-primary-900 dark:text-primary-100 ".concat(p),children:o}),Object(r.jsxs)("div",{className:"rounded relative ".concat(j),children:[Object(r.jsx)("select",{name:d,placeholder:n,onChange:t,className:"\n                     w-full text-lg rounded border-2 \n                     ".concat(Object(s.a)(_),"\n                     ").concat(""!==c?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900 ","\n                     px-3 ").concat(h),value:a,disabled:i,children:O.map((function(e,t){return Object(r.jsx)("option",{value:e.value,children:e.title},t)}))}),""!==c&&Object(r.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:c})]})]})})}},110:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var s,r,c,o=a(13),n=a(1);!function(e){e.default="default",e.primary="primary",e.secondary="secondary",e.danger="danger",e.success="success",e.warning="warning"}(s||(s={})),function(e){e.none="top-0",e.small="top-28",e.medium="top-1/3",e.large="top-1/2",e.extra="top-2/3"}(r||(r={})),function(e){e.small="max-w-sm",e.medium="max-w-screen-sm",e.large="max-w-screen-md",e.extraLarge="max-w-screen-lg",e.maxWidth="max-w-screen h-full"}(c||(c={}));t.c=function(e){var t,a=e.title,l=e.backDrop,i=e.theme,d=e.close,u=e.backDropClose,h=e.widthSizeClass,m=e.displayClose,p=e.padding,b=void 0===p?{title:!0,body:!0,footer:!0}:p;switch(i){case s.primary:t="blue-primary";break;case s.secondary:t="gray-300";break;case s.danger:t="red-500";break;case s.success:t="green-500";break;case s.warning:t="yellow-500";break;default:t="white"}return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{onClick:function(){return u&&d()},className:"fixed bg-black bg-opacity-".concat(!0===l?"60":"0"," h-full w-full left-0 top-0 z-50 animate__animated animate__fadeIn animate__faster")}),Object(n.jsxs)("div",{className:"fixed items-center justify-items-center ".concat(void 0===e.marginTop?r.none:e.marginTop," left-0 right-0 bottom-0 bg-white rounded shadow-xl self-center ").concat(h," animate__animated ").concat(void 0!==e.marginTop&&e.marginTop!==r.none?"animate__fadeInUp":"animate__zoomIn"," animate__faster"),style:{width:"100%",maxHeight:"99vh",height:"".concat(h===c.maxWidth?void 0===e.marginTop?"100%":"unset":"fit-content"),overflowY:"auto",margin:"auto",zIndex:99999999},children:[Object(n.jsxs)("div",{className:"flex justify-between bg-".concat(t," ").concat(!0===b.title?"py-4 px-4":""," rounded-t text-").concat(i===s.default||i===s.secondary?"black":"white"),children:[a&&""!==a?Object(n.jsx)("h4",{className:"text-lg font-bold ",children:a}):Object(n.jsx)("div",{}),!1===m?"":Object(n.jsx)("div",{className:"hover:text-red-600 hover:bg-red-100 rounded-full p-1 h-8 w-8",children:Object(n.jsx)(o.j,{className:"cursor-pointer font-extrabold text-2xl",onClick:function(){return d()}})})]}),Object(n.jsx)("div",{className:"space-x-3 ".concat(!0===b.body?"py-4 px-4":""),children:Object(n.jsx)("div",{children:""!==e.children?e.children:""})}),void 0!==e.footer&&""!==e.footer?Object(n.jsx)("div",{className:"flex float-right ".concat(!0===b.footer?"py-4 px-4":""),children:e.footer}):""]})]})}},113:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return h}));var s,r,c,o=a(19),n=100;!function(e){e.GOVERNMENT_AIDED="GOVERNMENT_AIDED",e.PRIVATE="GOVERNMENT_AIDED",e.PUBLIC="PUBLIC"}(s||(s={})),function(e){e.EXIST="Exist",e.NEW="new"}(r||(r={})),function(e){e.role="role",e.district_name="district_name",e.full_name="full_name",e.first_name="first_name",e.last_name="last_name",e.phone_numbers="phone_numbers",e.email="email",e.sex="sex",e.dob="dob",e.marital_status="marital_status",e.nid="nid",e.rssb_number="rssb_number",e.bank_account="bank_account",e.position="position",e.specialization="specialization",e.qualification="qualification",e.staff_category="staff_category",e.staff_code="staff_code",e.status="status",e.school_code="school_code",e.school_name="school_name",e.school_category="school_category",e.school_status="school_status",e.region_code="region_code",e.village_name="village_name",e.cell_name="cell_name",e.cell_code="cell_code",e.sector_name="sector_name",e.sector_code="sector_code",e.district_code="district_code",e.province_name="province_name",e.province_code="province_code",e.subjects="subjects",e.grades="grades",e.periods="periods",e.date_in_school="date_in_school",e.date_of_hire="date_of_hire",e.nationality="nationality",e.middle_name="middle_name",e.bank_name="bank_name"}(c||(c={}));var l=[{key:c.staff_code,title:"Staff code",status:!0,isChangeAllowed:!1},{key:c.nid,title:"National ID",status:!0,isChangeAllowed:!1},{key:c.full_name,title:"Staff Full Names",status:!0,isChangeAllowed:!0},{key:c.first_name,title:"Staff First Name",status:!0,isChangeAllowed:!0},{key:c.middle_name,title:"Staff Middle Name",status:!0,isChangeAllowed:!0},{key:c.last_name,title:"Staff Last Name",status:!0,isChangeAllowed:!0},{key:c.phone_numbers,title:"Staff Phone",status:!0,isChangeAllowed:!0},{key:c.email,title:"Staff Email",status:!0,isChangeAllowed:!0},{key:c.dob,title:"Date of Birth",status:!0,isChangeAllowed:!0},{key:c.sex,title:"Sex",status:!0,isChangeAllowed:!0},{key:c.marital_status,title:"Marital status",status:!0,isChangeAllowed:!0},{key:c.qualification,title:"Qualification",status:!0,isChangeAllowed:!0},{key:c.specialization,title:"Specialization",status:!0,isChangeAllowed:!0},{key:c.rssb_number,title:"RSSB",status:!0,isChangeAllowed:!0},{key:c.bank_name,title:"Bank name",status:!0,isChangeAllowed:!0},{key:c.bank_account,title:"Bank account",status:!0,isChangeAllowed:!0},{key:c.position,title:"Position",status:!0,isChangeAllowed:!0},{key:c.role,title:"Staff role",status:!0,isChangeAllowed:!0},{key:c.district_code,title:"District Code",status:!0,isChangeAllowed:!0},{key:c.district_name,title:"District Name",status:!0,isChangeAllowed:!0},{key:c.school_code,title:"School Code",status:!0,isChangeAllowed:!0},{key:c.school_name,title:"School Name",status:!0,isChangeAllowed:!0},{key:c.school_category,title:"School Category",status:!0,isChangeAllowed:!0},{key:c.school_status,title:"School Status",status:!0,isChangeAllowed:!0},{key:c.nationality,title:"Nationality",status:!0,isChangeAllowed:!0},{key:c.date_of_hire,title:"Date to hire",status:!0,isChangeAllowed:!0},{key:c.date_in_school,title:"Date in school",status:!0,isChangeAllowed:!0},{key:c.subjects,title:"Subjects",status:!0,isChangeAllowed:!0},{key:c.grades,title:"Grade (No of Group)",status:!0,isChangeAllowed:!0},{key:c.periods,title:"Periods",status:!0,isChangeAllowed:!0}],i={system:["26","Admin"],country:["REB","4","RTB","300","MINECOFIN","27","26","Admin"],district:["DDE","3","Human Resource","25"],school:["Head Teacher","Teacher","2"]},d=function(e){return null===e?"":h(e)?Object(o.a)(e):e},u=function(e){var t="",a=[],s="",r={grade_names:[],grade_codes:[],courses:[],group:[]},c=0;if(e){var n=function(s){var n=e[s];if(a.includes(n.course_code)||(a.push(n.course_code),t+=Object(o.g)(t)?n.course_name:", "+n.course_name),r.grade_codes.includes(n.grade_code)){if(r.courses.findIndex((function(e){return e===n.course_code}))>=0){var l=r.courses.findIndex((function(e){return e===n.course_code}));r.group[l]+=JSON.parse(n.grade_group).length}}else r.grade_codes.push(n.grade_code),r.grade_names.push(n.grade_name),r.courses.push(n.course_code),r.group.push(Object(o.b)(JSON.parse(n.grade_group)));c+=Number(n.teaching_period)*JSON.parse(n.grade_group).length};for(var l in e)n(l);for(var i in r.courses)s+=Object(o.g)(s)?"".concat(r.grade_names[i]," (").concat(r.group[i],")"):", ".concat(r.grade_names[i]," (").concat(r.group[i],")")}return{courses:t,grades:s,periods:c.toString()}},h=function(e){if(null===e)return!1;var t=new Date(e);return!isNaN(t.getDate())}},116:function(e,t,a){"use strict";a(2);var s=a(1);t.a=function(e){var t=function(){for(var t=[],a=0;a<e.cols;a++)t.push(a);return t.map((function(e){return Object(s.jsx)("td",{className:"p-3 text-center whitespace-nowrap",children:Object(s.jsx)("div",{className:"w-full h-4 rounded bg-gray-200 animate__animated animate__pulse animate__delay-5s animate__infinite"})},e)}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},228),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},22648),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},229768)]})}},133:function(e,t,a){"use strict";var s=a(2),r=a.n(s),c=a(134),o=a(135),n=a(114),l=a(1),i=function(e){var t=e.fileData,a=e.fileName,s=e.btnName,r=void 0===s?"Excel":s,i=e.className,d=void 0===i?"flex items-center gap-1 px-4 py-1 rounded text-green-700 bg-white border hover:text-white hover:bg-green-700 border-green-700 font-bold":i,u=e.showIcon,h=void 0===u||u;return Object(l.jsxs)("button",{onClick:function(e){return function(e,t){var a={Sheets:{data:o.a.json_to_sheet(e)},SheetNames:["data"]},s=o.b(a,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});c.saveAs(r,t+".xlsx")}(t,a)},className:d,children:[h&&Object(l.jsx)(n.c,{}),r]})};t.a=r.a.memo(i)},159:function(e,t,a){"use strict";a.r(t),a.d(t,"_PlacementReport",(function(){return P})),a.d(t,"PlacementReport",(function(){return k}));var s=a(4),r=a(28),c=a(25),o=a(30),n=a(31),l=a(32),i=a(33),d=a(2),u=a(125),h=a(124),m=a(17),p=a(10),b=a(34),j=a(44),g=a(19),f=a(113),x=a(35),_=a(110),O=a(13),y=a(133),v=a(108),N=a(116),w=a(50),C=a(1),S=new Date,P=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setDownloading=function(e){n.setState({downloading:e})},n.setSortProperty=function(e){n.setState({sortProperty:e})},n.setSortOrder=function(e){n.setState({sortOrder:e})},n.setSearchInput=function(e){n.setState({searchInput:e})},n.setReportTitle=function(e){n.setState({reportTitle:e})},n.setSelectAll=function(e){n.setState({selectAll:e})},n.setFormError=function(e){n.setState({formError:e})},n.setSort=function(e){n.state.sortProperty===e&&"ASC"===n.state.sortOrder?n.setSortOrder("DESC"):n.setSortOrder("ASC"),n.setSortProperty(e)},n.setGenerateReport=function(e){n.setState({generateReport:e})},n.setReportContent=function(e){n.setState({reportContent:e})},n.setCurrentPage=function(e){n.setState({currentPage:e})},n.loadDataFormAPI=function(e,t){n.props.auth.district&&n.props.auth.role&&f.e.district.includes(n.props.auth.role.role)?Object(p.B)(n.props.auth.district.district_code,t,e,(function(e,t,a){n.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:a}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==a?n.setState({reportAPIData:a}):e||Object(g.g)(t)||console.error({status:e,msg:t})})):n.props.auth.school&&n.props.auth.role&&f.e.school.includes(n.props.auth.role.role)?Object(p.C)(n.props.auth.school.school_code,t,(function(t,a,s){n.setState({loading:t,reportAPIData:null}),!1===t&&null!==s?(console.log("=================reportsss SCHOOL LEVEL ==================="),console.log({report:s}),console.log("=================reportsss SCHOOL LEVEL ==================="),n.setState({reportAPIData:s.filter((function(t){return t.month===e}))})):t||Object(g.g)(a)||console.error({status:t,msg:a})})):n.props.auth.role&&f.e.country.includes(n.props.auth.role.role)&&!Object(g.g)(n.state.selected_district)&&Object(p.B)(n.state.selected_district,t,e,(function(e,t,a){n.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:a}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==a?n.setState({reportAPIData:a}):e||Object(g.g)(t)||console.error({status:e,msg:t})}))},n.loadCountryDataAPI=function(e,t,a){n.props.auth.role&&f.e.country.includes(n.props.auth.role.role)&&!Object(g.g)(a)&&Object(p.B)(a,t,e,(function(e,t,a){n.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:a}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==a?n.setState({reportAPIData:a}):e||Object(g.g)(t)||console.error({status:e,msg:t})}))},n.componentDidMount=function(){(null===n.state.districtList||30!==n.state.districtList.length)&&n.props.auth.role&&f.e.country.includes(n.props.auth.role.role)&&Object(p.s)((function(e,t,a){n.setState({loading:!0,districtList:null}),!0===e?(console.log("================= districts COUNTRY LEVEL ==================="),console.log({report:t}),console.log("================= districts COUNTRY LEVEL ==================="),n.setState({loading:!1,districtList:t})):Object(g.g)(a)||n.setState({formError:{element:"main-error",msg:a},loading:!1})})),n.props.basic.academic_calender&&n.loadDataFormAPI(n.state.selectedMonth,n.props.basic.academic_calender.academic_year_id),null===n.props.placement.academics||0===n.props.placement.academics.length?n.props.FC_GetAcademics((function(e,t,a){n.setState({loadingAcademics:e})})):n.setState({loadingAcademics:!1})},n.updateDataToPrint=function(){if(n.props.auth.district&&n.props.auth.role&&f.e.district.includes(n.props.auth.role.role)){var e="Placement Report / "+n.props.auth.district.district_name+" district";n.props.basic.academic_calender&&(e=e+" / "+n.props.basic.academic_calender.academic_year_name+" / Month of "+n.state.selectedMonth),n.setReportTitle(e)}else if(n.props.auth.school&&n.props.auth.role&&f.e.school.includes(n.props.auth.role.role)){var t="Placement Report / "+n.props.auth.school.school_name+" school";n.props.basic.academic_calender&&(t=t+" / "+n.props.basic.academic_calender.academic_year_name+" / Month of "+n.state.selectedMonth),n.setReportTitle(t)}else if(n.props.auth.role&&f.e.country.includes(n.props.auth.role.role)&&n.state.districtList){var a=Object(p.r)(n.state.districtList,n.state.selected_district),s="Placement Report / "+n.props.auth.role.role;s=a?s+" / "+a.district_name+" district":s,n.props.basic.academic_calender&&(s=s+" / "+n.props.basic.academic_calender.academic_year_name+" / Month of "+n.state.selectedMonth),n.setReportTitle(s)}var r=[],c=1,o=n.getUserList();if(o){for(var l in o){var i={no:c,full_name:o[l].full_name?o[l].full_name:"",first_name:o[l].first_name?o[l].first_name:"",middle_name:o[l].middle_name?o[l].middle_name:"",last_name:o[l].last_name?o[l].last_name:"",nid:o[l].nid?o[l].nid:"",sex:o[l].sex?o[l].sex:"",qualification:o[l].qualification?o[l].qualification:"",position:o[l].position?o[l].position:"",school_name:o[l].school?Object(f.b)(o[l].school.school_name):"",district_name:o[l].location?Object(f.b)(o[l].location.district_name):"",role:o[l].role?o[l].role:"",phone_numbers:o[l].phone_numbers?o[l].phone_numbers:"",email:o[l].email?o[l].email:"",dob:Object(f.c)(o[l].dob)?o[l].dob:"",marital_status:o[l].marital_status?o[l].marital_status:"",rssb_number:o[l].rssb_number?o[l].rssb_number:"",nationality:void 0!==o[l].nationality&&null!==o[l].nationality?o[l].nationality:"",bank_name:o[l].bank_name?o[l].bank_name:"",bank_account:o[l].bank_account?o[l].bank_account:"",specialization:o[l].specialization?o[l].specialization:"",staff_category:o[l].staff_category?o[l].staff_category:"",staff_code:o[l].staff_code?o[l].staff_code:"",date_in_school:Object(f.c)(o[l].start_date_in_the_school)?o[l].start_date_in_the_school:"",date_of_hire:void 0!==o[l].hired_date?Object(f.b)(o[l].hired_date):"",status:o[l].status?o[l].status:"",school_code:o[l].school?Object(f.b)(o[l].school.school_code):"",school_category:o[l].school?Object(f.b)(o[l].school.school_category):"",school_status:o[l].school?Object(f.b)(o[l].school.school_status):"",region_code:o[l].school?Object(f.b)(o[l].school.region_code):"",village_name:o[l].location?Object(f.b)(o[l].location.village_name):"",cell_name:o[l].location?Object(f.b)(o[l].location.cell_name):"",cell_code:o[l].location?Object(f.b)(o[l].location.cell_code):"",sector_name:o[l].location?Object(f.b)(o[l].location.sector_name):"",sector_code:o[l].location?Object(f.b)(o[l].location.sector_code):"",district_code:o[l].location?Object(f.b)(o[l].location.district_code):"",province_name:o[l].location?Object(f.b)(o[l].location.province_name):"",province_code:o[l].location?Object(f.b)(o[l].location.province_code):"",subjects:Object(f.a)(o[l].teacher_hierarch).courses,grades:Object(f.a)(o[l].teacher_hierarch).grades,periods:Object(f.a)(o[l].teacher_hierarch).periods};for(var d in n.state.reportContent)Object.prototype.hasOwnProperty.call(n.state.reportContent,d)&&(n.state.reportContent[d].status||delete i[n.state.reportContent[d].key]);r.push(i),c++}n.setState({reportToPrint:r}),r=[],c=1}},n.resetReportContent=function(e){var t=n.state.reportContent;for(var a in t)t[a].isChangeAllowed&&(t[a].status=!e);n.setReportContent(t),n.setSelectAll(!e),n.updateDataToPrint()},n.updateReportContent=function(e){var t=n.state.reportContent.findIndex((function(t){return t.key===e})),a=n.state.reportContent;a[t].status=!a[t].status,n.setReportContent(a),a.find((function(e){return!1===e.status}))?n.setSelectAll(!1):n.setSelectAll(!0),n.updateDataToPrint()},n.getUserList=function(){var e=[];if(null===n.state.reportAPIData)return null;var t=n.state.reportAPIData.filter((function(e){return e.month=n.state.selectedMonth}));for(var a in t){var s=JSON.parse(t[a].list),r=n.changeSchoolData(s,{name:t[a].school_name,code:t[a].school_code});e=[].concat(Object(c.a)(e),Object(c.a)(r))}return console.log("=================getUserList==================="),console.log({getUserList:e}),console.log("=================getUserList==================="),e},n.changeSchoolData=function(e,t){var a,c=[],o=Object(r.a)(e);try{for(o.s();!(a=o.n()).done;){var n=a.value,l=n.school;l&&(l.school_code=t.code,l.school_name=t.name),c.push(Object(s.a)(Object(s.a)({},n),{},{school:l}))}}catch(i){o.e(i)}finally{o.f()}return c},n.generatePages=function(e){var t=Math.ceil(e/n.state.tablePageLength),a=Array.from(Array(t+1-1).keys()).map((function(e){return 1+e})).slice(0,5);t>4&&n.state.currentPage>2&&(a=t-n.state.currentPage>1?[n.state.currentPage-2,n.state.currentPage-1,n.state.currentPage,n.state.currentPage+1,n.state.currentPage+2]:t-n.state.currentPage===1?[n.state.currentPage-3,n.state.currentPage-2,n.state.currentPage-1,n.state.currentPage,n.state.currentPage+1]:[n.state.currentPage-4,n.state.currentPage-3,n.state.currentPage-2,n.state.currentPage-1,n.state.currentPage]);var s=!1,r=!1,c=!1,o=!1;return t>1&&1!==n.state.currentPage&&(c=!0),t>1&&n.state.currentPage!==t&&(o=!0),t>3&&n.state.currentPage>3&&(s=!0),t>3&&n.state.currentPage!==t&&t-n.state.currentPage>2&&(r=!0),Object(C.jsxs)("div",{className:"flex text-gray-700",children:[s&&Object(C.jsx)("button",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){return n.setCurrentPage(1)},children:Object(C.jsx)(w.b,{className:"w-6 h-6"})}),c&&Object(C.jsx)("button",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200",onClick:function(){return n.setCurrentPage(n.state.currentPage-1)},children:Object(C.jsx)(w.d,{className:"w-6 h-6"})}),Object(C.jsx)("div",{className:"flex h-12 font-medium rounded-full mx-1 bg-gray-100",children:a.map((function(e,t){return Object(C.jsx)("button",{className:"w-12 md:flex justify-center items-center gap-2 rounded-full ".concat(n.state.currentPage===e?"bg-gray-600 hover:bg-gray-500 text-white cursor-auto":"hover:bg-gray-200"),disabled:n.state.currentPage===e,onClick:function(){n.setCurrentPage(e)},children:e},Math.random())}))}),o&&Object(C.jsx)("button",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){n.setCurrentPage(n.state.currentPage+1)},children:Object(C.jsx)(w.e,{className:"w-6 h-6"})}),r&&Object(C.jsx)("button",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){n.setCurrentPage(t)},children:Object(C.jsx)(w.c,{className:"w-6 h-6"})})]})},n.countTeacherByGender=function(e,t){return e.filter((function(e){return e.sex&&e.sex.toLocaleLowerCase()===t})).length},n.state={loading:!0,loadingAcademics:!1,downloading:!1,sortOrder:"ASC",sortProperty:"",searchInput:"",reportTitle:"",selectAll:!0,generateReport:!1,formError:null,reportContent:f.d,reportToPrint:null,selectedMonth:g.c[S.getMonth()],reportAPIData:null,currentPage:1,tablePageLength:f.f,selectedAcademic:n.props.basic.academic_calender?n.props.basic.academic_calender.academic_year_id:"",districtList:null,selected_district:""},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.getUserList();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("section",{className:"flex flex-col sm:flex-row justify-between",children:[Object(C.jsxs)("div",{className:"px-3",children:[Object(C.jsx)(j.a,{size:"lg",children:"Monthly Teacher Placement Report"}),Object(C.jsx)("p",{className:"opacity-50",children:"Placement report"})]}),Object(C.jsxs)("div",{className:"px-3 float-right",children:[Object(C.jsxs)("div",{className:"flex flex-row items-center justify-end gap-1 text-xl font-bold",children:[Object(C.jsx)("span",{className:"text-gray-500",children:"Period:"}),Object(C.jsx)("p",{children:this.props.basic.academic_calender?this.props.basic.academic_calender.academic_year_name:""})]}),Object(C.jsxs)("div",{className:"flex flex-row items-center justify-end gap-1 text-lg",children:[Object(C.jsx)("span",{className:"text-gray-500",children:"Done on"}),Object(C.jsx)("p",{children:Object(g.a)(Date())})]})]})]}),Object(C.jsxs)("section",{className:"flex flex-col sm:flex-row justify-between mt-4",children:[Object(C.jsx)("div",{className:"px-3",children:this.props.auth.role&&f.e.school.includes(this.props.auth.role.role)?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.a,{size:"lg",children:this.props.auth.school?this.props.auth.school.school_name:""}),Object(C.jsx)("p",{className:"opacity-50",children:this.props.auth.district?this.props.auth.district.district_name+" district":""})]}):this.props.auth.role&&f.e.district.includes(this.props.auth.role.role)?Object(C.jsx)(j.a,{size:"lg",children:this.props.auth.district?this.props.auth.district.district_name+" district":""}):this.props.auth.role&&f.e.country.includes(this.props.auth.role.role)&&Object(C.jsx)(j.a,{size:"lg",children:this.props.auth.role?this.props.auth.role.role:""})}),Object(C.jsx)("div",{className:"px-3 float-right",children:Object(C.jsxs)("div",{className:"flex flex-row items-center justify-end font-bold",children:[Object(C.jsx)("span",{className:"text-gray-500",children:"Download"}),Object(C.jsx)("button",{className:"px-4 py-1 ml-1 rounded bg-white border hover:text-green-600 font-bold hover:bg-green-50 border-gray-200 ".concat((this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length)&&"cursor-not-allowed"),disabled:this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length,onClick:function(){e.updateDataToPrint(),e.setGenerateReport(!0)},children:"EXCEL"}),Object(C.jsx)("button",{className:"hidden px-4 py-1 ml-1 rounded bg-white border hover:text-red-600 font-bold hover:bg-red-50 border-gray-200 ".concat(this.state.downloading&&"cursor-wait"),children:"PDF"})]})})]})]}),Object(C.jsx)(b.a,{children:Object(C.jsxs)("div",{className:"border border-t mt-2 mb-1 flex flex-col md:flex-row items-center justify-between px-3 rounded gap-2",children:[Object(C.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-2",children:[Object(C.jsx)("div",{className:"",children:Object(C.jsx)(v.a,{data:this.props.placement.academics?Object(c.a)(this.props.placement.academics.map((function(e){return{title:e.academic_year_name,value:e.academic_year_id}}))):[],error:"",name:"select_academic",onChange:function(t){e.setState({selectedAcademic:t.target.value}),e.loadDataFormAPI(e.state.selectedMonth,t.target.value)},label:"Select academic",placeholder:"Select academic",value:this.state.selectedAcademic,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.props.placement.academics})}),this.props.auth.role&&f.e.country.includes(this.props.auth.role.role)&&Object(C.jsx)("div",{className:"",children:Object(C.jsx)(v.a,{data:this.state.districtList?[{title:"Select district",value:""}].concat(Object(c.a)(this.state.districtList.map((function(e){return{title:e.district_name,value:e.district_code}})))):[],error:"",name:"select_district",onChange:function(t){e.setState({selected_district:t.target.value}),e.loadCountryDataAPI(e.state.selectedMonth,e.state.selectedAcademic,t.target.value)},label:"Select district",placeholder:"Select district",value:this.state.selected_district,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.state.districtList})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(v.a,{data:Object(c.a)(g.c.map((function(e){return{title:e,value:e}}))),error:"",name:"select_month",onChange:function(t){e.setState({selectedMonth:t.target.value}),e.loadDataFormAPI(t.target.value,e.state.selectedAcademic)},label:"Select month",placeholder:"Select month",value:this.state.selectedMonth,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.props.placement.academics})})]}),t&&Object(C.jsx)("div",{className:"py-1",children:Object(C.jsxs)("div",{className:"flex justify-between space-x-4 text-center",children:[Object(C.jsxs)("div",{className:"flex-1 rounded-lg bg-blue-100 p-3",children:[Object(C.jsx)("h3",{className:"text-4xl font-bold text-gray-800",children:Object(g.f)(this.countTeacherByGender(t,"female"))}),Object(C.jsx)("span",{className:"text-gray-500 mt-1",children:"Female"})]}),Object(C.jsxs)("div",{className:"flex-1 rounded-lg bg-blue-100 p-3",children:[Object(C.jsx)("h3",{className:"text-4xl font-bold text-gray-800",children:Object(g.f)(this.countTeacherByGender(t,"male"))}),Object(C.jsx)("span",{className:"text-gray-500 mt-1",children:"Male"})]}),Object(C.jsxs)("div",{className:"flex-1 rounded-lg bg-blue-100 p-3",children:[Object(C.jsx)("h3",{className:"text-5xl font-bold text-gray-800",children:Object(g.f)(t.length)}),Object(C.jsx)("span",{className:"text-gray-500 mt-1",children:"Total"})]})]})})]})}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("div",{className:"border border-t mt-2 mb-1 flex flex-col md:flex-row items-center px-3 rounded",children:[Object(C.jsx)("div",{className:"flex-1 pr-2",children:Object(C.jsx)(x.a,{label:"Search",name:"search",type:"search",onChange:function(t){return e.setSearchInput(t.target.value)},placeholder:"Search by names, codes,...",value:this.state.searchInput,disabled:!t||0===t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength).length,size:"sm",error:""})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(v.a,{data:[{title:f.f.toString(),value:f.f},{title:(2*f.f).toString(),value:2*f.f},{title:(3*f.f).toString(),value:3*f.f},{title:(4*f.f).toString(),value:4*f.f},{title:(5*f.f).toString(),value:5*f.f}],error:"",name:"page_limit",onChange:function(t){return e.setState({tablePageLength:Number(t.target.value),currentPage:1})},label:"Show",placeholder:"page limit",value:this.state.tablePageLength,size:"sm"})})]}),Object(C.jsx)("div",{className:"w-full overflow-x-auto",children:Object(C.jsxs)("table",{className:"w-full shadow",id:"report_content",children:[Object(C.jsx)("thead",{className:"bg-white border-b-2 border-gray-300 text-gray-600 font-bold text-sm",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"px-2 py-2",children:"#"}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("staff_code")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Staff Code ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("staff_nid")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Staff NID ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("full_name")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Names ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("dob")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["DOB ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("sex")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Sex ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("qualification")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Qualification ",Object(C.jsx)(u.b,{})]})}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",children:"School"}),Object(C.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("position")},children:Object(C.jsxs)("div",{className:"flex items-center gap-1",children:["Position ",Object(C.jsx)(u.b,{})]})})]})}),Object(C.jsx)("tbody",{children:this.state.loading?Object(C.jsx)(N.a,{cols:11}):Object(g.g)(this.state.selected_district)&&this.props.auth.role&&f.e.country.includes(this.props.auth.role.role)?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(C.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(C.jsx)(h.c,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(C.jsx)("span",{className:"text-base font-bold",children:"Please select district to get data!"})]})})}):null===t?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(C.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(C.jsx)(h.c,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(C.jsx)("span",{className:"text-sm font-bold",children:"Something went wrong, try again!"})]})})}):0===Object(g.h)(t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength),this.state.searchInput).length?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(C.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(C.jsx)(h.c,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(C.jsx)("span",{className:"text-sm font-bold",children:"No result found! Please try to search again"})]})})}):Object(g.j)(!Object(g.g)(this.state.sortProperty),Object(g.h)(t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength),this.state.searchInput),this.state.sortProperty,this.state.sortOrder).map((function(t,a){return Object(C.jsxs)("tr",{className:"".concat(a%2!==0?"bg-gray-100":"bg-white"," text-gray-600 hover:bg-accent-100 hover:text-accent-700 border-b border-gray-300 hover:border-accent-500 text-sm"),children:[Object(C.jsx)("td",{className:"px-2 py-2",children:(e.state.currentPage-1)*e.state.tablePageLength+a+1}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.staff_code?t.staff_code:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.nid?t.nid:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.full_name?t.full_name:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.dob?t.dob:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.sex?t.sex:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.qualification?t.qualification:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.school?t.school.school_name:""}),Object(C.jsx)("td",{className:"px-2 py-2",children:t.position?t.position:""})]},a+1)}))})]})}),!this.state.loading&&Object(C.jsx)("div",{className:"flex flex-col items-center mt-3 mb-2 overflow-x-auto",children:t&&this.generatePages(t.length)})]}),this.state.generateReport&&Object(C.jsx)(_.c,{title:Object(C.jsx)("div",{className:"flex flex-row gap-4 items-center",children:Object(C.jsxs)("div",{className:"flex flex-col",children:[Object(C.jsx)("span",{className:"font-bold text-2xl text-gray-500",children:"Generating Report contents"}),Object(C.jsx)("span",{className:"text-sm text-blue-600 font-normal",children:"Generating Excel Report"})]})}),backDrop:!0,theme:_.b.default,close:function(){return e.setGenerateReport(!1)},backDropClose:!1,widthSizeClass:_.a.medium,displayClose:!0,padding:{title:!0},children:Object(C.jsxs)("div",{className:"px-6",children:[Object(C.jsxs)("div",{className:"my-2 text-base text-gray-700 sm:text-lg",children:[Object(C.jsx)(x.a,{disabled:this.state.loading,label:"Report title",name:"report_title",type:"text",value:this.state.reportTitle,placeholder:"Report title",className:"p-2",onChange:function(t){e.setFormError(null),e.setReportTitle(t.target.value)},error:this.state.formError&&"report_title"===this.state.formError.element?this.state.formError.msg:""}),Object(C.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(C.jsx)("label",{children:"Report content"}),Object(C.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 items-center gap-2 mt-2",children:this.state.reportContent.map((function(t,a){return Object(C.jsxs)("div",{className:"flex items-center gap-1 ".concat(t.isChangeAllowed?"cursor-pointer":"cursor-not-allowed"),onClick:function(){return t.isChangeAllowed&&e.updateReportContent(t.key)},title:t.isChangeAllowed?"":"Required for every report!",children:[t.status?Object(C.jsx)(O.g,{className:"w-6 h-6 text-blue-700"}):Object(C.jsx)(O.h,{className:"w-6 h-6"}),Object(C.jsx)("span",{children:t.title})]},a)}))}),this.state.formError&&"report_content"===this.state.formError.element&&Object(C.jsx)("span",{className:"text-red-500",children:this.state.formError.msg})]})]}),Object(C.jsxs)("div",{className:"flex justify-between mb-2 mt-4",children:[Object(C.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",onClick:function(){return e.resetReportContent(e.state.selectAll)},children:[this.state.selectAll?Object(C.jsx)(O.g,{className:"w-6 h-6 text-blue-700"}):Object(C.jsx)(O.h,{className:"w-6 h-6"}),Object(C.jsx)("span",{children:"Select all"})]}),!this.state.loading&&this.state.reportToPrint&&Object(C.jsx)(y.a,{fileData:this.state.reportToPrint,fileName:this.state.reportTitle,btnName:"Download"})]})]})})]})}}]),a}(d.Component),k=Object(m.b)((function(e){return{auth:e.auth,basic:e.basic,placement:e.placement}}),{FC_GetPlacementByDistrict:p.x,FC_GetAcademics:p.j})(P)}}]);
//# sourceMappingURL=18.9ce7ba80.chunk.js.map