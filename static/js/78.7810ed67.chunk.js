(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[78],{592:function(t,e,s){"use strict";s.r(e),s.d(e,"IncomingTransferReport",(function(){return _}));var c=s(19),i=s(20),r=s(21),n=s(22),l=s(4),a=s.n(l),d=s(15),o=s(36),j=s(356),h=s(23),b=s(53),x=s(92),u=s(24),O=s(486),m=s(1),g={error:"",target:null},f=function(t){Object(r.a)(s,t);var e=Object(n.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).state={loading_district:!1,districts:[],error:g,selected_district:null},i}return Object(i.a)(s,[{key:"selectDistrict",value:function(t){this.setState({selected_district:t})}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading_district:!0,error:g}),Object(j.b)((function(e,s,c){console.log({status:e,data:s,msg:c}),null!==s?t.setState({loading_district:!1,districts:s}):t.setState({loading_district:!1,districts:[],error:{target:"MAIN-ERROR",error:"Error: ".concat(c)}})}))}},{key:"render",value:function(){var t=this;return null!==this.state.selected_district?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"sticky top-1 z-50 mx-auto",children:Object(m.jsxs)(b.a,{className:"flex",children:[Object(m.jsx)("section",{children:Object(m.jsx)(h.a,{onClick:this.selectDistrict.bind(this,null),children:"Back"})}),Object(m.jsxs)("section",{className:"text-2xl pl-3 flex-1",children:[this.state.selected_district.district_name," district"]})]})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(O.a,{district_code:this.state.selected_district.district_code,district_name:this.state.selected_district.district_name+" district",hideActions:!0})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{className:"w-full flex",children:[Object(m.jsx)("section",{className:"flex-1",children:Object(m.jsx)(x.a,{children:"Incoming transfers"})}),Object(m.jsx)("section",{})]})}),Object(m.jsx)(b.a,{children:!0===this.state.loading_district?Object(m.jsx)("div",{className:"py-8 text-center",children:Object(m.jsx)(u.a,{})}):0===this.state.districts.length?Object(m.jsx)("div",{className:"text-center py-8",children:Object(m.jsx)(x.a,{children:"No results found"})}):Object(m.jsx)("div",{className:"w-full lg:grid lg:grid-cols-2 gap-2",children:this.state.districts.map((function(e){return Object(m.jsxs)("div",{onClick:t.selectDistrict.bind(t,e),className:"flex px-3 py-1 mb-3 lg:mb-0 hover:text-white hover:bg-yellow-600 hover:bg-opacity-50 rounded-md items-center bg-yellow-50 border-yellow-700 border",children:[Object(m.jsx)("h4",{className:"flex-1 text-lg",children:e.district_name}),Object(m.jsx)("section",{className:"text-2xl text-yellow-600",children:Object(m.jsx)(d.h,{})})]},e.district_code)}))})})]})}}]),s}(a.a.Component),_=Object(o.b)((function(t){return{auth:t.auth}}),{})(f)}}]);
//# sourceMappingURL=78.7810ed67.chunk.js.map