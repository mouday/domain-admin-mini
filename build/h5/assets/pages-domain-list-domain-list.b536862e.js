import{_ as e,N as t,P as a,L as s}from"./index.1569a951.js";import{C as i,a as o}from"./index.4b4bfb51.js";import{o as l,c as n,a as r,b as d,w as h,F as g,r as f,d as p}from"./index-3553a657.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";const c=m({components:{Tabbar:e},data:()=>({refreshing:!1,loading:!0,title:"Hello",size:10,page:0,list:[],total:0}),computed:{finished(){return this.list.length>=this.total}},onLoad(){},created(){this.getData()},methods:{onRefresh(){console.log("onRefresh"),this.resetData()},resetData(){console.log("resetData"),this.page=0,this.list=[],this.getData()},async getData(){console.log("getData"),this.page++,this.loading=!0;let e={size:this.size,page:this.page};try{const t=await this.$http.getDomainInfoList(e);this.list=[...this.list,...t.data.list],this.total=t.data.total}catch(t){console.log(t)}finally{this.loading=!1,this.refreshing=!1}}}},[["render",function(m,c,u,_,D,x){const v=t,b=o,y=i,L=s,R=a,j=e;return l(),n("div",null,[r(" NavBar 导航栏 "),d(v,{title:"域名列表",fixed:"",placeholder:"","safe-area-inset-top":""}),r(" list "),d(R,{modelValue:D.refreshing,"onUpdate:modelValue":c[1]||(c[1]=e=>D.refreshing=e),onRefresh:x.onRefresh},{default:h((()=>[d(L,{loading:D.loading,"onUpdate:loading":c[0]||(c[0]=e=>D.loading=e),finished:x.finished,offset:"50","finished-text":"没有更多了",onLoad:x.getData},{default:h((()=>[d(y,{inset:""},{default:h((()=>[(l(!0),n(g,null,f(D.list,(e=>(l(),p(b,{key:e,size:"large",center:"",title:e.domain,value:`${e.real_domain_expire_days} 天`,label:e.comment||"-"},null,8,["title","value","label"])))),128))])),_:1})])),_:1},8,["loading","finished","onLoad"])])),_:1},8,["modelValue","onRefresh"]),r(" 底部导航栏 "),d(j,{active:"domain-list"})])}]]);export{c as default};
