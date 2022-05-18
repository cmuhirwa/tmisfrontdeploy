(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[14],{104:function(e,t,r){"use strict";r(2);var s=r(49),a=r(1);t.a=function(e){var t=e.onChange,r=e.value,n=e.error,c=e.label,o=e.placeholder,l=e.disabled,i=void 0!==l&&l,d=e.name,u=e.Input_className,h=void 0===u?"":u,b=e.Label_className,j=void 0===b?"":b,m=e.InputContainer_className,f=void 0===m?"":m,p=e.MainContainer_className,x=void 0===p?"":p,g=e.size,O=void 0===g?"md":g,v=e.data;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"w-full my-2 ".concat(x),children:[Object(a.jsx)("label",{htmlFor:"login-form-email",className:"text-primary-900 dark:text-primary-100 ".concat(j),children:c}),Object(a.jsxs)("div",{className:"rounded relative ".concat(f),children:[Object(a.jsx)("select",{name:d,placeholder:o,onChange:t,className:"\n                     w-full text-lg rounded border-2 \n                     ".concat(Object(s.a)(O),"\n                     ").concat(""!==n?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900 ","\n                     px-3 ").concat(h),value:r,disabled:i,children:v.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.title},t)}))}),""!==n&&Object(a.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:n})]})]})})}},106:function(e,t,r){"use strict";r(2);var s=r(49),a=r(1);t.a=function(e){var t=e.onChange,r=e.value,n=e.error,c=e.label,o=e.placeholder,l=e.disabled,i=void 0!==l&&l,d=e.name,u=e.Input_className,h=void 0===u?"":u,b=e.Label_className,j=void 0===b?"":b,m=e.InputContainer_className,f=void 0===m?"":m,p=e.MainContainer_className,x=void 0===p?"":p,g=e.labelColor,O=void 0===g?"text-primary-900 dark:text-primary-100":g,v=e.size,_=void 0===v?"md":v;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"w-full my-2 ".concat(x),children:[""!==c&&Object(a.jsx)("label",{htmlFor:"any-form",className:"".concat(O," ").concat(j),children:c}),Object(a.jsxs)("div",{className:"rounded relative ".concat(f),children:[Object(a.jsx)("textarea",{name:d,placeholder:o,onChange:t,className:"\n                w-full text-lg rounded border-2 \n                ".concat(Object(s.a)(_),"\n                ").concat(""!==n?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900 ","\n                px-3 ").concat(h),value:r,disabled:i}),""!==n&&Object(a.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:n})]})]})})}},110:function(e,t,r){"use strict";var s=r(50),a=r(20),n=r(2),c=r(11),o=r(18),l=r(48),i=r(1);t.a=function(e){var t=e.loading,r=(e.id,e.title),d=e.close,u=e.data,h=e.click,b=Object(n.useState)(""),j=Object(a.a)(b,2),m=j[0],f=j[1],p=Object(o.f)(u,m,Object(s.a)({},r,!0));return Object(i.jsxs)("div",{className:" bg-gray-100 shadow-lg border-gray-500 border-2 h-64 rounded-md flex flex-col",children:[Object(i.jsxs)("div",{className:"p-1 bg-white rounded flex items-center",children:[Object(i.jsx)("label",{htmlFor:"search-input-data",children:Object(i.jsx)(c.D,{className:"text-2xl"})}),Object(i.jsx)("input",{type:"search",className:"py-1 px-1 flex-1",placeholder:"Search",value:m,id:"search-input-data",onChange:function(e){return f(e.target.value)}}),!1===t&&Object(i.jsx)("button",{onClick:function(){return d()},className:"px-2 py-0.5 rounded text-sm ml-3 bg-red-200 text-red-800",children:"Cancel"})]}),Object(i.jsx)("div",{className:"flex-1 p-2 overflow-y-auto border-t ",children:!0===t?Object(i.jsxs)("div",{className:"my-4",children:[Object(i.jsx)("div",{className:"mx-auto text-center",children:Object(i.jsx)(l.a,{})}),Object(i.jsx)("p",{className:"text-center text-gray-500",children:"Loading"})]}):Object(i.jsx)(n.Fragment,{children:0===p.length?Object(i.jsx)("section",{className:"p-4 text-center",children:Object(i.jsx)("h2",{className:"text-lg text-gray-400",children:"No results found"})}):p.map((function(e,t){return Object(i.jsx)("button",{onClick:function(){return h(e)},className:"block p-1 border-b w-full text-left border-gray-300 hover:text-white hover:bg-blue-600",type:"button",children:e[r]},t)}))})})]})}},111:function(e,t,r){"use strict";r(2);var s=r(1);t.a=function(e){var t=function(){for(var t=[],r=0;r<e.cols;r++)t.push(r);return t.map((function(e){return Object(s.jsx)("td",{className:"p-3 text-center whitespace-nowrap",children:Object(s.jsx)("div",{className:"w-full h-4 rounded bg-gray-200 animate__animated animate__pulse animate__delay-5s animate__infinite"})},e)}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},228),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},22648),Object(s.jsx)("tr",{className:"border-b border-gray-200",children:t()},229768)]})}},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return j})),r.d(t,"f",(function(){return m})),r.d(t,"b",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return g})),r.d(t,"g",(function(){return O})),r.d(t,"h",(function(){return v}));var s=r(6),a=r(3),n=r.n(a),c=r(5),o=r.n(c),l=r(12),i=r(13),d=r(8),u=r(9),h=r(18),b=function(e){return e(!0,null,""),function(){var t=Object(s.a)(n.a.mark((function t(r){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Object(d.a)(),t.next=4,o.a.get("".concat(i.c,"/teachertransfers/requesteddde"));case 4:s=t.sent,console.log("===================================="),console.log({getAllTransfers:s}),console.log("===================================="),r({type:l.a.GET_ALL_TRANSFER,payload:s.data}),e(!1,s.data,""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e(!1,null,Object(u.a)(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return e(!0,null,""),function(){var t=Object(s.a)(n.a.mark((function t(r){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Object(d.a)(),t.next=4,o.a.get("".concat(i.c,"/teachertransfers/teacher"));case 4:s=t.sent,console.log("===================================="),console.log({getAllTransfers:s}),console.log("===================================="),r({type:l.a.GET_MY_TRANSFER,payload:s.data}),e(!1,s.data,""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e(!1,null,Object(u.a)(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return e(!0,""),function(){var t=Object(s.a)(n.a.mark((function t(r){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Object(d.a)(),t.next=4,o.a.get("".concat(i.c,"/teachertransfers/transferreasons"));case 4:s=t.sent,console.log("=================FC_GetTransferReasons==================="),console.log({FC_GetTransferReasons:s}),console.log("=================FC_GetTransferReasons==================="),r({type:l.a.GET_TRANSFER_REASON,payload:s.data}),e(!1,""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e(!1,Object(u.a)(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){var e=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0,null,""),e.prev=1,Object(d.a)(),e.next=5,o.a.get("".concat(i.c,"/district"));case 5:r=e.sent,console.log("=================FC_GetDistricts==================="),console.log({FC_GetDistricts:r}),console.log("=================FC_GetDistricts==================="),t(!1,r.data,""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),t(!1,null,Object(u.a)(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var s,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0,s=0,null,""),e.prev=2,Object(d.a)(),(a=new FormData).append("teacher_supporting_document",t),e.next=8,o.a.post("".concat(i.c,"/teachertransfers/uploadSupportingDocument"),a,{onUploadProgress:function(e){s=+(null===e||void 0===e?void 0:e.loaded)/+e.total*100,r(!0,s,null,"")}});case 8:c=e.sent,console.log("Uploaded document: ",c.data),r(!1,s,c.data,""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0),r(!1,s,"",Object(u.a)(e.t0));case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0,null,""),e.prev=1,Object(d.a)(),e.next=5,o.a.get("".concat(i.c,"/teachertransfer/getschoolsperdistrict/").concat(t));case 5:s=e.sent,console.log("=================FC_GetSchoolByDistrict==================="),console.log({FC_GetSchoolByDistrict:s}),console.log("=================FC_GetSchoolByDistrict==================="),r(!1,s.data,""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),r(!1,null,Object(u.a)(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(n.a.mark((function e(t,r,s,a){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0,null,""),e.prev=1,Object(d.a)(),e.next=5,o.a.post("".concat(i.c,"/teachertransfer/getschoolsperdistrict/").concat(t),{position_code:r,qualification_id:s});case 5:c=e.sent,console.log("=================FC_GetSchoolByDistrict_2==================="),console.log({FC_GetSchoolByDistrict_2:c}),console.log("=================FC_GetSchoolByDistrict_2==================="),a(!1,c.data,""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),a(!1,null,Object(u.a)(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,r,s,a){return e.apply(this,arguments)}}(),O=function(e,t,r,a,c){c(!0,"");var b="";return function(){var j=Object(s.a)(n.a.mark((function s(j){var m,f;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c(!0,""),s.next=3,p(r,(function(e,t,r,s){c(e,""),console.log("==================&&&&&&&&&&&&&=================="),console.log({data:r}),console.log("==================&&&&&&&&&&&&&=================="),!e&&Object(h.e)(s)&&null!==r?b=r:e||Object(h.e)(s)||c(!1,s)}));case 3:if(Object(h.e)(b)){s.next=23;break}return c(!0,""),m={teacher_transfer_id:e,outgoing_status:a,outgoing_dde_comment:t,mayor_letter:b},console.log("==================*********************=================="),console.log({doc_title:b}),console.log("==================*********************=================="),s.prev=9,Object(d.a)(),s.next=13,o.a.post("".concat(i.c,"/teachertransfers/outgoing"),m);case 13:f=s.sent,console.log("Uploaded document: ",f.data),j({type:l.a.RESPOND_TO_LEAVE,payload:m}),c(!1,""),s.next=23;break;case 19:s.prev=19,s.t0=s.catch(9),console.error(s.t0),c(!1,Object(u.a)(s.t0));case 23:case"end":return s.stop()}}),s,null,[[9,19]])})));return function(e){return j.apply(this,arguments)}}()},v=function(e,t,r,a,c){return c(!1,""),function(){var h=Object(s.a)(n.a.mark((function s(h){var b,j;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c(!0,""),b={teacher_transfer_id:e,requested_status:r,approved_school_id:t,requested_comment:a},s.prev=2,Object(d.a)(),s.next=6,o.a.post("".concat(i.c,"/teachertransfers/incoming"),b);case 6:j=s.sent,console.log("FC_RespondTransfer document: ",j.data),h({type:l.a.RESPOND_TO_TRANSFER,payload:b}),c(!1,""),s.next=16;break;case 12:s.prev=12,s.t0=s.catch(2),console.error(s.t0),c(!1,Object(u.a)(s.t0));case 16:case"end":return s.stop()}}),s,null,[[2,12]])})));return function(e){return h.apply(this,arguments)}}()}},118:function(e,t,r){"use strict";r(2);var s=r(124),a=r(13),n=r(1);t.a=function(e){var t="uploaded"===e.linkFor?"".concat(a.d,"/").concat(e.first_id):"".concat(a.c,"/generateletter/").concat(e.linkFor,"/").concat(e.first_id,"/").concat(e.last_id);return Object(n.jsxs)("a",{href:t,className:"py-2 px-4 text-md font-bold rounded bg-primary-800 hover:bg-opacity-90 text-white flex items-center gap-2",target:"_blank",rel:"noreferrer",children:[Object(n.jsx)(s.a,{}),Object(n.jsx)("span",{children:e.title})]})}},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(2);var s,a,n=r(49),c=r(1);!function(e){e.PDF="PDF",e.IMAGES="IMAGES",e.ANY="ANY"}(s||(s={})),function(e){e.ALL="",e.IMAGES="image/*",e.EXCEL=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",e.PDF="application/pdf"}(a||(a={}));t.b=function(e){var t=e.onChange,r=e.error,s=e.label,o=e.multiple,l=e.disabled,i=void 0!==l&&l,d=e.accept,u=void 0===d?a.ALL:d,h=e.name,b=e.type,j=e.Input_className,m=void 0===j?"":j,f=e.Label_className,p=void 0===f?"":f,x=e.InputContainer_className,g=void 0===x?"":x,O=e.MainContainer_className,v=void 0===O?"":O,_=e.size,N=void 0===_?"md":_,y=e.labelColor,S=void 0===y?"text-primary-900 dark:text-primary-100":y;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"w-full my-2 ".concat(v),children:[""!==s&&Object(c.jsx)("label",{htmlFor:"any-form",className:"".concat(S," ").concat(p),children:s}),Object(c.jsxs)("div",{className:"rounded relative ".concat(g),children:[Object(c.jsx)("input",{name:h,multiple:o,accept:u,type:b,onChange:t,className:"\n                w-full text-lg rounded border-2 \n                ".concat(Object(n.a)(N),"\n                ").concat(""!==r?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900 ","\n                px-3 ").concat(m),disabled:i}),""!==r&&Object(c.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:r})]})]})})}},158:function(e,t,r){"use strict";r.r(t),r.d(t,"RequestTransfer",(function(){return L}));var s=r(26),a=r(27),n=r(28),c=r(29),o=r(2),l=r(124),i=r(16),d=r(115),u=r(24),h=r(25),b=r(30),j=r(39),m=r(31),f=r(48),p=r(111),x=r(18),g=r(35),O=r(6),v=r(3),_=r.n(v),N=r(5),y=r.n(N),S=r(125),R=r(104),T=r(106),k=r(110),F=r(13),w=r(8),C=r(1),q=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).componentDidMount=function(){null===a.props.transferReasons?a.props.FC_GetTransferReasons((function(e,t){a.setState({loading:e}),e||Object(x.e)(t)?a.setState({loading:e}):a.setState({error:{target:"main-error",msg:t}})})):a.setState({loading:!1}),Object(d.b)((function(e,t,r){a.setState({loading:e}),e||Object(x.e)(r)?!e&&t&&a.setState({loading:e,districts:t}):a.setState({error:{target:"main-error",msg:r}})}))},a.handleSchools=function(e){Object(d.d)(e,(function(e,t,r){a.setState({loadingSchools:e}),e||Object(x.e)(r)?!e&&t&&a.setState({loadingSchools:e,schools:t}):a.setState({error:{target:"main-error",msg:r}})}))},a.getSchoolsForm=function(){var e=[{title:"All Schools",value:""}];return a.state.schools.forEach((function(t){a.props.auth.school&&a.props.auth.school.school_code!==t.school_code&&e.push({title:t.school_name,value:t.school_code})})),e},a.onFileChange=function(e){if(a.setState({error:null}),null===e.target.files)return a.setState({selectedFile:null,error:{msg:"Please select a valid file",target:"approved_doc"}});var t=e.target.files[0];return"application/pdf"!==t.type?a.setState({selectedFile:null,error:{msg:"The system accept pdf only",target:"approved_doc"}}):t.size<=0?a.setState({selectedFile:null,error:{msg:"Invalid file, Please choose a real file",target:"approved_doc"}}):void a.setState({selectedFile:t,error:null})},a.onSubmitTeacherTransferReq=Object(O.a)(_.a.mark((function e(){var t,r,s,n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.auth.school,r=a.state.selectedSchool,s=a.state.tranferReason,null!==t&&void 0!==t&&t.school_code){e.next=6;break}return a.setState({error:{target:"school-code",msg:"Required!"}}),e.abrupt("return");case 6:if(null!==a.state.thisReason){e.next=9;break}return a.setState({error:{target:"reason_id",msg:"Required!"}}),e.abrupt("return");case 9:if(""!==s){e.next=12;break}return a.setState({error:{target:"comment",msg:"Required!"}}),e.abrupt("return");case 12:if(null!==a.state.selectedFile){e.next=14;break}return e.abrupt("return",a.setState({error:{target:"approved_doc",msg:"Required!"},loadingRequest:!1}));case 14:return n="",e.next=17,Object(d.i)(a.state.selectedFile,(function(e,t,r,s){a.setState({loadingRequest:e}),e&&a.setState({upload_percentage:t}),!e&&Object(x.e)(s)&&null!==r?n=r:e||Object(x.e)(s)||a.setState({error:{target:"main-error",msg:s},loadingRequest:!1})}));case 17:if(console.log("=================doc_title==================="),console.log({doc_title:n}),console.log("=================doc_title==================="),Object(x.e)(n)){e.next=39;break}return c={teacher_supporting_document:n,school_from_id:t.school_code,requested_school_id:r,teacher_comment:s,teacher_reason_id:a.state.thisReason.transfer_reason_id},e.prev=22,Object(w.a)(),e.next=26,y.a.post("".concat(F.c,"/teachertransfers/request"),c);case 26:if(200!==e.sent.status){e.next=32;break}return a.props.FC_GetMyTransfers((function(e,t,r){a.setState({loadingRequest:e}),!e&&t?a.setState({loadingRequest:e}):e||Object(x.e)(r)||a.setState({error:{target:"main-error",msg:r}})})),a.setState({error:{target:"main-success",msg:"Transfer Request Send Successfully!"}}),setTimeout((function(){a.setState({error:null,thisReason:null,selectedDistrict:"",selectedSchool:"",schools:[],tranferReason:""}),a.props.setIsRequestFormOn(!1)}),2e3),e.abrupt("return");case 32:e.next=39;break;case 34:return e.prev=34,e.t0=e.catch(22),console.error({error:e.t0}),a.setState({error:{target:"main-error",msg:"Something went Wrong, Transfer Request Failed!"}}),e.abrupt("return");case 39:case"end":return e.stop()}}),e,null,[[22,34]])}))),a.state={loading:!0,error:null,selectedFile:null,selectReason:!1,thisReason:null,districts:null,selectedDistrict:"",schools:[],loadingSchools:!1,tranferReason:"",selectedSchool:"",loadingRequest:!1,upload_percentage:0},a}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return this.state.loading||null===this.state.districts?Object(C.jsx)("div",{className:"p-8 text-center",children:Object(C.jsx)("div",{className:"mx-auto",children:Object(C.jsx)(f.a,{})})}):Object(C.jsxs)(b.a,{className:"animate__animated animate__zoomIn animate__faster",children:[this.state.error&&"main-success"===this.state.error.target&&Object(C.jsx)(u.a,{theme:"success",children:this.state.error.msg}),this.state.error&&"main-error"===this.state.error.target&&Object(C.jsx)(u.a,{theme:"danger",children:this.state.error.msg}),Object(C.jsxs)("div",{className:"py-2 flex items-center",children:[Object(C.jsx)("div",{className:"flex-1",children:Object(C.jsx)(j.a,{children:"Staff transfer request form"})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(h.a,{onClick:function(){return e.props.setIsRequestFormOn(!1)},theme:"default",children:"Close"})})]}),Object(C.jsxs)("div",{className:"relative p-6 flex-auto",children:[Object(C.jsxs)("div",{className:"flex gap-6",children:[Object(C.jsx)(R.a,{data:[{title:"All District",value:""}].concat(Object(g.a)(this.state.districts.map((function(e){return{title:e.district_name,value:e.district_code}})))),error:"",name:"select_district",onChange:function(t){e.setState({selectedDistrict:t.target.value}),e.handleSchools(t.target.value)},label:"District",placeholder:"Select",value:this.state.selectedDistrict,size:"md"}),Object(C.jsx)(R.a,{data:this.getSchoolsForm(),error:this.state.error&&"school-code"===this.state.error.target?this.state.error.msg:"",name:"select_school",onChange:function(t){return e.setState({selectedSchool:t.target.value})},label:"Schools",placeholder:"Select",value:this.state.selectedSchool,size:"md"})]}),Object(C.jsx)("div",{className:"w-full py-1",children:Object(C.jsxs)("div",{className:"w-full my-2",children:[Object(C.jsx)("label",{htmlFor:"login-form-email",className:"text-primary-900 dark:text-primary-100",children:"Transfer reasons"}),this.state.selectReason?Object(C.jsx)(k.a,{title:"reason_name",id:"transfer_reason_id",data:this.props.transferReasons,loading:null===this.props.transferReasons,click:function(t){return e.setState({selectReason:!1,thisReason:t})},close:function(){return e.setState({selectReason:!0})}}):Object(C.jsxs)("div",{className:"rounded relative",children:[Object(C.jsx)("div",{className:"w-full text-lg rounded border-2 p-2 px-4 text-md ".concat(!this.state.thisReason&&"text-gray-500"," ").concat(this.props.transferReasons?"cursor-pointer":"cursor-wait"," ").concat(this.state.error&&"reason_id"===this.state.error.target?"border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30":"border-primary-800 dark:text-white bg-white dark:bg-primary-900"," px-3"),onClick:function(){return e.props.transferReasons&&e.setState({selectReason:!0})},children:this.state.thisReason?this.state.thisReason.reason_name:"Select transfer reason"}),this.state.error&&"reason_id"===this.state.error.target&&Object(C.jsx)("p",{className:"text-sm text-red-600 dark:text-red-500",children:this.state.error.msg})]})]})}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)(T.a,{label:"Transfer comment",value:this.state.tranferReason,name:"transfer_comment",onChange:function(t){return e.setState({tranferReason:t.target.value})},placeholder:"Write reason in summary",size:"lg",error:this.state.error&&"comment"===this.state.error.target?this.state.error.msg:""}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(S.b,{disabled:this.state.loadingRequest,label:"Supporting document",name:"approved_doc",className:"p-2",onChange:function(t){return e.onFileChange(t)},error:this.state.error&&"approved_doc"===this.state.error.target?this.state.error.msg:"",type:"file",accept:S.a.PDF})})]})]}),Object(C.jsxs)("div",{className:"flex items-center justify-end py-3 gap-2 border-t border-solid border-blueGray-200 rounded-b",children:[Object(C.jsx)(h.a,{theme:"default",onClick:function(){return e.setState({error:null,thisReason:null,selectedDistrict:"",selectedSchool:"",schools:[],tranferReason:""})},loading:this.state.loadingRequest,children:"Cancel"}),Object(C.jsx)(h.a,{onClick:function(){return e.onSubmitTeacherTransferReq()},loading:this.state.loadingRequest,children:"Save"})]})]})}}]),r}(o.Component),D=Object(i.b)((function(e){var t=e.transfer;return{auth:e.auth,transferReasons:t.transferReasons}}),{FC_GetTransferReasons:d.f,FC_GetMyTransfers:d.c})(q),E=r(20),I=r(42),G=r(11),P=r(118),A=Object(i.b)((function(e){return{auth:e.auth}}),{FC_GetMyTransfers:d.c})((function(e){var t=Object(o.useState)(!1),r=Object(E.a)(t,2),s=(r[0],r[1]),a=Object(o.useState)(null),n=Object(E.a)(a,2),c=n[0],l=n[1],i=function(e){return null===e||"PENDING"===e?Object(C.jsx)("span",{className:"text-accent-800",children:Object(C.jsx)(G.w,{size:30,className:"fill-current"})}):"APPROVED"===e?Object(C.jsx)("span",{className:"text-primary-800",children:Object(C.jsx)(I.a,{size:30,className:"fill-current"})}):Object(C.jsx)("span",{className:"text-red-800",children:Object(C.jsx)(I.b,{size:30,className:"fill-current"})})};return Object(C.jsxs)(C.Fragment,{children:[c&&"main-success"===c.target&&Object(C.jsx)(u.a,{theme:"success",children:c.msg}),c&&"main-error"===c.target&&Object(C.jsx)(u.a,{theme:"danger",children:c.msg}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("div",{className:"py-2 flex items-center",children:[Object(C.jsx)("div",{className:"flex-1",children:Object(C.jsx)(j.a,{children:"Request Transfer Progress"})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(h.a,{onClick:function(){return e.setTransferId("")},theme:"default",children:"Close"})})]}),Object(C.jsx)("h2",{className:"opacity-60 -mt-1 font-bold text-accent-900 dark:text-accent-800",children:e.selectedTransfer.requested_school_name}),Object(C.jsx)("div",{className:"mt-4",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{className:"flex text-base text-body-color mb-4 ",children:Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)("div",{children:Object(C.jsx)("span",{className:"text-primary-800",children:Object(C.jsx)(I.a,{size:30,className:"fill-current"})})}),Object(C.jsxs)("div",{className:"ml-2",children:[Object(C.jsxs)("span",{className:"",children:["Requested school:"," ",e.selectedTransfer.requested_school_name]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{className:"",children:["On:"," ",Object(x.a)(e.selectedTransfer.teacher_requested_transfer_date)]})," "]})]})}),Object(C.jsx)("li",{className:"flex text-base text-body-color mb-4",children:Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)("div",{children:i(e.selectedTransfer.requested_status)}),"PENDING"!==e.selectedTransfer.requested_status&&Object(C.jsxs)("div",{className:"ml-2",children:[Object(C.jsxs)("span",{className:"",children:["Approved school:"," ",e.selectedTransfer.approved_school_name]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{className:"",children:["On:"," ",Object(x.a)(e.selectedTransfer.incoming_decision_date)]}),Object(C.jsx)("br",{})]})]})}),"PENDING"!==e.selectedTransfer.requested_status&&"REJECTED"!==e.selectedTransfer.requested_status&&null!==e.selectedTransfer.requested_status&&Object(C.jsxs)(o.Fragment,{children:[Object(C.jsx)("li",{className:"flex text-base text-body-color mb-4",children:Object(C.jsxs)("div",{className:"flex",children:[null===e.selectedTransfer.outgoing_status&&Object(C.jsxs)("div",{children:[" ",Object(C.jsx)(h.a,{onClick:function(t){return r=e.selectedTransfer.teacher_transfer_id,Object(w.a)(),void y.a.post("".concat(F.c,"/teachertransfers/leaving"),{teacher_transfer_id:r}).then((function(e){return e.data})).then((function(t){console.log("===================================="),console.log({leavingRequestHandler:t}),console.log("===================================="),e.FC_GetMyTransfers((function(e,t,r){s(e),!e&&t?s(e):e||Object(x.e)(r)||l({target:"main-error",msg:r})})),e.FC_GetMyTransfers((function(e,t,r){s(e),!e&&t?s(e):e||Object(x.e)(r)||l({target:"main-error",msg:r})})),l({target:"main-success",msg:"Leaving Request Send Successfully!"})})).catch((function(e){l({target:"main-error",msg:"Something went Wrong, Sending Request Failed!"})}));var r},children:"Send Leave Request"})]}),null!==e.selectedTransfer.outgoing_status&&Object(C.jsxs)(o.Fragment,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("span",{className:"text-primary-800",children:Object(C.jsx)(I.a,{size:30,className:"fill-current"})})}),Object(C.jsxs)("div",{className:"ml-2",children:[Object(C.jsxs)("span",{className:"",children:["Requested to leave:"," ",e.auth.school?e.auth.school.school_name:""]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{className:"",children:["On:"," ",Object(x.a)(e.selectedTransfer.teacher_requested_transfer_date)]})]})]})]})}),Object(C.jsx)("li",{className:"flex text-base text-body-color mb-4"}),e.selectedTransfer.outgoing_status&&Object(C.jsx)("li",{className:"flex text-base text-body-color mb-4",children:Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)("div",{children:i(e.selectedTransfer.outgoing_status)}),Object(C.jsxs)("div",{className:"ml-2",children:["PENDING"!==e.selectedTransfer.outgoing_status&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("span",{className:"",children:["Date:"," ",e.selectedTransfer.outgoing_decision_date]})," ",Object(C.jsx)("br",{})]}),Object(C.jsxs)("span",{className:"capitalize",children:["Leave Request:"," ",e.selectedTransfer.outgoing_status]}),Object(C.jsx)("br",{}),e.auth.user&&"PENDING"!==e.selectedTransfer.outgoing_status&&e.selectedTransfer.mayor_letter&&Object(C.jsx)(P.a,{linkFor:"uploaded",first_id:e.selectedTransfer.mayor_letter,last_id:"",title:"Transfer letter"})]})]})})]})]})})]})]})})),M=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).setIsRequestFormOn=function(e){a.setState({isRequestFormOn:e})},a.setTransferId=function(e){a.setState({transferId:e})},a.componentDidMount=function(){a.props.FC_GetMyTransfers((function(e,t,r){a.setState({loading:e}),!e&&t?a.setState({loading:e}):e||Object(x.e)(r)||a.setState({error:{target:"main-error",msg:r}})}))},a.isSchoolRequestedAllowed=function(){return!(a.props.myTransfers&&a.props.myTransfers.find((function(e){return"APPROVED"!==e.outgoing_status})))},a.state={loading:!0,loadingRequest:!1,error:null,inputSearch:"",transferId:"",isRequestFormOn:!1},a}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return this.state.loading?Object(C.jsx)("div",{className:"p-8 text-center",children:Object(C.jsx)("div",{className:"mx-auto",children:Object(C.jsx)(f.a,{})})}):this.state.isRequestFormOn?Object(C.jsx)(D,{setIsRequestFormOn:this.setIsRequestFormOn}):this.props.myTransfers&&this.props.myTransfers.find((function(t){return t.teacher_transfer_id===e.state.transferId}))?Object(C.jsx)(A,{selectedTransfer:this.props.myTransfers.find((function(t){return t.teacher_transfer_id===e.state.transferId})),setTransferId:this.setTransferId}):Object(C.jsxs)(C.Fragment,{children:[this.state.error&&"main-success"===this.state.error.target&&Object(C.jsx)(u.a,{theme:"success",children:this.state.error.msg}),this.state.error&&"main-error"===this.state.error.target&&Object(C.jsx)(u.a,{theme:"danger",children:this.state.error.msg}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("section",{className:"flex flex-col sm:flex-row justify-between",children:[Object(C.jsx)("div",{className:"px-3",children:Object(C.jsx)(j.a,{size:"lg",children:"Transfer request(s)"})}),this.isSchoolRequestedAllowed()&&Object(C.jsx)(h.a,{theme:"primary-light",onClick:function(){return e.setIsRequestFormOn(!0)},children:"Request Transfer"})]}),Object(C.jsx)("div",{className:"border border-t mt-2 mb-1 flex items-center flex-col-reverse sm:flex-row pl-3 pr-2 rounded",children:Object(C.jsx)("div",{className:"w-full sm:flex-1 pr-2",children:Object(C.jsx)(m.a,{error:"",label:"Search",name:"",type:"search",onChange:function(t){return e.setState({inputSearch:t.target.value})},placeholder:"Search by name, reason, date, status",value:this.state.inputSearch,size:"sm",disabled:null===this.props.myTransfers||0===this.props.myTransfers.length})})}),Object(C.jsx)("div",{className:"my-3 w-full overflow-x-auto",children:Object(C.jsxs)("table",{className:"w-full text-left table-auto",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{className:"p-2",children:"#"}),Object(C.jsx)("th",{className:"p-2",children:"Requested school"}),Object(C.jsx)("th",{className:"p-2",children:"Reason"}),Object(C.jsx)("th",{className:"p-2",children:"Date"}),Object(C.jsx)("th",{className:"p-2",children:"Status"}),Object(C.jsx)("th",{className:"p-2"})]})}),Object(C.jsx)("tbody",{children:this.state.loading?Object(C.jsx)(p.a,{cols:6}):null===this.props.myTransfers||this.props.myTransfers.length<=0?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:6,className:"px-2 py-2",children:Object(C.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(C.jsx)(l.b,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(C.jsx)("span",{className:"text-sm font-bold",children:"No result found!"})]})})}):0===Object(x.f)(this.props.myTransfers,this.state.inputSearch).length?Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:6,className:"px-2 py-2",children:Object(C.jsxs)("div",{className:"flex flex-col text-gray-400 items-center justify-center bg-gray-100 rounded py-10",children:[Object(C.jsx)(l.b,{className:"text-8xl text-gray-400 mb-2 animate__animated animate__shakeX"}),Object(C.jsx)("span",{className:"text-sm font-bold",children:"No result found! Please try to search again"})]})})}):Object(x.f)(this.props.myTransfers,this.state.inputSearch).map((function(t,r){return Object(C.jsxs)("tr",{className:"group border-b border-t rounded hover:bg-accent-800 hover:bg-opacity-20 cursor-pointer",onClick:function(){return e.setState({transferId:t.teacher_transfer_id})},children:[Object(C.jsx)("td",{className:"p-2",children:r+1}),Object(C.jsx)("td",{className:"p-2",children:t.requested_school_name}),Object(C.jsx)("td",{className:"p-2",children:t.teacher_reason}),Object(C.jsx)("td",{className:"p-2",children:t.outgoing_decision_date?Object(x.a)(t.outgoing_decision_date):t.incoming_decision_date?Object(x.a)(t.incoming_decision_date):Object(x.a)(t.teacher_requested_transfer_date)}),Object(C.jsx)("td",{className:"p-2",children:(s=t.requested_status,a=t.outgoing_status,"PENDING"===s?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-accent-800 text-black group-hover:bg-opacity-90",children:"Transfer in progress"}):"REJECTED"===s?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-red-700 text-red-50 group-hover:bg-opacity-90",children:"Transfer rejected"}):"APPROVED"===s&&null===a?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-green-700 text-green-50 group-hover:bg-opacity-90",children:"Apply for leave"}):"APPROVED"===s&&"PENDING"===a?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-accent-800 text-black group-hover:bg-opacity-90",children:"Leave in progress"}):"APPROVED"===s&&"APPROVED"===a?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-green-600 text-green-50 group-hover:bg-opacity-90",children:"Transfer Completed"}):"APPROVED"===s&&"REJECTED"===a?Object(C.jsx)("span",{className:"font-bold rounded-full py-1 px-2 text-md bg-red-700 text-red-50 group-hover:bg-opacity-90",children:"Leave rejected"}):Object(C.jsx)(C.Fragment,{}))}),Object(C.jsx)("td",{className:"p-1 text-center",children:Object(C.jsx)(h.a,{theme:"accent-light",onClick:function(){return e.setState({transferId:t.teacher_transfer_id})},children:"View"})})]},r+t.teacher_transfer_id);var s,a}))})]})})]})]})}}]),r}(o.Component),L=Object(i.b)((function(e){return{myTransfers:e.transfer.myTransfers}}),{FC_GetMyTransfers:d.c})(M)}}]);
//# sourceMappingURL=14.9b881339.chunk.js.map