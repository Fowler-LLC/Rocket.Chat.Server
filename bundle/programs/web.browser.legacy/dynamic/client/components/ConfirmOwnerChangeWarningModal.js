function module(e,n,o){var t,l,a,_,r,c,i,m,u;o.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){t=e}},0),o.link("react",{default:function(e){l=e}},0),o.link("@rocket.chat/fuselage",{Box:function(e){a=e},Button:function(e){_=e},ButtonGroup:function(e){r=e},Icon:function(e){c=e},Modal:function(e){i=e}},1),o.link("./basic/RawText",{default:function(e){m=e}},2),o.link("../contexts/TranslationContext",{useTranslation:function(e){u=e}},3);var s=function(e){var n=e.onConfirm,o=e.onCancel,s=e.contentTitle,d=void 0===s?"":s,g=e.confirmLabel,h=void 0===g?"":g,f=e.shouldChangeOwner,w=e.shouldBeRemoved,E=t(e,["onConfirm","onCancel","contentTitle","confirmLabel","shouldChangeOwner","shouldBeRemoved"]),p=u(),C="";f.length>0&&(C=1===f.length?p("A_new_owner_will_be_assigned_automatically_to_the__roomName__room",{roomName:f.pop()}):f.length<=5?p("A_new_owner_will_be_assigned_automatically_to_those__count__rooms__rooms__",{count:f.length,rooms:f.join(", ")}):p("A_new_owner_will_be_assigned_automatically_to__count__rooms",{count:f.length}));var b="";return w.length>0&&(b=1===w.length?p("The_empty_room__roomName__will_be_removed_automatically",{roomName:w.pop()}):w.length<=5?p("__count__empty_rooms_will_be_removed_automatically__rooms__",{count:w.length,rooms:w.join(", ")}):p("__count__empty_rooms_will_be_removed_automatically",{count:w.length})),l.createElement(i,E,l.createElement(i.Header,null,l.createElement(c,{color:"danger",name:"modal-warning",size:20}),l.createElement(i.Title,null,p("Are_you_sure")),l.createElement(i.Close,{onClick:o})),l.createElement(i.Content,{fontScale:"p1"},d,C&&l.createElement(a,{marginBlock:"x16"},l.createElement(m,null,C)),b&&l.createElement(a,{marginBlock:"x16"},l.createElement(m,null,b))),l.createElement(i.Footer,null,l.createElement(r,{align:"end"},l.createElement(_,{ghost:!0,onClick:o},p("Cancel")),l.createElement(_,{primary:!0,danger:!0,onClick:n},h))))};o.exportDefault(s)}

