function module(e,n,t){var o,l,c,i,a,r,u,m,s,f,g,d,E,k;t.link("@babel/runtime/helpers/extends",{default:function(e){o=e}},0),t.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){l=e}},1),t.export({DeleteWarningModal:function(){return C},SuccessModal:function(){return b},default:function(){return h}}),t.link("@rocket.chat/fuselage",{Button:function(e){c=e},ButtonGroup:function(e){i=e},Icon:function(e){a=e},Modal:function(e){r=e}},0),t.link("react",{default:function(e){u=e},useCallback:function(e){m=e}},1),t.link("../../../components/basic/Page",{default:function(e){s=e}},2),t.link("./EditIncomingWebhook",{default:function(e){f=e}},3),t.link("./EditOutgoingWebhook",{default:function(e){g=e}},4),t.link("../../../contexts/TranslationContext",{useTranslation:function(e){d=e}},5),t.link("../../../contexts/RouterContext",{useRouteParameter:function(e){E=e},useRoute:function(e){k=e}},6);var C=function(e){var n=e.onDelete,t=e.onCancel,o=l(e,["onDelete","onCancel"]),m=d();return u.createElement(r,o,u.createElement(r.Header,null,u.createElement(a,{color:"danger",name:"modal-warning",size:20}),u.createElement(r.Title,null,m("Are_you_sure")),u.createElement(r.Close,{onClick:t})),u.createElement(r.Content,{fontScale:"p1"},m("Integration_Delete_Warning")),u.createElement(r.Footer,null,u.createElement(i,{align:"end"},u.createElement(c,{ghost:!0,onClick:t},m("Cancel")),u.createElement(c,{primary:!0,danger:!0,onClick:n},m("Delete")))))},b=function(e){var n=e.onClose,t=l(e,["onClose"]),o=d();return u.createElement(r,t,u.createElement(r.Header,null,u.createElement(a,{color:"success",name:"checkmark-circled",size:20}),u.createElement(r.Title,null,o("Deleted")),u.createElement(r.Close,{onClick:n})),u.createElement(r.Content,{fontScale:"p1"},o("Your_entry_has_been_deleted")),u.createElement(r.Footer,null,u.createElement(i,{align:"end"},u.createElement(c,{primary:!0,onClick:n},o("Ok")))))};function h(e){var n=o({},e),t=d(),l=k("admin-integrations"),r=E("type"),C=E("id"),b=m((function(){l.push({})}),[l]),h=m((function(){l.push({context:"history",type:"outgoing",id:C})}),[C,l]);return u.createElement(s,o({flexDirection:"column"},n),u.createElement(s.Header,{title:t("incoming"===r?"Integration_Incoming_WebHook":"Integration_Outgoing_WebHook")},u.createElement(i,null,u.createElement(c,{onClick:b},u.createElement(a,{name:"back",size:"x16"})," ",t("Back")),"outgoing"===r&&u.createElement(c,{onClick:h},t("History")))),u.createElement(s.ScrollableContentWithShadow,null,"outgoing"===r&&u.createElement(g,{integrationId:C,key:"outgoing"})||"incoming"===r&&u.createElement(f,{integrationId:C,key:"incoming"})))}}

