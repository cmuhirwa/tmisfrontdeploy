(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[30],{114:function(e,t,a){"use strict";a(2);var s=a(1);t.a=function(e){var t=function(){for(var t=[],a=0;a<e.cols;a++)t.push(a);return t.map((function(e){return Object(s.jsx)("td",{className:"p-3 text-center whitespace-nowrap",children:Object(s.jsx)("div",{className:"w-full h-4 rounded bg-gray-200 animate__animated animate__pulse animate__delay-5s animate__infinite"})},e)}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},228),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},22648),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},229768)]})}},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s,r=a(116),n=a(120),i=a(13),c=a(1);!function(e){e.RESTORE_DELETE="restore_delete",e.DELETE="delete",e.INFO="info",e.OTHER="other"}(s||(s={}));t.b=function(e){return Object(c.jsxs)("div",{className:"min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover",id:"modal-id",children:[Object(c.jsx)("div",{className:"absolute bg-black opacity-80 inset-0 z-0"}),Object(c.jsx)("div",{className:"w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white animate__animated animate__zoomIn animate__faster",children:Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{className:"text-center p-5 flex-auto justify-center",children:[e.modalType===s.DELETE||e.modalType===s.RESTORE_DELETE&&Object(c.jsx)(r.a,{className:"w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"}),e.modalType===s.DELETE?Object(c.jsx)(i.m,{className:"w-16 h-16 flex items-center text-red-500 mx-auto"}):e.modalType===s.RESTORE_DELETE?Object(c.jsx)(i.X,{className:"w-16 h-16 flex items-center text-yellow-800 mx-auto"}):e.modalType===s.INFO?Object(c.jsx)(n.a,{className:"w-16 h-16 flex items-center text-blue-500 mx-auto"}):Object(c.jsx)(n.a,{className:"w-16 h-16 flex items-center text-yellow-500 mx-auto"}),Object(c.jsx)("h2",{className:"text-xl font-bold py-4 ",children:"Are you sure?"}),Object(c.jsx)("p",{className:"text-sm text-gray-500 px-8",children:e.description})]}),Object(c.jsxs)("div",{className:"p-3  mt-2 text-center space-x-4 md:block",children:[Object(c.jsx)("button",{className:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",onClick:function(){return e.setModalAction(!1)},children:"Cancel"}),Object(c.jsx)("button",{className:"mb-2 md:mb-0 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg ".concat(e.modalType===s.DELETE?"border-red-500 hover:bg-red-600 bg-red-500":e.modalType===s.RESTORE_DELETE?"border-yellow-700 hover:bg-yellow-800 bg-yellow-700":e.modalType===s.INFO?"border-blue-500 hover:bg-blue-600 bg-blue-500":"border-yellow-500 hover:bg-yellow-600 bg-yellow-500"),onClick:function(){e.confirmFun(),e.setModalAction(!1)},children:"Confirm"})]})]})})]})}},176:function(e,t,a){"use strict";a.r(t),a.d(t,"AcademicCalender",(function(){return L}));var s,r=a(6),n=a(29),i=a(30),c=a(31),l=a(32),o=a(3),d=a.n(o),m=a(5),u=a.n(m),_=a(2),h=a.n(_),p=a(50),b=a(13),f=a(112),j=a(17),g=a(11),x=a(7),E=a(9),v=a(14),y=function(e){return{type:v.a.UPDATE_ACADEMIC_CALENDER,payload:e}},S=a(26),T=a(44),O=a(114);!function(e){e.POST_REQUEST="POST_REQUEST",e.TRANSFER_REQUEST="TRANSFER_REQUEST",e.TEACHER_RECRUITMENT="TEACHER_RECRUITMENT"}(s||(s={}));var R=[{event_id:"5",event_name:"Post Requests",event_start:"2022-07-14",event_end:"2022-07-27",event_key:s.POST_REQUEST,event_status:"false"},{event_id:"6",event_name:"Transfer Requests",event_start:"2022-07-13",event_end:"2022-07-27",event_key:s.TRANSFER_REQUEST,event_status:"false"},{event_id:"6",event_name:"Teacher Recruitment",event_start:"2022-07-13",event_end:"2022-07-27",event_key:s.TEACHER_RECRUITMENT,event_status:"false"}],N=(s.POST_REQUEST,s.TRANSFER_REQUEST,s.TEACHER_RECRUITMENT,a(19)),A=a(135),w=a(1),C=function(e){var t=new Date;return new Date(e.event_end).getTime()>=t.getTime()},q=function(e){return R.find((function(t){return t.event_key===e}))},k=function(e,t){if("true"===e.academic_year_status){var a=new Date,s=new Date(t.event_end),r=new Date(t.event_start);if(s.getTime()>=a.getTime()&&r.getTime()<=a.getTime()&&"true"===t.event_status)return"OPEN";if(r.getTime()>a.getTime()&&"true"===t.event_status)return"WAITING"}return"CLOSED"},D=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handlePlanActivation=function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n,i,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="true"===t.academic_year_status?"close":"open",window.confirm("Are you sure you want to ".concat(r," this academic event?"))){e.next=3;break}return e.abrupt("return",!0);case 3:for(i in C(a)||s.setState({formError:{element:"main-error",msg:"Opening/Closing event which has been expired is not allowed!"}}),n={academic_year_name:t.academic_year_name,academic_year_description:t.academic_year_description,academic_year_start:t.academic_year_start,academic_year_end:t.academic_year_end,academic_year_status:t.academic_year_status,events:[],academic_year_id:t.academic_year_id},t.events)Object.prototype.hasOwnProperty.call(t.events,i)&&(c=t.events[i],a.event_key===c.event_key?"true"===a.event_status?n.events.push({event_id:a.event_id,event_name:a.event_name,event_key:a.event_key,event_start:a.event_start,event_end:a.event_end,event_status:"false"}):n.events.push({event_id:a.event_id,event_name:a.event_name,event_key:a.event_key,event_start:a.event_start,event_end:a.event_end,event_status:"true"}):n.events.push(c));return console.log("===================================="),console.log({newData:{event_status:"true"===a.event_status?"false":"true",event_id:a.event_id}}),console.log("===================================="),s.setState({loadingRequest:a.event_key}),e.prev=10,e.next=13,u.a.post("".concat(g.c,"/academiccalendars/changeeventstatus"),{event_status:"true"===a.event_status?"false":"true",event_id:a.event_id});case 13:l=e.sent,s.props.FC_UpdateAcademicCalendar(n),s.props.setViewThisSession(n),s.setState({formError:{element:"main-success",msg:"Event ".concat(r,"d successfully")}}),s.setState({loadingRequest:""}),console.log("updateSessionPlan: ",l),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(10),console.error({error:Object(E.a)(e.t0)}),s.setState({formError:{element:"main-error",msg:Object(E.a)(e.t0)}});case 25:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t,a){return e.apply(this,arguments)}}(),s.state={loadingRequest:"",formError:null},s}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(w.jsxs)("table",{className:"w-full bg-white shadow p-5",id:"session_content",children:[Object(w.jsx)("thead",{className:"bg-white border-b-2 border-gray-300 text-gray-600 font-bold text-sm",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"p-2",children:"#"}),Object(w.jsx)("td",{className:"p-2",children:"Plan Type"}),Object(w.jsx)("td",{className:"p-2",children:"Start Date"}),Object(w.jsx)("td",{className:"p-2",children:"End date"}),"true"===this.props.viewThisSession.academic_year_status&&Object(w.jsx)("td",{className:"p-2",colSpan:2,children:"Status"})]})}),Object(w.jsx)("tbody",{children:this.props.viewThisSession.events.map((function(t,a){return Object(w.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[Object(w.jsx)("td",{className:"p-2 text-left whitespace-nowrap",children:a+1}),Object(w.jsx)("td",{className:"p-2 text-left",children:Object(w.jsx)("span",{className:"text-lg",children:q(t.event_key)&&Object(N.d)(q(t.event_key).event_name)})}),Object(w.jsx)("td",{className:"p-2 text-left",children:Object(N.a)(t.event_start)}),Object(w.jsx)("td",{className:"p-2 text-left",children:Object(N.a)(t.event_end)}),"true"===e.props.viewThisSession.academic_year_status&&Object(w.jsx)("td",{children:"OPEN"===k(e.props.viewThisSession,t)?Object(w.jsx)("span",{className:"px-2 py-1 font-semibold text-green-700",children:"Open"}):"WAITING"===k(e.props.viewThisSession,t)?Object(w.jsx)("span",{className:"px-2 py-1 font-semibold text-gray-700",children:"Waiting"}):Object(w.jsx)("span",{className:"px-2 py-1 font-semibold text-red-700",children:"Closed"})}),"true"===e.props.viewThisSession.academic_year_status&&Object(w.jsx)("td",{children:C(t)&&Object(w.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[Object(w.jsxs)("div",{className:"relative ".concat(e.state.loadingRequest.length>0?"cursor-not-allowed":"cursor-pointer"),title:"true"===t.event_status?"Deactivating session":"Activating session",onClick:function(){return e.state.loadingRequest.length<=0&&e.handlePlanActivation(e.props.viewThisSession,t)},children:[Object(w.jsx)("span",{className:"block w-14 h-8 bg-gray-100 rounded-full shadow-inner"}),Object(w.jsx)("span",{className:"absolute block w-6 h-6 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-500 ease-in-out ".concat("false"===t.event_status?"bg-red-500":"bg-green-500 transform translate-x-full")})]}),e.state.loadingRequest===t.event_key&&Object(w.jsx)(A.b,{className:"animate__animated animate__rotateIn animate__infinite"})]})})]},a+t.event_id)}))})]})}}]),a}(_.Component),F=h.a.memo(Object(j.b)((function(e){return{auth:e.auth}}),{FC_UpdateAcademicCalendar:y})(D)),P=a(119),U=a(33),I=a(34),M=function(e){var t=e.number,a=e.title,s=e.description,r=e.theme,n=e.active,i=e.priority,c=e.onClick;return Object(w.jsxs)("div",{onClick:c,className:"p-2 rounded-t-md cursor-pointer border-b-4 flex flex-col text-center lg:text-left lg:flex-row items-center border-".concat(r,"-500 ").concat(!0===n?"bg-".concat(r,"-100"):""," ").concat(!1===i?"opacity-60":""),children:[Object(w.jsx)("section",{className:"p-2 lg:p-3 rounded-full border-4 ".concat("bg-".concat(r,"-500")," 0 ").concat("border-".concat(r,"yellow"===r?"-600":"-200"),"  ").concat("yellow"===r?"text-black":"text-white"," w-9 h-9 lg:w-14 lg:h-14 flex items-center text-center"),children:Object(w.jsx)("h3",{className:"text-center w-full text-xl lg:text-3xl font-bold ",children:t})}),Object(w.jsxs)("section",{className:"pl-2",children:[Object(w.jsx)("h3",{className:"lg:text-xl text-lg font-bold",children:a}),Object(w.jsx)("p",{className:"text-gray-400",children:s})]})]})},Q=a(27),V=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).setLoading=function(e){i.setState({loading:e})},i.setCreateSession=function(e){i.setState({createSession:e})},i.setSessionTitle=function(e){i.setState({sessionTitle:e})},i.setViewThisSession=function(e){null===i.state.viewThisSession?i.setState({viewThisSession:e}):i.state.viewThisSession.academic_year_id===e.academic_year_id?i.setState({viewThisSession:null}):i.setState({viewThisSession:e})},i.setActivateSession=function(e){i.setState({activateSession:e})},i.setSessionPeriod=function(e){i.setState({sessionPeriod:e})},i.setFormError=function(e){i.setState({formError:e})},i.componentDidMount=function(){null===i.props.academicCalender.allAcademicPlans||i.props.academicCalender.allAcademicPlans.length<=0?i.props.FC_GetAllAcademicCalender((function(e,t){i.setLoading(e),!e&&t.length>0&&i.setFormError({element:"main-error",msg:t})})):i.setLoading(!1)},i.handleSessionActivation=function(){var e=Object(r.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="true"===t.academic_year_status?"deactivate":"activate",i.setState({loadingRequest:t.academic_year_id}),e.prev=2,e.next=5,u.a.post("".concat(g.c,"/academiccalendars/changeacademiccalendarstatus"),{academic_year_status:"true"===t.academic_year_status?"false":"true",academic_year_id:t.academic_year_id});case 5:s=e.sent,i.props.FC_GetAllAcademicCalender((function(e,t){!e&&t.length>0&&i.setFormError({element:"main-error",msg:t})})),i.setFormError({element:"main-success",msg:"Session ".concat(a,"d successfully")}),console.log("updateSessionPlan: ",s),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error({error:Object(E.a)(e.t0)}),i.setFormError({element:"main-error",msg:Object(E.a)(e.t0)});case 15:i.setState({loadingRequest:""});case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),i.isDateRangeValid=function(e,t,a){return!0},i.currentDate=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,s=e.getFullYear(),r=t.toString(),n=a.toString();return t<10&&(r="0"+t),a<10&&(n="0"+a),s+"-"+n+"-"+r},i.setPlansForUpdate=function(e){i.setState({post_request_start:e.find((function(e){return e.event_key===s.POST_REQUEST}))?e.find((function(e){return e.event_key===s.POST_REQUEST})).event_start:"",post_request_end:e.find((function(e){return e.event_key===s.POST_REQUEST}))?e.find((function(e){return e.event_key===s.POST_REQUEST})).event_end:"",transfer_request_start:e.find((function(e){return e.event_key===s.TRANSFER_REQUEST}))?e.find((function(e){return e.event_key===s.TRANSFER_REQUEST})).event_start:"",transfer_request_end:e.find((function(e){return e.event_key===s.TRANSFER_REQUEST}))?e.find((function(e){return e.event_key===s.TRANSFER_REQUEST})).event_end:"",teacher_recruitment_start:e.find((function(e){return e.event_key===s.TEACHER_RECRUITMENT}))?e.find((function(e){return e.event_key===s.TEACHER_RECRUITMENT})).event_start:"",teacher_recruitment_end:e.find((function(e){return e.event_key===s.TEACHER_RECRUITMENT}))?e.find((function(e){return e.event_key===s.TEACHER_RECRUITMENT})).event_end:""})},i.handleSubmit=function(){var e=Object(r.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!Object(N.f)(i.state.sessionTitle)){e.next=4;break}return i.setFormError({element:"title",msg:"Please fill the academic calender title"}),e.abrupt("return",i.setState({step:1}));case 4:if(!Object(N.f)(i.state.sessionPeriod)){e.next=7;break}return i.setFormError({element:"period",msg:"Please fill the academic calender period"}),e.abrupt("return",i.setState({step:1}));case 7:if(!Object(N.f)(i.state.academic_year_start)){e.next=12;break}return i.setFormError({element:"academic_year_start",msg:"Academic year start date is required"}),e.abrupt("return",i.setState({step:1}));case 12:if(i.isDateRangeValid("ACADEMIC_YEAR","START",i.state.academic_year_start)){e.next=14;break}return e.abrupt("return",i.setState({step:1}));case 14:if(!Object(N.f)(i.state.academic_year_end)){e.next=19;break}return i.setFormError({element:"academic_year_end",msg:"Academic year period end date is required"}),e.abrupt("return",i.setState({step:1}));case 19:if(i.isDateRangeValid("ACADEMIC_YEAR","END",i.state.academic_year_end)){e.next=21;break}return e.abrupt("return",i.setState({step:1}));case 21:if(!Object(N.f)(i.state.post_request_start)){e.next=26;break}return i.setFormError({element:"post_request_period_start",msg:"Post request period start date is required"}),e.abrupt("return",i.setState({step:2}));case 26:if(i.isDateRangeValid("POST_REQUEST","START",i.state.post_request_start)){e.next=28;break}return e.abrupt("return",i.setState({step:2}));case 28:if(!Object(N.f)(i.state.post_request_end)){e.next=33;break}return i.setFormError({element:"post_request_period_end",msg:"Post request period end date is required"}),e.abrupt("return",i.setState({step:2}));case 33:if(i.isDateRangeValid("POST_REQUEST","END",i.state.post_request_end)){e.next=35;break}return e.abrupt("return",i.setState({step:2}));case 35:if(!Object(N.f)(i.state.transfer_request_start)){e.next=40;break}return i.setFormError({element:"transfer_request_period_start",msg:"Examination period start date is required"}),e.abrupt("return",i.setState({step:2}));case 40:if(i.isDateRangeValid("TRANSFER_REQUEST","START",i.state.transfer_request_start)){e.next=42;break}return e.abrupt("return",i.setState({step:2}));case 42:if(!Object(N.f)(i.state.transfer_request_end)){e.next=47;break}return i.setFormError({element:"transfer_request_period_end",msg:"Transfer request period end date is required"}),e.abrupt("return",i.setState({step:2}));case 47:if(i.isDateRangeValid("TRANSFER_REQUEST","END",i.state.transfer_request_end)){e.next=49;break}return e.abrupt("return",i.setState({step:2}));case 49:if(!Object(N.f)(i.state.teacher_recruitment_start)){e.next=54;break}return i.setFormError({element:"teacher_recruitment_period_start",msg:"Teacher recruitment period start date is required"}),e.abrupt("return",i.setState({step:2}));case 54:if(i.isDateRangeValid("TEACHER_RECRUITMENT","START",i.state.teacher_recruitment_start)){e.next=56;break}return e.abrupt("return",i.setState({step:2}));case 56:if(!Object(N.f)(i.state.teacher_recruitment_end)){e.next=61;break}return i.setFormError({element:"teacher_recruitment_period_end",msg:"Teacher recruitment period end date is required"}),e.abrupt("return",i.setState({step:2}));case 61:if(i.isDateRangeValid("TEACHER_RECRUITMENT","END",i.state.teacher_recruitment_end)){e.next=63;break}return e.abrupt("return",i.setState({step:2}));case 63:if(a={academic_year_name:i.state.sessionTitle,academic_year_description:i.state.sessionPeriod,academic_year_start:i.state.academic_year_start,academic_year_end:i.state.academic_year_end,academic_year_status:"false",events:[{event_name:"Post Requests",event_key:s.POST_REQUEST,event_status:"true",event_start:i.state.post_request_start,event_end:i.state.post_request_end},{event_name:"Transfer Requests",event_key:s.TRANSFER_REQUEST,event_status:"true",event_start:i.state.transfer_request_start,event_end:i.state.transfer_request_end},{event_name:"Teacher Recruitment",event_key:s.TEACHER_RECRUITMENT,event_status:"true",event_start:i.state.teacher_recruitment_start,event_end:i.state.teacher_recruitment_end}]},console.log("===================================="),console.log({createFormData:a}),console.log("===================================="),i.setState({loadingRequest:i.state.thisSession?i.state.thisSession.academic_year_id:"true"}),e.prev=68,null===i.state.thisSession){e.next=79;break}return e.next=72,u.a.post("".concat(g.c,"/academiccalendars/editacademiccalendar"),{academic_year_id:i.state.thisSession.academic_year_id,academic_year_name:i.state.sessionTitle,academic_year_description:i.state.sessionPeriod,academic_year_start:i.state.academic_year_start,academic_year_end:i.state.academic_year_end,academic_year_status:i.state.thisSession.academic_year_status,events:[{event_key:s.POST_REQUEST,event_start:i.state.post_request_start,event_end:i.state.post_request_end},{event_key:s.TRANSFER_REQUEST,event_start:i.state.transfer_request_start,event_end:i.state.transfer_request_end},{event_key:s.TEACHER_RECRUITMENT,event_start:i.state.teacher_recruitment_start,event_end:i.state.teacher_recruitment_end}]});case 72:r=e.sent,i.props.FC_UpdateAcademicCalendar(r.data),i.setState({formError:{element:"main-form-success",msg:"Academic session Plan updated successfully"},step:1,sessionTitle:"",sessionPeriod:"",academic_year_start:"",academic_year_end:"",post_request_start:"",post_request_end:"",transfer_request_start:"",transfer_request_end:"",teacher_recruitment_start:"",teacher_recruitment_end:"",thisSession:null}),setTimeout((function(){i.setState({formError:null,createSession:!1})}),2e3),console.log("updateSessionPlan: ",r),e.next=86;break;case 79:return e.next=81,u.a.post("".concat(g.c,"/academiccalendars/addacademiccalendar"),a);case 81:n=e.sent,i.props.FC_CreateAcademicCalendar(n.data),i.setState({formError:{element:"main-form-success",msg:"Academic calender created successfully"},step:1,sessionTitle:"",sessionPeriod:"",academic_year_start:"",academic_year_end:"",post_request_start:"",post_request_end:"",transfer_request_start:"",transfer_request_end:"",teacher_recruitment_start:"",teacher_recruitment_end:"",thisSession:null}),setTimeout((function(){i.setState({formError:null,createSession:!1})}),2e3),console.log("createPlanType: ",n);case 86:e.next=93;break;case 88:e.prev=88,e.t0=e.catch(68),i.setState({formError:{element:"main-form-error",msg:"".concat(Object(E.a)(e.t0),"! Try again")}}),setTimeout((function(){i.setState({formError:null})}),2e3),console.error("Err: ",{error:e.t0});case 93:i.setState({loadingRequest:""});case 94:case"end":return e.stop()}}),e,null,[[68,88]])})));return function(t){return e.apply(this,arguments)}}(),i.handleNext=function(){return Object(N.f)(i.state.sessionTitle)?i.setFormError({element:"title",msg:"Please fill the academic calender title"}):Object(N.f)(i.state.sessionPeriod)?i.setFormError({element:"period",msg:"Please fill the academic calender period"}):Object(N.f)(i.state.academic_year_start)?i.setFormError({element:"academic_year_start",msg:"Academic year start date is required"}):!!i.isDateRangeValid("ACADEMIC_YEAR","START",i.state.academic_year_start)&&(Object(N.f)(i.state.academic_year_end)?i.setFormError({element:"academic_year_end",msg:"Academic year period end date is required"}):!i.isDateRangeValid("ACADEMIC_YEAR","END",i.state.academic_year_end)||void i.setState({step:2}))},i.state={loading:!1,loadingRequest:"",createSession:!1,activateSession:null,thisSession:null,viewThisSession:null,doAction:null,sessionTitle:"",sessionPeriod:"",academic_year_start:"",academic_year_end:"",post_request_start:"",post_request_end:"",transfer_request_start:"",transfer_request_end:"",teacher_recruitment_start:"",teacher_recruitment_end:"",formError:null,step:1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(w.jsxs)(w.Fragment,{children:[this.state.formError&&"main-error"===this.state.formError.element&&Object(w.jsx)(Q.a,{theme:"danger",fixed:!0,children:this.state.formError.msg}),this.state.formError&&"main-success"===this.state.formError.element&&Object(w.jsx)(Q.a,{theme:"success",fixed:!0,children:this.state.formError.msg}),!this.state.createSession&&Object(w.jsxs)("div",{className:"flex items-center gap-1 justify-between px-3 mt-3",children:[Object(w.jsx)(T.a,{className:"text-blue-800 w-max",children:"Academic calender settings"}),!this.state.createSession&&Object(w.jsxs)(S.a,{className:"flex items-center gap-1",onClick:function(){return e.setCreateSession(!0)},theme:"primary-light",disabled:this.state.loading,children:[Object(w.jsx)(p.g,{}),"Add new"]})]}),this.state.createSession&&Object(w.jsx)("div",{className:"sticky top-14 z-50",children:Object(w.jsxs)(U.a,{children:[Object(w.jsxs)("div",{className:"flex items-center gap-2 justify-between",children:[Object(w.jsx)(T.a,{className:"w-max py-2 lg:pb-3 lg:pt-2 font-light text-center text-gray-500",children:null!==this.state.thisSession?this.state.thisSession.academic_year_name:"Add New Academic calender"}),Object(w.jsx)(S.a,{disabled:this.state.loadingRequest.length>0,onClick:function(){e.setState({formError:null,sessionTitle:"",sessionPeriod:"",thisSession:null,createSession:!1,academic_year_start:"",academic_year_end:"",post_request_start:"",post_request_end:"",transfer_request_start:"",transfer_request_end:"",teacher_recruitment_start:"",teacher_recruitment_end:""})},theme:"danger-light",children:"Close"})]}),Object(w.jsx)("div",{className:"pt-2 grid  grid-cols-2 border p-2 rounded-md",children:[{step:1,title:"Academic Year",description:"Set academic year, period, starting date, ending date"},{step:2,title:"Academic events",description:"Set Post request, transfer request, teacher recruitment"}].map((function(t){return Object(w.jsx)(M,{onClick:function(){e.state.loadingRequest.length>0||(1===t.step&&e.setState({step:1}),2===t.step&&e.handleNext())},active:t.step===e.state.step,description:t.description,number:t.step,theme:t.step===e.state.step?"yellow":e.state.step>t.step?"green":"gray",title:t.title,priority:t.step<=e.state.step},t.step)}))})]})}),!this.state.createSession&&Object(w.jsx)(U.a,{children:Object(w.jsxs)("table",{className:"w-full",id:"session_content",children:[Object(w.jsx)("thead",{className:"bg-blue-50 text-blue-800 font-bold text-sm",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"px-2 py-2",children:"#"}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Session title"}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Period"}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Start date"}),Object(w.jsx)("td",{className:"px-2 py-2",children:"End date"}),Object(w.jsx)("td",{className:"px-2 py-2",children:"Status"}),this.state.viewThisSession&&Object(w.jsx)("td",{className:"px-2 py-2"}),Object(w.jsx)("td",{className:"px-2 py-2"})]})}),Object(w.jsxs)("tbody",{children:[null===this.props.academicCalender.allAcademicPlans&&Object(w.jsx)(O.a,{cols:7}),null!==this.props.academicCalender.allAcademicPlans&&!this.state.loading&&this.props.academicCalender.allAcademicPlans.length<=0&&Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:7,className:"px-2 py-2",children:Object(w.jsxs)("div",{className:"flex flex-col py-4 justify-center items-center text-gray-500 border-2 border-white bg-gray-100 rounded",children:[Object(w.jsx)(f.e,{className:"text-6xl text-gray-500 animate__animated animate__shakeX"}),Object(w.jsx)("span",{className:"text-xl mb-3",children:"No academic calender found!"}),Object(w.jsx)("div",{className:"w-full mt-2 flex flex-row items-center justify-center",children:Object(w.jsx)("ul",{className:"text-base py-2 text-blue-600 font-bold flex flex-row gap-2",children:Object(w.jsx)("li",{onClick:function(){return e.setCreateSession(!0)},className:"underline text-blue-600 cursor-pointer",children:"Create new academic calender"})})})]})})}),null!==this.props.academicCalender.allAcademicPlans&&!this.state.loading&&this.props.academicCalender.allAcademicPlans.length>0&&this.props.academicCalender.allAcademicPlans.map((function(t,a){return Object(w.jsxs)(h.a.Fragment,{children:[Object(w.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-yellow-50 group cursor-pointer ".concat(e.state.viewThisSession&&e.state.viewThisSession.academic_year_id===t.academic_year_id&&"border-gray-400 bg-gray-200"),onClick:function(){e.state.loadingRequest.length<=0&&e.setViewThisSession(t)},children:[Object(w.jsx)("td",{className:"p-3 text-left whitespace-nowrap",children:a+1}),Object(w.jsx)("td",{className:"p-3 text-left",children:Object(w.jsx)("span",{className:"text-lg",children:t.academic_year_name})}),Object(w.jsx)("td",{className:"p-3 text-left",children:t.academic_year_description}),Object(w.jsx)("td",{className:"p-3 text-left",children:Object(N.a)(t.academic_year_start)}),Object(w.jsx)("td",{className:"p-3 text-left",children:Object(N.a)(t.academic_year_end)}),Object(w.jsx)("td",{children:"true"===t.academic_year_status?Object(w.jsx)("span",{className:"px-2 py-1 font-semibold text-green-700",children:"Active"}):Object(w.jsx)("span",{className:"px-2 py-1 font-semibold text-red-700",children:"Inactive"})}),e.state.viewThisSession&&e.state.viewThisSession.academic_year_id===t.academic_year_id&&Object(w.jsx)("td",{children:Object(w.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[Object(w.jsxs)("div",{className:"relative ".concat(e.state.loadingRequest.length>0||"true"===t.academic_year_status?"cursor-not-allowed":"cursor-pointer"),title:"true"===t.academic_year_status?"Activate another session to close this one!":"Activation of a session",onClick:function(){return e.state.loadingRequest.length<=0&&"false"===t.academic_year_status&&e.setActivateSession(t)},children:[Object(w.jsx)("span",{className:"block w-14 h-8 bg-gray-100 rounded-full shadow-inner"}),Object(w.jsx)("span",{className:"absolute block w-6 h-6 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-500 ease-in-out ".concat("false"===t.academic_year_status?"bg-red-500":"bg-green-500 transform translate-x-full")})]}),e.state.loadingRequest===t.academic_year_id&&e.state.doAction&&"ACTIVATED"===e.state.doAction&&Object(w.jsx)(A.b,{className:"animate__animated animate__rotateIn animate__infinite"})]})}),Object(w.jsx)("td",{className:"px-5 text-center",colSpan:e.state.viewThisSession&&e.state.viewThisSession.academic_year_id!==t.academic_year_id?2:0,children:Object(w.jsxs)("div",{className:"flex flex-row items-center gap-2 justify-end",children:[e.state.viewThisSession&&e.state.viewThisSession.academic_year_id===t.academic_year_id&&Object(w.jsx)("div",{className:"flex items-center gap-2",children:Object(w.jsx)("div",{onClick:function(){e.state.loadingRequest.length<=0&&e.setState({thisSession:t,createSession:!0,sessionTitle:t.academic_year_name,academic_year_start:t.academic_year_start,academic_year_end:t.academic_year_end,sessionPeriod:t.academic_year_description}),e.setPlansForUpdate(t.events)},className:"bg-gray-50 hover:bg-blue-200 rounded-full px-1 py-1 ".concat(e.state.loadingRequest.length>0?"cursor-not-allowed":"cursor-pointer"),children:Object(w.jsx)(b.o,{className:"text-3xl text-blue-700"})})}),Object(w.jsx)("div",{onClick:function(){e.state.loadingRequest.length<=0&&e.setViewThisSession(t)},className:"bg-gray-50 group-hover:bg-blue-200 rounded-full px-1 py-1 ".concat(e.state.loadingRequest.length>0?"cursor-not-allowed":"cursor-pointer"),children:e.state.viewThisSession&&e.state.viewThisSession.academic_year_id===t.academic_year_id?Object(w.jsx)(b.p,{className:"text-3xl text-gray-700"}):Object(w.jsx)(b.q,{className:"text-3xl text-gray-700"})})]})})]}),e.state.viewThisSession&&e.state.viewThisSession.academic_year_id===t.academic_year_id&&Object(w.jsx)("tr",{className:"bg-gray-50",children:Object(w.jsx)("td",{colSpan:8,className:"px-3 py-2",children:Object(w.jsx)(F,{viewThisSession:e.state.viewThisSession,setViewThisSession:e.setViewThisSession})})})]},a+t.academic_year_status)}))]})]})}),this.state.createSession&&Object(w.jsxs)(U.a,{className:"grid grid-cols-1 sm:grid-cols-4 gap-4",children:[this.state.academic_year_start,this.state.formError&&"main-form-error"===this.state.formError.element&&Object(w.jsx)(Q.a,{theme:"danger",fixed:!0,children:this.state.formError.msg}),this.state.formError&&"main-form-success"===this.state.formError.element&&Object(w.jsx)(Q.a,{theme:"success",fixed:!0,children:this.state.formError.msg}),Object(w.jsx)("div",{className:"col-span-1 sm:col-span-4 flex flex-col mx-4 my-2",children:Object(w.jsxs)("form",{onSubmit:this.handleSubmit,className:"-mt-2",children:[1===this.state.step&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setSessionTitle(t.target.value),e.setFormError(null)},value:this.state.sessionTitle,error:null!==this.state.formError&&"title"===this.state.formError.element?this.state.formError.msg:"",label:"Academic Year",placeholder:"2022 - 20223",name:"academic_year_title",className:"mb-2"}),Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setSessionPeriod(t.target.value),e.setFormError(null)},value:this.state.sessionPeriod,error:null!==this.state.formError&&"period"===this.state.formError.element?this.state.formError.msg:"",label:"Academic Period",placeholder:"September/July Session",name:"academic_year_period",className:"mb-2"}),Object(w.jsx)("div",{className:"w-full mb-2",children:Object(w.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({academic_year_start:t.target.value}),e.setFormError(null),e.isDateRangeValid("ACADEMIC_YEAR","START",t.target.value)},error:null!==this.state.formError&&"academic_year_start"===this.state.formError.element?this.state.formError.msg:"",value:this.state.academic_year_start,type:"date",label:"Start date",placeholder:"Academic year start date",name:"academic_year_start_date",className:"mb-1"}),Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({academic_year_end:t.target.value}),e.setFormError(null),e.isDateRangeValid("ACADEMIC_YEAR","END",t.target.value)},error:null!==this.state.formError&&"academic_year_end"===this.state.formError.element?this.state.formError.msg:"",value:this.state.academic_year_end,type:"date",label:"End date",placeholder:"Academic year end date",name:"academic_year_end_date",className:"mb-1"})]})})]}),2===this.state.step&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"w-full mb-2",children:[Object(w.jsx)("h6",{className:"text-blueGray-400 text-sm mt-3 mb-1 font-bold uppercase",children:"Post Request period"}),Object(w.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 my-1 gap-2",children:[Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({post_request_start:t.target.value}),e.setFormError(null),e.isDateRangeValid("POST_REQUEST","START",t.target.value)},error:null!==this.state.formError&&"post_request_start"===this.state.formError.element?this.state.formError.msg:"",value:this.state.post_request_start,type:"date",label:"Start date",placeholder:"Post request start date",name:"post_request_start",className:"mb-1"}),Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({post_request_end:t.target.value}),e.setFormError(null),e.isDateRangeValid("POST_REQUEST","END",t.target.value)},error:null!==this.state.formError&&"post_request_end"===this.state.formError.element?this.state.formError.msg:"",value:this.state.post_request_end,type:"date",label:"End date",placeholder:"Post request end date",name:"post_request_end",className:"mb-1"})]})]}),Object(w.jsxs)("div",{className:"w-full mb-2",children:[Object(w.jsx)("h6",{className:"text-blueGray-400 text-sm mt-3 mb-1 font-bold uppercase",children:"Transfer Request period"}),Object(w.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 my-1 gap-2",children:[Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({transfer_request_start:t.target.value}),e.setFormError(null),e.isDateRangeValid("TRANSFER_REQUEST","START",t.target.value)},error:null!==this.state.formError&&"transfer_request_start"===this.state.formError.element?this.state.formError.msg:"",value:this.state.transfer_request_start,type:"date",label:"Start date",placeholder:"Transfer request start date",name:"transfer_request_start",className:"mb-1"}),Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({transfer_request_end:t.target.value}),e.setFormError(null),e.isDateRangeValid("TRANSFER_REQUEST","END",t.target.value)},error:null!==this.state.formError&&"transfer_request_end"===this.state.formError.element?this.state.formError.msg:"",value:this.state.transfer_request_end,type:"date",label:"End date",placeholder:"Transfer request end date",name:"transfer_request_end",className:"mb-1"})]})]}),Object(w.jsxs)("div",{className:"w-full mb-2",children:[Object(w.jsx)("h6",{className:"text-blueGray-400 text-sm mt-3 mb-1 font-bold uppercase",children:"Teacher Recruitment period"}),Object(w.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 my-1 gap-2",children:[Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({teacher_recruitment_start:t.target.value}),e.setFormError(null),e.isDateRangeValid("TEACHER_RECRUITMENT","START",t.target.value)},error:null!==this.state.formError&&"teacher_recruitment_start"===this.state.formError.element?this.state.formError.msg:"",value:this.state.teacher_recruitment_start,type:"date",label:"Start date",placeholder:"Teacher recruitment start date",name:"teacher_recruitment_start",className:"mb-1"}),Object(w.jsx)(I.a,{disabled:this.state.loadingRequest.length>0,onChange:function(t){e.setState({teacher_recruitment_end:t.target.value}),e.setFormError(null),e.isDateRangeValid("TEACHER_RECRUITMENT","END",t.target.value)},error:null!==this.state.formError&&"teacher_recruitment_end"===this.state.formError.element?this.state.formError.msg:"",value:this.state.teacher_recruitment_end,type:"date",label:"End date",placeholder:"Teacher recruitment end date",name:"teacher_recruitment_end",className:"mb-1"})]})]})]}),Object(w.jsxs)("div",{className:"flex justify-between items-center gap-2",children:[Object(w.jsx)(S.a,{disabled:this.state.loadingRequest.length>0,type:"button",className:"btn bg-gray-500 hover:bg-gray-700 text-white",onClick:function(){1===e.state.step?(e.setState({sessionTitle:e.state.thisSession?e.state.thisSession.academic_year_name:"",sessionPeriod:e.state.thisSession?e.state.thisSession.academic_year_description:"",formError:null}),e.state.thisSession&&e.setPlansForUpdate(e.state.thisSession.events),!e.state.thisSession&&e.setState({academic_year_start:"",post_request_start:"",transfer_request_start:"",teacher_recruitment_start:"",academic_year_end:"",post_request_end:"",transfer_request_end:"",teacher_recruitment_end:""})):e.setState({step:1})},theme:1===this.state.step?"danger-light":"default",children:1===this.state.step?"Cancel":"Back"}),1===this.state.step&&Object(w.jsx)(S.a,{disabled:this.state.loadingRequest.length>0,loading:this.state.loadingRequest.length>0,type:"button",onClick:function(){return e.handleNext()},theme:"accent",children:"Next"}),2===this.state.step&&Object(w.jsx)(S.a,{disabled:this.state.loadingRequest.length>0,loading:this.state.loadingRequest.length>0,type:"submit",theme:"accent",children:this.state.loadingRequest.length>0?"Please wait...":null!==this.state.thisSession?"Update":"Create"})]})]})})]}),null!==this.state.activateSession&&Object(w.jsx)(P.b,{modalType:P.a.OTHER,confirmFun:function(){return e.handleSessionActivation(e.state.activateSession)},setModalAction:function(t){return!t&&e.setActivateSession(null)},description:"Do you really want to activate this session? This process is very sensitive!"})]})}}]),a}(_.Component),L=h.a.memo(Object(j.b)((function(e){return{auth:e.auth,academicCalender:e.academicCalender}}),{FC_GetAllAcademicCalender:function(e){return e(!0,"",null),function(){var t=Object(r.a)(d.a.mark((function t(a){var s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Object(x.a)(),t.next=4,u.a.get("".concat(g.c,"/academiccalendars/"));case 4:s=t.sent,console.log("================FC_GetAllAcademicCalender===================="),console.log({GET_ALL_ACADEMIC_CALENDERS:s.data}),console.log("================FC_GetAllAcademicCalender===================="),r=[],200===s.status&&null!==s.data&&s.data.length>0&&(r=s.data),a({type:v.a.GET_ALL_ACADEMIC_CALENDER,payload:r}),e(!1,"",r),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.error({error:Object(E.a)(t.t0)}),e(!1,Object(E.a)(t.t0),null);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},FC_CreateAcademicCalendar:function(e){return{type:v.a.CREATE_ACADEMIC_CALENDER,payload:e}},FC_UpdateAcademicCalendar:y,FC_DeleteAcademicCalendar:function(e){return{type:v.a.DELETE_ACADEMIC_CALENDER,payload:e}},FC_AcademicCalenderActivation:function(e){return{type:v.a.ACADEMIC_CALENDER_ACTIVATION,payload:e}}})(V))}}]);
//# sourceMappingURL=30.0ee1eb0b.chunk.js.map