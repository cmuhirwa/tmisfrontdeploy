(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[40],{361:function(e,t,s){"use strict";s.d(t,"f",(function(){return l})),s.d(t,"d",(function(){return n})),s.d(t,"e",(function(){return i})),s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return u})),s.d(t,"c",(function(){return h}));var a,r,c,o=s(17),l=100;!function(e){e.GOVERNMENT_AIDED="GOVERNMENT_AIDED",e.PRIVATE="GOVERNMENT_AIDED",e.PUBLIC="PUBLIC"}(a||(a={})),function(e){e.EXIST="Exist",e.NEW="new"}(r||(r={})),function(e){e.role="role",e.district_name="district_name",e.full_name="full_name",e.phone_numbers="phone_numbers",e.email="email",e.sex="sex",e.dob="dob",e.marital_status="marital_status",e.nid="nid",e.position="position",e.specialization="specialization",e.qualification="qualification",e.status="status",e.school_code="school_code",e.school_name="school_name",e.school_category="school_category",e.school_status="school_status",e.subjects="subjects",e.grades="grades",e.date_in_school="date_in_school",e.date_of_hire="date_of_hire"}(c||(c={}));var n=[{key:c.full_name,title:"Staff Full Names",status:!0,isChangeAllowed:!0},{key:c.nid,title:"National ID",status:!0,isChangeAllowed:!1},{key:c.sex,title:"Sex",status:!0,isChangeAllowed:!0},{key:c.dob,title:"Date of Birth",status:!0,isChangeAllowed:!0},{key:c.marital_status,title:"Marital status",status:!0,isChangeAllowed:!0},{key:c.phone_numbers,title:"Staff Phone",status:!0,isChangeAllowed:!0},{key:c.email,title:"Staff Email",status:!0,isChangeAllowed:!0},{key:c.qualification,title:"Qualification",status:!0,isChangeAllowed:!0},{key:c.position,title:"Position",status:!0,isChangeAllowed:!0},{key:c.subjects,title:"Subjects",status:!0,isChangeAllowed:!0},{key:c.grades,title:"Grade (No of Group)",status:!0,isChangeAllowed:!0},{key:c.specialization,title:"Specialization",status:!0,isChangeAllowed:!0},{key:c.role,title:"Staff role",status:!0,isChangeAllowed:!0},{key:c.status,title:"Status",status:!0,isChangeAllowed:!0},{key:c.date_of_hire,title:"Date to hire",status:!0,isChangeAllowed:!0},{key:c.date_in_school,title:"Date in school",status:!0,isChangeAllowed:!0},{key:c.school_name,title:"School Name",status:!0,isChangeAllowed:!0},{key:c.school_code,title:"School Code",status:!0,isChangeAllowed:!0},{key:c.school_category,title:"School Category",status:!0,isChangeAllowed:!0},{key:c.school_status,title:"School Status",status:!0,isChangeAllowed:!0},{key:c.district_name,title:"District Name",status:!0,isChangeAllowed:!0}],i={system:["26","Admin"],country:["REB","4","RTB","300","MINECOFIN","27","26","Admin"],district:["DDE","3","Human Resource","25"],school:["Head Teacher","Teacher","2"]},d=function(e){return null===e?"":h(e)?Object(o.a)(e):e},u=function(e){var t="",s=[],a="",r={grade_names:[],grade_codes:[],courses:[],group:[]},c=0;if(e){var l=function(a){var l=e[a];if(s.includes(l.course_code)||(s.push(l.course_code),t+=Object(o.j)(t)?l.course_name:", "+l.course_name),r.grade_codes.includes(l.grade_code)){if(r.courses.findIndex((function(e){return e===l.course_code}))>=0){var n=r.courses.findIndex((function(e){return e===l.course_code}));r.group[n]+=JSON.parse(l.grade_group).length}}else r.grade_codes.push(l.grade_code),r.grade_names.push(l.grade_name),r.courses.push(l.course_code),r.group.push(Object(o.b)(JSON.parse(l.grade_group)));c+=Number(l.teaching_period)*JSON.parse(l.grade_group).length};for(var n in e)l(n);for(var i in r.courses)a+=Object(o.j)(a)?"".concat(r.grade_names[i]," (").concat(r.group[i],")"):", ".concat(r.grade_names[i]," (").concat(r.group[i],")")}return{courses:t,grades:a,periods:c.toString()}},h=function(e){if(null===e)return!1;var t=new Date(e);return!isNaN(t.getDate())}},363:function(e,t,s){"use strict";s(4);var a=s(1);t.a=function(e){var t=function(){for(var t=[],s=0;s<e.cols;s++)t.push(s);return t.map((function(e){return Object(a.jsx)("td",{className:"p-3 text-center whitespace-nowrap",children:Object(a.jsx)("div",{className:"w-full h-4 rounded bg-gray-200 animate__animated animate__pulse animate__delay-5s animate__infinite"})},e)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},228),Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},22648),Object(a.jsx)("tr",{className:"border-b border-gray-200",children:t()},229768)]})}},567:function(e,t,s){"use strict";s.r(t),s.d(t,"_PlacementReport",(function(){return I})),s.d(t,"PlacementReport",(function(){return E}));var a=s(10),r=s(29),c=s(41),o=s(19),l=s(20),n=s(21),i=s(22),d=s(4),u=s(69),h=s(46),p=s(36),m=s(13),j=s(53),b=s(92),g=s(17),x=s(361),f=s(39),O=s(26),_=s(15),y=s(139),N=s(138),v=s(363),P=s(93),S=s(23),C=s(25),w=s(401),A=s(1),D=new Date,I=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var l;return Object(o.a)(this,s),(l=t.call(this,e)).setDownloading=function(e){l.setState({downloading:e})},l.setSortProperty=function(e){l.setState({sortProperty:e})},l.setSortOrder=function(e){l.setState({sortOrder:e})},l.setSearchInput=function(e){l.setState({searchInput:e})},l.setReportTitle=function(e){l.setState({reportTitle:e})},l.setSelectAll=function(e){l.setState({selectAll:e})},l.setFormError=function(e){l.setState({formError:e})},l.setSort=function(e){l.state.sortProperty===e&&"ASC"===l.state.sortOrder?l.setSortOrder("DESC"):l.setSortOrder("ASC"),l.setSortProperty(e)},l.setGenerateReport=function(e){l.setState({generateReport:e})},l.setReportContent=function(e){l.setState({reportContent:e})},l.setCurrentPage=function(e){l.setState({currentPage:e})},l.loadDataFormAPI=function(e,t){l.props.auth.district&&l.props.auth.role&&x.e.district.includes(l.props.auth.role.role)?Object(m.eb)(l.props.auth.district.district_code,t,e,(function(e,t,s){l.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:s}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==s?l.setState({reportAPIData:s}):e||Object(g.j)(t)||console.error({status:e,msg:t})})):l.props.auth.school&&l.props.auth.role&&x.e.school.includes(l.props.auth.role.role)?Object(m.fb)(l.props.auth.school.school_code,t,l.state.selectedMonth,(function(t,s,a){l.setState({loading:t,reportAPIData:null}),!1===t&&null!==a?(console.log("=================reportsss SCHOOL LEVEL ==================="),console.log({report:a}),console.log("=================reportsss SCHOOL LEVEL ==================="),l.setState({reportAPIData:a.filter((function(t){return t.month===e}))})):t||Object(g.j)(s)||console.error({status:t,msg:s})})):l.props.auth.role&&x.e.country.includes(l.props.auth.role.role)&&!Object(g.j)(l.state.selected_district)&&Object(m.eb)(l.state.selected_district,t,e,(function(e,t,s){l.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:s}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==s?l.setState({reportAPIData:s}):e||Object(g.j)(t)||console.error({status:e,msg:t})}))},l.loadCountryDataAPI=function(e,t,s){l.props.auth.role&&x.e.country.includes(l.props.auth.role.role)&&!Object(g.j)(s)&&Object(m.eb)(s,t,e,(function(e,t,s){l.setState({loading:e,reportAPIData:null}),console.log("=================reportsss DISTRICT LEVEL ==================="),console.log({report:s}),console.log("=================reportsss DISTRICT LEVEL ==================="),!1===e&&null!==s?l.setState({reportAPIData:s}):e||Object(g.j)(t)||console.error({status:e,msg:t})}))},l.componentDidMount=function(){(null===l.state.districtList||30!==l.state.districtList.length)&&l.props.auth.role&&x.e.country.includes(l.props.auth.role.role)&&Object(m.K)((function(e,t,s){l.setState({loading:!0,districtList:null}),!0===e?(console.log("================= districts COUNTRY LEVEL ==================="),console.log({report:t}),console.log("================= districts COUNTRY LEVEL ==================="),l.setState({loading:!1,districtList:t})):Object(g.j)(s)||l.setState({formError:{element:"main-error",msg:s},loading:!1})})),l.props.basic.academic_calender&&l.loadDataFormAPI(l.state.selectedMonth,l.props.basic.academic_calender.academic_year_id),null===l.props.placement.academics||0===l.props.placement.academics.length?l.props.FC_GetAcademics((function(e,t,s){l.setState({loadingAcademics:e})})):l.setState({loadingAcademics:!1})},l.updateDataToPrint=function(){if(l.props.auth.district&&l.props.auth.role&&x.e.district.includes(l.props.auth.role.role)){var e="Placement Report / "+l.props.auth.district.district_name+" district";l.props.basic.academic_calender&&(e=e+" / "+l.props.basic.academic_calender.academic_year_name+" / Month of "+l.state.selectedMonth),l.setReportTitle(e)}else if(l.props.auth.school&&l.props.auth.role&&x.e.school.includes(l.props.auth.role.role)){var t="Placement Report / "+l.props.auth.school.school_name+" school";l.props.basic.academic_calender&&(t=t+" / "+l.props.basic.academic_calender.academic_year_name+" / Month of "+l.state.selectedMonth),l.setReportTitle(t)}else if(l.props.auth.role&&x.e.country.includes(l.props.auth.role.role)&&l.state.districtList){var s=Object(m.J)(l.state.districtList,l.state.selected_district),a="Placement Report / "+l.props.auth.role.role;a=s?a+" / "+s.district_name+" district":a,l.props.basic.academic_calender&&(a=a+" / "+l.props.basic.academic_calender.academic_year_name+" / Month of "+l.state.selectedMonth),l.setReportTitle(a)}var r=[],c=1,o=l.getUserList();if(o){for(var n in o){var i={no:c,full_name:o[n].full_name?o[n].full_name:"",nid:o[n].nid?o[n].nid:"",sex:o[n].sex?o[n].sex:"",dob:Object(x.c)(o[n].dob)?o[n].dob:"",marital_status:o[n].marital_status?o[n].marital_status:"",phone_numbers:o[n].phone_numbers?o[n].phone_numbers:"",email:o[n].email?o[n].email:"",qualification:o[n].qualification?o[n].qualification:"",position:o[n].position?o[n].position:"",subjects:Object(x.a)(o[n].teacher_hierarch).courses,grades:Object(x.a)(o[n].teacher_hierarch).grades,specialization:o[n].specialization?o[n].specialization:"",role:o[n].role?o[n].role:"",status:o[n].status?o[n].status:"",date_of_hire:void 0!==o[n].hired_date?Object(x.b)(o[n].hired_date):"",date_in_school:Object(x.c)(o[n].start_date_in_the_school)?o[n].start_date_in_the_school:"",school_name:o[n].school?Object(x.b)(o[n].school.school_name):"",school_code:o[n].school?Object(x.b)(o[n].school.school_code):"",school_category:o[n].school?Object(x.b)(o[n].school.school_category):"",school_status:o[n].school?Object(x.b)(o[n].school.school_status):"",district_name:o[n].location?Object(x.b)(o[n].location.district_name):""};for(var d in l.state.reportContent)Object.prototype.hasOwnProperty.call(l.state.reportContent,d)&&(l.state.reportContent[d].status||delete i[l.state.reportContent[d].key]);r.push(i),c++}l.setState({reportToPrint:r}),r=[],c=1}},l.resetReportContent=function(e){var t=l.state.reportContent;for(var s in t)t[s].isChangeAllowed&&(t[s].status=!e);l.setReportContent(t),l.setSelectAll(!e),l.updateDataToPrint()},l.updateReportContent=function(e){var t=l.state.reportContent.findIndex((function(t){return t.key===e})),s=l.state.reportContent;s[t].status=!s[t].status,l.setReportContent(s),s.find((function(e){return!1===e.status}))?l.setSelectAll(!1):l.setSelectAll(!0),l.updateDataToPrint()},l.getUserList=function(){var e=[];if(null===l.state.reportAPIData)return null;var t=l.state.reportAPIData.filter((function(e){return e.month=l.state.selectedMonth}));for(var s in t){var a=JSON.parse(t[s].list),r=l.changeSchoolData(a,{name:t[s].school_name,code:t[s].school_code});e=[].concat(Object(c.a)(e),Object(c.a)(r))}return console.log("=================getUserList==================="),console.log({getUserList:e}),console.log("=================getUserList==================="),e},l.changeSchoolData=function(e,t){var s,c=[],o=Object(r.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value,n=l.school;n&&(n.school_code=t.code,n.school_name=t.name),c.push(Object(a.a)(Object(a.a)({},l),{},{school:n}))}}catch(i){o.e(i)}finally{o.f()}return c},l.generatePages=function(e){var t=Math.ceil(e/l.state.tablePageLength),s=Array.from(Array(t+1-1).keys()).map((function(e){return 1+e})).slice(0,5);t>4&&l.state.currentPage>2&&(s=t-l.state.currentPage>1?[l.state.currentPage-2,l.state.currentPage-1,l.state.currentPage,l.state.currentPage+1,l.state.currentPage+2]:t-l.state.currentPage===1?[l.state.currentPage-3,l.state.currentPage-2,l.state.currentPage-1,l.state.currentPage,l.state.currentPage+1]:[l.state.currentPage-4,l.state.currentPage-3,l.state.currentPage-2,l.state.currentPage-1,l.state.currentPage]);var a=!1,r=!1,c=!1,o=!1;return t>1&&1!==l.state.currentPage&&(c=!0),t>1&&l.state.currentPage!==t&&(o=!0),t>3&&l.state.currentPage>3&&(a=!0),t>3&&l.state.currentPage!==t&&t-l.state.currentPage>2&&(r=!0),Object(A.jsxs)("div",{className:"flex text-gray-700",children:[a&&Object(A.jsx)("button",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){return l.setCurrentPage(1)},children:Object(A.jsx)(P.b,{className:"w-6 h-6"})}),c&&Object(A.jsx)("button",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200",onClick:function(){return l.setCurrentPage(l.state.currentPage-1)},children:Object(A.jsx)(P.d,{className:"w-6 h-6"})}),Object(A.jsx)("div",{className:"flex h-12 font-medium rounded-full mx-1 bg-gray-100",children:s.map((function(e,t){return Object(A.jsx)("button",{className:"w-12 md:flex justify-center items-center gap-2 rounded-full ".concat(l.state.currentPage===e?"bg-gray-600 hover:bg-gray-500 text-white cursor-auto":"hover:bg-gray-200"),disabled:l.state.currentPage===e,onClick:function(){l.setCurrentPage(e)},children:e},Math.random())}))}),o&&Object(A.jsx)("button",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){l.setCurrentPage(l.state.currentPage+1)},children:Object(A.jsx)(P.e,{className:"w-6 h-6"})}),r&&Object(A.jsx)("button",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer",onClick:function(){l.setCurrentPage(t)},children:Object(A.jsx)(P.c,{className:"w-6 h-6"})})]})},l.countTeacherByGender=function(e,t){return e.filter((function(e){return e.sex&&e.sex.toLocaleLowerCase()===t})).length},l.state={loading:!0,loadingAcademics:!1,downloading:!1,sortOrder:"ASC",sortProperty:"",searchInput:"",reportTitle:"",selectAll:!0,generateReport:!1,formError:null,reportContent:x.d,reportToPrint:null,selectedMonth:g.d[D.getMonth()],reportAPIData:null,currentPage:1,tablePageLength:x.f,selectedAcademic:l.props.basic.academic_calender?l.props.basic.academic_calender.academic_year_id:"",districtList:null,selected_district:"",export_type:"Excel"},l}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.getUserList();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(j.a,{children:[Object(A.jsxs)("section",{className:"flex flex-col sm:flex-row justify-between",children:[Object(A.jsxs)("div",{className:"px-3",children:[Object(A.jsx)(b.a,{size:"lg",className:"",children:"Monthly Teacher Placement Report"}),Object(A.jsxs)("div",{className:"flex flex-row items-center justify-start gap-1 text-base",children:[Object(A.jsx)("span",{className:"text-gray-500",children:"Done on"}),Object(A.jsx)("p",{children:Object(g.a)(Date())})]})]}),Object(A.jsx)("div",{className:"px-3 float-right",children:Object(A.jsx)("div",{className:"float-right -mr-2 mt-2",children:Object(A.jsxs)("div",{className:"flex flex-row items-center justify-end font-bold",children:[Object(A.jsx)("span",{className:"",children:"Download:"}),Object(A.jsx)(S.a,{theme:"default",disabled:this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length,className:"".concat(this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length?"cursor-not-allowed":""," mx-3 bg-gray-200 hover:bg-gray-300"),onClick:function(){e.setState({export_type:"Excel"}),e.updateDataToPrint(),e.setGenerateReport(!0)},children:Object(A.jsx)("div",{className:"flex flex-row items-center w-full gap-2",children:Object(A.jsx)("span",{children:"Excel format"})})}),Object(A.jsx)(S.a,{theme:"primary-light",disabled:this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length,className:"".concat(this.state.loading||null===this.state.reportAPIData||0===this.state.reportAPIData.length?"cursor-not-allowed":""),onClick:function(){e.updateDataToPrint(),e.setGenerateReport(!0),e.setState({export_type:"PDF"})},children:Object(A.jsx)("div",{className:"flex flex-row items-center w-full gap-2",children:Object(A.jsx)("span",{children:"PDF format"})})})]})})})]}),Object(A.jsx)("section",{className:"flex flex-col sm:flex-row justify-between bg-accent-400 w-max rounded-md mx-2",children:Object(A.jsx)("div",{className:"px-3",children:this.props.auth.role&&x.e.school.includes(this.props.auth.role.role)?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{size:"sm",children:this.props.auth.school?this.props.auth.school.school_name:""}),Object(A.jsx)("p",{className:"opacity-50",children:this.props.auth.district?this.props.auth.district.district_name+" district":""})]}):this.props.auth.role&&x.e.district.includes(this.props.auth.role.role)?Object(A.jsx)(b.a,{size:"sm",children:this.props.auth.district?this.props.auth.district.district_name+" district":""}):this.props.auth.role&&x.e.country.includes(this.props.auth.role.role)&&Object(A.jsx)(b.a,{size:"sm",children:this.props.auth.role?this.props.auth.role.role:""})})}),Object(A.jsxs)("div",{className:"border-t border-gray-400 mt-4 mb-1 flex flex-col md:flex-row items-center justify-between px-3 gap-2",children:[Object(A.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-2",children:[Object(A.jsx)("div",{className:"",children:Object(A.jsx)(N.a,{data:this.props.placement.academics?Object(c.a)(this.props.placement.academics.map((function(e){return{title:e.academic_year_name,value:e.academic_year_id}}))):[],error:"",name:"select_academic",onChange:function(t){e.setState({selectedAcademic:t.target.value}),e.loadDataFormAPI(e.state.selectedMonth,t.target.value)},label:"Select academic",placeholder:"Select academic",value:this.state.selectedAcademic,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.props.placement.academics})}),this.props.auth.role&&x.e.country.includes(this.props.auth.role.role)&&Object(A.jsx)("div",{className:"",children:Object(A.jsx)(N.a,{data:this.state.districtList?[{title:"Select district",value:""}].concat(Object(c.a)(this.state.districtList.map((function(e){return{title:e.district_name,value:e.district_code}})))):[],error:"",name:"select_district",onChange:function(t){e.setState({selected_district:t.target.value}),e.loadCountryDataAPI(e.state.selectedMonth,e.state.selectedAcademic,t.target.value)},label:"Select district",placeholder:"Select district",value:this.state.selected_district,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.state.districtList})}),Object(A.jsx)("div",{className:"",children:Object(A.jsx)(N.a,{data:Object(c.a)(g.d.map((function(e){return{title:e,value:e}}))),error:"",name:"select_month",onChange:function(t){e.setState({selectedMonth:t.target.value}),e.loadDataFormAPI(t.target.value,e.state.selectedAcademic)},label:"Select month",placeholder:"Select month",value:this.state.selectedMonth,size:"sm",disabled:this.state.loadingAcademics||this.state.loading||null===this.props.placement.academics})})]}),t&&Object(A.jsx)("div",{className:"py-1",children:Object(A.jsxs)("div",{className:"flex justify-between space-x-4 text-right",children:[Object(A.jsxs)("div",{className:"flex-1 rounded-lg px-3 py-1",children:[Object(A.jsx)("span",{className:"text-primary-800 mt-1",children:"Female"}),Object(A.jsx)("h2",{className:"text-4xl font-bold text-gray-800",children:Object(g.i)(this.countTeacherByGender(t,"female"))})]}),Object(A.jsxs)("div",{className:"flex-1 rounded-lg px-3 py-1",children:[Object(A.jsx)("span",{className:"text-primary-800 mt-1",children:"Male"}),Object(A.jsx)("h2",{className:"text-4xl font-bold text-gray-800",children:Object(g.i)(this.countTeacherByGender(t,"male"))})]}),Object(A.jsxs)("div",{className:"flex-1 rounded-lg px-3 py-1",children:[Object(A.jsx)("span",{className:"text-primary-800 mt-1",children:"Total"}),Object(A.jsx)("h2",{className:"text-4xl font-bold text-gray-800",children:Object(g.i)(t.length)})]})]})})]})]}),Object(A.jsxs)(j.a,{children:[Object(A.jsxs)("div",{className:"border border-t mt-2 mb-1 flex flex-col md:flex-row items-center px-3 rounded",children:[Object(A.jsx)("div",{className:"flex-1 pr-2",children:Object(A.jsx)(f.a,{label:"Search",name:"search",type:"search",onChange:function(t){return e.setSearchInput(t.target.value)},placeholder:"Search by names, codes,...",value:this.state.searchInput,disabled:!t||0===t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength).length,size:"sm",error:""})}),Object(A.jsx)("div",{className:"",children:Object(A.jsx)(N.a,{data:[{title:x.f.toString(),value:x.f},{title:(2*x.f).toString(),value:2*x.f},{title:(3*x.f).toString(),value:3*x.f},{title:(4*x.f).toString(),value:4*x.f},{title:(5*x.f).toString(),value:5*x.f}],error:"",name:"page_limit",onChange:function(t){return e.setState({tablePageLength:Number(t.target.value),currentPage:1})},label:"Show",placeholder:"page limit",value:this.state.tablePageLength,size:"sm"})})]}),Object(A.jsx)("div",{className:"w-full overflow-x-auto",children:Object(A.jsxs)("table",{className:"w-full shadow",id:"report_content",children:[Object(A.jsx)("thead",{className:"bg-white border-b-2 border-gray-300 text-gray-600 font-bold text-sm",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"px-2 py-2",children:"#"}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("staff_code")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Staff Code ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("staff_nid")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Staff NID ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("full_name")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Names ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("dob")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["DOB ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("sex")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Sex ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("qualification")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Qualification ",Object(A.jsx)(u.f,{})]})}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",children:"School"}),Object(A.jsx)("td",{className:"px-2 py-2 cursor-pointer",onClick:function(){return e.setSort("position")},children:Object(A.jsxs)("div",{className:"flex items-center gap-1",children:["Position ",Object(A.jsx)(u.f,{})]})})]})}),Object(A.jsx)("tbody",{children:this.state.loading?Object(A.jsx)(v.a,{cols:11}):Object(g.j)(this.state.selected_district)&&this.props.auth.role&&x.e.country.includes(this.props.auth.role.role)?Object(A.jsx)("tr",{children:Object(A.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(A.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(A.jsx)(h.e,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(A.jsx)("span",{className:"text-base font-bold",children:"Please select district to get data!"})]})})}):null===t?Object(A.jsx)("tr",{children:Object(A.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(A.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(A.jsx)(h.e,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(A.jsx)("span",{className:"text-sm font-bold",children:"Something went wrong, try again!"})]})})}):0===Object(g.n)(t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength),this.state.searchInput).length?Object(A.jsx)("tr",{children:Object(A.jsx)("td",{colSpan:11,className:"px-2 py-2",children:Object(A.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(A.jsx)(h.e,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(A.jsx)("span",{className:"text-sm font-bold",children:"No result found! Please try to search again"})]})})}):Object(g.p)(!Object(g.j)(this.state.sortProperty),Object(g.n)(t.slice(this.state.currentPage-1,this.state.currentPage-1+this.state.tablePageLength),this.state.searchInput),this.state.sortProperty,this.state.sortOrder).map((function(t,s){return Object(A.jsxs)("tr",{className:"".concat(s%2!==0?"bg-gray-100":"bg-white"," text-gray-600 hover:bg-accent-100 hover:text-accent-700 border-b border-gray-300 hover:border-accent-500 text-sm"),children:[Object(A.jsx)("td",{className:"px-2 py-2",children:(e.state.currentPage-1)*e.state.tablePageLength+s+1}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.staff_code?t.staff_code:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.nid?t.nid:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.full_name?t.full_name:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.dob?t.dob:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.sex?t.sex:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.qualification?t.qualification:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.school?t.school.school_name:""}),Object(A.jsx)("td",{className:"px-2 py-2",children:t.position?t.position:""})]},s+1)}))})]})}),!this.state.loading&&Object(A.jsx)("div",{className:"flex flex-col items-center mt-3 mb-2 overflow-x-auto",children:t&&this.generatePages(t.length)})]}),this.state.generateReport&&Object(A.jsx)(O.c,{title:Object(A.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:["Excel"===this.state.export_type?Object(A.jsx)(w.a,{className:"text-5xl text-gray-900"}):Object(A.jsx)(C.k,{className:"text-5xl text-gray-900"}),Object(A.jsxs)("div",{className:"flex flex-col",children:[Object(A.jsx)("span",{className:"font-bold text-2xl text-gray-900",children:"Generating Report contents"}),Object(A.jsx)("span",{className:"text-sm text-blue-600 font-normal",children:"Excel"===this.state.export_type?"Generating Excel Report":"Generating PDF Report"})]})]}),backDrop:!0,theme:O.b.default,close:function(){return e.setGenerateReport(!1)},backDropClose:!1,widthSizeClass:O.a.medium,displayClose:!0,padding:{title:!0},children:Object(A.jsxs)("div",{className:"px-6",children:[Object(A.jsxs)("div",{className:"my-2 text-base text-gray-700 sm:text-lg",children:[Object(A.jsx)(f.a,{disabled:this.state.loading,label:"Report title",name:"report_title",type:"text",value:this.state.reportTitle,placeholder:"Report title",className:"p-2",onChange:function(t){e.setFormError(null),e.setReportTitle(t.target.value)},error:this.state.formError&&"report_title"===this.state.formError.element?this.state.formError.msg:""}),Object(A.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(A.jsx)("label",{children:"Report content"}),Object(A.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 items-center gap-2 mt-2",children:this.state.reportContent.map((function(t,s){return Object(A.jsxs)("div",{className:"flex items-center gap-1 ".concat(t.isChangeAllowed?"cursor-pointer":"cursor-not-allowed"),onClick:function(){return t.isChangeAllowed&&e.updateReportContent(t.key)},title:t.isChangeAllowed?"":"Required for every report!",children:[t.status?Object(A.jsx)(_.m,{className:"w-6 h-6 text-blue-700"}):Object(A.jsx)(_.n,{className:"w-6 h-6"}),Object(A.jsx)("span",{children:t.title})]},s)}))}),this.state.formError&&"report_content"===this.state.formError.element&&Object(A.jsx)("span",{className:"text-red-500",children:this.state.formError.msg})]})]}),Object(A.jsxs)("div",{className:"flex justify-between mb-2 mt-4",children:[Object(A.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",onClick:function(){return e.resetReportContent(e.state.selectAll)},children:[this.state.selectAll?Object(A.jsx)(_.m,{className:"w-6 h-6 text-blue-700"}):Object(A.jsx)(_.n,{className:"w-6 h-6"}),Object(A.jsx)("span",{children:"Select all"})]}),!this.state.loading&&this.state.reportToPrint&&"Excel"===this.state.export_type&&Object(A.jsx)(y.a,{fileData:this.state.reportToPrint,fileName:this.state.reportTitle,btnName:"Download"}),!this.state.loading&&this.state.reportToPrint&&"PDF"===this.state.export_type&&Object(A.jsx)("div",{children:"Export to PDF"})]})]})})]})}}]),s}(d.Component),E=Object(p.b)((function(e){return{auth:e.auth,basic:e.basic,placement:e.placement}}),{FC_GetPlacementByDistrict:m.Y,FC_GetAcademics:m.z})(I)}}]);
//# sourceMappingURL=40.84260839.chunk.js.map