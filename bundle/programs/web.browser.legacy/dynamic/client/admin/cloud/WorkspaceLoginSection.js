function module(e,n,t){var r,c,a,o,u,s,i,l,f,p,d,h,m,k;function v(e){var n=e.onRegisterStatusChange,t=o(e,["onRegisterStatusChange"]),v=h(),x=k(),g=m("cloud:checkUserLoggedIn"),b=m("cloud:getOAuthAuthorizationUrl"),w=m("cloud:logout"),y=m("cloud:disconnectWorkspace"),C=l(p(!1)),E=a(C,2),_=E[0],P=E[1],S=l(p(!0)),T=a(S,2),A=T[0],D=T[1],R=function(){function e(){var e;return c.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return D(!0),n.prev=1,n.next=4,c.awrap(b());case 4:e=n.sent,window.location.href=e,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),x({type:"error",message:n.t0});case 11:return n.prev=11,D(!1),n.finish(11);case 14:case"end":return n.stop()}}return n}(),null,null,[[1,8,11,14]],Promise)}return e}(),B=function(){function e(){var e;return c.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return D(!0),n.prev=1,n.next=4,c.awrap(w());case 4:return n.next=6,c.awrap(g());case 6:e=n.sent,P(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),x({type:"error",message:n.t0});case 13:return n.prev=13,D(!1),n.finish(13);case 16:case"end":return n.stop()}}return n}(),null,null,[[1,10,13,16]],Promise)}return e}(),M=function(){function e(){var e;return c.async(function(){function t(t){for(;;)switch(t.prev=t.next){case 0:return D(!0),t.prev=1,t.next=4,c.awrap(y());case 4:if(e=t.sent){t.next=7;break}throw Error(v("An error occured disconnecting"));case 7:x({type:"success",message:v("Disconnected")}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),x({type:"error",message:t.t0});case 13:return t.prev=13,t.next=16,c.awrap(n&&n());case 16:return D(!1),t.finish(13);case 18:case"end":return t.stop()}}return t}(),null,null,[[1,10,13,18]],Promise)}return e}();return d((function(){var e;(function(){function e(){var e;return c.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return D(!0),n.prev=1,n.next=4,c.awrap(g());case 4:e=n.sent,P(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),x({type:"error",message:n.t0});case 11:return n.prev=11,D(!1),n.finish(11);case 14:case"end":return n.stop()}}return n}(),null,null,[[1,8,11,14]],Promise)}return e})()()}),[g,x,D,P]),f.createElement(u,r({is:"section"},t),f.createElement(u,{withRichContent:!0,color:"neutral-800"},f.createElement("p",null,v("Cloud_workspace_connected"))),f.createElement(i,null,_?f.createElement(s,{primary:!0,danger:!0,disabled:A,onClick:B},v("Cloud_logout")):f.createElement(s,{primary:!0,disabled:A,onClick:R},v("Cloud_login_to_cloud"))),f.createElement(u,{withRichContent:!0,color:"neutral-800"},f.createElement("p",null,v("Cloud_workspace_disconnect"))),f.createElement(i,null,f.createElement(s,{primary:!0,danger:!0,disabled:A,onClick:M},v("Disconnect"))))}t.link("@babel/runtime/helpers/extends",{default:function(e){r=e}},0),t.link("@babel/runtime/regenerator",{default:function(e){c=e}},1),t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){a=e}},2),t.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){o=e}},3),t.link("@rocket.chat/fuselage",{Box:function(e){u=e},Button:function(e){s=e},ButtonGroup:function(e){i=e}},0),t.link("@rocket.chat/fuselage-hooks",{useSafely:function(e){l=e}},1),t.link("react",{default:function(e){f=e},useState:function(e){p=e},useEffect:function(e){d=e}},2),t.link("../../contexts/TranslationContext",{useTranslation:function(e){h=e}},3),t.link("../../contexts/ServerContext",{useMethod:function(e){m=e}},4),t.link("../../contexts/ToastMessagesContext",{useToastMessageDispatch:function(e){k=e}},5),t.exportDefault(v)}

