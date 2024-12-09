"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3940],{84885:(r,t,a)=>{a.d(t,{A:()=>u});var o=a(7552),n=a(93878),e=a(43583),i=a(70799),l=a(1045);var s=a(51148),c=a(84893),g=a(58520),p=a(4785),h=a(15622),d=a(47839),m=a(69500);const v=(0,s.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,s.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.badge,t[a.variant],t[`anchorOrigin${(0,h.A)(a.anchorOrigin.vertical)}${(0,h.A)(a.anchorOrigin.horizontal)}${(0,h.A)(a.overlap)}`],"default"!==a.color&&t[`color${(0,h.A)(a.color)}`],a.invisible&&t.invisible]}})((0,c.A)((({theme:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.entries(r.palette).filter((0,g.A)(["contrastText"])).map((([t])=>({props:{color:t},style:{backgroundColor:(r.vars||r).palette[t].main,color:(r.vars||r).palette[t].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${d.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}))));function f(r){return{vertical:r?.vertical??"top",horizontal:r?.horizontal??"right"}}const u=o.forwardRef((function(r,t){const a=(0,p.b)({props:r,name:"MuiBadge"}),{anchorOrigin:o,className:s,classes:c,component:g,components:u={},componentsProps:O={},children:A,overlap:y="rectangular",color:w="default",invisible:x=!1,max:C=99,badgeContent:S,slots:$,slotProps:R,showZero:z=!1,variant:B="standard",...T}=a,{badgeContent:P,invisible:j,max:k,displayValue:L}=function(r){const{badgeContent:t,invisible:a=!1,max:o=99,showZero:n=!1}=r,i=(0,e.A)({badgeContent:t,max:o});let l=a;!1!==a||0!==t||n||(l=!0);const{badgeContent:s,max:c=o}=l?i:r;return{badgeContent:s,invisible:l,max:c,displayValue:s&&Number(s)>c?`${c}+`:s}}({max:C,invisible:x,badgeContent:S,showZero:z}),M=(0,e.A)({anchorOrigin:f(o),color:w,overlap:y,variant:B,badgeContent:S}),N=j||null==P&&"dot"!==B,{color:W=w,overlap:I=y,anchorOrigin:Z,variant:_=B}=N?M:a,F=f(Z),V="dot"!==_?L:void 0,D={...a,badgeContent:P,invisible:N,max:k,displayValue:V,showZero:z,anchorOrigin:F,color:W,overlap:I,variant:_},E=(r=>{const{color:t,anchorOrigin:a,invisible:o,overlap:n,variant:e,classes:l={}}=r,s={root:["root"],badge:["badge",e,o&&"invisible",`anchorOrigin${(0,h.A)(a.vertical)}${(0,h.A)(a.horizontal)}`,`anchorOrigin${(0,h.A)(a.vertical)}${(0,h.A)(a.horizontal)}${(0,h.A)(n)}`,`overlap${(0,h.A)(n)}`,"default"!==t&&`color${(0,h.A)(t)}`]};return(0,i.A)(s,d.w,l)})(D),H=$?.root??u.Root??v,U=$?.badge??u.Badge??b,q=R?.root??O.root,G=R?.badge??O.badge,J=(0,l.A)({elementType:H,externalSlotProps:q,externalForwardedProps:T,additionalProps:{ref:t,as:g},ownerState:D,className:(0,n.A)(q?.className,E.root,s)}),K=(0,l.A)({elementType:U,externalSlotProps:G,ownerState:D,className:(0,n.A)(E.badge,G?.className)});return(0,m.jsxs)(H,{...J,children:[A,(0,m.jsx)(U,{...K,children:V})]})}))},47839:(r,t,a)=>{a.d(t,{A:()=>i,w:()=>e});var o=a(33761),n=a(85693);function e(r){return(0,n.Ay)("MuiBadge",r)}const i=(0,o.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},13940:(r,t,a)=>{a.r(t),a.d(t,{badgeClasses:()=>n.A,default:()=>o.A,getBadgeUtilityClass:()=>n.w});var o=a(84885),n=a(47839)}}]);
//# sourceMappingURL=3940.aa377699.chunk.js.map