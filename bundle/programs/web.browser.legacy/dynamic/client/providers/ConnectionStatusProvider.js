function module(e,n,t){var o,r,u,c,i;t.link("@babel/runtime/helpers/objectSpread2",{default:function(e){o=e}},0),t.export({ConnectionStatusProvider:function(){return l}}),t.link("meteor/meteor",{Meteor:function(e){r=e}},0),t.link("react",{default:function(e){u=e}},1),t.link("../contexts/ConnectionStatusContext",{ConnectionStatusContext:function(e){c=e}},2),t.link("../hooks/useReactiveValue",{useReactiveValue:function(e){i=e}},3);var a=function(){return o({},r.status(),{reconnect:r.reconnect})};function l(e){var n=e.children,t=i(a);return u.createElement(c.Provider,{children:n,value:t})}}

