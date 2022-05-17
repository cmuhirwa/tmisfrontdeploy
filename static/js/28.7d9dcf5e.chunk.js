(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[28],{123:function(o,s,e){"use strict";var t=e(4),i=e(40),c=e(6),n=e(35),a=e(26),l=e(27),r=e(28),h=e(29),d=e(3),p=e.n(d),u=e(2),b=e(11),j=e(31),x=e(128),m=e(13),f=e(5),v=e.n(f),g=e(8),_=e(18),O=e(25),S=e(9),w=e(1),y=function(o){Object(r.a)(e,o);var s=Object(h.a)(e);function e(o){var l;return Object(a.a)(this,e),(l=s.call(this,o)).addPositionToSchool=function(o){l.setState({schoolPositionsTemp:[o].concat(Object(n.a)(l.state.schoolPositionsTemp.filter((function(s){return s.position_id!==o.position_id}))))})},l.addSchoolPositions=Object(c.a)(p.a.mark((function o(){var s,e,c,n;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!0!==window.confirm("Are you sure do you want to add these positions?")){o.next=23;break}if(!(l.state.schoolPositionsTemp.length>0&&void 0===l.props.school?l.props.auth.school:l.props.school)){o.next=23;break}Object(g.a)(),s=[],l.setState({loading:!0}),e=Object(i.a)(l.state.schoolPositionsTemp);try{for(e.s();!(c=e.n()).done;)n=c.value,s.push({school_code:void 0===l.props.school?l.props.auth.school.school_code:l.props.school.school_code,position_code:n.position_code})}catch(a){e.e(a)}finally{e.f()}return console.log("Positions codes: ",s),o.prev=8,o.next=11,v.a.post("".concat(m.c,"/schoolposition/assign"),s);case 11:l.props.appendPositionsToSchool(l.state.schoolPositionsTemp),l.setState({schoolPositionsTemp:[]}),l.setState({loading:!1}),l.setState({success:"Positions added successfully!",error:""}),alert("Positions added successfully!"),o.next=23;break;case 18:o.prev=18,o.t0=o.catch(8),l.setState({loading:!1}),l.setState({success:"",error:Object(S.a)(o.t0)}),console.log("Err: ",Object(t.a)({},o.t0));case 23:case"end":return o.stop()}}),o,null,[[8,18]])}))),l.RemoveSchoolPosition=function(){var o=Object(c.a)(p.a.mark((function o(s,e){var i;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(""===e||!0!==window.confirm("Are you sure do you want to remove this position")){o.next=15;break}return l.setState({loading:!0}),o.prev=2,o.next=5,v.a.post("".concat(m.c,"/schoolposition/delete/").concat(s),{school_code:e});case 5:i=o.sent,console.log("Delete status: ",i.status),200===i.status?(l.setState({success:"Positions added successfully!",error:""}),l.props.removePositionsToSchool(s)):l.setState({success:"",error:"Something went wrong! try again"}),o.next=15;break;case 10:o.prev=10,o.t0=o.catch(2),l.setState({success:"",error:Object(S.a)(o.t0)}),l.setState({loading:!1}),console.log("Err: ",Object(t.a)({},o.t0));case 15:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(s,e){return o.apply(this,arguments)}}(),l.state={searchPositionValue:"",schoolPositionsTemp:[],edit:!1,loading:!1,success:"",error:""},l}return Object(l.a)(e,[{key:"render",value:function(){var o,s,e=this;return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"bg-white dark:bg-dark-800 p-3 rounded",children:[Object(w.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[Object(w.jsxs)("div",{className:"flex flex-col",children:[Object(w.jsx)("span",{className:"text-2xl font-bold text-gray-600",children:!0===this.state.edit?"Assign positions to school":"School positions list"}),Object(w.jsx)("div",{children:Object(w.jsx)(O.a,{onClick:function(){return e.setState({edit:!e.state.edit})},theme:!0===this.state.edit?"default":"accent",children:!0===this.state.edit?"Back to list":"Add new positions"})})]}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{onClick:function(){return e.props.close&&e.props.close()},className:"bg-gray-100 hover:bg-yellow-100 flex items-center justify-center p-1 cursor-pointer rounded-full",children:Object(w.jsx)(b.h,{className:"text-3xl"})})})]}),""!==this.state.success&&Object(w.jsx)("div",{onClick:function(){return e.setState({success:""})},className:"bg-green-600 text-white font-bold pl-4 pr-2 py-2 text-lg rounded-md my-2 fixed right-10 cursor-pointer shadow-xl animate__animated animate__bounceInRight",children:Object(w.jsxs)("div",{className:"flex flex-row justify-between items-center gap-8",children:[Object(w.jsxs)("div",{children:["Success: ",this.state.success]}),Object(w.jsx)("div",{children:Object(w.jsx)(b.h,{className:"text-2xl text-red-600 bg-red-100 rounded-full"})})]})}),""!==this.state.error&&Object(w.jsx)("div",{onClick:function(){return e.setState({error:""})},className:"bg-red-600 text-white font-bold pl-4 pr-2 py-2 text-lg rounded-md my-2 fixed right-10 cursor-pointer shadow-xl animate__animated animate__bounceInRight",children:Object(w.jsxs)("div",{className:"flex flex-row justify-between items-center gap-8",children:[Object(w.jsxs)("div",{children:["Error: ",this.state.error]}),Object(w.jsx)("div",{children:Object(w.jsx)(b.h,{className:"text-2xl text-red-600 bg-red-100 rounded-full"})})]})}),Object(w.jsxs)("div",{className:"grid md:grid-cols-".concat(!0===this.state.edit?"2":"1"),children:[Object(w.jsxs)("div",{className:"col-span-1 border-r pr-2 ".concat(!0===this.state.edit?"":"hidden"),children:[Object(w.jsx)("div",{className:"",children:Object(w.jsx)(j.a,{onChange:function(o){return e.setState({searchPositionValue:o.target.value})},error:"",placeholder:"Search position...",value:this.state.searchPositionValue,type:"search",name:"post",label:"Search"})}),Object(w.jsx)("div",{className:"h-screen overflow-y-auto",children:0===Object(_.f)(this.props.positions,this.state.searchPositionValue).length?Object(w.jsx)("div",{children:"No positions found!"}):Object(_.f)(this.props.positions,this.state.searchPositionValue).filter((function(o){var s;return o.position_id!==(null===(s=e.state.schoolPositionsTemp.find((function(s){return s.position_id===o.position_id})))||void 0===s?void 0:s.position_id)})).map((function(o,s){return Object(w.jsxs)("div",{className:"border border-gray-300 px-3 py-2 flex flex- justify-between group bg-white hover:bg-blue-50 hover:border-blue-300 gap-3  items-center cursor-pointer my-1 rounded",onClick:function(){e.addPositionToSchool(o)},children:[Object(w.jsx)("div",{className:"flex flex-col",children:Object(w.jsxs)("span",{className:"text-base font-bold text-gray-700 group-hover:text-primary-800",children:[o.position_name,"(",o.qualification_name,")"]})}),Object(w.jsx)("div",{className:"",children:Object(w.jsx)("div",{className:"bg-blue-100 text-primary px-3 py-1 rounded cursor-pointer text-base text-primary-800 group-hover:text-white group-hover:bg-primary-800",children:"Select"})})]},s+1)}))})]}),Object(w.jsxs)("div",{className:"col-span-1 px-3",children:[" ",Object(w.jsxs)("div",{className:"flex flex-col border-b pb-3 border-accent-900",children:[Object(w.jsx)("span",{children:"School"}),Object(w.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[Object(w.jsxs)("span",{className:"text-accent-900 text-xl font-bold",children:[void 0===this.props.school?null===(o=this.props.auth.school)||void 0===o?void 0:o.school_name:this.props.school.school_name," ","(",void 0===this.props.school?null===(s=this.props.auth.school)||void 0===s?void 0:s.school_code:this.props.school.school_code,")"]}),Object(w.jsx)("div",{className:"font-bold text-2xl",children:[].concat(Object(n.a)(this.state.schoolPositionsTemp),Object(n.a)(this.props.schoolPositions)).length})]})]}),Object(w.jsx)("div",{className:"mt-3",children:0===[].concat(Object(n.a)(this.state.schoolPositionsTemp),Object(n.a)(this.props.schoolPositions)).length?Object(w.jsxs)("div",{className:"flex flex-col bg-gray-100 w-full justify-center items-center rounded-md p-4",children:[Object(w.jsx)("div",{className:"text-7xl text-gray-400",children:Object(w.jsx)(x.a,{})}),Object(w.jsx)("span",{className:"text-3xl text-black",children:"School positions not found"}),Object(w.jsx)("span",{className:"text-sm text-gray-600",children:"This school has no positions assigned to it. Please select positions"})]}):Object(w.jsxs)("div",{children:[0!==this.state.schoolPositionsTemp.length&&Object(w.jsx)("div",{className:"text-xl text-primary-800 my-3 font-bold",children:"New pending"}),this.state.schoolPositionsTemp.map((function(o,s){return Object(w.jsx)("div",{className:"border rounded-md px-3 py-2 mb-2 group cursor-pointer ".concat(void 0!==e.state.schoolPositionsTemp.find((function(s){return s.position_id===o.position_id}))?"bg-yellow-50 border-yellow-400":"bg-blue-50 border-blue-400 hover:bg-blue-100"," "),children:Object(w.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[Object(w.jsxs)("span",{className:"text-lg font-bold",children:[o.position_name," (",o.qualification_name,")"]}),Object(w.jsx)("div",{className:"",children:Object(w.jsx)("div",{onClick:function(){e.setState({schoolPositionsTemp:e.state.schoolPositionsTemp.filter((function(s){return s.position_id!==o.position_id}))})},className:"bg-white text-accent-900 px-3 py-1 rounded cursor-pointer text-base border border-yellow-400",children:"Remove"})})]})},s+1)})),0!==this.state.schoolPositionsTemp.length&&Object(w.jsx)("div",{children:Object(w.jsx)("div",{onClick:function(){e.addSchoolPositions()},className:"bg-primary-800 text-white hover:bg-blue-900 px-4 py-2 rounded w-max cursor-pointer",children:"Submit positions"})}),0!==this.props.schoolPositions.length&&Object(w.jsx)("div",{className:"font-bold text-lg text-gray-500 my-3",children:"List of school position"}),this.props.schoolPositions.map((function(o,s){return Object(w.jsxs)("div",{className:"border rounded-md px-3 py-2 mb-2 group cursor-pointer ".concat(void 0!==e.state.schoolPositionsTemp.find((function(s){return s.position_code===o.position_code}))?"bg-yellow-50 border-yellow-400":"bg-blue-50 border-blue-400 hover:bg-blue-100"," flex flex-row items-center justify-between gap-4"),children:[Object(w.jsx)("div",{className:"",children:Object(w.jsx)("div",{className:"flex flex-row items-center justify-between",children:Object(w.jsxs)("span",{className:"text-lg font-bold",children:[o.position_name," (",o.qualification_name,")"]})})}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{onClick:function(){return e.RemoveSchoolPosition(o.school_has_position_id,o.school_code)},className:"bg-white border border-white text-red-800 group-hover:border-red-500 px-3 py-2 font-bold text-center rounded",children:"Remove"})})]},s+1)}))]})})]})]})]})})}}]),e}(u.Component);s.a=y},155:function(o,s,e){"use strict";e.r(s),e.d(s,"_AssignSchoolPosition",(function(){return b})),e.d(s,"AssignSchoolPosition",(function(){return j}));var t=e(26),i=e(27),c=e(28),n=e(29),a=e(2),l=e(30),r=e(123),h=e(16),d=e(12),p=e(48),u=e(1),b=function(o){Object(c.a)(e,o);var s=Object(n.a)(e);function e(o){var i;return Object(t.a)(this,e),(i=s.call(this,o)).componentDidMount=function(){null===i.props.basic.positions&&i.props.FC_GetAllPositions((function(o,s){i.setState({loading_data:!0}),!0===o&&i.setState({loading_data:!1}),console.log(o)})),i.props.basic.academic_calender&&i.props.auth.school&&Object(d.B)(i.props.auth.school.school_code,i.props.basic.academic_calender.academic_year_id,(function(o,s,e){var t;null!==s&&(i.setState({loading_data:!0}),!0===o&&null!==i.props.auth.school&&(i.setState({schoolPositionsShow:{school_code:null===(t=i.props.auth.school)||void 0===t?void 0:t.school_code,school_id:i.props.auth.school.school_code,school_positions:s.school_positions,school:{school_id:i.props.auth.school.school_code,school_code:i.props.auth.school.school_code,school_name:i.props.auth.school.school_name,school_category:i.props.auth.school.schoolcategory,school_status:i.props.auth.school.schoolstatus,region_code:i.props.auth.school.regioncode}}}),i.setState({loading_data:!1})))}))},i.state={loading_data:!1,schoolPositionsShow:null},i}return Object(i.a)(e,[{key:"render",value:function(){var o=this;return!0===this.state.loading_data||null===this.props.basic.positions||null===this.state.schoolPositionsShow?Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"mx-auto p-8 flex flex-col items-center justify-center",children:[Object(u.jsx)("div",{children:"Loading, please wait..."}),Object(u.jsx)(p.a,{})]})}):Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"",children:null!==this.state.schoolPositionsShow&&null!==this.props.basic.positions&&Object(u.jsx)(r.a,{auth:this.props.auth,positions:this.props.basic.positions,schoolPositions:this.state.schoolPositionsShow.school_positions,school:this.state.schoolPositionsShow.school,appendPositionsToSchool:function(s){o.state.schoolPositionsShow&&o.props.basic.academic_calender&&Object(d.B)(o.state.schoolPositionsShow.school_code,o.props.basic.academic_calender.academic_year_id,(function(s,e,t){null!==e&&(o.setState({loading_data:!0}),!0===s&&(o.state.schoolPositionsShow&&o.setState({schoolPositionsShow:{school_code:o.state.schoolPositionsShow.school_code,school_id:o.state.schoolPositionsShow.school_id,school_positions:e.school_positions,school:o.state.schoolPositionsShow.school}}),o.setState({loading_data:!1})))}))},removePositionsToSchool:function(s){o.state.schoolPositionsShow&&o.props.basic.academic_calender&&Object(d.B)(o.state.schoolPositionsShow.school_code,o.props.basic.academic_calender.academic_year_id,(function(s,e,t){null!==e&&(o.setState({loading_data:!0}),!0===s&&(o.state.schoolPositionsShow&&o.setState({schoolPositionsShow:{school_code:o.state.schoolPositionsShow.school_code,school_id:o.state.schoolPositionsShow.school_id,school_positions:e.school_positions,school:o.state.schoolPositionsShow.school}}),o.setState({loading_data:!1})))}))},close:function(){}})})})}}]),e}(a.Component),j=Object(h.b)((function(o){return{auth:o.auth,basic:o.basic,schoolHierarchyStore:o.schoolHierarchyStore}}),{FC_GetAllPositions:d.j,FC_AllSchoolHierarchyDetails:d.c})(b)}}]);
//# sourceMappingURL=28.7d9dcf5e.chunk.js.map