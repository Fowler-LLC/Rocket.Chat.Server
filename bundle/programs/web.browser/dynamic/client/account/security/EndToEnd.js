function module(e,t,n){let a,s,l,r,o,c,i,_,d,m,u,E,p,h,y,w;n.link("@babel/runtime/helpers/extends",{default(e){a=e}},0),n.link("react",{default(e){s=e},useCallback(e){l=e},useEffect(e){r=e}},0),n.link("@rocket.chat/fuselage",{Box(e){o=e},Margins(e){c=e},PasswordInput(e){i=e},Field(e){_=e},FieldGroup(e){d=e},Button(e){m=e}},1),n.link("@rocket.chat/fuselage-hooks",{useLocalStorage(e){u=e}},2),n.link("../../../app/e2e/client/rocketchat.e2e",{e2e(e){E=e}},3),n.link("../../contexts/ToastMessagesContext",{useToastMessageDispatch(e){p=e}},4),n.link("../../contexts/ServerContext",{useMethod(e){h=e}},5),n.link("../../hooks/useForm",{useForm(e){y=e}},6),n.link("../../contexts/TranslationContext",{useTranslation(e){w=e}},7);const g=e=>{const t=w(),n=p(),g=u("public_key"),k=u("private_key"),f=h("e2e.resetOwnE2EKey"),{values:x,handlers:C,reset:b}=y({password:"",passwordConfirm:""}),{password:P,passwordConfirm:v}=x,{handlePassword:S,handlePasswordConfirm:M}=C,T=g&&k,K=P.trim().length>0,L=P!==v&&v.length>0?t("Passwords_do_not_match"):void 0,D=T&&!L&&v.length>0,F=l(async()=>{try{await E.changePassword(P),b(),n({type:"success",message:t("Encryption_key_saved_successfully")})}catch(e){n({type:"error",message:e})}},[n,P,b,t]),I=l(async()=>{try{const e=await f();e&&n({type:"success",message:t("User_e2e_key_was_reset")})}catch(e){n({type:"error",message:e})}},[n,f,t]);return r(()=>{""===P.trim()&&M("")},[M,P]),s.createElement(o,a({display:"flex",flexDirection:"column",alignItems:"flex-start",mbs:"x16"},e),s.createElement(c,{blockEnd:"x8"},s.createElement(o,{fontScale:"s2"},t("E2E_Encryption_Password_Change")),s.createElement(o,{dangerouslySetInnerHTML:{__html:t("E2E_Encryption_Password_Explanation")}}),s.createElement(d,{w:"full"},s.createElement(_,null,s.createElement(_.Label,null,t("New_encryption_password")),s.createElement(_.Row,null,s.createElement(i,{value:P,onChange:S,placeholder:t("New_Password_Placeholder"),disabled:!T})),!T&&s.createElement(_.Hint,null,t("EncryptionKey_Change_Disabled"))),K&&s.createElement(_,null,s.createElement(_.Label,null,t("Confirm_new_encryption_password")),s.createElement(i,{error:L,value:v,onChange:M,placeholder:t("Confirm_New_Password_Placeholder")}),s.createElement(_.Error,null,L))),s.createElement(m,{primary:!0,disabled:!D,onClick:F},t("Save_changes")),s.createElement(o,{fontScale:"s2",mbs:"x16"},t("Reset_E2E_Key")),s.createElement(o,{dangerouslySetInnerHTML:{__html:t("E2E_Reset_Key_Explanation")}}),s.createElement(m,{onClick:I},t("Reset_E2E_Key"))))};n.exportDefault(g)}

