function module(e,t,l){let r,a,n,u,o,i;function p(e){let{room:{type:t}}=e,l=n(e.room,["type"]),p=n(e,["room"]);const{url:m=o.getConfig(t).getAvatarPath(a({username:l._id},l))}=p,s=n(p,["url"]);return(u.createElement(i,r({url:m},s)))}l.link("@babel/runtime/helpers/extends",{default(e){r=e}},0),l.link("@babel/runtime/helpers/objectSpread2",{default(e){a=e}},1),l.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){n=e}},2),l.link("react",{default(e){u=e}},0),l.link("../../../../app/utils/client",{roomTypes(e){o=e}},1),l.link("./BaseAvatar",{default(e){i=e}},2),l.exportDefault(p)}

