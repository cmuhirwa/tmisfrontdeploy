(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[63],{588:function(e,r,c){"use strict";c.r(r),c.d(r,"DistrictInternalPermutationReport",(function(){return h}));var t=c(28),a=c(4),o=c(36),s=c(13),d=c(47),b=c(53),l=c(139),n=c(92),j=c(24),i=c(1),h=Object(o.b)((function(e){return{auth:e.auth}}),{})((function(e){var r,c,o=e.auth;console.log(null===(r=o.district)||void 0===r?void 0:r.district_code);var h=Object(a.useState)(!0),g=Object(t.a)(h,2),m=g[0],_=g[1],x=Object(a.useState)(""),O=Object(t.a)(x,2),p=O[0],u=O[1],N=Object(a.useState)([]),y=Object(t.a)(N,2),f=y[0],w=y[1];return Object(a.useEffect)((function(){var e,r;!0===m&&(null!==(e=o.district)&&void 0!==e&&e.district_code?(console.log("Load data"),Object(s.Hb)((null===(r=o.district)||void 0===r?void 0:r.district_code)+"",(function(e,r,c){w(r),!1===e&&u(c),_(!1)}))):(u("No district assigned to you!"),_(!1)))}),[null===(c=o.district)||void 0===c?void 0:c.district_code,m]),Object(i.jsxs)(b.a,{children:[Object(i.jsxs)("div",{className:"py-1 flex border-b",children:[Object(i.jsx)("div",{className:"flex-1",children:Object(i.jsx)(n.a,{children:"Internal Permutation report"})}),Object(i.jsx)("div",{children:f.length>=1&&Object(i.jsx)(l.a,{fileData:f,fileName:"Internal Permutation - ".concat((new Date).toISOString()),btnName:"Download EXCEL"})})]}),""!==p&&Object(i.jsx)(d.a,{theme:"danger",children:p}),Object(i.jsx)("div",{className:"lg:pl-10 lg:max-w-screen-lg md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl overflow-auto",children:Object(i.jsx)("table",{className:"w-full pl-10 overflow-auto max-w-xl",children:Object(i.jsxs)("thead",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"p-2 border border-gray-400"}),Object(i.jsx)("th",{className:"p-2 border bg-blue-100 border-gray-400",colSpan:6,children:"Teacher one"}),Object(i.jsx)("th",{className:"p-2 border bg-green-100 border-gray-400",colSpan:6,children:"Teacher two"}),Object(i.jsx)("th",{className:"p-2 border",colSpan:4,children:"Academic info"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"p-2 border border-gray-400",children:"#"}),Object(i.jsx)("th",{className:"border p-2 bg-blue-100 border-gray-400",children:"staff_code"}),Object(i.jsx)("th",{className:"border p-2  bg-blue-100 border-gray-400",children:"full_name"}),Object(i.jsx)("th",{className:"border p-2  bg-blue-100 border-gray-400",children:"nid"}),Object(i.jsx)("th",{className:"border p-2  bg-blue-100 border-gray-400",children:"phone_number"}),Object(i.jsx)("th",{className:"border p-2  bg-blue-100 border-gray-400",children:"school_nane_from"}),Object(i.jsx)("th",{className:"border p-2  bg-blue-100 border-gray-400",children:"school_code_togo"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"staff_code"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"full_name"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"nid"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"phone_number"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"school_name_from"}),Object(i.jsx)("th",{className:"border p-2 bg-green-100 border-gray-400",children:"school_nane_togo"}),Object(i.jsx)("th",{className:"border p-2",children:"position_code"}),Object(i.jsx)("th",{className:"border p-2",children:"position_name"}),Object(i.jsx)("th",{className:"border p-2",children:"qualification_name"}),Object(i.jsx)("th",{className:"border p-2",children:"done_at"})]}),!0===m&&Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:8,className:"py-8",children:Object(i.jsx)(j.a,{})})}),0===f.length&&Object(i.jsx)("tr",{children:Object(i.jsxs)("td",{colSpan:8,className:"py-8 text-center",children:[Object(i.jsx)("h2",{className:"text-2xl",children:"No placement found!"}),Object(i.jsx)("p",{children:"No placement found!"})]})}),f.map((function(e,r){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"p-2 border-1",children:r+1}),Object(i.jsx)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:e.teacher_one_staff_code}),Object(i.jsx)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:e.teacher_one_full_name}),Object(i.jsx)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:e.teacher_one_nid}),Object(i.jsx)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:e.teacher_one_phone_number}),Object(i.jsxs)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:[e.teacher_one_school_code_from," ",e.teacher_one_school_name_from]}),Object(i.jsxs)("td",{className:"border p-2 bg-blue-50 border-gray-400",children:[e.teacher_one_school_code_togo," ",e.teacher_one_school_name_togo]}),Object(i.jsx)("td",{className:"border p-2 bg-green-50 border-gray-400",children:e.teacher_two_staff_code}),Object(i.jsx)("td",{className:"border p-2 bg-green-50 border-gray-400",children:e.teacher_two_full_name}),Object(i.jsx)("td",{className:"border p-2 bg-green-50 border-gray-400",children:e.teacher_two_nid}),Object(i.jsx)("td",{className:"border p-2 bg-green-50 border-gray-400",children:e.teacher_two_phone_number}),Object(i.jsxs)("td",{className:"border p-2 bg-green-50 border-gray-400",children:[e.teacher_two_school_code_from," ",e.teacher_two_school_name_from]}),Object(i.jsxs)("td",{className:"border p-2 bg-green-50 border-gray-400",children:[e.teacher_two_school_code_togo," ",e.teacher_two_school_nane_togo]}),Object(i.jsx)("td",{className:"border p-2 bg-yellow-50 border-gray-400",children:e.position_code}),Object(i.jsx)("td",{className:"border p-2 bg-yellow-50 border-gray-400",children:e.position_name}),Object(i.jsx)("td",{className:"border p-2 bg-yellow-50 border-gray-400",children:e.qualification_name}),Object(i.jsx)("td",{className:"border p-2 bg-yellow-50 border-gray-400",children:e.done_at})]})}))]})})})]})}))}}]);
//# sourceMappingURL=63.3701a707.chunk.js.map