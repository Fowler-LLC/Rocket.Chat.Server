function module(t,e,a){let l,n,i,o,r,u,s,c,k;a.link("@babel/runtime/helpers/objectWithoutProperties",{default(t){l=t}},0),a.link("react",{default(t){n=t},useEffect(t){i=t},useState(t){o=t}},0),a.link("@rocket.chat/fuselage",{Skeleton(t){r=t}},1),a.link("../../../hooks/useEndpointDataExperimental",{ENDPOINT_STATES(t){u=t}},2),a.link("../../../contexts/TranslationContext",{useTranslation(t){s=t}},3),a.link("./CounterRow",{default(t){c=t}},4),a.link("./CounterItem",{default(t){k=t}},5);const d=t=>{let{data:e,state:a,initialData:d}=t,f=l(t,["data","state","initialData"]);const E=s(),[m,p]=o(d),{totalizers:D}=e||{totalizers:d};return i(()=>{a===u.DONE&&p(D)},[a,E,D]),n.createElement(c,f,m.map((t,e)=>{let{title:a,value:l}=t;return(n.createElement(k,{key:e,title:a?E(a):n.createElement(r,{width:"x60"}),count:l}))}))};a.exportDefault(d)}

