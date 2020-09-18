function module(e,l,t){let a,r,n,i,f,s,c,o,m,h,u,x,d,w,k,E,p,g,S,v,C,R,D,b,y;t.link("@babel/runtime/helpers/objectSpread2",{default(e){a=e}},0),t.link("react",{default(e){r=e},useRef(e){n=e},useState(e){i=e},useMemo(e){f=e},useEffect(e){s=e}},0),t.link("@rocket.chat/fuselage",{Box(e){c=e},Select(e){o=e},Field(e){m=e},Margins(e){h=e}},1),t.link("@rocket.chat/fuselage-hooks",{useMutableCallback(e){u=e}},2),t.link("../../components/basic/Page",{default(e){x=e}},3),t.link("./charts/ChatsChart",{default(e){d=e}},4),t.link("./charts/ChatsPerAgentChart",{default(e){w=e}},5),t.link("./charts/AgentStatusChart",{default(e){k=e}},6),t.link("./charts/ChatsPerDepartmentChart",{default(e){E=e}},7),t.link("./charts/ChatDurationChart",{default(e){p=e}},8),t.link("./charts/ResponseTimesChart",{default(e){g=e}},9),t.link("./overviews/ConversationOverview",{default(e){S=e}},10),t.link("./overviews/AgentsOverview",{default(e){v=e}},11),t.link("./overviews/ChatsOverview",{default(e){C=e}},12),t.link("./overviews/ProductivityOverview",{default(e){R=e}},13),t.link("../DepartmentAutoComplete",{default(e){D=e}},14),t.link("../../helpers/getDateRange",{getDateRange(e){b=e}},15),t.link("../../contexts/TranslationContext",{useTranslation(e){y=e}},16);const G=b(),I=()=>{const e=y(),[l,t]=i(5),[b,I]=i(""),A=n({}),F=f(()=>a({},b&&{departmentId:b}),[b]),O=f(()=>a({},F,{},G),[F]),M=u(()=>{Object.values(A.current).forEach(e=>{e()})});s(()=>{const e=setInterval(M,1e3*l);return()=>{clearInterval(e)}},[M,l]);const P=f(()=>[[5,r.createElement(r.Fragment,null,"5 ",e("seconds"))],[10,r.createElement(r.Fragment,null,"10 ",e("seconds"))],[30,r.createElement(r.Fragment,null,"30 ",e("seconds"))],[60,r.createElement(r.Fragment,null,"1 ",e("minute"))]],[e]);return(r.createElement(x,null,r.createElement(x.Header,{title:e("Real_Time_Monitoring")}),r.createElement(x.ScrollableContentWithShadow,null,r.createElement(h,{block:"x4"},r.createElement(c,{flexDirection:"row",display:"flex",justifyContent:"space-between",alignSelf:"center",w:"full"},r.createElement(m,{mie:"x4"},r.createElement(m.Label,null,e("Department")),r.createElement(m.Row,null,r.createElement(D,{placeholder:e("All"),value:b,onChange:I}))),r.createElement(m,{mis:"x4"},r.createElement(m.Label,null,e("Update_every")),r.createElement(m.Row,null,r.createElement(o,{options:P,onChange:u(e=>t(e)),value:l})))),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(S,{flexGrow:1,flexShrink:1,width:"50%",reloadRef:A,params:O})),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(d,{flexGrow:1,flexShrink:1,width:"50%",mie:"x2",reloadRef:A,params:O}),r.createElement(w,{flexGrow:1,flexShrink:1,width:"50%",mis:"x2",reloadRef:A,params:O})),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(C,{flexGrow:1,flexShrink:1,width:"50%",reloadRef:A,params:O})),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(k,{flexGrow:1,flexShrink:1,width:"50%",mie:"x2",reloadRef:A,params:O}),r.createElement(E,{flexGrow:1,flexShrink:1,width:"50%",mis:"x2",reloadRef:A,params:O})),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(v,{flexGrow:1,flexShrink:1,reloadRef:A,params:O})),r.createElement(c,{display:"flex",w:"full",flexShrink:1},r.createElement(p,{flexGrow:1,flexShrink:1,reloadRef:A,params:O})),r.createElement(c,{display:"flex",flexDirection:"row",w:"full",alignItems:"stretch",flexShrink:1},r.createElement(R,{flexGrow:1,flexShrink:1,reloadRef:A,params:O})),r.createElement(c,{display:"flex",w:"full",flexShrink:1},r.createElement(g,{flexGrow:1,flexShrink:1,reloadRef:A,params:O}))))))};t.exportDefault(I)}

