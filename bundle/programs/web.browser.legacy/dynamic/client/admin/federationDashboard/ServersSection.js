function module(e,n,t){var l,o,i,a,r,u;function c(){var e,n,t=r("federation:getServers",[],1e4),c=l(t,2),d=c[0],f;return c[1]===u.LOADING?a.createElement(i,{align:"center"}):0===(null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.length)?null:a.createElement(o,{withRichContent:!0},a.createElement("ul",null,null==d?void 0:null===(n=d.data)||void 0===n?void 0:n.map((function(e){var n=e.domain;return(a.createElement("li",{key:n},n))}))))}t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){l=e}},0),t.link("@rocket.chat/fuselage",{Box:function(e){o=e},Throbber:function(e){i=e}},0),t.link("react",{default:function(e){a=e}},1),t.link("../../contexts/ServerContext",{usePolledMethodData:function(e){r=e},AsyncState:function(e){u=e}},2),t.exportDefault(c)}

