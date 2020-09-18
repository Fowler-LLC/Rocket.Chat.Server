function module(e,n,t){var o,i,l,u,a,c,r,s,f,m,d,h,g,w,E,N;t.link("@babel/runtime/helpers/extends",{default:function(e){o=e}},0),t.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){i=e}},1),t.link("react",{default:function(e){l=e},useMemo:function(e){u=e},useCallback:function(e){a=e}},0),t.link("@rocket.chat/fuselage",{Accordion:function(e){c=e},Field:function(e){r=e},Select:function(e){s=e},FieldGroup:function(e){f=e},ToggleSwitch:function(e){m=e},Tooltip:function(e){d=e},Box:function(e){h=e}},1),t.link("../../contexts/TranslationContext",{useTranslation:function(e){g=e}},2),t.link("../../contexts/UserContext",{useUserPreference:function(e){w=e}},3),t.link("../../hooks/useForm",{useForm:function(e){E=e}},4),t.link("../../../app/custom-sounds/client",{CustomSounds:function(e){N=e}},5);var p=function(){return u((function(){return N&&N.getList&&N.getList().map((function(e){var n,t;return[e._id,e.name]}))}),[])},C=function(e){var n=e.onChange,t=i(e,["onChange"]),N=g(),C=p(),v={newRoomNotification:w("newRoomNotification"),newMessageNotification:w("newMessageNotification"),muteFocusedConversations:w("muteFocusedConversations"),notificationsSoundVolume:w("notificationsSoundVolume")},x=E(v,n),k=x.values,b=x.handlers,M=k.newRoomNotification,F=k.newMessageNotification,R=k.muteFocusedConversations,S=k.notificationsSoundVolume,_=b.handleNewRoomNotification,L=b.handleNewMessageNotification,T=b.handleMuteFocusedConversations,V=b.handleNotificationsSoundVolume,y=a((function(e){return V(Math.max(0,Math.min(Number(e.currentTarget.value),100)))}),[V]);return l.createElement(c.Item,o({title:N("Sound")},t),l.createElement(f,null,u((function(){return l.createElement(r,null,l.createElement(r.Label,null,N("New_Room_Notification")),l.createElement(r.Row,null,l.createElement(s,{value:M,onChange:_,options:C})))}),[_,M,C,N]),u((function(){return l.createElement(r,null,l.createElement(r.Label,null,N("New_Message_Notification")),l.createElement(r.Row,null,l.createElement(s,{value:F,onChange:L,options:C})))}),[L,F,C,N]),u((function(){return l.createElement(r,{display:"flex",flexDirection:"row",justifyContent:"spaceBetween",flexGrow:1},l.createElement(r.Label,null,N("Mute_Focused_Conversations")),l.createElement(r.Row,null,l.createElement(m,{checked:R,onChange:T})))}),[T,R,N]),u((function(){return l.createElement(r,null,l.createElement(r.Label,null,N("Notifications_Sound_Volume")),l.createElement(r.Row,null,l.createElement(h,{is:"input",flexGrow:1,type:"range",value:S,onChange:y,min:"0",max:"100"}),l.createElement(d,{placement:"right-middle",mis:"x8"},S)))}),[S,y,N])))};t.exportDefault(C)}

