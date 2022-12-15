import{d as O,u as U,f as n,c as A,a as d,b as a,w as l,g as b,r as u,o as E,h as C,i as y,t as I,I as J,p as $,e as z,j as F,k as L,s as R,_ as j}from"./index.565a6014.js";const S=c=>($("data-v-43f0125b"),c=c(),z(),c),q={class:"profile"},G=S(()=>d("h1",{id:"title"},"My Credentials",-1)),H={class:"table-header"},K={class:"dtButtons"},Q=S(()=>d("h3",null,"VC",-1)),W=S(()=>d("h3",null,"Metadata",-1)),X=O({__name:"ProfileView",setup(c){const s=U(),p=n(""),v=n(!1),m=n(!1),_=n("Modal"),f=n(""),h=n(""),V=n([]),M=()=>{v.value=!0},g=()=>{p.value="",v.value=!1},x=(o,e,r)=>{_.value=o,f.value=e,h.value=r||"",m.value=!0},N=()=>{_.value="",f.value="",m.value=!1},D=async()=>{try{const o=await F(s.snapApi);return console.log(o),o&&(s.vcs=o),"Success getting VCs"}catch(o){throw console.error(o),o}},P=async()=>{try{if(!V.value)throw new Error("No VC selected");const o=await L(V.value,s.snapApi);if(x("Verifiable Presentation",JSON.stringify(o,null,2)),!o)throw new Error("Failed to create VP");return"VP created"}catch(o){throw new Error(o.message)}},T=async()=>{let o;try{o=JSON.parse(p.value)}catch(e){throw e}try{const e=await R(o,s.snapApi);if(!e)throw new Error("Failed to save VC");return s.vcs.push({data:o,metadata:{id:e[0].id}}),g(),"Success importing VC"}catch(e){throw console.error(e),e}};return(o,e)=>{const r=u("Button"),i=u("Column"),B=u("DataTable"),w=u("Textarea"),k=u("Dialog");return E(),A("div",q,[G,d("div",null,[a(B,{value:b(s).vcs,responsiveLayout:"scroll",removableSort:"",selection:V.value,"onUpdate:selection":e[0]||(e[0]=t=>V.value=t)},{header:l(()=>[d("div",H,[C(" Verifiable Credentials "),d("div",K,[a(y,{label:"Load VCs",method:D,icon:"pi pi-refresh",class:"p-button-rounded"}),a(y,{label:"Create VP",method:P,icon:"pi pi-upload",class:"p-button-rounded"}),a(r,{onClick:M,label:"Import VC",icon:"pi pi-file-import",class:"p-button-outlined p-button-rounded"})])])]),footer:l(()=>[C(" In total there are "+I(b(s).vcs?b(s).vcs.length:0)+" VCs. ",1)]),default:l(()=>[a(i,{selectionMode:"multiple",headerStyle:"width: 3em"}),a(i,{field:"data.type[1]",header:"Type"},{body:l(t=>[C(I(t.data.data.type[1]),1)]),_:1}),a(i,{field:"data.issuanceDate",header:"Issuance Date",sortable:!0},{body:l(t=>[C(I(b(J)(t.data.data.issuanceDate)),1)]),_:1}),a(i,{field:"data.issuer.id",header:"Issuer Id"}),a(i,{field:"metadata.store",header:"Store"}),a(i,{header:"View"},{body:l(t=>[a(r,{icon:"pi pi-search",class:"p-button-rounded p-button-outlined",onClick:Y=>x("Verifiable Credential",JSON.stringify(t.data.data,null,2),JSON.stringify(t.data.metadata,null,2))},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection"])]),a(k,{header:"Import VC (JSON)",visible:v.value,"onUpdate:visible":e[3]||(e[3]=t=>v.value=t),breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"50vw"},modal:!0},{footer:l(()=>[a(r,{label:"Cancel",icon:"pi pi-times",onClick:e[2]||(e[2]=t=>g()),class:"p-button-text"}),a(y,{label:"Import",method:T,icon:"pi pi-check"})]),default:l(()=>[a(w,{id:"VCImportArea",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),autofocus:"",autoResize:!0,class:"vcImport"},null,8,["modelValue"])]),_:1},8,["visible"]),a(k,{header:_.value,visible:m.value,"onUpdate:visible":e[7]||(e[7]=t=>m.value=t),breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"50vw"},modal:!0},{footer:l(()=>[a(r,{label:"Close",icon:"pi pi-times",onClick:e[6]||(e[6]=t=>N()),class:"p-button-text"})]),default:l(()=>[Q,a(w,{id:"VCImportArea",modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),autoResize:!0,class:"vcImport",disabled:""},null,8,["modelValue"]),W,a(w,{id:"metadata",modelValue:h.value,"onUpdate:modelValue":e[5]||(e[5]=t=>h.value=t),disabled:"",autoResize:!0,class:"vcImport"},null,8,["modelValue"])]),_:1},8,["header","visible"])])}}});const ee=j(X,[["__scopeId","data-v-43f0125b"]]);export{ee as default};
