function module(t,e,n){var a;n.export({getDateRange:function(){return r}}),n.link("moment",{default:function(t){a=t}},0);var r=function(){var t=a(new Date);return{start:a(new Date(t.year(),t.month(),t.date(),0,0,0)).utc().format("YYYY-MM-DDTHH:mm:ss")+"Z",end:a(new Date(t.year(),t.month(),t.date(),23,59,59)).utc().format("YYYY-MM-DDTHH:mm:ss")+"Z"}}}

