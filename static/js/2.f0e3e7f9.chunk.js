(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[2],{356:function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return p})),i.d(e,"c",(function(){return m})),i.d(e,"d",(function(){return _}));var s=i(3),n=i(6),r=i(7),a=i.n(r),c=i(13),d=i(12),o=i(8),l=i(11),u=function(t,e){return e(!0,null,""),function(){var i=Object(n.a)(Object(s.a)().mark((function i(n){var r,u;return Object(s.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,n({type:c.a.GET_ALL_TRANSFER,payload:[]}),Object(o.a)(),i.next=5,a.a.get("".concat(d.e,"/teachertransfers/requesteddde/").concat(t));case 5:r=i.sent,u=r.data.filter((function(t){return"APPROVED"===t.requested_status})),n({type:c.a.GET_ALL_TRANSFER,payload:u}),e(!1,u,""),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(0),e(!1,null,Object(l.a)(i.t0));case 14:case"end":return i.stop()}}),i,null,[[0,11]])})));return function(t){return i.apply(this,arguments)}}()},p=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(!1,[{district_code:"11",district_name:"Nyarugenge"},{district_code:"12",district_name:"Gasabo"},{district_code:"13",district_name:"Kicukiro"},{district_code:"21",district_name:"Nyanza"},{district_code:"22",district_name:"Gisagara"},{district_code:"23",district_name:"Nyaruguru"},{district_code:"24",district_name:"Huye"},{district_code:"25",district_name:"Nyamagabe"},{district_code:"26",district_name:"Ruhango"},{district_code:"27",district_name:"Muhanga"},{district_code:"28",district_name:"Kamonyi"},{district_code:"31",district_name:"Karongi"},{district_code:"32",district_name:"Rutsiro"},{district_code:"33",district_name:"Rubavu"},{district_code:"34",district_name:"Nyabihu"},{district_code:"35",district_name:"Ngororero"},{district_code:"36",district_name:"Rusizi"},{district_code:"37",district_name:"Nyamasheke"},{district_code:"41",district_name:"Rulindo"},{district_code:"42",district_name:"Gakenke"},{district_code:"43",district_name:"Musanze"},{district_code:"44",district_name:"Burera"},{district_code:"45",district_name:"Gicumbi"},{district_code:"51",district_name:"Rwamagana"},{district_code:"52",district_name:"Nyagatare"},{district_code:"53",district_name:"Gatsibo"},{district_code:"54",district_name:"Kayonza"},{district_code:"55",district_name:"Kirehe"},{district_code:"56",district_name:"Ngoma"},{district_code:"57",district_name:"Bugesera"}],"");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(Object(s.a)().mark((function t(e,i){var n,r,c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0,n=0,null,""),t.prev=2,Object(o.a)(),(r=new FormData).append("teacher_supporting_document",e),t.next=8,a.a.post("".concat(d.e,"/teachertransfers/uploadSupportingDocument"),r,{onUploadProgress:function(t){n=+(null===t||void 0===t?void 0:t.loaded)/+t.total*100,i(!0,n,null,"")}});case 8:c=t.sent,console.log("Uploaded document: ",c.data),i(!1,n,c.data,""),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),console.error(t.t0),i(!1,n,"",Object(l.a)(t.t0));case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e,i){return t.apply(this,arguments)}}(),_=function(t,e,i){i(!0,"");return function(){var r=Object(n.a)(Object(s.a)().mark((function n(r){var u,p;return Object(s.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i(!0,""),console.log("==================doc_title=================="),console.log({doc_title:""}),console.log("==================doc_title=================="),i(!0,""),(u=new FormData).append("teacher_transfer_id",t),u.append("mayor_letter",e),console.log("==================*********************=================="),console.log({doc_title:""}),console.log("==================*********************=================="),s.prev=11,Object(o.a)(),s.next=15,a.a.post("".concat(d.e,"/teachertransfers/outgoing"),u);case 15:p=s.sent,console.log("Uploaded document: ",p.data),r({type:c.a.UPLOAD_SIGNED_DOCUMENT,payload:{teacher_transfer_id:t,mayor_letter:p.data.mayor_letter}}),i(!1,""),s.next=25;break;case 21:s.prev=21,s.t0=s.catch(11),console.error(s.t0),i(!1,Object(l.a)(s.t0));case 25:case"end":return s.stop()}}),n,null,[[11,21]])})));return function(t){return r.apply(this,arguments)}}()}},393:function(t,e,i){"use strict";var s,n=i(3),r=i(6),a=i(19),c=i(20),d=i(21),o=i(22),l=i(7),u=i.n(l),p=i(4),m=i(46),_=i(15),b=i(356),g=i(12),h=i(11),v=i(54),j=i(24),x=i(370),f=i(23),y=i(1),O=function(t){var e="";return 0===t.size&&(e="Invalid file"),t.size>1038221&&(e="File should not be greater than 1MB"),"application/pdf"!==t.type&&"image/png"!==t.type&&"image/jpeg"!==t.type&&"image/webp"!==t.type&&"image/tiff"!==t.type&&"image/bmp"!==t.type&&"image/gif"!==t.type&&"image/jfif"!==t.type&&"application/vnd.openxmlformats-officedocument.wordprocessingml.document"!==t.type&&(e="Invalid file type, accepted files(PDF, IMAGES(png, jpeg, webp, tiff, bmp, gif, jfif))"),""!==e?e:""};!function(t){t.RESIDENCE="RESIDENCE",t.DISABILITY="DISABILITY",t.ALL="ALL"}(s||(s={}));var N=function(t){Object(d.a)(i,t);var e=Object(o.a)(i);function i(t){var c;return Object(a.a)(this,i),(c=e.call(this,t)).setLoadingSaving=function(t){return c.setState({loading_saving:t})},c.UpdateUserDocuments=function(){var t=Object(r.a)(Object(n.a)().mark((function t(e){var i,r,a,d;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),c.setState({error:null,success:""}),c.state.addDocType!==s.RESIDENCE){t.next=11;break}if(null!==c.state.resident_district_id&&""!==c.state.resident_district_id){t.next=5;break}return t.abrupt("return",c.setState({error:{element:"main",msg:"Please select residence district!"}}));case 5:if(null!==c.state.resident_surpoting_document){t.next=9;break}return t.abrupt("return",c.setState({error:{element:"resident_surpoting_document",msg:"Please select resident surpoting document!"}}));case 9:if(""===O(c.state.resident_surpoting_document)){t.next=11;break}return t.abrupt("return",c.setState({error:{element:"main",msg:O(c.state.resident_surpoting_document)}}));case 11:if(c.state.addDocType!==s.DISABILITY){t.next=18;break}if(null!==c.state.disability_surpoting_document){t.next=16;break}return t.abrupt("return",c.setState({error:{element:"disability_surpoting_document",msg:"Please select disability surpoting document!"}}));case 16:if(""===O(c.state.disability_surpoting_document)){t.next=18;break}return t.abrupt("return",c.setState({error:{element:"main",msg:O(c.state.disability_surpoting_document)}}));case 18:return(r=new FormData).append("disability",(c.state.addDocType===s.DISABILITY||"").toString()),r.append("resident_district_id",null===c.state.resident_district_id?"":c.state.resident_district_id),r.append("disability_surpoting_document",null===c.state.disability_surpoting_document?"":c.state.disability_surpoting_document),r.append("resident_surpoting_document",null===c.state.resident_surpoting_document?"":c.state.resident_surpoting_document),a=null===(i=c.state.districts)||void 0===i?void 0:i.find((function(t){return t.district_code===c.state.resident_district_id})),r.append("resident_district_name",void 0===a?"":a.district_name),c.setState({loading_saving:!0}),t.prev=26,t.next=29,u.a.post("".concat(g.e,"/user/account/updateprofile"),r);case 29:d=t.sent,c.setState({success:"Document added successfully!"}),setInterval((function(){!0===c.state.loading_saving&&(c.props.FC_UpdateUserDocuments({resident_district_id:c.state.resident_district_id,disability:(c.state.addDocType===s.DISABILITY).toString(),disability_surpoting_document:d.data.disabilityNewFileName,resident_surpoting_document:d.data.residentNewFileName}),c.setState({loading_saving:!1}))}),3e3),t.next=37;break;case 34:t.prev=34,t.t0=t.catch(26),c.setState({error:{element:"main",msg:Object(h.a)(t.t0)},loading_saving:!1});case 37:case"end":return t.stop()}}),t,null,[[26,34]])})));return function(e){return t.apply(this,arguments)}}(),c.SubmitNoDisability=Object(r.a)(Object(n.a)().mark((function t(){var e,i,s,r,a,d,o,l,p;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({loading_saving:!0}),t.prev=1,a=null===(e=c.props.auth.user)||void 0===e?void 0:e.resident_district_id,d=null===(i=c.props.auth.user)||void 0===i?void 0:i.disability_surpoting_document,o=null===(s=c.props.auth.user)||void 0===s?void 0:s.resident_surpoting_document,l=null===(r=c.props.auth.user)||void 0===r?void 0:r.resident_district_name,t.next=8,u.a.post("".concat(g.e,"/user/account/updateprofile"),{disability:(!1).toString(),resident_district_id:null===a||void 0===a?"":a,disability_surpoting_document:null===d||void 0===d?"":d,resident_surpoting_document:null===o||void 0===o?"":o,resident_district_name:null===l||void 0===l?"":l});case 8:p=t.sent,c.setState({success:"Submitted successfully!"}),setInterval((function(){c.props.FC_UpdateUserDocuments({resident_district_id:null===a||void 0===a?"":a,disability:(!1).toString(),disability_surpoting_document:p.data.disabilityNewFileName,resident_surpoting_document:p.data.residentNewFileName}),c.setState({loading_saving:!1})}),3e3),alert("Submitted successfully!"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),c.setState({error:{element:"main",msg:Object(h.a)(t.t0)},loading_saving:!1});case 17:case"end":return t.stop()}}),t,null,[[1,14]])}))),c.componentDidMount=function(){null===c.state.districts&&(c.setState({loading:!0}),Object(b.b)((function(t,e,i){null!==e&&c.setState({districts:e,loading:!1}),c.setState({loading:!1})})))},c.state={districts:null,loading:!1,loading_saving:!1,addDocuments:!1,addDocType:s.ALL,resident_district_id:null,disability_surpoting_document:null,resident_surpoting_document:null,error:null,success:"",disabled_none_selected:!1},c}return Object(c.a)(i,[{key:"render",value:function(){var t,e,i,n,r,a,c,d,o,l,u,b,h,O,N,S,D,w,I,k,T,E=this;return null===this.state.districts||!0===this.state.loading?Object(y.jsx)(v.a,{children:Object(y.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3 w-full text-center py-5",children:[Object(y.jsx)(j.a,{}),Object(y.jsx)("div",{children:"Loading..."})]})}):Object(y.jsxs)(p.Fragment,{children:[""!==this.state.success&&Object(y.jsx)("div",{className:"text-green-700 bg-green-100 rounded px-3 py-2",children:this.state.success}),null!==this.state.error&&Object(y.jsx)("div",{className:"text-red-700 bg-red-100 rounded px-3 py-2",children:this.state.error.msg}),!1===this.state.addDocuments?Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"py-2 border-b",children:Object(y.jsx)("span",{className:"text-xl font-bold ",children:"My documents"})}),Object(y.jsxs)("div",{className:"py-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[Object(y.jsxs)("div",{className:"col-span-1 flex items-center gap-3 ".concat(null===(null===(t=this.props.auth.user)||void 0===t?void 0:t.resident_surpoting_document)||""===(null===(e=this.props.auth.user)||void 0===e?void 0:e.resident_surpoting_document)?"bg-yellow-100":"bg-gray-100"," rounded-lg p-3 py-4 hover:bg-blue-100 hover:text-primary-800 group"),children:[Object(y.jsx)("div",{children:null===(null===(i=this.props.auth.user)||void 0===i?void 0:i.resident_surpoting_document)||""===(null===(n=this.props.auth.user)||void 0===n?void 0:n.resident_surpoting_document)?Object(y.jsx)(_.j,{className:"text-gray-400 group-hover:text-primary-800 text-6xl"}):Object(y.jsx)(m.d,{className:"text-primary-800 group-hover:text-primary-800 text-6xl"})}),Object(y.jsxs)("div",{children:[null===(null===(r=this.props.auth.user)||void 0===r?void 0:r.resident_surpoting_document)||""===(null===(a=this.props.auth.user)||void 0===a?void 0:a.resident_surpoting_document)?Object(y.jsx)("div",{className:"text-accent-900 font-bold group-hover:text-primary-800",children:"Resident district is missing!"}):Object(y.jsx)("div",{className:"text-gray-900 font-bold group-hover:text-primary-800",children:"My resident district"}),Object(y.jsx)("div",{onClick:function(){var t,e,i;(null===(null===(t=E.props.auth.user)||void 0===t?void 0:t.resident_surpoting_document)||void 0===(null===(e=E.props.auth.user)||void 0===e?void 0:e.resident_surpoting_document)||""===(null===(i=E.props.auth.user)||void 0===i?void 0:i.resident_surpoting_document))&&E.setState({addDocuments:!0,addDocType:s.RESIDENCE})},className:"text-xl font-bold cursor-pointer",children:null===(null===(c=this.props.auth.user)||void 0===c?void 0:c.resident_surpoting_document)||""===(null===(d=this.props.auth.user)||void 0===d?void 0:d.resident_surpoting_document)?Object(y.jsx)("span",{className:"underline",children:"Choose your residence"}):Object(y.jsx)("span",{className:"text-primary-800",children:null===(o=this.state.districts.find((function(t){var e;return t.district_code===(null===(e=E.props.auth.user)||void 0===e?void 0:e.resident_district_id)})))||void 0===o?void 0:o.district_name})}),null!==(null===(l=this.props.auth.user)||void 0===l?void 0:l.resident_surpoting_document)&&void 0!==(null===(u=this.props.auth.user)||void 0===u?void 0:u.resident_surpoting_document)&&""!==(null===(b=this.props.auth.user)||void 0===b?void 0:b.resident_surpoting_document)&&Object(y.jsxs)("div",{className:"flex flex-row items-center w-full gap-2 mt-2",children:[Object(y.jsxs)("div",{onClick:function(){E.setState({addDocuments:!0,addDocType:s.RESIDENCE})},className:"bg-white cursor-pointer rounded flex items-center gap-2 px-2 py-1 hover:bg-primary-800 hover:text-white",children:[Object(y.jsx)("div",{children:Object(y.jsx)(_.y,{className:"text-lg"})}),Object(y.jsx)("span",{children:"Update"})]}),Object(y.jsxs)("a",{href:"".concat(g.f,"/").concat(this.props.auth.user.resident_surpoting_document),target:"__blank",className:"bg-white cursor-pointer rounded flex items-center gap-2 px-2 py-1 hover:bg-primary-800 hover:text-white",children:[Object(y.jsx)("div",{children:Object(y.jsx)(x.c,{className:"text-lg"})}),Object(y.jsx)("span",{children:"View"})]})]})]})]}),Object(y.jsxs)("div",{className:"col-span-1 flex items-center gap-3 bg-gray-50 rounded-lg p-3 py-4 hover:bg-gray-100  group",children:[Object(y.jsx)("div",{children:null===(null===(h=this.props.auth.user)||void 0===h?void 0:h.disability_surpoting_document)||""===(null===(O=this.props.auth.user)||void 0===O?void 0:O.disability_surpoting_document)?Object(y.jsx)(_.vb,{className:"text-gray-400  text-6xl"}):Object(y.jsx)(m.d,{className:"text-primary-800 group-hover:text-primary-800 text-6xl"})}),Object(y.jsxs)("div",{children:[!(null!==(N=this.props.auth.user)&&void 0!==N&&N.disability_surpoting_document)&&Object(y.jsx)("div",{className:"text-gray-600 ",children:"Do you have a disability?"}),(null===(S=this.props.auth.user)||void 0===S?void 0:S.disability_surpoting_document)&&Object(y.jsxs)("div",{className:"text-gray-600 ",children:[Object(y.jsx)("h2",{className:"text-lg font-bold cursor-pointer text-black",children:"Disability document is found."}),Object(y.jsx)("span",{className:"text-sm",children:"you can Change disability document"})]}),Object(y.jsx)("div",{className:"text-xl font-bold cursor-pointer",children:null===(null===(D=this.props.auth.user)||void 0===D?void 0:D.disability_surpoting_document)||""===(null===(w=this.props.auth.user)||void 0===w?void 0:w.disability_surpoting_document)?Object(y.jsxs)("div",{className:"flex flex-row items-center gap-3 text-base",children:[Object(y.jsxs)(f.a,{onClick:function(){var t,e,i;(null===(null===(t=E.props.auth.user)||void 0===t?void 0:t.disability_surpoting_document)||void 0===(null===(e=E.props.auth.user)||void 0===e?void 0:e.disability_surpoting_document)||""===(null===(i=E.props.auth.user)||void 0===i?void 0:i.disability_surpoting_document))&&E.setState({addDocuments:!0,addDocType:s.DISABILITY,disabled_none_selected:!1})},type:"button",theme:!0===this.state.disabled_none_selected?"default":"accent-light",children:[Object(y.jsx)("b",{children:"Yes"}),", I have s disability"]}),Object(y.jsxs)(f.a,{type:"button",className:"px-2",theme:!0===this.state.disabled_none_selected?"success":"accent-light",onClick:function(){return E.setState({disabled_none_selected:!0})},children:[!0===this.state.disabled_none_selected?Object(y.jsx)(_.m,{className:"inline-block text-xl mr-1"}):Object(y.jsx)(_.n,{className:"inline-block text-xl mr-1"}),"No"]})]}):""}),null!==(null===(I=this.props.auth.user)||void 0===I?void 0:I.disability_surpoting_document)&&void 0!==(null===(k=this.props.auth.user)||void 0===k?void 0:k.disability_surpoting_document)&&""!==(null===(T=this.props.auth.user)||void 0===T?void 0:T.disability_surpoting_document)&&Object(y.jsxs)("div",{className:"flex flex-row items-center w-full gap-2 mt-2",children:[Object(y.jsxs)("div",{onClick:function(){E.setState({addDocuments:!0,addDocType:s.DISABILITY})},className:"bg-white cursor-pointer rounded flex items-center gap-2 px-2 py-1 hover:bg-primary-800 hover:text-white",children:[Object(y.jsx)("div",{children:Object(y.jsx)(_.y,{className:"text-lg"})}),Object(y.jsx)("span",{children:"Update"})]}),Object(y.jsxs)("a",{href:"".concat(g.f,"/").concat(this.props.auth.user.disability_surpoting_document),target:"__blank",className:"bg-white cursor-pointer rounded flex items-center gap-2 px-2 py-1 hover:bg-primary-800 hover:text-white",children:[Object(y.jsx)("div",{children:Object(y.jsx)(x.c,{className:"text-lg"})}),Object(y.jsx)("span",{children:"View"})]})]})]})]})]})]}):Object(y.jsx)("div",{className:"p-5 bg-white animate__animated animate__fadeIn animate__faster",children:Object(y.jsxs)("form",{onSubmit:this.UpdateUserDocuments,className:"flex flex-col md:flex-row items-center gap-6",children:[Object(y.jsx)("div",{className:"flex flex-col text-base",children:this.state.addDocType===s.RESIDENCE&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("label",{className:"font-bold",children:"Choose resident district"}),Object(y.jsxs)("select",{value:null===this.state.resident_district_id?"":this.state.resident_district_id,onChange:function(t){return E.setState({resident_district_id:t.target.value})},className:"border border-gray-400 rounded px-3 py-2 mb-5",children:[Object(y.jsx)("option",{value:"",children:"Choose district"}),this.state.districts.map((function(t,e){return Object(y.jsx)("option",{value:t.district_code,children:t.district_name},e+1)}))]}),Object(y.jsxs)("label",{className:"font-bold",children:["Residence supporting document ","(Size < 1MB)"]}),Object(y.jsx)("input",{type:"file",onChange:function(t){return E.setState({resident_surpoting_document:null===t.target.files?null:t.target.files[0]})},className:"border border-gray-400 rounded px-3 py-2"})]})}),Object(y.jsxs)("div",{className:"flex flex-col text-base",children:[this.state.addDocType===s.DISABILITY&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("label",{className:"font-bold",children:["Disability supporting document ","(Size < 1MB)"]}),Object(y.jsx)("input",{type:"file",onChange:function(t){return E.setState({disability_surpoting_document:null===t.target.files?null:t.target.files[0]})},className:"border border-gray-400 rounded px-3 py-2"})]}),Object(y.jsxs)("div",{className:"px-3 py-2 rounded bg-yellow-100 gap-3",children:[Object(y.jsx)("span",{className:"font-extrabold",children:"Warning"})," Make sure you are providing correct information. For any inconvenience, rules will be applied"]}),Object(y.jsxs)("div",{className:"flex items-center gap-3 mt-6",children:[Object(y.jsx)(f.a,{onClick:function(){return E.setState({addDocuments:!1,addDocType:s.ALL,resident_district_id:null,disability_surpoting_document:null,resident_surpoting_document:null,success:"",error:null})},theme:"default",children:"Back"}),Object(y.jsx)(f.a,{type:"submit",theme:"success",children:"Submit"})]})]})]})})]})}}]),i}(p.Component);e.a=N}}]);
//# sourceMappingURL=2.f0e3e7f9.chunk.js.map