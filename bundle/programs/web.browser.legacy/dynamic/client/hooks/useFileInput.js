function module(e,t,n){var u,r,i;n.export({useFileInput:function(){return c}}),n.link("@rocket.chat/fuselage-hooks",{useMutableCallback:function(e){u=e}},0),n.link("react",{useRef:function(e){r=e},useEffect:function(e){i=e}},1);var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/*",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image",c=r();i((function(){var u=document.createElement("input"),r=new FormData;u.setAttribute("type","file"),u.setAttribute("accept",t),u.setAttribute("style","display: none"),document.body.appendChild(u),c.current=u;var i=function(){r.append(n,u.files[0]),e(u.files[0],r)};return u.addEventListener("change",i,!1),function(){u.parentNode.removeChild(u)}}),[t,e]);var a=u((function(){return c.current.click()})),o=u((function(){c.current.value=""}));return[a,o]}}

