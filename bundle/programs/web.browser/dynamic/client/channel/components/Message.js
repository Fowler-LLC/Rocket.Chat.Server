function module(e,t,n){let l,r,a,i,c,o,m,s;function u(){const e=l(["\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\tword-break: break-word;\n"]);return u=function(){return e},e}n.link("@babel/runtime/helpers/taggedTemplateLiteral",{default(e){l=e}},0),n.link("@babel/runtime/helpers/extends",{default(e){r=e}},1),n.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){a=e}},2),n.export({MessageSkeleton:()=>x,Container:()=>f,Header:()=>d,Username:()=>h,Timestamp:()=>b,Message:()=>E,BodyClamp:()=>k}),n.link("react",{default(e){i=e}},0),n.link("@rocket.chat/fuselage",{Box(e){c=e},Margins(e){o=e},Skeleton(e){m=e}},1),n.link("@rocket.chat/css-in-js",{css(e){s=e}},2);const x=i.memo((function e(t){return i.createElement(E,t,i.createElement(f,{mb:"neg-x2"},i.createElement(m,{variant:"rect",size:"x36"})),i.createElement(f,{width:"1px",mb:"neg-x4",flexGrow:1},i.createElement(d,null,i.createElement(m,{width:"100%"})),i.createElement(k,null,i.createElement(m,null),i.createElement(m,null)),i.createElement(c,{mi:"neg-x8",flexDirection:"row",display:"flex",alignItems:"baseline",mb:"x8"},i.createElement(o,{inline:"x4"},i.createElement(m,null),i.createElement(m,null),i.createElement(m,null)))))}));function f(e){let{children:t}=e,n=a(e,["children"]);return(i.createElement(c,r({"rcx-message__container":!0,display:"flex",mi:"x4",flexDirection:"column"},n),i.createElement(o,{block:"x2"},t)))}function d(e){let{children:t}=e;return(i.createElement(c,{"rcx-message__header":!0,display:"flex",flexGrow:0,flexShrink:1,withTruncatedText:!0},i.createElement(c,{mi:"neg-x2",display:"flex",flexDirection:"row",alignItems:"baseline",withTruncatedText:!0,flexGrow:1,flexShrink:1},i.createElement(o,{inline:"x2"}," ",t," "))))}function h(e){return i.createElement(c,r({"rcx-message__username":!0,color:"neutral-800",fontSize:"x14",fontWeight:"600",flexShrink:1,withTruncatedText:!0},e))}function b(e){let{ts:t}=e;return(i.createElement(c,{"rcx-message__time":!0,fontSize:"c1",color:"neutral-600",flexShrink:0,withTruncatedText:!0},t.toDateString?t.toDateString():t))}function g(e){return null!=e&&"function"==typeof e[Symbol.iterator]}function E(e){let{className:t}=e,n=a(e,["className"]);return(i.createElement(c,r({"rcx-contextual-message":!0,pi:"x20",pb:"x16",pbs:"x16",display:"flex"},n,{className:[...g(t)?t:[t]].filter(Boolean)})))}n.exportDefault(E);const p=s(u());function k(e){let{className:t}=e,n=a(e,["className"]);return(i.createElement(c,r({"rcx-message__body":!0,className:[...g(t)?t:[t],p].filter(Boolean),flexShrink:1,lineHeight:"1.45",minHeight:"40px"},n)))}}

