import{_ as m}from"./lodash.bcead730.js";import{D as _,bA as p,I as f,j as a,k as l,l as t,m as d,J as b,K as g,F as x,y,z as v,M as k,N as w,E as R,H as L}from"./index.8eda9be4.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const T={data(){return{search:"",testResults:[],allresult:[],results:[],load:!1}},methods:{modeltestResults(){this.load=!0,fetch(`${_}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url=p+"?cs="+e.exam.response_sheet.substr(39,44),fetch(this.url).then(s=>s.json()).then(s=>{this.allresult=s.map((r,h)=>({name:r.name,marks:r.marks,roll:r.roll,position:h+1})),this.testResults=m.sortBy(this.allresult,[r=>-r.marks]),setTimeout(()=>{location.hash=`#${this.user.reg}`},1e3),this.load=!1})})},millisToMinutesAndSeconds(e){var s=Math.floor(e/6e4),r=(e%6e4/1e3).toFixed(0);return s+":"+(r<10?"0":"")+r},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let s={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return s[e]?s[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return f.state.user}}},u=e=>(k("data-v-49803cdd"),e=e(),w(),e),C={class:"leaderboard"},j={class:"my-4 text-3xl font-bold text-center text-gray-900"},B=u(()=>t("div",{class:"container mx-auto my-2 text-gray-900"},[L(" \u09AF\u09A5\u09BE\u09B8\u09AE\u09DF\u09C7, \u09B8\u09A0\u09BF\u0995 \u09A8\u09BF\u09DF\u09AE\u09C7 \u09B2\u09BF\u0996\u09BF\u09A4 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09B8\u09BE\u09AC\u09AE\u09BF\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0\u09C7\u0993 \u09AF\u09A6\u09BF \u09B2\u09BF\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09A8\u09BE\u09AE \u09A8\u09BE \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE\u09B9\u09B2\u09C7 \u09A8\u09BF\u099A\u09C7\u09B0 \u09AC\u09BE\u099F\u09A8\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C7, \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AA\u09C7\u0987\u099C\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE\u09B0 \u09AA\u09BF\u09A1\u09BF\u098F\u09AB \u09B2\u09BF\u0982\u0995 \u098F\u09AC\u0982 \u098F\u0987\u099A\u098F\u09B8\u09B8\u09BF \u09B0\u09C7\u099C\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B6\u09A8 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u0987\u09A8\u09AC\u0995\u09CD\u09B8 \u0995\u09B0\u09AC\u09C7\u0964 \u09AF\u09A4 \u09A4\u09BE\u09DC\u09BE\u09A4\u09BE\u09DC\u09BF \u09B8\u09AE\u09CD\u09AD\u09AC \u0986\u09AE\u09B0\u09BE \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09A6\u09C7\u0996\u09C7, \u09A4\u09BE \u09B2\u09BF\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u098F\u09A1 \u0995\u09B0\u09C7 \u09A6\u09BF\u09AC\u09CB\u0964 "),t("a",{href:"https://www.facebook.com/apar.chinmoy.sakib.sanjoy.abhi.shuvro/",target:"_blank",class:"btn btn-info"},"Click Here")],-1)),N=u(()=>t("div",{class:"my-4"},[t("p",{class:"text-lg font-bold text-center text-gray-900"},"TBA = To be Announced, \u0985\u09B0\u09CD\u09A5\u09BE\u09CE \u09A4\u09CB\u09AE\u09BE\u09B0 \u0996\u09BE\u09A4\u09BE \u09A6\u09C7\u0996\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u098F\u0996\u09A8\u09CB \u09B6\u09C7\u09B7 \u09B9\u09DF\u09A8\u09BF\u0964 \u09B9\u09B2\u09C7\u0987 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u09AA\u09C7\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964")],-1)),A={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},I={class:"form-control"},M={class:"mt-4"},V={key:0},D=["id"],E={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},F={class:"flex-1 ml-2 text-gray-900 md:ml-4"},z={class:"text-lg font-semibold"},H={class:"p-2 text-gray-900 border-2 border-blue-400"},K={key:1,class:"text-center"},$=u(()=>t("button",{class:"btn loader btn-primary"},"Loading...",-1)),q=[$],J={key:2,class:"text-center"};function U(e,s,r,h,n,i){return a(),l("div",C,[t("div",null,[t("h1",j,"Written Exam Leaderboard-"+d(this.$route.params.id),1),B,N,t("div",A,[t("div",I,[b(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>n.search=o),placeholder:"Search by Name",onKeyup:s[1]||(s[1]=(...o)=>i.searchResult&&i.searchResult(...o)),class:"input input-primary input-bordered"},null,544),[[g,n.search]])]),t("div",M,[n.allresult.length>0?(a(),l("div",V,[(a(!0),l(x,null,y(n.testResults,(o,c)=>(a(),l("div",{key:c,id:o.roll,class:R(`${i.getborderStyle(c+1)} flex justify-between items-center p-5   rounded  shadow-md ${o.roll==i.user.roll?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[t("span",E,d(c+1),1),t("div",F,[t("h2",z,d(o.name),1)]),t("div",H,d(o.marks!=""?o.marks:"TBA"),1)],10,D))),128))])):v("",!0),n.load?(a(),l("div",K,q)):(a(),l("div",J," No response found "))])])])])}var P=S(T,[["render",U],["__scopeId","data-v-49803cdd"]]);export{P as default};
