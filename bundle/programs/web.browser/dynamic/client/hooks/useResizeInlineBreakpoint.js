function module(e,n,o){let i,t;o.export({useResizeInlineBreakpoint:()=>l}),o.link("react",{useMemo(e){i=e}},0),o.link("@rocket.chat/fuselage-hooks",{useResizeObserver(e){t=e}},1);const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const{ref:o,borderBoxSize:l}=t({debounceDelay:n}),r=l?l.inlineSize:0,s=i(()=>e.map(e=>!r||r>e),[r]);return[o,...s]}}

