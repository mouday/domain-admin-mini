import{i as e,e as t,f as a,g as s,n as l,b as n,h as o,j as i,k as r,l as c,m as u,p as d,o as v,d as f,w as h,q as p}from"./index-4d7186e0.js";import{i as g,n as m,w as x,b,u as T,T as k,c as S,m as B,d as C,t as y,e as V,f as D,g as A,h as w,L as H,j as I,k as z,H as $,B as _,I as P,l as Y,o as j,p as X,q as L,r as M,s as q,v as R,x as F,y as N,z as O,A as U}from"./index.026c4532.js";import{_ as E}from"./plugin-vueexport-helper.1b428a4d.js";const G=Symbol();const J=(n,o)=>{const i=a(),r=()=>{i.value=T(n).height};return s((()=>{if(l(r),o)for(let e=1;e<=3;e++)setTimeout(r,100*e)})),function(a){const s=e(G,null);s&&t(s,(e=>{e&&a()}))}((()=>l(r))),t([x,b],r),i};function K(e,t){const a=J(e,!0);return e=>n("div",{class:t("placeholder"),style:{height:a.value?`${a.value}px`:void 0}},[e()])}const Q=Symbol(),[W,Z,ee]=S("list");const te=I(o({name:W,props:{error:Boolean,offset:B(300),loading:Boolean,disabled:Boolean,finished:Boolean,errorText:String,direction:C("down"),loadingText:String,finishedText:String,immediateCheck:y},emits:["load","update:error","update:loading"],setup(o,{emit:r,slots:c}){const u=a(o.loading),d=a(),v=a(),f=e(Q,null),h=V(d),p=()=>{l((()=>{if(u.value||o.finished||o.disabled||o.error||!1===(null==f?void 0:f.value))return;const{direction:e}=o,t=+o.offset,a=T(h);if(!a.height||w(d))return;let s=!1;const l=T(v);s="up"===e?a.top-l.top<=t:l.bottom-a.bottom<=t,s&&(u.value=!0,r("update:loading",!0),r("load"))}))},g=()=>{if(o.finished){const e=c.finished?c.finished():o.finishedText;if(e)return n("div",{class:Z("finished-text")},[e])}},m=()=>{r("update:error",!1),p()},x=()=>{if(o.error){const e=c.error?c.error():o.errorText;if(e)return n("div",{role:"button",class:Z("error-text"),tabindex:0,onClick:m},[e])}},b=()=>{if(u.value&&!o.finished&&!o.disabled)return n("div",{class:Z("loading")},[c.loading?c.loading():n(H,{class:Z("loading-icon")},{default:()=>[o.loadingText||ee("loading")]})])};return t((()=>[o.loading,o.finished,o.error]),p),f&&t(f,(e=>{e&&p()})),i((()=>{u.value=o.loading})),s((()=>{o.immediateCheck&&p()})),D({check:p}),A("scroll",p,{target:h,passive:!0}),()=>{var e;const t=null==(e=c.default)?void 0:e.call(c),a=n("div",{ref:v,class:Z("placeholder")},null);return n("div",{ref:d,role:"feed",class:Z(),"aria-busy":u.value},["down"===o.direction?t:a,b(),g(),x(),"up"===o.direction?t:a])}}})),[ae,se]=S("nav-bar");const le=I(o({name:ae,props:{title:String,fixed:Boolean,zIndex:z,border:y,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:y},emits:["clickLeft","clickRight"],setup(e,{emit:t,slots:s}){const l=a(),o=K(l,se),i=e=>t("clickLeft",e),r=e=>t("clickRight",e),c=()=>{const{title:t,fixed:a,border:o,zIndex:c}=e,u=Y(c),d=e.leftArrow||e.leftText||s.left,v=e.rightText||s.right;return n("div",{ref:l,style:u,class:[se({fixed:a}),{[_]:o,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:se("content")},[d&&n("div",{class:[se("left"),e.clickable?$:""],onClick:i},[s.left?s.left():[e.leftArrow&&n(P,{class:se("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:se("text")},[e.leftText])]]),n("div",{class:[se("title"),"van-ellipsis"]},[s.title?s.title():t]),v&&n("div",{class:[se("right"),e.clickable?$:""],onClick:r},[s.right?s.right():n("span",{class:se("text")},[e.rightText])])])])};return()=>e.fixed&&e.placeholder?o(c):c()}})),[ne,oe,ie]=S("pull-refresh"),re=["pulling","loosing","success"];const ce=I(o({name:ne,props:{disabled:Boolean,modelValue:Boolean,headHeight:B(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:z,successDuration:B(500),animationDuration:B(300)},emits:["change","refresh","update:modelValue"],setup(e,{emit:s,slots:o}){let i;const c=a(),u=a(),d=V(c),v=r({status:"normal",distance:0,duration:0}),f=function(){const e=a(0),t=a(0),s=a(0),l=a(0),n=a(0),o=a(0),i=a(""),r=a(!0),c=()=>{s.value=0,l.value=0,n.value=0,o.value=0,i.value="",r.value=!0};return{move:a=>{const c=a.touches[0];var u,d;s.value=(c.clientX<0?0:c.clientX)-e.value,l.value=c.clientY-t.value,n.value=Math.abs(s.value),o.value=Math.abs(l.value),(!i.value||n.value<10&&o.value<10)&&(i.value=(u=n.value)>(d=o.value)?"horizontal":d>u?"vertical":""),r.value&&(n.value>k||o.value>k)&&(r.value=!1)},start:a=>{c(),e.value=a.touches[0].clientX,t.value=a.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:s,deltaY:l,offsetX:n,offsetY:o,direction:i,isVertical:()=>"vertical"===i.value,isHorizontal:()=>"horizontal"===i.value,isTap:r}}(),h=()=>{if(50!==e.headHeight)return{height:`${e.headHeight}px`}},p=()=>"loading"!==v.status&&"success"!==v.status&&!e.disabled,g=(t,a)=>{const l=+(e.pullDistance||e.headHeight);v.distance=t,v.status=a?"loading":0===t?"normal":t<l?"pulling":"loosing",s("change",{status:v.status,distance:t})},m=()=>{const{status:t}=v;return"normal"===t?"":e[`${t}Text`]||ie(t)},x=()=>{const{status:e,distance:t}=v;if(o[e])return o[e]({distance:t});const a=[];return re.includes(e)&&a.push(n("div",{class:oe("text")},[m()])),"loading"===e&&a.push(n(H,{class:oe("loading")},{default:m})),a},b=e=>{i=0===j(d.value),i&&(v.duration=0,f.start(e))},T=e=>{p()&&b(e)},S=()=>{i&&f.deltaY.value&&p()&&(v.duration=+e.animationDuration,"loosing"===v.status?(g(+e.headHeight,!0),s("update:modelValue",!0),l((()=>s("refresh")))):g(0))};return t((()=>e.modelValue),(t=>{v.duration=+e.animationDuration,t?g(+e.headHeight,!0):o.success||e.successText?(v.status="success",setTimeout((()=>{g(0)}),+e.successDuration)):g(0,!1)})),A("touchmove",(t=>{if(p()){i||b(t);const{deltaY:a}=f;f.move(t),i&&a.value>=0&&f.isVertical()&&(X(t),g((t=>{const a=+(e.pullDistance||e.headHeight);return t>a&&(t=t<2*a?a+(t-a)/2:1.5*a+(t-2*a)/4),Math.round(t)})(a.value)))}}),{target:u}),()=>{var e;const t={transitionDuration:`${v.duration}ms`,transform:v.distance?`translate3d(0,${v.distance}px, 0)`:""};return n("div",{ref:c,class:oe()},[n("div",{ref:u,class:oe("track"),style:t,onTouchstartPassive:T,onTouchend:S,onTouchcancel:S},[n("div",{class:oe("head"),style:h()},[x()]),null==(e=o.default)?void 0:e.call(o)])])}}})),[ue,de]=S("tabbar"),ve={route:Boolean,fixed:y,border:y,zIndex:z,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:B(0),safeAreaInsetBottom:{type:Boolean,default:null}},fe=Symbol(ue);const he=I(o({name:ue,props:ve,emits:["change","update:modelValue"],setup(e,{emit:t,slots:s}){const l=a(),{linkChildren:o}=L(fe),i=K(l,de),r=()=>{var t;return null!=(t=e.safeAreaInsetBottom)?t:e.fixed},c=()=>{var t;const{fixed:a,zIndex:o,border:i}=e;return n("div",{ref:l,role:"tablist",style:Y(o),class:[de({fixed:a}),{[M]:i,"van-safe-area-bottom":r()}]},[null==(t=s.default)?void 0:t.call(s)])};return o({props:e,setActive:(a,s)=>{!function(e,{args:t=[],done:a,canceled:s}){if(e){const l=e.apply(null,t);g(l)?l.then((e=>{e?a():s&&s()})).catch(m):l?a():s&&s()}else a()}(e.beforeChange,{args:[a],done(){t("update:modelValue",a),t("change",a),s()}})}}),()=>e.fixed&&e.placeholder?i(c):c()}})),[pe,ge]=S("tabbar-item");const me=I(o({name:pe,props:q({},R,{dot:Boolean,icon:String,name:z,badge:z,badgeProps:Object,iconPrefix:String}),emits:["click"],setup(e,{emit:t,slots:a}){const s=F(),l=c().proxy,{parent:o,index:i}=N(fe);if(!o)return;const r=u((()=>{var t;const{route:a,modelValue:s}=o.props;if(a&&"$route"in l){const{$route:t}=l,{to:a}=e,s=U(a)?a:{path:a};return!!t.matched.find((e=>{const t="path"in s&&s.path===e.path,a="name"in s&&s.name===e.name;return t||a}))}return(null!=(t=e.name)?t:i.value)===s})),v=a=>{var l;r.value||o.setActive(null!=(l=e.name)?l:i.value,s),t("click",a)},f=()=>a.icon?a.icon({active:r.value}):e.icon?n(P,{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var t;const{dot:s,badge:l}=e,{activeColor:i,inactiveColor:c}=o.props,u=r.value?i:c;return n("div",{role:"tab",class:ge({active:r.value}),style:{color:u},tabindex:0,"aria-selected":r.value,onClick:v},[n(O,d({dot:s,class:ge("icon"),content:l},e.badgeProps),{default:f}),n("div",{class:ge("text")},[null==(t=a.default)?void 0:t.call(a,{active:r.value})])])}}}));const xe=E({name:"Tabbar",props:{active:{type:String}},components:{},data:()=>({}),computed:{active_:{get(){return this.active},set(e){}}},methods:{async getData(){},onChange(e){this.$navigater.push({name:e})}},created(){this.getData()}},[["render",function(e,t,a,s,l,o){const i=me,r=he;return v(),f(r,{modelValue:o.active_,"onUpdate:modelValue":t[0]||(t[0]=e=>o.active_=e),onChange:o.onChange},{default:h((()=>[n(i,{name:"cert-list",icon:"orders-o"},{default:h((()=>[p("证书列表")])),_:1}),n(i,{name:"domain-list",icon:"notes-o"},{default:h((()=>[p("域名列表")])),_:1})])),_:1},8,["modelValue","onChange"])}]]);export{te as L,le as N,ce as P,xe as _};