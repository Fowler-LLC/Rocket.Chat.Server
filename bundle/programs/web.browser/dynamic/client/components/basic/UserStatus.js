function module(e,t,l){let n,r,a;l.link("@babel/runtime/helpers/extends",{default(e){n=e}},0),l.export({Busy:()=>c,Away:()=>s,Online:()=>i,Offline:()=>m,getStatus:()=>f}),l.link("react",{default(e){r=e}},0),l.link("@rocket.chat/fuselage",{Box(e){a=e}},1);const u=e=>r.createElement(a,n({size:"x12",borderRadius:"full",flexShrink:0},e)),c=()=>r.createElement(u,{bg:"danger-500"}),s=()=>r.createElement(u,{bg:"warning-600"}),i=()=>r.createElement(u,{bg:"success-500"}),m=()=>r.createElement(u,{bg:"neutral-600"}),f=e=>{switch(e){case"online":return r.createElement(i,null);case"busy":return r.createElement(c,null);case"away":return r.createElement(s,null);default:return r.createElement(m,null)}}}

