import{_ as e,a,N as t}from"./index.a2e0a96e.js";import{_ as s}from"./index.de4e4b77.js";import{g as i,P as o,L as l}from"./common.92091992.js";import{C as n,a as r}from"./index.82c12776.js";import{o as d,c as h,a as f,b as g,w as m,F as p,r as c,d as u,e as _,n as x,t as D}from"./index-4e9e371d.js";const v=s({components:{Tabbar:e,Footer:a},data:()=>({refreshing:!1,loading:!0,title:"Hello",size:10,page:0,list:[],total:0}),computed:{finished(){return this.list.length>=this.total}},onLoad(){},created(){this.getData()},methods:{onRefresh(){console.log("onRefresh"),this.resetData()},resetData(){console.log("resetData"),this.page=0,this.list=[],this.getData()},async getData(){console.log("getData"),this.page++,this.loading=!0;let e={size:this.size,page:this.page};try{const a=await this.$http.getDomainInfoList(e);this.list=[...this.list,...a.data.list].map((e=>(e.valueClass=i(e.real_time_expire_days),e))),this.total=a.data.total}catch(a){console.log(a)}finally{this.loading=!1,this.refreshing=!1}}}},[["render",function(s,i,v,y,b,j){const L=t,R=r,z=n,C=l,V=o,w=e,F=a;return d(),h("div",null,[f(" NavBar 导航栏 "),g(L,{title:"域名列表",fixed:"",placeholder:"","safe-area-inset-top":""}),f(" list "),g(V,{modelValue:b.refreshing,"onUpdate:modelValue":i[1]||(i[1]=e=>b.refreshing=e),onRefresh:j.onRefresh},{default:m((()=>[g(C,{loading:b.loading,"onUpdate:loading":i[0]||(i[0]=e=>b.loading=e),finished:j.finished,offset:"50","finished-text":"没有更多了",onLoad:j.getData},{default:m((()=>[g(z,{inset:""},{default:m((()=>[(d(!0),h(p,null,c(b.list,(e=>(d(),u(R,{key:e,size:"large",center:"",title:e.domain,value:`${e.real_domain_expire_days} 天`,label:e.comment||"-"},{value:m((()=>[_("span",{class:x(e.valueClass)},D(e.real_domain_expire_days)+"天",3)])),_:2},1032,["title","value","label"])))),128))])),_:1})])),_:1},8,["loading","finished","onLoad"])])),_:1},8,["modelValue","onRefresh"]),f(" 底部导航栏 "),g(w,{active:"domain-list"}),f(" 公共的底部 "),g(F)])}]]);export{v as default};
