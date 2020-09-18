function module(e,t,n){var r,u,l,a,o,i,c,s,f,m,d,h,p,v,b;n.link("@babel/runtime/helpers/extends",{default:function(e){r=e}},0),n.link("@babel/runtime/helpers/objectSpread2",{default:function(e){u=e}},1),n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){l=e}},2),n.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){a=e}},3),n.export({default:function(){return k}}),n.link("react",{default:function(e){o=e},useMemo:function(e){i=e},useEffect:function(e){c=e},useState:function(e){s=e}},0),n.link("@rocket.chat/fuselage",{TextInput:function(e){f=e},Select:function(e){m=e},Field:function(e){d=e}},1),n.link("../contexts/SettingsContext",{useSetting:function(e){h=e}},2),n.link("../hooks/useForm",{useForm:function(e){p=e}},3),n.link("../contexts/TranslationContext",{useTranslation:function(e){v=e}},4),n.link("../helpers/capitalize",{capitalize:function(e){b=e}},5);var E=function(e){var t=e.name,n=e.required,r=e.minLength,u=e.maxLength,l=e.setState,a=e.state,c=e.className,s=v(),m=i((function(){var e=[];return!a&&n&&e.push(s("Field_required")),a.length<r&&e.push(s("Min_length_is",r)),e.join(", ")}),[a,n,r,s]);return i((function(){return o.createElement(d,{className:c},o.createElement(d.Label,null,t),o.createElement(d.Row,null,o.createElement(f,{name:t,error:m,maxLength:u,flexGrow:1,value:a,required:n,onChange:function(e){return l(e.currentTarget.value)}})),o.createElement(d.Error,null,m))}),[t,m,u,a,n,l,c])},g=function(e){var t=e.name,n=e.required,r=e.options,u=e.setState,l=e.state,a=e.className,c=v(),s=i((function(){return Object.values(r).map((function(e){return[e,e]}))}),[r]),f=i((function(){return!l.length&&n?c("Field_required"):""}),[n,l.length,c]);return i((function(){return o.createElement(d,{className:a},o.createElement(d.Label,null,t),o.createElement(d.Row,null,o.createElement(m,{name:t,error:f,flexGrow:1,value:l,options:s,required:n,onChange:function(e){return u(e)}})),o.createElement(d.Error,null,f))}),[t,f,l,s,n,u,a])},F=function(e){var t=e.formValues,n=e.formHandlers,i=e.customFields,c=a(e,["formValues","formHandlers","customFields"]);return Object.entries(i).map((function(e){var a=l(e,2),i=a[0],s=a[1],f=u({key:i,name:i,setState:n["handle"+b(i)],state:t[i]},s);return"text"===s.type?o.createElement(E,r({},f,c)):o.createElement(g,r({},f,c))}))};function k(e){var t=e.customFieldsData,n=e.setCustomFieldsData,f=e.onLoadFields,m=void 0===f?function(){}:f,d=a(e,["customFieldsData","setCustomFieldsData","onLoadFields"]),v=h("Accounts_CustomFields"),b=s((function(){try{return JSON.parse(v||"{}")}catch(e){return{}}})),E,g=l(b,1)[0],k=Boolean(Object.values(g).length),x=i((function(){return Object.entries(g).reduce((function(e,t){var n,r=l(t,2),u=r[0],a=r[1];return e[u]=null!==(n=a.defaultValue)&&void 0!==n?n:"",e}),{})}),[]),S=p(u({},x,{},t)),j=S.values,C=S.handlers;return c((function(){m(k),k&&n(j)}),[JSON.stringify(j)]),k?o.createElement(F,r({formValues:j,formHandlers:C,customFields:g},d)):null}}

