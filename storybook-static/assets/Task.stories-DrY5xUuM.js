import{j as s}from"./jsx-runtime-j_jdvEMj.js";function g({task:{id:e,title:n,state:o},onPinTask:_,onArhiveTask:x}){return s.jsxs("div",{className:`list-item ${o}`,children:[s.jsxs("label",{htmlFor:"checked",className:"checkbox",children:[s.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${e}`}),s.jsx("span",{className:"checkbox-custom",onClick:()=>x(e),"aria-label":`archiveTask-${e}`})]}),s.jsx("label",{htmlFor:"title",className:"title","aria-label":n,children:s.jsx("input",{type:"text",value:n,readOnly:!0,name:"title",placeholder:"Input title"})}),o!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,onClick:()=>_(e),children:s.jsx("span",{className:"icon-star"})})]})}g.__docgenInfo={description:"",methods:[],displayName:"Task"};const h={component:g,title:"Task",tags:["autodocs"]},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},t={args:{task:{...a.args.task,state:"TASK_PINNED"}}},r={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var k,u,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const b=["Default","Pinned","ARCHIVED"],j=Object.freeze(Object.defineProperty({__proto__:null,ARCHIVED:r,Default:a,Pinned:t,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{a as D,g as T,j as a};
