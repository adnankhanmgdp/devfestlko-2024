import{m as l,u as s,c as C,d as z,e as G}from"./DLFETjoA.js";import{l as c,A as J,b as n,k as y,I as m,P as A,m as K,x as Q,B as h,h as U,O as W}from"./-Xtt4JI5.js";import{c as X}from"./DkluGqkz.js";import{b as x,m as Y,f as Z,o as $,q as ee,r as ae,c as te,e as ne,s as de,d as ie,g as le,t as se,v as ce,w as re,L as ue,x as oe}from"./DcxDsNt3.js";import{V as P,a as ve}from"./CPbE5siZ.js";import{V as S,d as V,m as me,a as ye,R as be,e as ge,f as ke}from"./Bc_xskYA.js";const fe=c()({name:"VCardActions",props:l(),setup(e,d){let{slots:t}=d;return J({VBtn:{slim:!0,variant:"text"}}),s(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=y({opacity:[Number,String],...l(),...C()},"VCardSubtitle"),Ce=c()({name:"VCardSubtitle",props:Ve(),setup(e,d){let{slots:t}=d;return s(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=X("v-card-title"),pe=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...l(),...x()},"VCardItem"),Ae=c()({name:"VCardItem",props:pe(),setup(e,d){let{slots:t}=d;return s(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),f&&n(Ce,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=y({opacity:[Number,String],...l(),...C()},"VCardText"),Pe=c()({name:"VCardText",props:he(),setup(e,d){let{slots:t}=d;return s(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Se=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Y(),...l(),...x(),...z(),...me(),...Z(),...$(),...ee(),...ye(),...ae(),...C(),...K(),...te({variant:"elevated"})},"VCard"),_e=c()({name:"VCard",directives:{Ripple:be},props:Se(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=Q(e),{borderClasses:r}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:f}=de(e),{densityClasses:u}=ie(e),{dimensionStyles:i}=G(e),{elevationClasses:T}=ge(e),{loaderClasses:B}=le(e),{locationStyles:L}=se(e),{positionClasses:D}=ce(e),{roundedClasses:N}=ke(e),o=re(e,t),_=h(()=>e.link!==!1&&o.isLink.value),v=h(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return s(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),w=F||O,E=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),q=w||M||E,H=!!(a.text||e.text!=null);return U(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,B.value,D.value,N.value,f.value,e.class],style:[k.value,i.value,L.value,e.style],href:o.href.value,onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ve,{key:"image-img",cover:!0,src:e.image},null)]),n(ue,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Pe,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(fe,null,{default:a.actions}),oe(v.value,"v-card")]}}),[[W("ripple"),v.value&&e.ripple]])}),{}}});export{_e as V,Ie as a,Ce as b,Pe as c,fe as d};
