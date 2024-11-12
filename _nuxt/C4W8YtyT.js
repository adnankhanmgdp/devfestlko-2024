import{_ as G,r as u,f as U,g as F,o as z,w as i,b as s,d as c,a as n,h as L,v as T,p as j,e as M}from"./-Xtt4JI5.js";import{u as O}from"./Bew24XrI.js";import{V as _,a as N,b as P}from"./DLFETjoA.js";import{V as g,a as q}from"./DcxDsNt3.js";import{V as b}from"./Bc_xskYA.js";const E=""+new URL("badge3.D9li9jn5.png",import.meta.url).href,v=p=>(j("data-v-66e4f897"),p=p(),M(),p),A=v(()=>n("h1",null,"Badge",-1)),W=v(()=>n("p",{class:"mt-2"}," Upload an image and generate a personalized badge with the DevFest frame. ",-1)),$=v(()=>n("p",{class:"mt-8"},"Select an Image",-1)),H={class:"mt-5"},J=v(()=>n("label",{class:"google-font mb-5",style:{"font-size":"110%"}}," Image Shape ",-1)),K=v(()=>n("br",null,null,-1)),Q=v(()=>n("p",{class:"mt-8 mb-md-0"},[n("span",null," *  We respect your privacy and are not storing your pictures on our servers. ")],-1)),X={style:{background:"#eeeeee","border-radius":"20px",border:"1.5px solid black"},class:"text-center pa-5 pa-md-5 py-md-10"},Y={__name:"badge",setup(p){const e=u(null),f=u(null),h=u("original"),w=u(!1),a=u(null),r=u(null),l=u(null);U(()=>{I()});const I=()=>{e.value=e.value||document.createElement("canvas"),l.value=e.value.getContext("2d"),r.value=new Image,r.value.src=E,r.value.onload=()=>{m()}},k=t=>{if(t&&t.target.files&&t.target.files[0]){const o=new FileReader;o.onload=d=>{a.value=new Image,a.value.onload=m,a.value.src=d.target.result},o.readAsDataURL(t.target.files[0])}},x=()=>{f.value.click(),w.value=!0},m=()=>{!e.value||!l.value||(e.value.width=2500,e.value.height=2500,l.value.clearRect(0,0,e.value.width,e.value.height),a.value?y():(l.value.fillStyle="#fff",l.value.fillRect(0,0,e.value.width,e.value.height)),D(),S())},y=()=>{switch(h.value){case"original":e.value.width=a.value.width,e.value.height=a.value.height,l.value.drawImage(a.value,0,0);break;default:e.value.width=2500,e.value.height=2500;const t=e.value.width/a.value.width,o=e.value.height/a.value.height,d=Math.max(t,o),R=(e.value.width-a.value.width*d)/2,B=(e.value.height-a.value.height*d)/2;l.value.drawImage(a.value,0,0,a.value.width,a.value.height,R,B,a.value.width*d,a.value.height*d);break}},D=()=>{const t=r.value.height/r.value.width*e.value.width,o=e.value.height-t;l.value.drawImage(r.value,0,0,r.value.width,r.value.height,0,o,e.value.width,t)},S=()=>{h.value==="circle"&&(l.value.globalCompositeOperation="destination-in",l.value.beginPath(),l.value.arc(e.value.width/2,e.value.height/2,e.value.height/2,0,Math.PI*2),l.value.closePath(),l.value.fill())},V=t=>{h.value=t,m()},C=()=>{const t=document.createElement("a"),o=e.value.toDataURL("image/png;base64");t.download="badge.png",t.href=o,t.click()};return O({contentType:"text/html; charset=utf-8",title:"Badge | Google Developers Group India",description:"Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",ogLocale:"en_US",keywords:"GDG, DevFest, Google, DevFest",author:"OSS Labs",creator:"OSS Labs",viewport:"width=device-width, initial-scale=1.0",ogTitle:"Badge | Google Developers Group India",ogDescription:"Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",ogImage:"https://devfest.gdgindia.dev/thumbnail.jpg",ogUrl:"https://devfest.gdgindia.dev/",ogType:"website",twitterTitle:"Badge | Google Developers Group India",twitterDescription:"Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",twitterImage:"https://devfest.gdgindia.dev/thumbnail.jpg.png?auto=format&fit=crop&frame=1&h=512&w=1024",twitterCard:"summary_large_image"}),(t,o)=>(z(),F(P,{fluid:"",class:"fill-height"},{default:i(()=>[s(N,{"justify-center":"",align:"center"},{default:i(()=>[s(_,{md:"6",sm:"7",cols:"12"},{default:i(()=>[A,W,$,s(g,{class:"mt-4 mb-5",size:"large",color:"#FFD427",onClick:x,rounded:"",variant:"flat",style:{border:"1.5px solid #1e1e1e",color:"black","text-transform":"capitalize"}},{default:i(()=>[c(" Upload Image "),s(b,null,{default:i(()=>[c("mdi-tray-arrow-up")]),_:1})]),_:1}),n("input",{ref_key:"fileInput",ref:f,class:"profile-input",type:"file",accept:"image/*",onChange:k,hidden:""},null,544),n("div",H,[J,K,s(q,{class:"mt-3",rounded:"",style:{border:"1.5px solid #1e1e1e",color:"black","text-transform":"capitalize"},modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=d=>h.value=d),onClick:o[1]||(o[1]=d=>V(h.value)),color:"#eeeeee"},{default:i(()=>[s(g,{value:"original",class:"mx-0 px-5 pb-0"},{default:i(()=>[c("Original")]),_:1}),s(g,{value:"Square",class:"mx-0 pb-0 px-5"},{default:i(()=>[c("Square")]),_:1}),s(g,{value:"circle",class:"mx-0 pb-0 px-5"},{default:i(()=>[c("Circle")]),_:1})]),_:1},8,["modelValue"])]),Q]),_:1}),s(_,{md:"6",sm:"5",cols:"12",class:"px-md-10"},{default:i(()=>[n("div",X,[n("canvas",{ref_key:"canvasRef",ref:e,style:{width:"100%","border-radius":"12px"}},null,512),L(s(g,{class:"pb-0 mb-0 mt-2",rounded:"",id:"download",onClick:C},{default:i(()=>[s(b,{left:""},{default:i(()=>[c("mdi-arrow-down-bold-circle-outline")]),_:1}),c(" Download ")]),_:1},512),[[T,w.value]])])]),_:1})]),_:1})]),_:1}))}},oe=G(Y,[["__scopeId","data-v-66e4f897"]]);export{oe as default};
