function module(e,n,t){var i,u,l,o,c,r,a,s,f,m,d,b,k,p,E;t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){i=e}},0),t.link("react",{default:function(e){u=e},useCallback:function(e){l=e},useEffect:function(e){o=e},memo:function(e){c=e}},0),t.link("use-subscription",{useSubscription:function(e){r=e}},1),t.link("../../../app/ui-utils/client",{menu:function(e){a=e},SideNav:function(e){s=e},Layout:function(e){f=e}},2),t.link("../../contexts/TranslationContext",{useTranslation:function(e){m=e}},3),t.link("../../contexts/RouterContext",{useRoutePath:function(e){d=e},useCurrentRoute:function(e){b=e}},4),t.link("../../components/basic/Sidebar",{default:function(e){k=e}},5),t.link("../../providers/SettingsProvider",{default:function(e){p=e}},6),t.link("../sidebarItems",{itemsSubscription:function(e){E=e}},7);var v=function(){var e=r(E),n=m(),t=l((function(){f.isEmbedded()?a.close():s.closeFlex()}),[]),c=b(),v=i(c,4),x=v[0],C=v[1],h=v[2],S=v[3],g=d(null!=x?x:"",C,h);return o((function(){"omnichannel"!==S&&s.closeFlex()}),[S]),u.createElement(p,{privileged:!0},u.createElement(k,null,u.createElement(k.Header,{onClose:t,title:u.createElement(u.Fragment,null,n("Omnichannel"))}),u.createElement(k.Content,null,u.createElement(k.ItemsAssembler,{items:e,currentPath:g}))))};t.exportDefault(c(v))}

