function module(e,t,s){let a,r,n,o,i,u,c,l;s.link("@babel/runtime/helpers/objectSpread2",{default(e){a=e}},0),s.export({useUpdateAvatar:()=>d}),s.link("react",{useMemo(e){r=e},useCallback(e){n=e}},0),s.link("../contexts/ServerContext",{useMethod(e){o=e}},1),s.link("./useEndpointAction",{useEndpointAction(e){i=e}},2),s.link("../contexts/TranslationContext",{useTranslation(e){u=e}},3),s.link("./useEndpointUpload",{useEndpointUpload(e){c=e}},4),s.link("../contexts/ToastMessagesContext",{useToastMessageDispatch(e){l=e}},5);const d=(e,t)=>{const s=u(),d=null==e?void 0:e.avatarUrl,v=s("Avatar_changed_successfully"),p=o("setAvatarFromService"),k=l(),A=r(()=>a({userId:t},d&&{avatarUrl:d}),[d,t]),f=r(()=>({userId:t}),[t]),m=c("users.setAvatar",A,v),x=i("POST","users.setAvatar",A,v),T=i("POST","users.resetAvatar",f,v),b=n(async()=>{if("reset"===e)return T();if(e.avatarUrl)return x();if(!e.service)return e instanceof FormData?(e.set("userId",t),m(e)):void 0;{const{blob:t,contentType:a,service:r}=e;try{await p(t,a,r),k({type:"success",message:v})}catch(s){k({type:"error",message:s})}}},[e,k,T,m,x,p,v,t]);return b}}

