import{bA as i,r as u,D as _,E as d,u as r,j as c,k as n,l as o}from"./index.d7b21e78.js";const m={key:0},p=["src"],h={key:1,class:"flex items-center justify-center min-h-screen"},f=o("button",{class:"btn btn-circle loading"},null,-1),g=[f],b={setup(k){const l=i();let t=u(""),e=localStorage.getItem("varsityguccho_22");return e=JSON.parse(e),e.group&&_.get(`${d}?type=examlist&id=${l.params.id}`).then(a=>{let s=a.data.exam.cq_link.split(",");t.value=s[parseInt(e.group)-1]||s[s.length-1]}),(a,s)=>r(t)?(c(),n("div",m,[o("iframe",{src:r(t),frameborder:"0",class:"w-screen min-h-screen"},null,8,p)])):(c(),n("div",h,g))}};export{b as default};
