(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[80],{601:function(e,t,i){"use strict";i.r(t),i.d(t,"TrainingProviderProfile",(function(){return f}));var s=i(19),r=i(20),a=i(21),n=i(22),l=i(4),c=i(69),d=i(42),o=i(370),j=i(15),x=i(36),b=i(43),p=i(24),h=i(27),m=i(12),g=i(87),v=i(1),u=function(e){Object(a.a)(i,e);var t=Object(n.a)(i);function i(e){var r;return Object(s.a)(this,i),(r=t.call(this,e)).FC_GetTrainingProviderDetails=function(){var e=r.props.auth.stakeholder;null===e?r.setState({error:"Training partner is not found!"}):(r.setState({loading:!0}),Object(b.i)(e.development_partner_id,(function(e,t){r.setState({loading:e}),null!==t&&"success"===t.type&&r.setState({training_provider:t.data,loading:!1,error:"",success:""}),null!==t&&"error"===t.type&&r.setState({training_provider:null,loading:!1,error:t.msg,success:""})})))},r.state={loading:!1,training_provider:null,error:"",success:"",view_file:null},r}return Object(r.a)(i,[{key:"componentDidMount",value:function(){null===this.state.training_provider&&this.FC_GetTrainingProviderDetails()}},{key:"render",value:function(){var e=this;return null===this.props.auth.stakeholder?Object(v.jsx)("div",{children:"Please go back"}):Object(v.jsxs)(l.Fragment,{children:[Object(v.jsxs)("div",{className:"container mx-auto",children:[Object(v.jsx)("div",{className:"px-3 pt-3",children:Object(v.jsxs)("div",{className:"bg-white p-3 flex flex-row items-center justify-between gap-2 w-full rounded-md",children:[Object(v.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"bg-primary-100 h-14 w-14 rounded-md flex items-center justify-center text-primary-700",children:Object(v.jsx)(j.e,{className:"text-5xl"})})}),Object(v.jsxs)("div",{className:"flex flex-col",children:[Object(v.jsx)("div",{className:"font-bold text-xl",children:"Training provider profile"}),Object(v.jsx)("div",{className:"font-bold text-primary-700",children:null===this.state.training_provider?Object(v.jsx)("span",{className:"animate__animated animate__fadeIn animate__infinite text-base text-accent-900 font-normal",children:"Loading, please wait..."}):this.state.training_provider.development_partner_name})]})]}),Object(v.jsx)("div",{})]})}),(!0===this.state.loading||null===this.state.training_provider)&&Object(v.jsx)("div",{className:"px-2 md:px-4",children:Object(v.jsxs)("div",{className:"bg-white rounded-md p-6 flex flex-col items-center justify-center w-full my-4",children:[Object(v.jsx)(p.a,{}),Object(v.jsx)("div",{className:"text-center text-lg font-light",children:"Loading, please wait..."})]})}),Object(v.jsxs)("div",{className:"p-1 md:px-3 pb-3",children:[""!==this.state.error&&Object(v.jsxs)("div",{onClick:function(){return e.setState({error:"",success:""})},className:"flex flex-row items-center justify-between gap-2 w-full p-2 bg-red-50 text-red-700 rounded-md border border-red-100 cursor-pointer hover:bg-red-100 my-2 animate__animated animate__shakeX",children:[Object(v.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"h-10 w-10 rounded-md bg-white flex items-center justify-center",children:Object(v.jsx)(c.b,{className:"text-2xl"})})}),Object(v.jsx)("div",{children:this.state.error})]}),Object(v.jsx)("div",{children:Object(v.jsx)(d.l,{className:"text-2xl"})})]}),""!==this.state.success&&Object(v.jsxs)("div",{onClick:function(){return e.setState({error:"",success:""})},className:"flex flex-row items-center justify-between gap-2 w-full p-2 bg-green-50 text-green-600 rounded-md border border-green-100 cursor-pointer hover:bg-green-100 my-2",children:[Object(v.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"h-10 w-10 rounded-md bg-white flex items-center justify-center",children:Object(v.jsx)(c.b,{className:"text-2xl"})})}),Object(v.jsx)("div",{children:this.state.success})]}),Object(v.jsx)("div",{children:Object(v.jsx)(d.l,{className:"text-2xl"})})]}),!1===this.state.loading&&null!==this.state.training_provider&&Object(v.jsxs)("div",{className:"my-2 bg-white rounded-md grid grid-cols-12 gap-2 pb-2",children:[Object(v.jsx)("div",{className:"col-span-12 font-bold text-lg px-3 py-4 border-b mb-3",children:"General information"}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization name"}),Object(v.jsx)("div",{className:"font-semibold",children:this.state.training_provider.development_partner_name})]}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization category"}),Object(v.jsx)("div",{className:"font-semibold",children:this.state.training_provider.organization_category})]}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization phone number"}),Object(v.jsx)("div",{className:"font-semibold",children:this.state.training_provider.phone})]}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization email"}),Object(v.jsx)("div",{className:"font-semibold",children:this.state.training_provider.email})]}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization website"}),Object(v.jsx)("a",{href:this.state.training_provider.website_link,target:"__blank",title:this.state.training_provider.development_partner_name,children:this.state.training_provider.website_link})]}),Object(v.jsxs)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:[Object(v.jsx)("div",{className:"text-gray-500",children:"Organization location"}),Object(v.jsx)("div",{className:"font-semibold",children:this.state.training_provider.location})]})]}),!1===this.state.loading&&null!==this.state.training_provider&&Object(v.jsxs)("div",{className:"my-2 bg-white rounded-md grid grid-cols-12 gap-2 pb-2",children:[Object(v.jsx)("div",{className:"col-span-12 font-bold text-lg px-3 py-4 border-b mb-3",children:"Files & Documents"}),Object(v.jsx)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:Object(v.jsxs)("div",{onClick:function(){return null!==e.state.training_provider&&e.setState({view_file:{path:"".concat(m.i).concat(e.state.training_provider.rgb_certificate_file_name),title:"View RGB certificate",type:"RGB"}})},className:"flex flex-row items-center justify-between gap-3 w-full bg-gray-100 rounded-md border border-gray-300 p-3 cursor-pointer hover:border-primary-300 hover:bg-primary-100 hover:text-primary-800 group",children:[Object(v.jsxs)("div",{className:"flex flex-row items-center gap-3 w-full",children:[Object(v.jsx)("div",{children:Object(v.jsx)(j.j,{className:"text-4xl text-gray-400 group-hover:text-primary-700"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text-lg font-bold",children:"RGB certificate"}),Object(v.jsx)("div",{className:"text-sm text-gray-500 group-hover:text-accent-900",children:"Click to preview this file"})]})]}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"bg-gray-100 group-hover:bg-accent-900 rounded-full h-11 w-11 flex items-center justify-center",children:Object(v.jsx)(o.b,{className:"text-3xl text-gray-100 group-hover:text-white"})})})]})}),Object(v.jsx)("div",{className:"col-span-12 lg:col-span-6 px-4 pb-2",children:Object(v.jsxs)("div",{onClick:function(){return null!==e.state.training_provider&&e.setState({view_file:{path:"".concat(m.h).concat(e.state.training_provider.implementation_plan_file_name),title:"View Implementation plan",type:"IMPLEMENTATION"}})},className:"flex flex-row items-center justify-between gap-3 w-full bg-gray-100 rounded-md border border-gray-300 p-3 cursor-pointer hover:border-primary-300 hover:bg-primary-100 hover:text-primary-800 group",children:[Object(v.jsxs)("div",{className:"flex flex-row items-center gap-3 w-full",children:[Object(v.jsx)("div",{children:Object(v.jsx)(j.j,{className:"text-4xl text-gray-400 group-hover:text-primary-700"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text-lg font-bold",children:"Implementation plan"}),Object(v.jsx)("div",{className:"text-sm text-gray-500 group-hover:text-accent-900",children:"Click to preview this file"})]})]}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"bg-gray-100 group-hover:bg-accent-900 rounded-full h-11 w-11 flex items-center justify-center",children:Object(v.jsx)(o.b,{className:"text-3xl text-gray-100 group-hover:text-white"})})})]})})]})]})]}),null!==this.state.view_file&&null!==this.state.training_provider&&Object(v.jsx)(h.c,{backDrop:!0,close:function(){return e.setState({view_file:null})},backDropClose:!0,displayClose:!0,padding:{title:!0,body:!1,footer:void 0},widthSizeClass:h.a.extraLarge,theme:h.b.default,title:Object(v.jsx)("div",{className:"text-xl -mb-3",children:this.state.view_file.title}),children:Object(v.jsx)(g.a,{file_path:this.state.view_file.path,title:this.state.view_file.title,onClose:function(){return e.setState({view_file:null})},onUpdate:function(t){e.setState({loading:!0}),e.FC_GetTrainingProviderDetails()},type:this.state.view_file.type,application_id:this.state.training_provider.id,preview_only:!0})})]})}}]),i}(l.Component),f=Object(x.b)((function(e){return{auth:e.auth}}),{})(u)}}]);
//# sourceMappingURL=80.74e8b819.chunk.js.map