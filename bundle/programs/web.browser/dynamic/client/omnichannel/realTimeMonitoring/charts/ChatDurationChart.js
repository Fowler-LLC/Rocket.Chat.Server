function module(t,e,a){let n,r,l,i,s,o,c,u,d,h,m,p,f;a.link("@babel/runtime/helpers/extends",{default(t){n=t}},0),a.link("@babel/runtime/helpers/objectWithoutProperties",{default(t){r=t}},1),a.link("react",{default(t){l=t},useRef(t){i=t},useEffect(t){s=t}},0),a.link("./Chart",{default(t){o=t}},1),a.link("./useUpdateChartData",{useUpdateChartData(t){c=t}},2),a.link("../../../hooks/useEndpointDataExperimental",{useEndpointDataExperimental(t){u=t},ENDPOINT_STATES(t){d=t}},3),a.link("../../../contexts/TranslationContext",{useTranslation(t){h=t}},4),a.link("../../../../app/livechat/client/lib/chartHandler",{drawLineChart(t){m=t}},5),a.link("./getMomentChartLabelsAndData",{getMomentChartLabelsAndData(t){p=t}},6),a.link("./getMomentCurrentLabel",{getMomentCurrentLabel(t){f=t}},7);const[g,k]=p(),D=(t,e,a)=>m(t,e,[a("Avg_chat_duration"),a("Longest_chat_duration")],g,[k,k],{legends:!0,anim:!0,smallTicks:!0}),b=t=>{let{params:e,reloadRef:a}=t,m=r(t,["params","reloadRef"]);const p=h(),g=i(),k=i(),b=c({context:k,canvas:g,t:p,init:D}),{data:C,state:E,reload:x}=u("livechat/analytics/dashboards/charts/timings",e);a.current.chatDurationChart=x;const{chatDuration:{avg:v,longest:L}}=null!=C?C:{chatDuration:{avg:0,longest:0}};return s(()=>{const t=async()=>{k.current=await D(g.current,k.current,p)};t()},[p]),s(()=>{if(E===d.DONE){const t=f();b(t,[v,L])}},[v,L,E,p,b]),l.createElement(o,n({ref:g},m))};a.exportDefault(b)}

