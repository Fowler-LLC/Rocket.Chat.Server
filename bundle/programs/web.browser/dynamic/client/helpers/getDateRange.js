function module(t,e,n){let a;n.export({getDateRange:()=>o}),n.link("moment",{default(t){a=t}},0);const o=()=>{const t=a(new Date);return{start:"".concat(a(new Date(t.year(),t.month(),t.date(),0,0,0)).utc().format("YYYY-MM-DDTHH:mm:ss"),"Z"),end:"".concat(a(new Date(t.year(),t.month(),t.date(),23,59,59)).utc().format("YYYY-MM-DDTHH:mm:ss"),"Z")}}}

