function module(e,n,t){var r,a,s,o,l,c,u,i,f,d,m,_,p,E,h,w,y;t.link("@babel/runtime/helpers/extends",{default:function(e){r=e}},0),t.link("@babel/runtime/regenerator",{default:function(e){a=e}},1),t.link("react",{default:function(e){s=e},useCallback:function(e){o=e},useEffect:function(e){l=e}},0),t.link("@rocket.chat/fuselage",{Box:function(e){c=e},Margins:function(e){u=e},PasswordInput:function(e){i=e},Field:function(e){f=e},FieldGroup:function(e){d=e},Button:function(e){m=e}},1),t.link("@rocket.chat/fuselage-hooks",{useLocalStorage:function(e){_=e}},2),t.link("../../../app/e2e/client/rocketchat.e2e",{e2e:function(e){p=e}},3),t.link("../../contexts/ToastMessagesContext",{useToastMessageDispatch:function(e){E=e}},4),t.link("../../contexts/ServerContext",{useMethod:function(e){h=e}},5),t.link("../../hooks/useForm",{useForm:function(e){w=e}},6),t.link("../../contexts/TranslationContext",{useTranslation:function(e){y=e}},7);var k=function(e){var n=y(),t=E(),k=_("public_key"),g=_("private_key"),x=h("e2e.resetOwnE2EKey"),v=w({password:"",passwordConfirm:""}),b=v.values,C=v.handlers,P=v.reset,S=b.password,M=b.passwordConfirm,T=C.handlePassword,K=C.handlePasswordConfirm,L=k&&g,D=S.trim().length>0,F=S!==M&&M.length>0?n("Passwords_do_not_match"):void 0,I=L&&!F&&M.length>0,R=o(function(){function e(){return a.async(function(){function e(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.awrap(p.changePassword(S));case 3:P(),t({type:"success",message:n("Encryption_key_saved_successfully")}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"error",message:e.t0});case 10:case"end":return e.stop()}}return e}(),null,null,[[0,7]],Promise)}return e}(),[t,S,P,n]),H=o(function(){function e(){var e;return a.async(function(){function r(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.awrap(x());case 3:(e=r.sent)&&t({type:"success",message:n("User_e2e_key_was_reset")}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:"error",message:r.t0});case 10:case"end":return r.stop()}}return r}(),null,null,[[0,7]],Promise)}return e}(),[t,x,n]);return l((function(){""===S.trim()&&K("")}),[K,S]),s.createElement(c,r({display:"flex",flexDirection:"column",alignItems:"flex-start",mbs:"x16"},e),s.createElement(u,{blockEnd:"x8"},s.createElement(c,{fontScale:"s2"},n("E2E_Encryption_Password_Change")),s.createElement(c,{dangerouslySetInnerHTML:{__html:n("E2E_Encryption_Password_Explanation")}}),s.createElement(d,{w:"full"},s.createElement(f,null,s.createElement(f.Label,null,n("New_encryption_password")),s.createElement(f.Row,null,s.createElement(i,{value:S,onChange:T,placeholder:n("New_Password_Placeholder"),disabled:!L})),!L&&s.createElement(f.Hint,null,n("EncryptionKey_Change_Disabled"))),D&&s.createElement(f,null,s.createElement(f.Label,null,n("Confirm_new_encryption_password")),s.createElement(i,{error:F,value:M,onChange:K,placeholder:n("Confirm_New_Password_Placeholder")}),s.createElement(f.Error,null,F))),s.createElement(m,{primary:!0,disabled:!I,onClick:R},n("Save_changes")),s.createElement(c,{fontScale:"s2",mbs:"x16"},n("Reset_E2E_Key")),s.createElement(c,{dangerouslySetInnerHTML:{__html:n("E2E_Reset_Key_Explanation")}}),s.createElement(m,{onClick:H},n("Reset_E2E_Key"))))};t.exportDefault(k)}

