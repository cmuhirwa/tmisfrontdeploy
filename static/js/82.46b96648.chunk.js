(this.webpackJsonpTMIS=this.webpackJsonpTMIS||[]).push([[82],{599:function(t,e,i){"use strict";i.r(e),i.d(e,"TrainingsList",(function(){return S}));var n=i(41),a=i(19),r=i(20),s=i(21),l=i(22),c=i(4),d=i.n(c),o=i(42),g=i(36),u=i(13),h=i(47),j=i(23),b=i(53),_=i(92),x=i(24),p=i(480),m=i(481),O=i(453),f=i(1),v={target:null,msg:""},N=function(t){Object(s.a)(i,t);var e=Object(l.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t)).selectTrainingToEdit=function(t){r.setState({selected_training_edit:t})},r.clearError=function(){return setTimeout((function(){r.setState({alert:v})}),3e3)},r.createTrainingDraft=function(){var t;window.confirm("Are you sure you want to request for training application?")&&(r.setState({loading_create_training_draft:!0}),Object(u.q)((null===(t=r.props.auth.stakeholder)||void 0===t?void 0:t.development_partner_id)+"",(function(t,e,i){r.setState({loading_create_training_draft:!1,trainings:t&&e?[e].concat(Object(n.a)(r.state.trainings)):r.state.trainings,selected_training_edit:t&&e?e.id:r.state.selected_training_edit,alert:t?v:{target:"MAIN-ERROR",msg:"Error: ".concat(i)}}),r.clearError()})))},r.deleteTraining=function(t){window.confirm("Are you sure you want to delete the training?")&&(r.setState({delete_training:t.toString()}),Object(u.v)(t.toString(),(function(e,i){r.setState({delete_training:null,trainings:e?r.state.trainings.filter((function(e){return e.id.toString()!==t.toString()})):r.state.trainings,alert:e?{target:"MAIN-SUCCESS",msg:"Training has been deleted successfully!"}:{target:"MAIN-ERROR",msg:"Error: ".concat(i)}}),r.clearError()})))},r.state={loading:!0,alert:v,selected_training_edit:null,selected_training_details:null,trainings:[],loading_create_training_draft:!1,delete_training:null},r}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t,e;if(null===(t=this.props.auth.stakeholder)||void 0===t||!t.development_partner_id)return this.setState({loading:!1,alert:{msg:"No Training institution assigned to you",target:"MAIN-ERROR"}});this.getTrainings(null===(e=this.props.auth.stakeholder)||void 0===e?void 0:e.development_partner_id)}},{key:"getTrainings",value:function(t){var e=this;this.setState({loading:!0}),Object(u.P)(t,(function(t,i,n){e.setState({loading:!1,alert:t?v:{target:"MAIN-ERROR",msg:n},trainings:i}),e.clearError()}))}},{key:"render",value:function(){var t,e=this;return null!==this.state.selected_training_edit?Object(f.jsx)(p.a,{training_id:this.state.selected_training_edit,close:function(){var t;e.setState({selected_training_edit:null}),e.getTrainings((null===(t=e.props.auth.stakeholder)||void 0===t?void 0:t.development_partner_id)+"")}}):null!==this.state.selected_training_details?Object(f.jsx)(m.a,{deleteUpdate:function(){var t;e.setState({selected_training_details:null}),e.getTrainings((null===(t=e.props.auth.stakeholder)||void 0===t?void 0:t.development_partner_id)+"")},training_id:this.state.selected_training_details,close:function(){var t;e.setState({selected_training_details:null}),e.getTrainings((null===(t=e.props.auth.stakeholder)||void 0===t?void 0:t.development_partner_id)+"")},editTraining:function(t){return e.setState({selected_training_edit:t})}}):Object(f.jsxs)(f.Fragment,{children:["MAIN-ERROR"===this.state.alert.target&&Object(f.jsx)(h.a,{theme:"danger",fixed:!0,children:this.state.alert.msg}),"MAIN-SUCCESS"===this.state.alert.target&&Object(f.jsx)(h.a,{theme:"success",fixed:!0,children:this.state.alert.msg}),Object(f.jsx)("div",{className:"lg:sticky top-3 z-50 mb-4",children:Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"flex w-full items-center py-2",children:[Object(f.jsx)("div",{className:"pr-4 text-4xl",children:Object(f.jsx)(o.d,{})}),Object(f.jsxs)("div",{className:"flex-1",children:[Object(f.jsx)(_.a,{size:"md",children:"Trainings list"}),Object(f.jsx)("p",{className:"text-gray-600 text-sm",children:"Training institution"})]}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)(j.a,{size:"md",type:"button",onClick:this.createTrainingDraft.bind(this,(null===(t=this.props.auth.stakeholder)||void 0===t?void 0:t.development_partner_id)+""),theme:"success-light",loading:this.state.loading_create_training_draft,children:"New Training request"})})]})})}),Object(f.jsx)("div",{className:"container mx-auto px-2",children:Object(f.jsx)("div",{className:"bg-white p-1",children:Object(f.jsxs)("table",{className:"w-full",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"text-left  bg-yellow-100",children:[Object(f.jsx)("th",{className:"p-2 border",children:"#"}),Object(f.jsx)("th",{className:"p-2 border",children:"Title"}),Object(f.jsx)("th",{className:"p-2 border",children:"Training institution"}),Object(f.jsx)("th",{className:"p-2 border",children:"Area of intervention"}),Object(f.jsx)("th",{className:"p-2 border",children:"Start date"}),Object(f.jsx)("th",{className:"p-2 border",children:"End date"}),Object(f.jsx)("th",{className:"p-2 border w-10",children:"Status"})]})}),Object(f.jsxs)("tbody",{children:[Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{colSpan:19,children:[!0===this.state.loading&&Object(f.jsx)("div",{className:"mx-auto py-6 text-center",children:Object(f.jsx)("div",{className:"inline",children:Object(f.jsx)(x.a,{})})}),this.state.trainings.length<=0&&!1===this.state.loading&&Object(f.jsxs)("div",{className:"mx-auto py-8 text-center opacity-50",children:[Object(f.jsx)("h1",{className:"text-9xl text-center mx-auto",children:Object(f.jsx)(o.d,{className:"inline"})}),Object(f.jsx)("h2",{className:"text-2xl font-bold",children:"No Trainings found"}),Object(f.jsxs)("p",{className:"text-gray-500",children:["You can add a new training request ",Object(f.jsx)("br",{})," by clicking on ",Object(f.jsx)("u",{children:"Requesting new training"})]})]})]})}),this.state.trainings.map((function(t,i){return Object(f.jsx)(O.a,{i:i,training:t,viewDetails:function(t){return e.setState({selected_training_details:t.toString()})},deleteTraining:e.deleteTraining,update_loading:null,editTraining:function(t){return e.setState({selected_training_edit:t.toString()})},delete_loading:e.state.delete_training},i)}))]})]})})})]})}}]),i}(d.a.Component),S=Object(g.b)((function(t){return{auth:t.auth}}),{})(N)}}]);
//# sourceMappingURL=82.46b96648.chunk.js.map