function module(e,t,n){let a,l,r,c,s;function u(e){let{instances:t}=e;const n=r(),u=c();return t&&t.length?a.createElement(a.Fragment,null,t.map((e,t)=>{let{address:r,broadcastAuth:c,currentStatus:m,instanceRecord:o}=e;return(a.createElement(s,{key:t,title:a.createElement(l,null,n("Broadcast_Connected_Instances"))},a.createElement(s.Entry,{label:n("Address")},r),a.createElement(s.Entry,{label:n("Auth")},c?"true":"false"),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Current_Status")," > ",n("Connected"))},m.connected?"true":"false"),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Current_Status")," > ",n("Retry_Count"))},m.retryCount),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Current_Status")," > ",n("Status"))},m.status),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Instance_Record")," > ",n("ID"))},o._id),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Instance_Record")," > ",n("PID"))},o.pid),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Instance_Record")," > ",n("Created_at"))},u(o._createdAt)),a.createElement(s.Entry,{label:a.createElement(a.Fragment,null,n("Instance_Record")," > ",n("Updated_at"))},u(o._updatedAt))))})):null}n.export({InstancesSection:()=>u}),n.link("react",{default(e){a=e}},0),n.link("../../components/basic/Subtitle",{default(e){l=e}},1),n.link("../../contexts/TranslationContext",{useTranslation(e){r=e}},2),n.link("../../hooks/useFormatDateAndTime",{useFormatDateAndTime(e){c=e}},3),n.link("./DescriptionList",{DescriptionList(e){s=e}},4)}

