function module(e,t,a){var r,n,c,s;a.link("meteor/templating",{Template:function(e){r=e}},0),a.link("moment",{default:function(e){n=e}},1),a.link("../../../../../ui-utils",{popover:function(e){c=e}},2),a.link("../../../lib/dateHandler",{setDateRange:function(e){s=e}},3),a.link("./livechatAnalyticsDaterange.html"),r.livechatAnalyticsDaterange.helpers({bold:function(e){return e===r.currentData().daterange.get().value?"rc-popover__item--bold":""}}),r.livechatAnalyticsDaterange.events({"change input":function(e){e.preventDefault();var t="checkbox"===e.currentTarget.getAttribute("type")?e.currentTarget.checked:e.currentTarget.value;switch(c.close(),t){case"custom":var a=document.getElementsByClassName("lc-date-picker-btn")[0],u,i={template:"livechatAnalyticsCustomDaterange",currentTarget:a,data:{options:[],daterange:r.currentData().daterange},offsetVertical:a.clientHeight+10};c.open(i);break;case"today":r.currentData().daterange.set(s(t,n().startOf("day"),n().startOf("day")));break;case"yesterday":r.currentData().daterange.set(s(t,n().subtract(1,"days").startOf("day"),n().subtract(1,"days").startOf("day")));break;case"this-week":r.currentData().daterange.set(s(t,n().startOf("week"),n().endOf("week")));break;case"prev-week":r.currentData().daterange.set(s(t,n().subtract(1,"weeks").startOf("week"),n().subtract(1,"weeks").endOf("week")));break;case"this-month":r.currentData().daterange.set(s(t,n().startOf("month"),n().endOf("month")));break;case"prev-month":r.currentData().daterange.set(s(t,n().subtract(1,"months").startOf("month"),n().subtract(1,"months").endOf("month")))}}})}

