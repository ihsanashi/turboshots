import{r as u,j as i,af as oe,aa as Y,aJ as ae,ag as ie,cL as ce,n as H,q as le,x as ue,as as de,k as _,P as me,cM as pe,I as fe,cN as he,cO as ye,cP as ge,aw as Te,aZ as Ie,y as V,b as F,a8 as k,a1 as ve,bv as Le,$ as x,Z as j,ab as Se,F as Pe,aR as be,cQ as Re,a6 as q,e as _e,l as Ce,m as xe,b5 as $,cR as Ee,cS as je,i as Oe,cT as we,cU as De,aP as N,d as Fe,cV as $e,c6 as Ae,c7 as Me,aT as ke,cW as qe,cX as Ne,bz as W,bB as We,cY as Be,bq as Ue,aU as Ye,b6 as He,cZ as Ve,c_ as ze,c$ as Ge,br as Xe}from"./sanity-7532b75c.js";import{useDeskTool as Ke,useDeskToolSetting as B,Delay as Qe}from"./index-2cbd8830-e64e5e8c.js";import{P as Ze}from"./PaneItem-7b9cb213-eee32f8e.js";import"./index-ff380dfe.js";const U=100,A=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},Je={};function et(e,s){return e._id?V(e._id):"item-".concat(s)}function tt(e){return we(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const n=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const r=n.slice(1),c=s[r];return typeof c=="string"?c:null}return n}function rt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(s=>[at(s),(s.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function it(e,s){const t=e.by.map(n=>{if(n.mapWith)return n;const r=ct(s,n.field);return r?ut(r,"datetime")?{...n,mapWith:"dateTime"}:r.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return t.every((n,r)=>n===e.by[r])?e:{...e,by:t}}function ct(e,s){const t=fe(s);let n=e;for(const r of t){if(!n)return;if(typeof r=="string"){n=lt(n,r);continue}if(!(he(r)||ye(r))||n.jsonType!=="array")return;const[o,a]=n.of||[];if(a||!o)return;if(!ge(o)){n=o;continue}const[m,p]=o.to||[];if(p||!m)return;n=m}return n}function lt(e,s){if(!("fields"in e))return;const t=e.fields.find(n=>n.name===s);return t?t.type:void 0}function ut(e,s){let t=e.type;for(;t;){if(t.name===s||!t.type&&t.jsonType===s)return!0;t=t.type}return!1}function dt(e){const{childItemId:s,error:t,filterIsSimpleTypeContraint:n,fullList:r,isActive:c,isLoading:o,items:a,layout:m,onListChange:p,onRetry:l,showIcons:y}=e,S=H(),{collapsed:v}=Te(),{collapsed:L,index:g}=Ie(),[P,b]=u.useState(!1);u.useEffect(()=>{if(L)return;const d=setTimeout(()=>{b(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=u.useCallback(d=>{const I=V(d._id),f=s===I;return i(Ze,{icon:y===!1?!1:void 0,id:I,pressed:!c&&f,selected:c&&f,layout:m,schemaType:S.get(d._type),value:d})},[s,c,m,S,y]),h=u.useMemo(()=>{if(!P)return null;if(t)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(k,{width:1,children:_(ve,{paddingX:4,paddingY:5,space:4,children:[i(Le,{as:"h3",children:"Could not fetch list items"}),_(x,{as:"p",children:["Error: ",i("code",{children:t.message})]}),l&&i(j,{children:i(Y,{icon:Se,onClick:l,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Qe,{ms:300,children:_(Pe,{children:[i(be,{muted:!0}),i(j,{marginTop:3,children:i(x,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!o&&a.length===0)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(k,{width:1,children:i(j,{paddingX:4,paddingY:5,children:i(x,{align:"center",muted:!0,size:2,children:n?"No documents of this type":"No matching documents"})})})});const d=r&&a.length===A;return _(j,{padding:2,children:[a.length>0&&i(Re,{gap:1,getItemKey:et,items:a,renderItem:T,onChange:p},"".concat(g,"-").concat(L)),o&&i(q,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(x,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&i(q,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:_(x,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[t,n,r,p,o,a,l,T,P,L,g]);return i(_e,{overflow:v?void 0:"auto",children:h})}const G=u.memo(e=>{let{index:s,initialValueTemplates:t=[],menuItems:n=[],menuItemGroups:r=[],setLayout:c,setSortOrder:o,title:a}=e;const{features:m}=Ke(),p=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{o(l)}}),[c,o]);return i(oe,{backButton:m.backButton&&s>0&&i(Y,{as:ae,"data-as":"a",icon:ie,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:p,menuItemGroups:r,menuItems:n})})});G.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},pt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new De,n=t.next.bind(t);return e.pipe(N(o=>({client:o.client,query:o.query,params:o.params})),Fe($e),Ae(1),Me()).pipe(ke(o=>{const a=qe(o.client,o.query,o.params,s).pipe(N(pt),Ne());return W($({loading:!0}).pipe(We(400),Be(a)),a)})).pipe(Ue(mt),Ye((o,a)=>He($(ft(o)),W(Ve(window,"online"),t).pipe(ze(1),Ge(a)))),Xe((o,a)=>({...o,...a,onRetry:n})))};function yt(e){var s;const{apiVersion:t,filter:n,params:r,sortOrder:c}=e,o=Ce(xe),[a,m]=u.useState(!1),p=u.useRef(a),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,v=(l==null?void 0:l.loading)||l===null,L=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,P=u.useMemo(()=>g?tt(g):null,[g]),b=u.useMemo(()=>{const h=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),f=(c==null?void 0:c.by)||[],C=a?A:U,R=f.length>0?f:z.by,E=ot(R);if(h){const O=d.concat(h).join(",");return["*[".concat(n,"] {").concat(O,"}"),"order(".concat(E,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(n,"]|order(").concat(E,")[0...").concat(C,"]{").concat(I,"}")},[n,a,c]),T=u.useCallback(h=>{let{toIndex:d}=h;v||p.current||d>=U/2&&(m(!0),p.current=!0)},[v]);return u.useEffect(()=>{const h=a?f=>!!f.result:()=>!0;y(f=>f?{...f,loading:!0}:null);const I=ht($({client:o,query:b,params:r}),{apiVersion:t,tag:"desk.document-list"}).pipe(Ee(h)).subscribe(y);return()=>I.unsubscribe()},[t,o,a,b,r]),u.useEffect(()=>{y(null),m(!1),p.current=!1},[n,r,c,t]),{error:S,fullList:a,handleListChange:T,isLoading:v,items:P,onRetry:L}}const M=[];function gt(e){const s=u.useRef(e);return je(s.current,e)||(s.current=e),s.current}const Tt=e=>{const{menuItems:s,sortOrder:t,layout:n}=e;return s==null?void 0:s.map(r=>{var c,o,a,m,p,l;return(c=r.params)!=null&&c.layout?{...r,selected:n===((o=r.params)==null?void 0:o.layout)}:(a=r==null?void 0:r.params)!=null&&a.extendedProjection?{...r,selected:(t==null?void 0:t.extendedProjection)===((m=r==null?void 0:r.params)==null?void 0:m.extendedProjection)}:(p=r==null?void 0:r.params)!=null&&p.by?{...r,selected:Oe(t==null?void 0:t.by,((l=r==null?void 0:r.params)==null?void 0:l.by)||M)}:{...r,selected:!1}})},Pt=u.memo(function(s){const{childItemId:t,index:n,isActive:r,isSelected:c,pane:o,paneKey:a}=s,m=H(),{name:p}=le(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=M,menuItems:v,menuItemGroups:L,options:g,title:P}=o,{apiVersion:b,defaultOrdering:T=M,filter:h}=g,d=gt(g.params||Je),I=o.source,f=u.useMemo(()=>st(h,d),[h,d]),C=(y==null?void 0:y.showIcons)!==!1,[R,E]=B(f,"layout",l),O=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:z,[T]),[w,X]=B(f,"sortOrder",O),K=f&&w?it(w,m.get(f)):w,D=ue(K),Q=rt(h),{error:Z,fullList:J,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=yt({filter:h,params:d,sortOrder:D,apiVersion:b}),re=u.useMemo(()=>Tt({menuItems:v,sortOrder:D,layout:R}),[R,v,D]);return i(de,{name:I||p,children:_(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[pe,i(G,{index:n,initialValueTemplates:S,menuItems:re,menuItemGroups:L,setLayout:E,setSortOrder:X,title:P}),i(dt,{childItemId:t,error:Z,filterIsSimpleTypeContraint:Q,fullList:J,isActive:r,isLoading:te,items:ne,layout:R,onListChange:ee,onRetry:se,showIcons:C})]})})});export{Pt as default};