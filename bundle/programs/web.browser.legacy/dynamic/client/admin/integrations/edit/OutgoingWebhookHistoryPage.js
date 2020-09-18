function module(e,t,n){var l,r,a,o,i,c,u,s,m,E,g,_,f,h,d,p,b,w,y,k,H,R,S,C,x,I,L,T;function O(e){var t=e.data,n=e.onChange,l=o(e,["data","onChange"]),r=y(),c=R("replayOutgoingIntegration"),s=t._id,f=t._createdAt,d=t._updatedAt,b=t.httpResult,w=t.event,S=t.step,C=t.httpCallData,x=t.data,I=t.prepareSentMessage,T=t.processSentMessage,O=t.url,P=t.httpError,M=t.errorStack,D=t.error,W=t.integration._id,v=p((function(e){e.stopPropagation(),c({integrationId:W,historyId:s}),n()}),[s,W,n,c]),N=L(),j=k("json",JSON.stringify(I||"",null,2)),A=k("json",JSON.stringify(T||"",null,2)),F=k("json",JSON.stringify(C||"",null,2)),J=k("json",JSON.stringify(P||"",null,2)),B=k("json",JSON.stringify(b||"",null,2)),G=k("json",JSON.stringify(M||"",null,2));return h.createElement(E.Item,a({title:h.createElement(m,{display:"inline-flex",w:"full",flexDirection:"row",justifyContent:"space-between"},h.createElement(m,{display:"flex",flexDirection:"row",alignItems:"center"},h.createElement(u,{name:"info-circled",size:"x16",mie:"x4"}),N(f)),h.createElement(i,{ghost:!0,onClick:v},r("Replay")))},l),h.createElement(_,null,h.createElement(g,null,h.createElement(g.Label,null,r("Status")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,r(D?"Failure":"Success"))))),h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Time_Triggered")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,f)))),h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Time_Ended_Or_Error")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,d)))),h.createElement(g,null,h.createElement(g.Label,null,r("Event_Trigger")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,r(H.outgoingEvents[w].label))))),h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Trigger_Step")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,S)))),h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Data_Passed_To_Trigger")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:k("json",JSON.stringify(x,null,2))}}))))),I&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Messages_Sent_From_Prepare_Script")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:j}}))))),T&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Messages_Sent_From_Process_Script")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:A}}))))),O&&h.createElement(g,null,h.createElement(g.Label,null,r("URL")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("code",null,O)))),C&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Data_Passed_To_URL")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:F}}))))),P&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Http_Response_Error")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:J}}))))),b&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Http_Response")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:B}}))))),M&&h.createElement(g,null,h.createElement(g.Label,null,r("Integration_Outgoing_WebHook_History_Error_Stacktrace")),h.createElement(g.Row,null,h.createElement(m,{withRichContent:!0,w:"full"},h.createElement("pre",null,h.createElement("code",{dangerouslySetInnerHTML:{__html:G}})))))))}function P(e){var t=e.data,n=e.state,l=e.onChange,r=o(e,["data","state","onChange"]),i=y();return t&&n!==C.LOADING?t.history.length<1?h.createElement(m,a({mbs:"x16"},r),i("Integration_Outgoing_WebHook_No_History")):h.createElement(h.Fragment,null,h.createElement(E,{w:"full",maxWidth:"x600",alignSelf:"center",key:"content"},t.history.map((function(e){return h.createElement(O,{data:e,key:e._id,onChange:l})})))):h.createElement(m,a({w:"full",pb:"x24"},r),h.createElement(s,{mbe:"x4"}),h.createElement(s,{mbe:"x8"}),h.createElement(s,{mbe:"x4"}),h.createElement(s,{mbe:"x8"}),h.createElement(s,{mbe:"x4"}),h.createElement(s,{mbe:"x8"}))}function M(e){var t=T(),n=y(),o=b(),s=r(o,2),m=s[0],E=s[1],g=b(),_=r(g,2),k=_[0],H=_[1],C=b(),L=r(C,2),O=L[0],M=L[1],D=p((function(){E(new Date)}),[]),W=x("admin-integrations"),v=R("clearIntegrationHistory"),N=function(){function e(){return l.async(function(){function e(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.awrap(v());case 3:t({type:"success",message:n("Integration_History_Cleared")}),D(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"error",message:e.t0});case 10:case"end":return e.stop()}}return e}(),null,null,[[0,7]],Promise)}return e}(),j=function(){W.push({})},A=I("id"),F=d((function(){return{id:A,count:O,offset:k}}),[A,O,k,m]),J=S("integrations.history",F),B=J.data,G=J.state,z=p((function(e){var t=e.count,l=e.current,r=e.itemsPerPage;return n("Showing results %s - %s of %s",l+1,Math.min(l+r,t),t)}),[n]);return h.createElement(w,a({flexDirection:"column"},e),h.createElement(w.Header,{title:n("Integration_Outgoing_WebHook_History")},h.createElement(c,null,h.createElement(i,{onClick:j},h.createElement(u,{name:"back",size:"x16"})," ",n("Back")),h.createElement(i,{primary:!0,danger:!0,onClick:N,disabled:!(B&&B.history.length>0)},h.createElement(u,{name:"trash"})," ",n("clear_history")))),h.createElement(w.ScrollableContentWithShadow,null,h.createElement(P,{key:"historyContent",data:B,state:G,onChange:D}),h.createElement(f,{current:k,itemsPerPage:O,itemsPerPageLabel:n("Items_per_page:"),showingResultsLabel:z,count:B&&B.total||0,onSetItemsPerPage:M,onSetCurrent:H})))}n.link("@babel/runtime/regenerator",{default:function(e){l=e}},0),n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){r=e}},1),n.link("@babel/runtime/helpers/extends",{default:function(e){a=e}},2),n.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){o=e}},3),n.link("@rocket.chat/fuselage",{Button:function(e){i=e},ButtonGroup:function(e){c=e},Icon:function(e){u=e},Skeleton:function(e){s=e},Box:function(e){m=e},Accordion:function(e){E=e},Field:function(e){g=e},FieldGroup:function(e){_=e},Pagination:function(e){f=e}},0),n.link("react",{default:function(e){h=e},useMemo:function(e){d=e},useCallback:function(e){p=e},useState:function(e){b=e}},1),n.link("../../../components/basic/Page",{default:function(e){w=e}},2),n.link("../../../contexts/TranslationContext",{useTranslation:function(e){y=e}},3),n.link("../../../hooks/useHighlightedCode",{useHighlightedCode:function(e){k=e}},4),n.link("../../../../app/integrations/lib/rocketchat",{integrations:function(e){H=e}},5),n.link("../../../contexts/ServerContext",{useMethod:function(e){R=e}},6),n.link("../../../hooks/useEndpointDataExperimental",{useEndpointDataExperimental:function(e){S=e},ENDPOINT_STATES:function(e){C=e}},7),n.link("../../../contexts/RouterContext",{useRoute:function(e){x=e},useRouteParameter:function(e){I=e}},8),n.link("../../../hooks/useFormatDateAndTime",{useFormatDateAndTime:function(e){L=e}},9),n.link("../../../contexts/ToastMessagesContext",{useToastMessageDispatch:function(e){T=e}},10),n.exportDefault(M)}

