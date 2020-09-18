function module(e,t,n){let r,s,i,o,l,a,u,c,d,m,p,k,f,g,x,h,E,_,b,S,I,T,D,w,C,M,v,z,U,B,R,y,L,G,N,A,O;function H(e){return t=>{let{msg:n,username:r,tcount:o,ts:l}=t,a=i(t,["msg","username","tcount","ts"]);return(c.createElement(e,s({replies:o,username:r,msg:n,ts:l},a)))}}n.link("@babel/runtime/helpers/objectSpread2",{default(e){r=e}},0),n.link("@babel/runtime/helpers/extends",{default(e){s=e}},1),n.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){i=e}},2),n.export({withData:()=>q,normalizeThreadMessage:()=>J,DiscussionList:()=>K}),n.link("meteor/mongo",{Mongo(e){o=e}},0),n.link("meteor/tracker",{Tracker(e){l=e}},1),n.link("meteor/kadira:flow-router",{FlowRouter(e){a=e}},2),n.link("underscore.string",{default(e){u=e}},3),n.link("react",{default(e){c=e},useCallback(e){d=e},useMemo(e){m=e},useState(e){p=e},useEffect(e){k=e},useRef(e){f=e}},4),n.link("@rocket.chat/fuselage",{Box(e){g=e},Icon(e){x=e},TextInput(e){h=e},Callout(e){E=e}},5),n.link("react-window",{FixedSizeList(e){_=e}},6),n.link("react-window-infinite-loader",{default(e){b=e}},7),n.link("@rocket.chat/fuselage-hooks",{useDebouncedValue(e){S=e},useDebouncedState(e){I=e},useResizeObserver(e){T=e}},8),n.link("../../../../app/ui-utils/client",{renderMessageBody(e){D=e}},9),n.link("../../../../app/ui-utils/client/config",{getConfig(e){w=e}},10),n.link("../../../../app/models/client",{Messages(e){C=e}},11),n.link("../../../components/basic/VerticalBar",{default(e){M=e}},12),n.link("../../../contexts/TranslationContext",{useTranslation(e){v=e}},13),n.link("../../../contexts/UserContext",{useUserId(e){z=e},useUserSubscription(e){U=e}},14),n.link("../../../hooks/useEndpointDataExperimental",{useEndpointDataExperimental(e){B=e},ENDPOINT_STATES(e){R=e}},15),n.link("../../../hooks/useTimeAgo",{useTimeAgo(e){y=e}},16),n.link("../../components/Message",{MessageSkeleton(e){L=e}},17),n.link("../../hooks/useUserRoom",{useUserRoom(e){G=e}},18),n.link("../../../contexts/SettingsContext",{useSetting(e){N=e}},19),n.link("./components/Message",{default(e){A=e}},20),n.link("../../helpers/clickableItem",{clickableItem(e){O=e}},21);const P=c.memo(H(O(A))),j=c.memo(O(L)),F=parseInt(w("discussionListSize"))||25,V=e=>{let{msg:t,drid:n,u:s,dcount:i,mentions:o,tcount:l,ts:a,_id:u,dlm:c,attachments:d,name:m}=e;return r({},u&&{_id:u},{drid:n,attachments:d,name:m,mentions:o,msg:t,u:s,dcount:i,tcount:l,ts:new Date(a),dlm:new Date(c)})},W={tunread:1,tunreadUser:1,tunreadGroup:1},$={t:1,name:1};function q(e){return t=>{let{rid:n}=t,r=i(t,["rid"]);const a=G(n,$),u=U(n,W),g=z(),[x,h]=p(""),[E,_]=p(F),[b,T]=I([],100),D=f(new o.Collection(null)),w=f(),[M,v]=p({skip:0,count:F}),y=m(()=>({roomId:a._id,count:M.count,offset:M.skip,text:x}),[a._id,M.skip,M.count,x]),{data:L,state:N,error:A}=B("chat.getDiscussions",S(y,400)),O=d((e,t)=>(v({skip:e,count:t-e}),new Promise(e=>{w.current=e})),[]);k(()=>()=>D.current.remove({},()=>{}),[x]),k(()=>{N===R.DONE&&L&&L.messages&&(L.messages.forEach(e=>{let{_id:t}=e,n=i(e,["_id"]);D.current.upsert({_id:t},V(n))}),_(L.total),w.current&&w.current())},[L,N]),k(()=>{const e=C.find({rid:a._id,drid:{$exists:!0}}).observe({added:e=>{let{_id:t}=e,n=i(e,["_id"]);D.current.upsert({_id:t},n)},changed:e=>{let{_id:t}=e,n=i(e,["_id"]);D.current.update({_id:t},n)},removed:e=>{let{_id:t}=e;D.current.remove(t)}});return()=>e.stop()},[a._id]),k(()=>{const e=l.autorun(()=>{const e={};T(D.current.find(e,{sort:{tlm:-1}}).fetch().map(V))});return()=>e.stop()},[a._id,T,g]);const H=d(e=>{v({skip:0,count:F}),h(e.currentTarget.value)},[]);return(c.createElement(e,s({},r,{unread:null==u?void 0:u.tunread,unreadUser:null==u?void 0:u.tunreadUser,unreadGroup:null==u?void 0:u.tunreadGroup,userId:g,error:A,discussions:b,total:E,loading:N===R.LOADING,loadMoreItems:O,room:a,text:x,setText:H})))}}const J=e=>{let t=s({},e);if(t.msg)return D(t).replace(/<br\s?\\?>/g," ");if(t.attachments){const e=t.attachments.find(e=>e.title||e.description);if(e&&e.description)return u.escapeHTML(e.description);if(e&&e.title)return u.escapeHTML(e.title)}};function K(e){let{total:t=10,discussions:n=[],loadMoreItems:r,loading:i,onClose:o,error:l,userId:u,text:m,setText:p}=e;const k=N("UI_Use_Real_Name"),S=f(),I=v(),D=d(e=>{const{drid:t}=e.currentTarget.dataset;a.goToRoomById(t)},[]),w=y();S.current=n;const C=d(c.memo((function e(t){let{data:n,index:r,style:i}=t;if(!n[r])return c.createElement(j,{style:i});const o=n[r],l=J(o),{name:a=o.u.username}=o.u;return c.createElement(P,s({},o,{name:k?a:o.u.username,username:o.u.username,style:i,following:o.replies&&o.replies.includes(u),"data-drid":o.drid,msg:l,t:I,formatDate:w,onClick:D}))})),[k]),z=d(e=>e<S.current.length,[]),{ref:U,contentBoxSize:{inlineSize:B=378,blockSize:R=750}={}}=T();return c.createElement(M,null,c.createElement(M.Header,null,c.createElement(M.Icon,{name:"discussion"}),c.createElement(g,{flexShrink:1,flexGrow:1,withTruncatedText:!0,mi:"x8"},I("Discussions")),c.createElement(M.Close,{onClick:o})),c.createElement(M.Content,{paddingInline:0},c.createElement(g,{display:"flex",flexDirection:"row",p:"x24",borderBlockEndWidth:"x2",borderBlockEndStyle:"solid",borderBlockEndColor:"neutral-200",flexShrink:0},c.createElement(h,{placeholder:I("Search_Messages"),value:m,onChange:p,addon:c.createElement(x,{name:"magnifier",size:"x20"})})),c.createElement(g,{flexGrow:1,flexShrink:1,ref:U},l&&c.createElement(E,{mi:"x24",type:"danger"},l.toString()),0===t&&c.createElement(g,{p:"x24"},I("No_Discussions_found")),c.createElement(b,{isItemLoaded:z,itemCount:t,loadMoreItems:i?()=>{}:r},e=>{let{onItemsRendered:r,ref:s}=e;return(c.createElement(_,{height:R,width:B,itemCount:t,itemData:n,itemSize:124,ref:s,minimumBatchSize:F,onItemsRendered:r},C))}))))}n.exportDefault(q(K))}

