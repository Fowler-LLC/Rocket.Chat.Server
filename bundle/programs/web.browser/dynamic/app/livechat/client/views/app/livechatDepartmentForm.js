function module(e,t,n){let a,s,i,l,o,r,g,c,h,m,d,f,p,u,v;n.link("@babel/runtime/helpers/objectSpread2",{default(e){a=e}},0),n.link("meteor/meteor",{Meteor(e){s=e}},0),n.link("meteor/reactive-var",{ReactiveVar(e){i=e}},1),n.link("meteor/kadira:flow-router",{FlowRouter(e){l=e}},2),n.link("meteor/templating",{Template(e){o=e}},3),n.link("underscore",{default(e){r=e}},4),n.link("toastr",{default(e){g=e}},5),n.link("../../../../ui-utils",{TabBar(e){c=e},RocketChatTabBar(e){h=e}},6),n.link("../../../../utils",{t(e){m=e},handleError(e){d=e}},7),n.link("../../../../authorization",{hasPermission(e){f=e}},8),n.link("./customTemplates/register",{getCustomFormTemplate(e){p=e}},9),n.link("./livechatDepartmentForm.html"),n.link("../../../../utils/client",{APIClient(e){u=e},roomTypes(e){v=e}},10);const T=50,C=async(e,t)=>{const n=[...t.agentsToUpsert.values()],a=[...t.agentsToRemove.values()];if(n.length||a.length)return u.v1.post("livechat/department/".concat(e,"/agents"),{upsert:n,remove:a})};o.livechatDepartmentForm.helpers({department:()=>o.instance().department.get(),agents:()=>o.instance().department&&!r.isEmpty(o.instance().department.get())?o.instance().department.get().agents:[],departmentAgents:()=>r.sortBy(o.instance().departmentAgents.get(),"username"),showOnRegistration(e){const t=o.instance().department.get();return t.showOnRegistration===e||void 0===t.showOnRegistration&&!0===e},showOnOfflineForm(e){const t=o.instance().department.get();return t.showOnOfflineForm===e||void 0===t.showOnOfflineForm&&!0===e},requestTagBeforeClosingChat(){const e=o.instance().department.get();return!(!e||!e.requestTagBeforeClosingChat)},customFieldsTemplate:()=>p("livechatDepartmentForm"),data:()=>({id:l.getParam("_id")}),exceptionsAgents:()=>r.pluck(o.instance().departmentAgents.get(),"username"),agentModifier:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.get();return"@".concat(0===n.length?t:t.replace(new RegExp(e.get()),e=>"<strong>".concat(e,"</strong>")))}),agentConditions:()=>({roles:"livechat-agent"}),onSelectAgents:()=>o.instance().onSelectAgents,selectedAgents:()=>o.instance().selectedAgents.get(),onClickTagAgents:()=>o.instance().onClickTagAgents,flexData:()=>({tabBar:o.instance().tabBar,data:o.instance().tabBarData.get()}),tabBarVisible:()=>Object.values(c.buttons.get()).some(e=>e.groups.some(e=>e.startsWith("livechat-department"))),chatClosingTags:()=>o.instance().chatClosingTags.get(),availableDepartmentTags:()=>o.instance().availableDepartmentTags.get(),hasAvailableTags:()=>[...o.instance().availableTags.get()].length>0,hasChatClosingTags:()=>[...o.instance().chatClosingTags.get()].length>0,onTableScroll(){const e=o.instance();return function(t){if(t.offsetHeight+t.scrollTop<t.scrollHeight-100)return;const n=e.departmentAgents.get();e.total.get()>n.length&&e.offset.set(e.offset.get()+50)}},onClickTagOfflineMessageChannel:()=>o.instance().onClickTagOfflineMessageChannel,selectedOfflineMessageChannel:()=>o.instance().offlineMessageChannel.get(),onSelectOfflineMessageChannel:()=>o.instance().onSelectOfflineMessageChannel,offlineMessageChannelModifier:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.get();return"#".concat(0===n.length?t:t.replace(new RegExp(e.get()),e=>"<strong>".concat(e,"</strong>")))}),channelSelector:()=>e=>({name:e})}),o.livechatDepartmentForm.events({"submit #department-form"(e,t){e.preventDefault();const n=t.$("button.save");let a;const i=$(e.currentTarget).data("id");if(f("manage-livechat-departments")){const e=t.$("input[name=enabled]:checked").val(),n=t.$("input[name=name]").val(),s=t.$("textarea[name=description]").val(),i=t.$("input[name=showOnRegistration]:checked").val(),l=t.$("input[name=email]").val(),o=t.$("input[name=showOnOfflineForm]:checked").val(),r=t.$("input[name=requestTagBeforeClosingChat]:checked").val(),c=t.chatClosingTags.get(),[h]=t.offlineMessageChannel.get(),d=h&&v.getRoomName(h.t,h)||"";if("1"!==e&&"0"!==e)return g.error(m("Please_select_enabled_yes_or_no"));if(""===n.trim())return g.error(m("Please_fill_a_name"));if(""===l.trim()&&"1"===o)return g.error(m("Please_fill_an_email"));a={enabled:"1"===e,name:n.trim(),description:s.trim(),showOnRegistration:"1"===i,showOnOfflineForm:"1"===o,requestTagBeforeClosingChat:"1"===r,email:l.trim(),chatClosingTags:c,offlineMessageChannelName:d}}const o=n.html();if(n.html(m("Saving")),t.$(".customFormField").each((e,n)=>{const s=t.$(n),i=s.attr("name");a[i]=s.val()}),f("manage-livechat-departments"))s.call("livechat:saveDepartment",i,a,[],(async function(e,a){if(n.html(o),e)return d(e);await C(a._id,t),g.success(m("Saved")),l.go("livechat-departments")}));else{if(!f("add-livechat-department-agents"))throw new Error(m("error-not-authorized"));C(i,t)}},"click .add-agent"(e,t){e.preventDefault();const n=t.selectedAgents.get();n.forEach(async e=>{const{_id:n,username:s}=e,i=t.departmentAgents.get();if(i.find(e=>{let{agentId:t}=e;return t===n}))return g.error(m("This_agent_was_already_selected"));const l=r.clone(e);l.agentId=n,delete l._id,t.agentsToRemove.has(l.agentId)&&t.agentsToRemove.delete(l.agentId),t.agentsToUpsert.set(l.agentId,a({},l,{count:0,order:0})),i.push(l),t.departmentAgents.set(i),t.selectedAgents.set(t.selectedAgents.get().filter(e=>e.username!==s))})},"click button.back"(e){e.preventDefault(),l.go("livechat-departments")},"click .remove-agent"(e,t){e.preventDefault(),t.agentsToUpsert.has(this.agentId)&&t.agentsToUpsert.delete(this.agentId),t.agentsToRemove.set(this.agentId,this),t.departmentAgents.set(t.departmentAgents.get().filter(e=>e.agentId!==this.agentId))},"keyup .count"(e,t){const n=t.agentsToUpsert.get(this.agentId)||this;t.agentsToUpsert.set(this.agentId,a({},n,{count:parseInt(e.currentTarget.value)||0}))},"keyup .order"(e,t){const n=t.agentsToUpsert.get(this.agentId)||this;t.agentsToUpsert.set(this.agentId,a({},n,{order:parseInt(e.currentTarget.value)||0}))},"click #addTag"(e,t){e.stopPropagation(),e.preventDefault();const n=[...t.availableTags.get()].length>0,a=n?"#tagSelect":"#tagInput",s=n?"placeholder":"",i=$(a).val(),l=[...t.chatClosingTags.get()];""===i||l.indexOf(i)>-1||(l.push(i),t.chatClosingTags.set(l),$(a).val(s))},"click .remove-tag"(e,t){e.stopPropagation(),e.preventDefault();const n=[...t.chatClosingTags.get()].filter(e=>e!==this.valueOf());t.chatClosingTags.set(n)}}),o.livechatDepartmentForm.onCreated((async function(){this.agentsToUpsert=new Map,this.agentsToRemove=new Map,this.department=new i({enabled:!0}),this.departmentAgents=new i([]),this.selectedAgents=new i([]),this.tabBar=new h,this.tabBar.showGroup(l.current().route.name),this.tabBarData=new i,this.chatClosingTags=new i([]),this.availableTags=new i([]),this.availableDepartmentTags=new i([]),this.offset=new i(0),this.total=new i(0),this.offlineMessageChannel=new i([]),this.onClickTagOfflineMessageChannel=()=>{this.offlineMessageChannel.set([])},this.onSelectOfflineMessageChannel=async e=>{let{item:t}=e;const{room:n}=await u.v1.get("rooms.info?roomId=".concat(t._id));n.text=n.name,this.offlineMessageChannel.set([n])},this.onSelectAgents=e=>{let{item:t}=e;this.selectedAgents.set([t])},this.onClickTagAgents=e=>{let{username:t}=e;this.selectedAgents.set(this.selectedAgents.get().filter(e=>e.username!==t))},this.loadAvailableTags=e=>{s.call("livechat:getTagsList",(t,n)=>{this.availableTags.set(n||[]);const a=this.availableTags.get(),s=a.filter(t=>{let{departments:n}=t;return 0===n.length||n.indexOf(e)>-1}).map(e=>{let{name:t}=e;return t});this.availableDepartmentTags.set(s)})},this.autorun(async()=>{const e=this.offset.get(),{agents:t,total:n}=await u.v1.get("livechat/department/".concat(l.getParam("_id"),"/agents?count=").concat(50,"&offset=").concat(e));this.total.set(n),0===e?this.departmentAgents.set(t):this.departmentAgents.set(this.departmentAgents.get().concat(t))}),this.autorun(async()=>{const e=l.getParam("_id");if(e){const{department:t}=await u.v1.get("livechat/department/".concat(l.getParam("_id"),"?includeAgents=false"));this.department.set(t),this.chatClosingTags.set(t&&t.chatClosingTags||[]),this.loadAvailableTags(e)}}),this.autorun(async()=>{const e=this.department.get();let t=[];if(null==e?void 0:e.offlineMessageChannelName){const{room:n}=await u.v1.get("rooms.info?roomName=".concat(null==e?void 0:e.offlineMessageChannelName));n&&(n.text=n.name,t=[a({},n)])}this.offlineMessageChannel.set(t)})}))}

