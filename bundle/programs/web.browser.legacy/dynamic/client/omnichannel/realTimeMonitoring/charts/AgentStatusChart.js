function module(n,t,e){var a,r,u,i,l,o,c,f,s,d,v,p;e.link("@babel/runtime/helpers/extends",{default:function(n){a=n}},0),e.link("@babel/runtime/regenerator",{default:function(n){r=n}},1),e.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(n){u=n}},2),e.link("react",{default:function(n){i=n},useRef:function(n){l=n},useEffect:function(n){o=n}},0),e.link("./Chart",{default:function(n){c=n}},1),e.link("../../../hooks/useEndpointDataExperimental",{useEndpointDataExperimental:function(n){f=n},ENDPOINT_STATES:function(n){s=n}},2),e.link("../../../contexts/TranslationContext",{useTranslation:function(n){d=n}},3),e.link("../../../../app/livechat/client/lib/chartHandler",{drawDoughnutChart:function(n){v=n}},4),e.link("./useUpdateChartData",{useUpdateChartData:function(n){p=n}},5);var b=["Available","Away","Busy","Offline"],h={available:0,away:0,busy:0,offline:0},k=function(n,t,e){return v(n,e("Agents"),t,b,Object.values(h))},m=function(n){var t=n.params,e=n.reloadRef,v=u(n,["params","reloadRef"]),b=d(),m=l(),y=l(),x=p({context:y,canvas:m,t:b,init:k}),E=f("livechat/analytics/dashboards/charts/agents-status",t),D=E.data,w=E.state,A=E.reload;e.current.agentStatusChart=A;var C=null!=D?D:h,g=C.offline,O=void 0===g?0:g,T=C.available,N=void 0===T?0:T,P=C.away,R=void 0===P?0:P,S=C.busy,j=void 0===S?0:S;return o((function(){var n;(function(){function n(){return r.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.awrap(k(m.current,y.current,b));case 2:y.current=n.sent;case 3:case"end":return n.stop()}}return n}(),null,null,null,Promise)}return n})()()}),[b]),o((function(){w===s.DONE&&(x("Offline",[O]),x("Available",[N]),x("Away",[R]),x("Busy",[j]))}),[N,R,j,O,w,b,x]),i.createElement(c,a({ref:m},v))};e.exportDefault(m)}

