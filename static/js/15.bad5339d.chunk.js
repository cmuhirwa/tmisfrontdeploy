(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[15],{356:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return h}));var n=r(3),a=r(6),i=r(7),s=r.n(i),c=r(13),o=r(12),d=r(8),l=r(11),u=function(e,t){return t(!0,null,""),function(){var r=Object(a.a)(Object(n.a)().mark((function r(a){var i,u;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:c.a.GET_ALL_TRANSFER,payload:[]}),Object(d.a)(),r.next=5,s.a.get("".concat(o.e,"/teachertransfers/requesteddde/").concat(e));case 5:i=r.sent,u=i.data.filter((function(e){return"APPROVED"===e.requested_status})),a({type:c.a.GET_ALL_TRANSFER,payload:u}),t(!1,u,""),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t(!1,null,Object(l.a)(r.t0));case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},p=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(!1,[{district_code:"11",district_name:"Nyarugenge"},{district_code:"12",district_name:"Gasabo"},{district_code:"13",district_name:"Kicukiro"},{district_code:"21",district_name:"Nyanza"},{district_code:"22",district_name:"Gisagara"},{district_code:"23",district_name:"Nyaruguru"},{district_code:"24",district_name:"Huye"},{district_code:"25",district_name:"Nyamagabe"},{district_code:"26",district_name:"Ruhango"},{district_code:"27",district_name:"Muhanga"},{district_code:"28",district_name:"Kamonyi"},{district_code:"31",district_name:"Karongi"},{district_code:"32",district_name:"Rutsiro"},{district_code:"33",district_name:"Rubavu"},{district_code:"34",district_name:"Nyabihu"},{district_code:"35",district_name:"Ngororero"},{district_code:"36",district_name:"Rusizi"},{district_code:"37",district_name:"Nyamasheke"},{district_code:"41",district_name:"Rulindo"},{district_code:"42",district_name:"Gakenke"},{district_code:"43",district_name:"Musanze"},{district_code:"44",district_name:"Burera"},{district_code:"45",district_name:"Gicumbi"},{district_code:"51",district_name:"Rwamagana"},{district_code:"52",district_name:"Nyagatare"},{district_code:"53",district_name:"Gatsibo"},{district_code:"54",district_name:"Kayonza"},{district_code:"55",district_name:"Kirehe"},{district_code:"56",district_name:"Ngoma"},{district_code:"57",district_name:"Bugesera"}],"");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,i,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0,a=0,null,""),e.prev=2,Object(d.a)(),(i=new FormData).append("teacher_supporting_document",t),e.next=8,s.a.post("".concat(o.e,"/teachertransfers/uploadSupportingDocument"),i,{onUploadProgress:function(e){a=+(null===e||void 0===e?void 0:e.loaded)/+e.total*100,r(!0,a,null,"")}});case 8:c=e.sent,console.log("Uploaded document: ",c.data),r(!1,a,c.data,""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0),r(!1,a,"",Object(l.a)(e.t0));case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r){return e.apply(this,arguments)}}(),h=function(e,t,r){r(!0,"");return function(){var i=Object(a.a)(Object(n.a)().mark((function a(i){var u,p;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0,""),console.log("==================doc_title=================="),console.log({doc_title:""}),console.log("==================doc_title=================="),r(!0,""),(u=new FormData).append("teacher_transfer_id",e),u.append("mayor_letter",t),console.log("==================*********************=================="),console.log({doc_title:""}),console.log("==================*********************=================="),n.prev=11,Object(d.a)(),n.next=15,s.a.post("".concat(o.e,"/teachertransfers/outgoing"),u);case 15:p=n.sent,console.log("Uploaded document: ",p.data),i({type:c.a.UPLOAD_SIGNED_DOCUMENT,payload:{teacher_transfer_id:e,mayor_letter:p.data.mayor_letter}}),r(!1,""),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(11),console.error(n.t0),r(!1,Object(l.a)(n.t0));case 25:case"end":return n.stop()}}),a,null,[[11,21]])})));return function(e){return i.apply(this,arguments)}}()}},420:function(e,t,r){"use strict";var n=r(28),a=r(4),i=r(15),s=r(16),c=r(1);t.a=function(e){var t=Object(a.useState)(""),r=Object(n.a)(t,2),o=r[0],d=r[1];return Object(c.jsx)("div",{className:"absolute animate__animated animate__fadeIn animate__faster",style:{width:"500px"},children:Object(c.jsxs)("div",{className:"bg-white rounded shadow-xl mb-10",children:[Object(c.jsxs)("div",{className:"p-3 flex flex-row items-center justify-between gap-3",children:[Object(c.jsx)("input",{type:"search",value:o,onChange:function(e){return d(e.target.value)},placeholder:"Type district name...",className:"bg-white rounded px-3 py-2 border border-primary-800 w-full"}),Object(c.jsx)("div",{onClick:function(){return e.setVisibility(!1)},children:Object(c.jsx)("div",{className:"h-8 w-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center",children:Object(c.jsx)(i.r,{className:"text-red-600 text-2xl cursor-pointer"})})})]}),Object(c.jsx)("div",{className:"max-h-80 overflow-y-auto pb-3",children:0===Object(s.n)(e.districts,o).length?Object(c.jsx)("div",{className:"text-gray-500 font-extrabold text-xl text-center p-4",children:"No data found!"}):Object(s.n)(e.districts,o).map((function(t,r){return Object(c.jsx)("div",{onClick:function(){e.onChange(t.district_code),e.setVisibility(!1)},className:"border-b py-2 px-3 group ".concat(e.selected_district===t.district_code?"bg-blue-200 font-extrabold text-primary-800":""," hover:bg-primary-800 hover:text-white cursor-pointer hover:border-blue-500"),children:Object(c.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[Object(c.jsx)("div",{children:e.selected_district===t.district_code?Object(c.jsx)(i.o,{className:"text-2xl"}):Object(c.jsx)(i.Bb,{className:"text-2xl"})}),Object(c.jsx)("div",{children:t.district_name})]})},r+1)}))})]})})}},451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var i=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},s=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},c=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},o=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(a(e),a(t)))}),[]))},d=t.jsons2arrays=function(e,t){var r=t=t||o(e),n=t;s(t)&&(r=t.map((function(e){return e.label})),n=t.map((function(e){return e.key})));var i=e.map((function(e){return n.map((function(t){return l(t,e)}))}));return[r].concat(a(i))},l=t.getHeaderValue=function(e,t){var r=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,r,n){var a=e[t];if(void 0!==a&&null!==a)return a;n.splice(1)}),t);return void 0===r?e in t?t[e]:"":r},u=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},p=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+r+e+r})).join(t)})).join("\n")},b=t.arrays2csv=function(e,t,r,n){return p(t?[t].concat(a(e)):e,r,n)},h=t.jsons2csv=function(e,t,r,n){return p(d(e,t),r,n)},f=t.string2csv=function(e,t,r,n){return t?t.join(r)+"\n"+e:e.replace(/"/g,'""')},m=t.toCSV=function(e,t,r,n){if(s(e))return h(e,t,r,n);if(c(e))return b(e,t,r,n);if("string"===typeof e)return f(e,t,r);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,r,n,a){var s=m(e,r,n,a),c=i()?"application/csv":"text/csv",o=new Blob([t?"\ufeff":"",s],{type:c}),d="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+s,l=window.URL||window.webkitURL;return"undefined"===typeof l.createObjectURL?d:l.createObjectURL(o)}},452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,a=r(4),i=((n=a)&&n.__esModule,r(78));t.propTypes={data:(0,i.oneOfType)([i.string,i.array,i.func]).isRequired,headers:i.array,target:i.string,separator:i.string,filename:i.string,uFEFF:i.bool,onClick:i.func,asyncOnClick:i.bool,enclosingCharacter:i.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},488:function(e,t,r){e.exports=r(489)},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var n=i(r(490)),a=i(r(491));function i(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=n.default,t.CSVLink=a.default},490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(4),s=(n=i)&&n.__esModule?n:{default:n},c=r(451),o=r(452);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,n=e.separator,a=e.enclosingCharacter,i=e.uFEFF,s=e.target,c=e.specs,o=e.replace;this.state.page=window.open(this.buildURI(t,i,r,n,a),s,c,o)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(s.default.Component);d.defaultProps=Object.assign(o.defaultProps,{target:"_blank"}),d.propTypes=o.propTypes,t.default=d},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(4),c=(n=s)&&n.__esModule?n:{default:n},o=r(451),d=r(452);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.buildURI=r.buildURI.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"buildURI",value:function(){return o.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var r=this.props,n=r.data,a=r.headers,i=r.separator,s=r.filename,c=r.enclosingCharacter,d=r.uFEFF,l=t&&"function"===typeof n?n():n,u=new Blob([d?"\ufeff":"",(0,o.toCSV)(l,a,i,c)]);return window.navigator.msSaveBlob(u,s),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(r){!1!==r?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,n=t.headers,i=t.separator,s=t.filename,o=t.uFEFF,d=t.children,l=(t.onClick,t.asyncOnClick,t.enclosingCharacter),u=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"===typeof window?"":this.buildURI(r,o,n,i,l);return c.default.createElement("a",a({download:s},u,{ref:function(t){return e.link=t},target:"_self",href:p,onClick:this.handleClick()}),d)}}]),t}(c.default.Component);l.defaultProps=d.defaultProps,l.propTypes=d.propTypes,t.default=l},607:function(e,t,r){"use strict";r.r(t),r.d(t,"GetDistrictPostsRequests",(function(){return P})),r.d(t,"PostsRequestsReport",(function(){return L}));var n=r(41),a=r(29),i=r(19),s=r(20),c=r(21),o=r(22),d=r(3),l=r(10),u=r(6),p=r(7),b=r.n(p),h=r(4),f=r(54),m=r(36),_=r(37),j=r(356),x=r(53),y=r(1),v=function(e){var t=e.data.map((function(t,r){return e.rowFormat(t,r)}));return Object(y.jsxs)("div",{children:[e.tableHead,Object(y.jsxs)("table",{className:"striped bordered hover w-full text-sm mt-5",children:[e.thead,Object(y.jsx)("tbody",{children:t})]})]})},O=r(103),g=r.n(O),w=r(134),N=function(e){var t=[e.headerFormat];return Object(y.jsx)("button",{className:"bg-primary-800 hover:bg-blue-500 text-white px-3 py-2 rounded text-center w-max",onClick:function(r){return function(r,n,a){var i=w.a.json_to_sheet(t,{header:e.headers,skipHeader:!0});i["!cols"]=a,w.a.sheet_add_json(i,r,{header:e.headers,skipHeader:!0,origin:-1});var s={Sheets:{data:i},SheetNames:["data"]},c=Object(w.b)(s,{bookType:"xlsx",type:"array"}),o=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.a.saveAs(o,n+".xlsx")}(e.csvData,e.fileName,e.wscols)},children:"Export XLSX"})},k=r(488),D=function(e){return Object(y.jsx)(k.CSVLink,{headers:e.csvHeaders,data:e.csvData,filename:e.fileName,children:Object(y.jsx)("button",{className:"bg-accent-900 text-white rounded px-3 py-2 text-center w-max",type:"button",title:"Export excel CSV",children:"Export CSV"})})},S=r(24),q=r(12),C=r(5),R=r(8),E=r(16),T=r(420),P=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t,r,n){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0,null),e.prev=1,Object(R.a)(),e.next=5,b.a.get("".concat(q.e,"/districtdistribution/peracademic/").concat(t,"/").concat(r));case 5:a=e.sent,console.log("District Requests: ",a.data),n(!1,a.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),n(!1,null),console.log("bb err: ",Object(l.a)({},e.t0)),console.log("bb err: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r,n){return e.apply(this,arguments)}}(),M=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var n,s,c;return Object(i.a)(this,r),(c=t.call(this,e)).GetTotalHTrequests=function(){var e=0;if(null!==c.state.data){var t,r=Object(a.a)(c.state.data.academic_distributed);try{for(r.s();!(t=r.n()).done;){var n=t.value;e+=parseInt(n.head_teacher_post_request)}}catch(i){r.e(i)}finally{r.f()}return e.toString()}return"Loading..."},c.GetTotalDDEDistribution=function(){var e=0;if(null!==c.state.data){var t,r=Object(a.a)(c.state.data.academic_distributed);try{for(r.s();!(t=r.n()).done;){var n=t.value;e+=parseInt(null===n.dde_post_distribution?"0":n.dde_post_distribution)}}catch(i){r.e(i)}finally{r.f()}return e.toString()}return"Loading..."},c.GetDistricts=function(e,t){P(e,t,(function(e,t){c.setState({loading:e,data:t}),null===t&&!1===e&&c.setState({loading:!1,data:null})}))},c.componentDidMount=function(){var e,t;"3"!==(null===(e=c.props.auth.role)||void 0===e?void 0:e.role_id)&&Object(j.b)((function(e,t,r){c.setState({loading:!0}),null!==t?c.setState({loading:!1,districts:t}):c.setState({loading:!1})})),null!==c.props.auth.district&&null!==c.props.basic.academic_calender&&"3"===(null===(t=c.props.auth.role)||void 0===t?void 0:t.role_id)&&c.GetDistricts(c.props.auth.district.district_code,c.props.basic.academic_calender.academic_year_id)},c.state={loading:!0,data:null,error:"",selected_district:null!==c.props.auth.district&&"3"===(null===(n=c.props.auth.role)||void 0===n?void 0:n.role_id)?c.props.auth.district.district_code:"",districts:null,showDistrictsList:!1,searchData:"",selectedSchool_code:null!==c.props.auth.school&&"2"===(null===(s=c.props.auth.role)||void 0===s?void 0:s.role_id)?c.props.auth.school.school_code:null},c}return Object(s.a)(r,[{key:"render",value:function(){var e,t,r,a,i,s,c,o,d,l=this,u=null===(e=this.props.auth.role)||void 0===e?void 0:e.access,p="3"===(null===(t=this.props.auth.role)||void 0===t?void 0:t.role_id)?null===(r=this.props.auth.district)||void 0===r?void 0:r.district_name:null===(a=this.state.districts)||void 0===a||null===(i=a.find((function(e){return e.district_code===l.state.selected_district})))||void 0===i?void 0:i.district_name;if(!1===Object(C.c)(u,C.b.POSTS_REQUESTS_REPORT))return Object(y.jsx)(_.a,{to:"/dashboard"});console.log("Last test: ",this.state.data);var b=null===this.state.data?[]:Object(E.n)(null===this.state.selected_district?this.state.data.academic_distributed:this.state.data.academic_distributed.filter((function(e){var t,r;return"3"===(null===(t=l.props.auth.role)||void 0===t?void 0:t.role_id)&&e.district_code===l.state.selected_district||"2"===(null===(r=l.props.auth.role)||void 0===r?void 0:r.role_id)&&e.school_code===l.state.selectedSchool_code})).map((function(e,t){return{id:(t+1).toString(),school_code:e.school_code,school_name:e.school_name,position_name:e.position_name+"( "+e.position_code+" )",qualification_name:e.qualification_name,existing_teachers:e.existing_post,new_requests:e.head_teacher_post_request,dde_requests:null===e.dde_post_request?"":e.dde_post_request,dde_post_distribution:null===e.dde_post_distribution?"0":e.dde_post_distribution,ht_request_reason:e.reason_name,dde_comment:null===e.dde_post_request_comment?"":e.dde_post_request_comment}})),this.state.searchData),h=[{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.id.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.school_code.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.school_name.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.position_name.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.qualification_name.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.existing_teachers.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.new_requests.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.ht_request_reason.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.dde_requests.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.dde_post_distribution.length}))))},{wch:Math.max.apply(Math,Object(n.a)(b.map((function(e){return e.dde_comment.length}))))}];return!0===this.state.loading?Object(y.jsxs)(x.a,{className:"flex flex-col items-center justify-center",children:[Object(y.jsx)(S.a,{}),Object(y.jsx)("div",{children:"Loading, please wait..."})]}):Object(y.jsx)("div",{children:Object(y.jsxs)(x.a,{children:[Object(y.jsxs)("div",{className:"flex flex-row items-center justify-between gap-2 w-full mb-3",children:[Object(y.jsxs)("div",{className:"text-primary-800 text-2xl font-extrabold mb-5 flex flex-col",children:["Posts requests Report in ",p," district",Object(y.jsxs)("div",{className:"flex flex-row items-center gap-3 font-bold text-black text-base",children:[Object(y.jsx)("span",{children:"Academic year:"}),Object(y.jsx)("div",{className:"truncate",children:null===(s=this.props.basic.academic_calender)||void 0===s?void 0:s.academic_year_name})]})]}),Object(y.jsxs)("div",{className:"flex flex-row justify-end items-center gap-2",children:[Object(y.jsxs)("div",{className:"bg-blue-200 rounded-lg px-2 py-1",children:[Object(y.jsx)("div",{className:"text-sm font-bold",children:"Total HT Requests"}),Object(y.jsx)("div",{className:"text-4xl font-extrabold",children:Object(E.g)(parseInt(this.GetTotalHTrequests()))})]}),Object(y.jsxs)("div",{className:"bg-green-100 rounded-lg px-2 py-1",children:[Object(y.jsx)("div",{className:"text-sm font-bold",children:"Total DDE distribution"}),Object(y.jsx)("div",{className:"text-4xl font-extrabold",children:Object(E.g)(parseInt(this.GetTotalDDEDistribution()))})]})]})]}),Object(y.jsxs)("div",{className:"flex flex-row items-center gap-3 justify-between",children:["3"!==(null===(c=this.props.auth.role)||void 0===c?void 0:c.role_id)&&Object(y.jsx)("div",{className:"flex flex-row items-center gap-3 w-full",children:null===this.state.districts?Object(y.jsx)("div",{className:"font-bold",children:"Loading, please wait..."}):Object(y.jsxs)("div",{className:"w-full",children:[Object(y.jsxs)("div",{onClick:function(){return l.setState({showDistrictsList:!l.state.showDistrictsList})},className:"border font-bold ".concat(!1===this.state.showDistrictsList?"border-gray-400 hover:border-primary-800 hover:bg-blue-100":"border"," hover:text-primary-800 w-full rounded px-3 py-2 bg-white cursor-pointer flex flex-row items-center gap-3 justify-between"),children:[Object(y.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[""!==this.state.selected_district&&Object(y.jsx)("div",{className:"rounded-full px-2 bg-blue-200 text-primary-800",children:p}),Object(y.jsx)("span",{children:""===this.state.selected_district?"Choose a district":"Change district"})]}),Object(y.jsx)("div",{children:!1===this.state.showDistrictsList?Object(y.jsx)(f.a,{className:"text-xl"}):Object(y.jsx)(f.b,{className:"text-xl"})})]}),!0===this.state.showDistrictsList&&Object(y.jsx)(T.a,{onChange:function(e){l.setState({selected_district:e}),null!==l.props.basic.academic_calender&&l.GetDistricts(e,l.props.basic.academic_calender.academic_year_id)},districts:this.state.districts,selected_district:this.state.selected_district,setVisibility:function(e){l.setState({showDistrictsList:e})}})]})}),Object(y.jsx)("input",{type:"search",value:this.state.searchData,onChange:function(e){return l.setState({searchData:e.target.value})},className:"bg-white rounded px-3 py-2 border border-gray-400 w-full",placeholder:"Search..."}),Object(y.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[Object(y.jsx)(N,{csvData:b,fileName:"".concat(p,"_Posts_Requests_Report_xlsx"),wscols:h,headers:["id","school_code","school_name","position_name","qualification_name","existing_teachers","new_requests","ht_request_reason","dde_requests","dde_post_distribution","dde_comment"],headerFormat:{id:"#",school_code:"School code",school_name:"School name",position_name:"Position name",qualification_name:"Qualification name",existing_teachers:"Existing teachers",new_requests:"New HT requests",ht_request_reason:"HT Requests reason",dde_requests:"DDE Requests",dde_post_distribution:"DDE Posts distribution",dde_comment:"DDE Comment"}}),Object(y.jsx)(D,{csvHeaders:[{label:"#",key:"id"},{label:"Position name",key:"position_name"},{label:"Qualification name",key:"qualification_name"},{label:"Existing teachers",key:"existing_teachers"},{label:"HT Requests",key:"new_requests"},{label:"HT Request reason",key:"ht_request_reason"},{label:"DDE Requests",key:"dde_requests"},{label:"DDE posts distribution",key:"dde_post_distribution"},{label:"DDE comment",key:"dde_comment"}],csvData:b,fileName:"".concat(p,"_Posts_Requests_Report_csv.csv")})]})]}),Object(y.jsxs)("div",{children:[console.log("TEST DATA: ",b),0===b.length?"3"===(null===(o=this.props.auth.role)||void 0===o?void 0:o.role_id)||""!==this.state.selected_district&&"2"!==(null===(d=this.props.auth.role)||void 0===d?void 0:d.role_id)?Object(y.jsx)("div",{className:"px-5 py-5 rounded-md mt-5 bg-gray-100 text-gray-400 font-extrabold text-center w-full text-2xl",children:"No data found!"}):Object(y.jsx)("div",{onClick:function(){return l.setState({showDistrictsList:!l.state.showDistrictsList})},className:"underline px-5 py-5 cursor-pointer rounded-md mt-5 bg-blue-50 text-gray-900 font-extrabold text-center w-full text-2xl",children:"No district selected!"}):Object(y.jsx)(v,{thead:Object(y.jsx)("thead",{className:"w-full text-left bg-blue-50",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{className:"border p-1 px-2 border-blue-200",children:"#"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"School code"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"School_name"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"Position name"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"Qualification name"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"Existing teachers"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"HT Requests"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"HT Request reason"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"DDE Requests"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"DDE Posts distribution"}),Object(y.jsx)("th",{className:"border p-1 border-blue-200",children:"DDE comment"})]})}),rowFormat:function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"px-2 py-1 border",children:t+1}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:Object(y.jsx)("div",{className:"flex flex-row items-center gap-1",children:Object(y.jsx)("div",{children:e.school_code})})}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.school_name}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.position_name}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.qualification_name}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.existing_teachers}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.new_requests}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.ht_request_reason}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.dde_requests}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.dde_post_distribution}),Object(y.jsx)("td",{className:"px-1 py-1 border",children:e.dde_comment})]},t)},data:b})]})]})})}}]),r}(h.Component),L=Object(m.b)((function(e){return{auth:e.auth,basic:e.basic}}),{})(M)}}]);
//# sourceMappingURL=15.bad5339d.chunk.js.map