function module(e,t,n){let r,l,i,o,a,c,s,u,m,h,f,d;function p(){const e=r(["\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&.active:focus,\n\t\t\t\t&.active:hover {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-hover);\n\t\t\t\t}\n\n\t\t\t\t&.active {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-active);\n\t\t\t\t}\n\t\t\t"]);return p=function(){return e},e}n.link("@babel/runtime/helpers/taggedTemplateLiteral",{default(e){r=e}},0),n.link("@babel/runtime/helpers/extends",{default(e){l=e}},1),n.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){i=e}},2),n.link("react",{default(e){o=e},useMemo(e){a=e}},0),n.link("@rocket.chat/css-in-js",{css(e){c=e}},1),n.link("@rocket.chat/fuselage",{Box(e){s=e},Scrollable(e){u=e},Icon(e){m=e}},2),n.link("../../contexts/TranslationContext",{useTranslation(e){h=e}},3),n.link("../../contexts/RouterContext",{useRoutePath(e){f=e}},4),n.link("./Buttons/ActionButton",{ActionButton(e){d=e}},5);const x=e=>{let{children:t}=e,n=i(e,["children"]);return(o.createElement(s,l({display:"flex",flexDirection:"column",h:"100vh"},n),t))},b=e=>{let{children:t}=e,n=i(e,["children"]);return(o.createElement(u,n,o.createElement(s,{display:"flex",flexDirection:"column",h:"full"},t)))},k=e=>{let{title:t,onClose:n,children:r}=e,a=i(e,["title","onClose","children"]);return(o.createElement(s,l({is:"header",display:"flex",flexDirection:"column",pb:"x16"},a),(t||n)&&o.createElement(s,{display:"flex",flexDirection:"row",alignItems:"center",pi:"x24",justifyContent:"space-between",flexGrow:1},t&&o.createElement(s,{color:"neutral-800",fontSize:"p1",fontWeight:"p1",flexShrink:1,withTruncatedText:!0},t),n&&o.createElement(d,{icon:"cross",onClick:n})),r))},g=e=>{let{href:t,active:n,children:r}=e,a=i(e,["href","active","children"]);return(o.createElement(s,l({is:"a",color:"default",pb:"x8",pi:"x24",href:t,className:[n&&"active",c(p())].filter(Boolean)},a),o.createElement(s,{mi:"neg-x4",display:"flex",flexDirection:"row",alignItems:"center"},r)))},v=e=>{let{permissionGranted:t,pathGroup:n,pathSection:r,icon:l,label:i,currentPath:c}=e;const u=a(()=>({group:n}),[n]),h=f(r,u),d=h===c||!1;return t&&!t()?null:o.createElement(x.GenericItem,{active:d,href:h,key:h},l&&o.createElement(m,{name:l,size:"x20",mi:"x4"}),o.createElement(s,{withTruncatedText:!0,fontScale:"p1",mi:"x4",color:"info"},i))},E=e=>{let{items:t,currentPath:n}=e;const r=h();return t.map(e=>{let{href:t,pathSection:l,i18nLabel:i,name:a,icon:c,permissionGranted:s,pathGroup:u}=e;return(o.createElement(x.NavigationItem,{permissionGranted:s,pathGroup:u,pathSection:t||l,icon:c,label:r(i||a),key:i||a,currentPath:n}))})};x.Content=b,x.Header=k,x.GenericItem=o.memo(g),x.NavigationItem=o.memo(v),x.ItemsAssembler=o.memo(E),n.exportDefault(x)}

