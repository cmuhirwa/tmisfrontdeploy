(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[25,55],{345:function(t,e,s){"use strict";s.d(e,"a",(function(){return u})),s.d(e,"b",(function(){return _})),s.d(e,"c",(function(){return h})),s.d(e,"d",(function(){return m}));var r=s(3),a=s(7),c=s(9),i=s.n(c),n=s(13),o=s(15),d=s(10),l=s(11),u=function(t,e){return e(!0,null,""),function(){var s=Object(a.a)(Object(r.a)().mark((function s(a){var c,u;return Object(r.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a({type:n.a.GET_ALL_TRANSFER,payload:[]}),Object(d.a)(),s.next=5,i.a.get("".concat(o.d,"/teachertransfers/requesteddde/").concat(t));case 5:c=s.sent,u=c.data.filter((function(t){return"APPROVED"===t.requested_status})),a({type:n.a.GET_ALL_TRANSFER,payload:u}),e(!1,u,""),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),e(!1,null,Object(l.a)(s.t0));case 14:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(t){return s.apply(this,arguments)}}()},_=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(!1,[{district_code:"11",district_name:"Nyarugenge"},{district_code:"12",district_name:"Gasabo"},{district_code:"13",district_name:"Kicukiro"},{district_code:"21",district_name:"Nyanza"},{district_code:"22",district_name:"Gisagara"},{district_code:"23",district_name:"Nyaruguru"},{district_code:"24",district_name:"Huye"},{district_code:"25",district_name:"Nyamagabe"},{district_code:"26",district_name:"Ruhango"},{district_code:"27",district_name:"Muhanga"},{district_code:"28",district_name:"Kamonyi"},{district_code:"31",district_name:"Karongi"},{district_code:"32",district_name:"Rutsiro"},{district_code:"33",district_name:"Rubavu"},{district_code:"34",district_name:"Nyabihu"},{district_code:"35",district_name:"Ngororero"},{district_code:"36",district_name:"Rusizi"},{district_code:"37",district_name:"Nyamasheke"},{district_code:"41",district_name:"Rulindo"},{district_code:"42",district_name:"Gakenke"},{district_code:"43",district_name:"Musanze"},{district_code:"44",district_name:"Burera"},{district_code:"45",district_name:"Gicumbi"},{district_code:"51",district_name:"Rwamagana"},{district_code:"52",district_name:"Nyagatare"},{district_code:"53",district_name:"Gatsibo"},{district_code:"54",district_name:"Kayonza"},{district_code:"55",district_name:"Kirehe"},{district_code:"56",district_name:"Ngoma"},{district_code:"57",district_name:"Bugesera"}],"");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,s){var a,c,n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0,a=0,null,""),t.prev=2,Object(d.a)(),(c=new FormData).append("teacher_supporting_document",e),t.next=8,i.a.post("".concat(o.d,"/teachertransfers/uploadSupportingDocument"),c,{onUploadProgress:function(t){a=+(null===t||void 0===t?void 0:t.loaded)/+t.total*100,s(!0,a,null,"")}});case 8:n=t.sent,console.log("Uploaded document: ",n.data),s(!1,a,n.data,""),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),console.error(t.t0),s(!1,a,"",Object(l.a)(t.t0));case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e,s){return t.apply(this,arguments)}}(),m=function(t,e,s){s(!0,"");return function(){var c=Object(a.a)(Object(r.a)().mark((function a(c){var u,_;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(!0,""),console.log("==================doc_title=================="),console.log({doc_title:""}),console.log("==================doc_title=================="),s(!0,""),(u=new FormData).append("teacher_transfer_id",t),u.append("mayor_letter",e),console.log("==================*********************=================="),console.log({doc_title:""}),console.log("==================*********************=================="),r.prev=11,Object(d.a)(),r.next=15,i.a.post("".concat(o.d,"/teachertransfers/outgoing"),u);case 15:_=r.sent,console.log("Uploaded document: ",_.data),c({type:n.a.UPLOAD_SIGNED_DOCUMENT,payload:{teacher_transfer_id:t,mayor_letter:_.data.mayor_letter}}),s(!1,""),r.next=25;break;case 21:r.prev=21,r.t0=r.catch(11),console.error(r.t0),s(!1,Object(l.a)(r.t0));case 25:case"end":return r.stop()}}),a,null,[[11,21]])})));return function(t){return c.apply(this,arguments)}}()}},458:function(t,e,s){"use strict";s.r(e),s.d(e,"InternalTransfer",(function(){return y}));var r=s(8),a=s(28),c=s(29),i=s(30),n=s(31),o=s(4),d=s.n(o),l=s(33),u=s(13),_=s(56),h=s(40),m=s(55),b=s(81),j=s(35),p=s(34),f=s(125),x=s(37),O=s(2),g=function(t){var e=t.close,s=t.district_id,r=t.district_name,a=void 0===r?null:r,c=Object(o.useState)(!0),i=Object(p.a)(c,2),n=i[0],d=i[1],l=Object(o.useState)([]),h=Object(p.a)(l,2),m=h[0],b=h[1],g=Object(o.useState)(""),v=Object(p.a)(g,2),N=v[0],y=v[1];return Object(o.useEffect)((function(){!0===n&&Object(u.C)(s,(function(t,e,s){d(!1),b(e),y(s),console.log({data:e})}))}),[n,s]),Object(O.jsx)(x.c,{backDrop:!0,theme:x.b.default,close:e,backDropClose:!1,widthSizeClass:x.a.large,displayClose:!0,padding:{title:!0,body:!1,footer:!1},title:"Export report",children:Object(O.jsxs)("div",{className:"border-t p-4 py-8",children:[""!==N&&Object(O.jsx)(_.a,{theme:"danger",children:N}),!0===n?Object(O.jsxs)("div",{className:"text-xl text-center",children:[Object(O.jsx)(j.a,{}),Object(O.jsx)("h2",{className:"text-2xl font-bold pt-2",children:"Preparing report"}),Object(O.jsx)("h4",{className:"text-gray-500 text-sm",children:"Please wait..."})]}):Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsxs)("h1",{className:"text-3xl",children:["Your ",Object(O.jsx)("b",{children:"Internal Transfer"})," report is ready"]}),Object(O.jsx)("h1",{children:"You can download it now"}),Object(O.jsx)("div",{className:"inline-block pt-5",children:Object(O.jsx)(f.a,{fileData:m.map((function(t){var e,s,r,a,c,i;return{teacher_id:t.teacher_id,teacher_first_name:t.teacher_first_name,teacher_last_name:t.teacher_last_name,teacher_full_name:t.teacher_full_name,teacher_phone_number:t.teacher_phone_number,position_code:t.position_code,position_name:t.position_name,qualification:t.qualification_name,school_from_code:null===(e=t.school_from_info)||void 0===e?void 0:e.school_code,school_form_name:null===(s=t.school_from_info)||void 0===s?void 0:s.school_name,district_from_name:null===(r=t.school_from_info)||void 0===r?void 0:r.district_name,approved_school_code:null===(a=t.approved_school_info)||void 0===a?void 0:a.school_code,approved_school_name:null===(c=t.approved_school_info)||void 0===c?void 0:c.school_name,approved_district_name:null===(i=t.approved_school_info)||void 0===i?void 0:i.district_name,transfer_reason:t.transfer_reason,transfer_type:t.transfer_type,teacher_requested_transfer_date:t.teacher_requested_transfer_date}})),fileName:"INTERNAL TRANSFERS - ".concat(s,"  ").concat(a?" - "+a:""),btnName:"Download EXCEL"})})]})]})})},v={target:null,msg:""},N=function(t){Object(i.a)(s,t);var e=Object(n.a)(s);function s(t){var c;return Object(a.a)(this,s),(c=e.call(this,t)).setOpenDownload=function(){return c.setState({open_download_excel:!c.state.open_download_excel})},c.loadingData=function(t,e,s){c.setState({loading:!0,selected_transfer_id:null,data:[],transfer_issue:""}),Object(u.D)({district_code:t,limit:c.state.limit,page:e,status:s||c.state.status},(function(t,s,r){c.setState({loading:!1,data:null!==s&&void 0!==s&&s.district_transfer_request?null===s||void 0===s?void 0:s.district_transfer_request:[],total:null!==s&&void 0!==s&&s.total_transfer?s.total_transfer:0,next:null!==s&&void 0!==s&&s.next?+(null===s||void 0===s?void 0:s.next):0,previous:null!==s&&void 0!==s&&s.previous?+(null===s||void 0===s?void 0:s.previous):0,error:t?v:{target:"main-error",msg:"Error: ".concat(r)},page:e})}))},c.paginateData=function(t){var e;null!==(e=c.props.auth.district)&&void 0!==e&&e.district_code&&c.loadingData(c.state.selected_district,t)},c.submitIssue=function(){return c.state.transfer_issue.length<=20||""===c.state.selected_transfer_id||null===c.state.selected_transfer_id?c.setState({error:{target:"request-input",msg:"Your message is too short, minimum characters are 20"}}):(c.setState({loading_request:!0}),void Object(u.Lb)({teacher_transfer_id:c.state.selected_transfer_id,transfer_issue_comment:c.state.transfer_issue},(function(t,e,s){c.setState({loading_request:!1,error:!0===t?{target:"main-success",msg:"The request has been submitted successfully."}:{target:"main-error",msg:s},data:c.state.data.map((function(t){return t.teacher_transfer_id===c.state.selected_transfer_id?Object(r.a)(Object(r.a)({},t),{},{transfer_issue_comment:c.state.transfer_issue}):t}))})})))},c.changeStatus=function(t){c.state.status!==t&&c.props.auth.district&&(c.setState({status:t}),c.loadingData(c.state.selected_district,1,t))},c.state={loading:!1,error:v,data:[],limit:14,page:1,total:0,next:0,previous:0,selected_transfer_id:null,transfer_issue:"",loading_request:!1,status:"NO-ISSUE",open_download_excel:!1,selected_district:""},c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){if(this.props.district_code)this.setState({selected_district:this.props.district_code}),this.loadingData(this.props.district_code,this.state.page,this.state.status);else{if(!this.props.auth.district||!this.props.auth.district.district_code)return this.setState({error:{target:"main-error",msg:"There is no district assigned to you!"}});this.setState({selected_district:this.props.auth.district.district_code}),this.loadingData(this.props.auth.district.district_code,this.state.page,this.state.status)}}},{key:"render",value:function(){var t=this,e=(this.state.total/this.state.limit).toFixed(0);return Object(O.jsxs)(O.Fragment,{children:[!0===this.state.open_download_excel&&this.props.auth.district&&Object(O.jsx)(g,{district_id:this.state.selected_district,close:this.setOpenDownload,district_name:this.props.district_name?this.props.district_name:null}),"main-success"===this.state.error.target&&Object(O.jsx)(_.a,{theme:"success",fixed:!0,children:this.state.error.msg}),"main-error"===this.state.error.target&&Object(O.jsx)(_.a,{theme:"danger",fixed:!0,children:this.state.error.msg}),Object(O.jsxs)("div",{className:"container mx-auto px-4 flex items-center",children:[Object(O.jsx)("div",{className:"flex-1",children:Object(O.jsx)(b.a,{className:"",children:"Internal transfers"})}),Object(O.jsx)("section",{className:"pr-3",children:Object(O.jsx)(h.a,{onClick:this.setOpenDownload,theme:"success",children:"Generate Excel"})}),Object(O.jsxs)("section",{className:"text-center p-1 bg-accent-800 bg-opacity-20 text-accent-900 px-4 rounded",children:[Object(O.jsx)("span",{className:"text-sm block text-gray-500 -mb-1",children:"Total:"}),Object(O.jsx)("h3",{className:"font-bold text-xl",children:this.state.total})]})]}),Object(O.jsxs)(m.a,{transparent:!0,children:[Object(O.jsxs)("table",{className:"w-full",children:[Object(O.jsx)("thead",{className:"text-left bg-white",children:Object(O.jsxs)("tr",{className:"bg-accent-900 bg-opacity-10",children:[Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"#"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"Names"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"School Code"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"School name"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"Position code"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"Position name"}),Object(O.jsx)("th",{className:"p-2 border-gray-300 border",children:"Qualification"})]})}),Object(O.jsx)("tbody",{children:!0===this.state.loading?Object(O.jsx)("tr",{className:" ",children:Object(O.jsx)("td",{colSpan:8,className:"py-4 text-center border",children:Object(O.jsx)(j.a,{})})}):this.state.data.length<=0?Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:12,className:"py-4 text-center border",children:Object(O.jsx)("h1",{className:"text-2xl text-gray-400",children:"No data found"})})}):this.state.data.map((function(t,e){var s,r;return Object(O.jsxs)("tr",{className:"bg-white  hover:bg-yellow-400 hover:bg-opacity-30",children:[Object(O.jsx)("td",{className:"border p-2",children:e+1}),Object(O.jsx)("td",{className:"p-2 border",children:t.teacher_full_name}),Object(O.jsx)("td",{className:"p-2 border",children:null===(s=t.school_from_info)||void 0===s?void 0:s.school_code}),Object(O.jsx)("td",{className:"p-2 border",children:null===(r=t.school_from_info)||void 0===r?void 0:r.school_name}),Object(O.jsx)("td",{className:"p-2 border",children:t.position_code}),Object(O.jsx)("td",{className:"p-2 border text-sm",children:t.position_name}),Object(O.jsx)("td",{className:"p-2 border",children:t.qualification_name})]},e)}))})]}),Object(O.jsx)("div",{className:"flex gap-3 mx-auto pt-3",children:Array(+e).fill("0").map((function(e,s){return Object(O.jsx)("button",{className:"p-2 py-1 ".concat(+t.state.page===s+1?"bg-accent-800 text-black font-bold":"bg-opacity-25"," rounded-full bg-accent-800 "),onClick:t.paginateData.bind(t,s+1),children:s+1})}))})]})]})}}]),s}(d.a.Component),y=Object(l.b)((function(t){return{auth:t.auth}}),{})(N)},562:function(t,e,s){"use strict";s.r(e),s.d(e,"InternalTransfersReport",(function(){return O}));var r=s(28),a=s(29),c=s(30),i=s(31),n=s(4),o=s.n(n),d=s(17),l=s(33),u=s(345),_=s(40),h=s(55),m=s(81),b=s(35),j=s(458),p=s(2),f={error:"",target:null},x=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={loading_district:!1,districts:[],error:f,selected_district:null},a}return Object(a.a)(s,[{key:"selectDistrict",value:function(t){this.setState({selected_district:t})}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading_district:!0,error:f}),Object(u.b)((function(e,s,r){console.log({status:e,data:s,msg:r}),null!==s?t.setState({loading_district:!1,districts:s}):t.setState({loading_district:!1,districts:[],error:{target:"MAIN-ERROR",error:"Error: ".concat(r)}})}))}},{key:"render",value:function(){var t=this;return null!==this.state.selected_district?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"sticky top-1 z-50 mx-auto",children:Object(p.jsxs)(h.a,{className:"flex",children:[Object(p.jsx)("section",{children:Object(p.jsx)(_.a,{onClick:this.selectDistrict.bind(this,null),children:"Back"})}),Object(p.jsxs)("section",{className:"text-2xl pl-3 flex-1",children:[this.state.selected_district.district_name," district"]})]})}),Object(p.jsx)(j.InternalTransfer,{district_code:this.state.selected_district.district_code,district_name:this.state.selected_district.district_name+" district"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{children:Object(p.jsxs)("div",{className:"w-full flex",children:[Object(p.jsx)("section",{className:"flex-1",children:Object(p.jsx)(m.a,{children:"Internal transfer"})}),Object(p.jsx)("section",{})]})}),Object(p.jsx)(h.a,{children:!0===this.state.loading_district?Object(p.jsx)("div",{className:"py-8 text-center",children:Object(p.jsx)(b.a,{})}):0===this.state.districts.length?Object(p.jsx)("div",{className:"text-center py-8",children:Object(p.jsx)(m.a,{children:"No results found"})}):Object(p.jsx)("div",{className:"w-full lg:grid lg:grid-cols-2 gap-2",children:this.state.districts.map((function(e){return Object(p.jsxs)("div",{onClick:t.selectDistrict.bind(t,e),className:"flex px-3 py-1  mb-3 lg:mb-0 hover:text-white hover:bg-yellow-600 hover:bg-opacity-50 rounded-md items-center bg-yellow-50 border-yellow-700 border",children:[Object(p.jsx)("h4",{className:"flex-1 text-lg",children:e.district_name}),Object(p.jsx)("section",{className:"text-2xl text-yellow-600",children:Object(p.jsx)(d.g,{})})]},e.district_code)}))})})]})}}]),s}(o.a.Component),O=Object(l.b)((function(t){return{auth:t.auth}}),{})(x)}}]);
//# sourceMappingURL=25.b3c45a17.chunk.js.map