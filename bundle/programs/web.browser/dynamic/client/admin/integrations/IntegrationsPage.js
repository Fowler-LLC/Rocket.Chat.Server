function module(e,t,n){let o,l,c,a,i,u,r,s,m,k,p,g,E,b;function d(){const e=m(),t=k("admin-integrations"),n=r(()=>{t.push({context:"new",type:"incoming"})},[t]),d=p("context");u(()=>{d||t.push({context:"webhook-incoming"})},[d,t]);const x=!["zapier","bots"].includes(d),f=r(()=>t.push({context:"webhook-incoming"}),[t]),h=r(()=>t.push({context:"webhook-outgoing"}),[t]),w=r(()=>t.push({context:"zapier"}),[t]),C=r(()=>t.push({context:"bots"}),[t]);return i.createElement(s,{flexDirection:"column"},i.createElement(s.Header,{title:e("Integrations")},i.createElement(l,null,i.createElement(o,{onClick:n},i.createElement(c,{name:"plus"})," ",e("New")))),i.createElement(a,null,i.createElement(a.Item,{selected:"webhook-incoming"===d,onClick:f},e("Incoming")),i.createElement(a.Item,{selected:"webhook-outgoing"===d,onClick:h},e("Outgoing")),i.createElement(a.Item,{selected:"zapier"===d,onClick:w},e("Zapier")),i.createElement(a.Item,{selected:"bots"===d,onClick:C},e("Bots"))),i.createElement(s.Content,null,"zapier"===d&&i.createElement(E,null),"bots"===d&&i.createElement(b,null),x&&i.createElement(g,{type:d})))}n.link("@rocket.chat/fuselage",{Button(e){o=e},ButtonGroup(e){l=e},Icon(e){c=e},Tabs(e){a=e}},0),n.link("react",{default(e){i=e},useEffect(e){u=e},useCallback(e){r=e}},1),n.link("../../components/basic/Page",{default(e){s=e}},2),n.link("../../contexts/TranslationContext",{useTranslation(e){m=e}},3),n.link("../../contexts/RouterContext",{useRoute(e){k=e},useRouteParameter(e){p=e}},4),n.link("./IntegrationsTable",{default(e){g=e}},5),n.link("./new/NewZapier",{default(e){E=e}},6),n.link("./new/NewBot",{default(e){b=e}},7),n.exportDefault(d)}

