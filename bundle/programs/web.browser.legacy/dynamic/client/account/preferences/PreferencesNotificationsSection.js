function module(e,t,n){var i,o,a,l,c,r,u,s,f,m,_,d,N,E,p,k,h,b,g,D;n.link("@babel/runtime/helpers/extends",{default:function(e){i=e}},0),n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){o=e}},1),n.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){a=e}},2),n.link("react",{default:function(e){l=e},useCallback:function(e){c=e},useEffect:function(e){r=e},useState:function(e){u=e},useMemo:function(e){s=e}},0),n.link("@rocket.chat/fuselage",{Accordion:function(e){f=e},Field:function(e){m=e},Select:function(e){_=e},FieldGroup:function(e){d=e},ToggleSwitch:function(e){N=e},Button:function(e){E=e},Box:function(e){p=e}},1),n.link("../../../app/ui",{KonchatNotification:function(e){k=e}},2),n.link("../../contexts/TranslationContext",{useTranslation:function(e){h=e}},3),n.link("../../contexts/UserContext",{useUserPreference:function(e){b=e}},4),n.link("../../hooks/useForm",{useForm:function(e){g=e}},5),n.link("../../contexts/SettingsContext",{useSetting:function(e){D=e}},6);var w={all:"All_messages",mentions:"Mentions",nothing:"Nothing"},v={mentions:"Email_Notification_Mode_All",nothing:"Email_Notification_Mode_Disabled"},C=function(e){var t=e.onChange,n=a(e,["onChange"]),C=h(),x=u(),M=o(x,2),y=M[0],R=M[1],A=b("desktopNotificationRequireInteraction"),F=b("desktopNotifications"),T=b("mobileNotifications"),q=b("emailNotificationMode"),I=D("Accounts_Default_User_Preferences_desktopNotifications"),L=D("Accounts_Default_User_Preferences_mobileNotifications"),P=D("Accounts_AllowEmailNotifications"),S=g({desktopNotificationRequireInteraction:A,desktopNotifications:F,mobileNotifications:T,emailNotificationMode:q},t),j=S.values,U=S.handlers,B=j.desktopNotificationRequireInteraction,O=j.desktopNotifications,G=j.mobileNotifications,H=j.emailNotificationMode,K=U.handleDesktopNotificationRequireInteraction,W=U.handleDesktopNotifications,Y=U.handleMobileNotifications,z=U.handleEmailNotificationMode;r((function(){return R(window.Notification&&Notification.permission)}),[]);var J=c((function(){k.notify({payload:{sender:{username:"rocket.cat"}},title:C("Desktop_Notification_Test"),text:C("This_is_a_desktop_notification")})}),[C]),Q=c((function(){window.Notification&&Notification.requestPermission().then((function(e){return R(e)}))}),[]),V=s((function(){return Object.entries(w).map((function(e){var t=o(e,2),n=t[0],i=t[1];return[n,C(i)]}))}),[C]),X=s((function(){var e=V.slice();return e.unshift(["default",C("Default")+" ("+C(w[I])+")"]),e}),[I,V,C]),Z=s((function(){var e=V.slice();return e.unshift(["default",C("Default")+" ("+C(w[L])+")"]),e}),[L,V,C]),$=s((function(){var e=Object.entries(v).map((function(e){var t=o(e,2),n=t[0],i=t[1];return[n,C(i)]}));return e.unshift(["default",C("Default")+" ("+C(v[q])+")"]),e}),[C,q]);return l.createElement(f.Item,i({title:C("Notifications")},n),l.createElement(d,null,l.createElement(m,null,l.createElement(m.Label,null,C("Desktop_Notifications")),l.createElement(m.Row,null,"denied"===y&&C("Desktop_Notifications_Disabled"),"granted"===y&&l.createElement(l.Fragment,null,l.createElement(E,{primary:!0,onClick:J},C("Test_Desktop_Notifications"))),"denied"!==y&&"granted"!==y&&l.createElement(l.Fragment,null,l.createElement(E,{primary:!0,onClick:Q},C("Enable_Desktop_Notifications"))))),l.createElement(m,null,l.createElement(p,{display:"flex",flexDirection:"row",justifyContent:"spaceBetween",flexGrow:1},l.createElement(m.Label,null,C("Notification_RequireInteraction")),l.createElement(m.Row,null,l.createElement(N,{checked:B,onChange:K}))),l.createElement(m.Hint,null,C("Only_works_with_chrome_version_greater_50"))),l.createElement(m,null,l.createElement(m.Label,null,C("Notification_Desktop_Default_For")),l.createElement(m.Row,null,l.createElement(_,{value:O,onChange:W,options:X}))),l.createElement(m,null,l.createElement(m.Label,null,C("Notification_Mobile_Default_For")),l.createElement(m.Row,null,l.createElement(_,{value:G,onChange:Y,options:Z}))),l.createElement(m,null,l.createElement(m.Label,null,C("Email_Notification_Mode")),l.createElement(m.Row,null,l.createElement(_,{disabled:!P,value:H,onChange:z,options:$})),l.createElement(m.Hint,null,P&&C("You_need_to_verifiy_your_email_address_to_get_notications"),!P&&C("Email_Notifications_Change_Disabled")))))};n.exportDefault(C)}

