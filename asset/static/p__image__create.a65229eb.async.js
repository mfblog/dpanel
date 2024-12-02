"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7523],{86615:function(ge,N,e){var p=e(1413),r=e(45987),S=e(22270),o=e(78045),E=e(67294),W=e(90789),Z=e(55855),n=e(85893),L=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],K=E.forwardRef(function(d,c){var x=d.fieldProps,i=d.options,a=d.radioType,_=d.layout,g=d.proFieldProps,C=d.valueEnum,F=(0,r.Z)(d,L);return(0,n.jsx)(Z.Z,(0,p.Z)((0,p.Z)({valueType:a==="button"?"radioButton":"radio",ref:c,valueEnum:(0,S.h)(C,void 0)},F),{},{fieldProps:(0,p.Z)({options:i,layout:_},x),proFieldProps:g,filedConfig:{customLightMode:!0}}))}),j=E.forwardRef(function(d,c){var x=d.fieldProps,i=d.children;return(0,n.jsx)(o.ZP,(0,p.Z)((0,p.Z)({},x),{},{ref:c,children:i}))}),P=(0,W.G)(j,{valuePropName:"checked",ignoreWidth:!0}),$=P;$.Group=K,$.Button=o.ZP.Button,$.displayName="ProFormComponent",N.Z=$},184:function(ge,N,e){e.d(N,{a:function(){return T}});var p=e(4942),r=e(74165),S=e(15861),o=e(1413),E=e(97685),W=e(45987),Z=e(12044),n=e(51812),L=e(48171),K=e(73177),j=e(28459),P=e(85265),$=e(93967),d=e.n($),c=e(55917),x=e(21770),i=e(80334),a=e(67294),_=e(73935),g=e(89671),C=e(98082),F=function(O){return(0,p.Z)({},O.componentCls,{"&-sidebar-dragger":{width:"5px",cursor:"ew-resize",padding:"4px 0 0",borderTop:"1px solid transparent",position:"absolute",top:0,left:0,bottom:0,zIndex:100,backgroundColor:"transparent","&-min-disabled":{cursor:"w-resize"},"&-max-disabled":{cursor:"e-resize"}}})};function D(s){return(0,C.Xj)("DrawerForm",function(O){var u=(0,o.Z)((0,o.Z)({},O),{},{componentCls:".".concat(s)});return[F(u)]})}var m=e(85893),t=["children","trigger","onVisibleChange","drawerProps","onFinish","submitTimeout","title","width","resize","onOpenChange","visible","open"];function T(s){var O,u,ve=s.children,ce=s.trigger,z=s.onVisibleChange,R=s.drawerProps,Pe=s.onFinish,Ce=s.submitTimeout,Oe=s.title,Fe=s.width,H=s.resize,pe=s.onOpenChange,Ee=s.visible,Be=s.open,Y=(0,W.Z)(s,t);(0,i.ET)(!Y.footer||!(R!=null&&R.footer),"DrawerForm \u662F\u4E00\u4E2A ProForm \u7684\u7279\u6B8A\u5E03\u5C40\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u8BF7\u4F7F\u7528 submit.render \u81EA\u5B9A\u4E49\u3002");var y=a.useMemo(function(){var I,h,B,f={onResize:function(){},maxWidth:(0,Z.j)()?window.innerWidth*.8:void 0,minWidth:300};return typeof H=="boolean"?H?f:{}:(0,n.Y)({onResize:(I=H==null?void 0:H.onResize)!==null&&I!==void 0?I:f.onResize,maxWidth:(h=H==null?void 0:H.maxWidth)!==null&&h!==void 0?h:f.maxWidth,minWidth:(B=H==null?void 0:H.minWidth)!==null&&B!==void 0?B:f.minWidth})},[H]),oe=(0,a.useContext)(j.ZP.ConfigContext),De=oe.getPrefixCls("pro-form-drawer"),ne=D(De),U=ne.wrapSSR,q=ne.hashId,w=function(h){return"".concat(De,"-").concat(h," ").concat(q)},V=(0,a.useState)([]),te=(0,E.Z)(V,2),k=te[1],se=(0,a.useState)(!1),A=(0,E.Z)(se,2),v=A[0],M=A[1],G=(0,a.useState)(!1),J=(0,E.Z)(G,2),b=J[0],re=J[1],ee=(0,a.useState)(Fe||(H?y==null?void 0:y.minWidth:800)),me=(0,E.Z)(ee,2),fe=me[0],ae=me[1],Q=(0,x.Z)(!!Ee,{value:Be||Ee,onChange:pe||z}),l=(0,E.Z)(Q,2),X=l[0],ie=l[1],_e=(0,a.useRef)(null),de=(0,a.useCallback)(function(I){_e.current===null&&I&&k([]),_e.current=I},[]),he=(0,a.useRef)(),xe=(0,a.useCallback)(function(){var I,h,B,f=(I=(h=(B=Y.formRef)===null||B===void 0?void 0:B.current)!==null&&h!==void 0?h:Y.form)!==null&&I!==void 0?I:he.current;f&&R!==null&&R!==void 0&&R.destroyOnClose&&f.resetFields()},[R==null?void 0:R.destroyOnClose,Y.form,Y.formRef]);(0,a.useEffect)(function(){X&&(Be||Ee)&&(pe==null||pe(!0),z==null||z(!0)),b&&ae(y==null?void 0:y.minWidth)},[Ee,X,b]),(0,a.useImperativeHandle)(Y.formRef,function(){return he.current},[he.current]);var Re=(0,a.useMemo)(function(){return ce?a.cloneElement(ce,(0,o.Z)((0,o.Z)({key:"trigger"},ce.props),{},{onClick:function(){var I=(0,S.Z)((0,r.Z)().mark(function B(f){var le,ue;return(0,r.Z)().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:ie(!X),re(!Object.keys(y)),(le=ce.props)===null||le===void 0||(ue=le.onClick)===null||ue===void 0||ue.call(le,f);case 3:case"end":return Te.stop()}},B)}));function h(B){return I.apply(this,arguments)}return h}()})):null},[ie,ce,X,re,b]),be=(0,a.useMemo)(function(){var I,h,B,f;return Y.submitter===!1?!1:(0,c.Z)({searchConfig:{submitText:(I=(h=oe.locale)===null||h===void 0||(h=h.Modal)===null||h===void 0?void 0:h.okText)!==null&&I!==void 0?I:"\u786E\u8BA4",resetText:(B=(f=oe.locale)===null||f===void 0||(f=f.Modal)===null||f===void 0?void 0:f.cancelText)!==null&&B!==void 0?B:"\u53D6\u6D88"},resetButtonProps:{preventDefault:!0,disabled:Ce?v:void 0,onClick:function(ue){var Ie;ie(!1),R==null||(Ie=R.onClose)===null||Ie===void 0||Ie.call(R,ue)}}},Y.submitter)},[Y.submitter,(O=oe.locale)===null||O===void 0||(O=O.Modal)===null||O===void 0?void 0:O.okText,(u=oe.locale)===null||u===void 0||(u=u.Modal)===null||u===void 0?void 0:u.cancelText,Ce,v,ie,R]),je=(0,a.useCallback)(function(I,h){return(0,m.jsxs)(m.Fragment,{children:[I,_e.current&&h?(0,m.jsx)(a.Fragment,{children:(0,_.createPortal)(h,_e.current)},"submitter"):h]})},[]),Ze=(0,L.J)(function(){var I=(0,S.Z)((0,r.Z)().mark(function h(B){var f,le,ue;return(0,r.Z)().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return f=Pe==null?void 0:Pe(B),Ce&&f instanceof Promise&&(M(!0),le=setTimeout(function(){return M(!1)},Ce),f.finally(function(){clearTimeout(le),M(!1)})),Te.next=4,f;case 4:return ue=Te.sent,ue&&ie(!1),Te.abrupt("return",ue);case 7:case"end":return Te.stop()}},h)}));return function(h){return I.apply(this,arguments)}}()),Ae=(0,K.X)(X,z),ye=(0,a.useCallback)(function(I){var h,B,f=(document.body.offsetWidth||1e3)-(I.clientX-document.body.offsetLeft),le=(h=y==null?void 0:y.minWidth)!==null&&h!==void 0?h:Fe||800,ue=(B=y==null?void 0:y.maxWidth)!==null&&B!==void 0?B:window.innerWidth*.8;if(f<le){ae(le);return}if(f>ue){ae(ue);return}ae(f)},[y==null?void 0:y.maxWidth,y==null?void 0:y.minWidth,Fe]),Me=(0,a.useCallback)(function(){document.removeEventListener("mousemove",ye),document.removeEventListener("mouseup",Me)},[ye]);return U((0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(P.Z,(0,o.Z)((0,o.Z)((0,o.Z)({title:Oe,width:fe},R),Ae),{},{afterOpenChange:function(h){var B;h||xe(),R==null||(B=R.afterOpenChange)===null||B===void 0||B.call(R,h)},onClose:function(h){var B;Ce&&v||(ie(!1),R==null||(B=R.onClose)===null||B===void 0||B.call(R,h))},footer:Y.submitter!==!1&&(0,m.jsx)("div",{ref:de,style:{display:"flex",justifyContent:"flex-end"}}),children:[H?(0,m.jsx)("div",{className:d()(w("sidebar-dragger"),q,(0,p.Z)((0,p.Z)({},w("sidebar-dragger-min-disabled"),fe===(y==null?void 0:y.minWidth)),w("sidebar-dragger-max-disabled"),fe===(y==null?void 0:y.maxWidth))),onMouseDown:function(h){var B;y==null||(B=y.onResize)===null||B===void 0||B.call(y),h.stopPropagation(),h.preventDefault(),document.addEventListener("mousemove",ye),document.addEventListener("mouseup",Me),re(!0)}}):null,(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g.I,(0,o.Z)((0,o.Z)({formComponentType:"DrawerForm",layout:"vertical"},Y),{},{formRef:he,onInit:function(h,B){var f;Y.formRef&&(Y.formRef.current=B),Y==null||(f=Y.onInit)===null||f===void 0||f.call(Y,h,B),he.current=B},submitter:be,onFinish:function(){var I=(0,S.Z)((0,r.Z)().mark(function h(B){var f;return(0,r.Z)().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,Ze(B);case 2:return f=ue.sent,ue.abrupt("return",f);case 4:case"end":return ue.stop()}},h)}));return function(h){return I.apply(this,arguments)}}(),contentRender:je,children:ve}))})]})),Re]}))}},37476:function(ge,N,e){e.d(N,{Y:function(){return i}});var p=e(74165),r=e(15861),S=e(1413),o=e(97685),E=e(45987),W=e(73177),Z=e(28459),n=e(85576),L=e(55917),K=e(21770),j=e(80334),P=e(67294),$=e(73935),d=e(89671),c=e(85893),x=["children","trigger","onVisibleChange","onOpenChange","modalProps","onFinish","submitTimeout","title","width","visible","open"];function i(a){var _,g,C=a.children,F=a.trigger,D=a.onVisibleChange,m=a.onOpenChange,t=a.modalProps,T=a.onFinish,s=a.submitTimeout,O=a.title,u=a.width,ve=a.visible,ce=a.open,z=(0,E.Z)(a,x);(0,j.ET)(!z.footer||!(t!=null&&t.footer),"ModalForm \u662F\u4E00\u4E2A ProForm \u7684\u7279\u6B8A\u5E03\u5C40\uFF0C\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0C\u8BF7\u4F7F\u7528 submit.render \u81EA\u5B9A\u4E49\u3002");var R=(0,P.useContext)(Z.ZP.ConfigContext),Pe=(0,P.useState)([]),Ce=(0,o.Z)(Pe,2),Oe=Ce[1],Fe=(0,P.useState)(!1),H=(0,o.Z)(Fe,2),pe=H[0],Ee=H[1],Be=(0,K.Z)(!!ve,{value:ce||ve,onChange:m||D}),Y=(0,o.Z)(Be,2),y=Y[0],oe=Y[1],De=(0,P.useRef)(null),ne=(0,P.useCallback)(function(A){De.current===null&&A&&Oe([]),De.current=A},[]),U=(0,P.useRef)(),q=(0,P.useCallback)(function(){var A,v,M,G=(A=(v=z.form)!==null&&v!==void 0?v:(M=z.formRef)===null||M===void 0?void 0:M.current)!==null&&A!==void 0?A:U.current;G&&t!==null&&t!==void 0&&t.destroyOnClose&&G.resetFields()},[t==null?void 0:t.destroyOnClose,z.form,z.formRef]);(0,P.useImperativeHandle)(z.formRef,function(){return U.current},[U.current]),(0,P.useEffect)(function(){(ce||ve)&&(m==null||m(!0),D==null||D(!0))},[ve,ce]);var w=(0,P.useMemo)(function(){return F?P.cloneElement(F,(0,S.Z)((0,S.Z)({key:"trigger"},F.props),{},{onClick:function(){var A=(0,r.Z)((0,p.Z)().mark(function M(G){var J,b;return(0,p.Z)().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:oe(!y),(J=F.props)===null||J===void 0||(b=J.onClick)===null||b===void 0||b.call(J,G);case 2:case"end":return ee.stop()}},M)}));function v(M){return A.apply(this,arguments)}return v}()})):null},[oe,F,y]),V=(0,P.useMemo)(function(){var A,v,M,G,J,b;return z.submitter===!1?!1:(0,L.Z)({searchConfig:{submitText:(A=(v=t==null?void 0:t.okText)!==null&&v!==void 0?v:(M=R.locale)===null||M===void 0||(M=M.Modal)===null||M===void 0?void 0:M.okText)!==null&&A!==void 0?A:"\u786E\u8BA4",resetText:(G=(J=t==null?void 0:t.cancelText)!==null&&J!==void 0?J:(b=R.locale)===null||b===void 0||(b=b.Modal)===null||b===void 0?void 0:b.cancelText)!==null&&G!==void 0?G:"\u53D6\u6D88"},resetButtonProps:{preventDefault:!0,disabled:s?pe:void 0,onClick:function(ee){var me;oe(!1),t==null||(me=t.onCancel)===null||me===void 0||me.call(t,ee)}}},z.submitter)},[(_=R.locale)===null||_===void 0||(_=_.Modal)===null||_===void 0?void 0:_.cancelText,(g=R.locale)===null||g===void 0||(g=g.Modal)===null||g===void 0?void 0:g.okText,t,z.submitter,oe,pe,s]),te=(0,P.useCallback)(function(A,v){return(0,c.jsxs)(c.Fragment,{children:[A,De.current&&v?(0,c.jsx)(P.Fragment,{children:(0,$.createPortal)(v,De.current)},"submitter"):v]})},[]),k=(0,P.useCallback)(function(){var A=(0,r.Z)((0,p.Z)().mark(function v(M){var G,J,b;return(0,p.Z)().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return G=T==null?void 0:T(M),s&&G instanceof Promise&&(Ee(!0),J=setTimeout(function(){return Ee(!1)},s),G.finally(function(){clearTimeout(J),Ee(!1)})),ee.next=4,G;case 4:return b=ee.sent,b&&oe(!1),ee.abrupt("return",b);case 7:case"end":return ee.stop()}},v)}));return function(v){return A.apply(this,arguments)}}(),[T,oe,s]),se=(0,W.X)(y);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,(0,S.Z)((0,S.Z)((0,S.Z)({title:O,width:u||800},t),se),{},{onCancel:function(v){var M;s&&pe||(oe(!1),t==null||(M=t.onCancel)===null||M===void 0||M.call(t,v))},afterClose:function(){var v;q(),y&&oe(!1),t==null||(v=t.afterClose)===null||v===void 0||v.call(t)},footer:z.submitter!==!1?(0,c.jsx)("div",{ref:ne,style:{display:"flex",justifyContent:"flex-end"}}):null,children:(0,c.jsx)(d.I,(0,S.Z)((0,S.Z)({formComponentType:"ModalForm",layout:"vertical"},z),{},{onInit:function(v,M){var G;z.formRef&&(z.formRef.current=M),z==null||(G=z.onInit)===null||G===void 0||G.call(z,v,M),U.current=M},formRef:U,submitter:V,onFinish:function(){var A=(0,r.Z)((0,p.Z)().mark(function v(M){var G;return(0,p.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,k(M);case 2:return G=b.sent,b.abrupt("return",G);case 4:case"end":return b.stop()}},v)}));return function(v){return A.apply(this,arguments)}}(),contentRender:te,children:C}))})),w]})}},74344:function(ge,N,e){var p=e(5574),r=e.n(p),S=e(37476),o=e(38345),E=e(54006),W=e(67294),Z=e(54964),n=e(85893),L=(0,W.forwardRef)(function(K,j){(0,W.useImperativeHandle)(j,function(){return{start:function(){for(var D=arguments.length,m=new Array(D),t=0;t<D;t++)m[t]=arguments[t];_(m.join(":")),c(!0)},reset:function(){var D;(D=C.current)===null||D===void 0||D.clear()},show:function(D){var m,t;(m=C.current)===null||m===void 0||m.clear(),(t=C.current)===null||t===void 0||t.write(D),c(!0)}}});var P=(0,W.useState)(!1),$=r()(P,2),d=$[0],c=$[1],x=(0,W.useState)(""),i=r()(x,2),a=i[0],_=i[1],g=(0,E.useModel)("subscriber"),C=(0,W.useRef)();return g.addDataHandler("image:"+a,function(F){var D;(D=C.current)===null||D===void 0||D.write(F.data)}),(0,W.useEffect)(function(){var F;(F=C.current)===null||F===void 0||F.fit()},[]),(0,n.jsx)(S.Y,{modalProps:{forceRender:!0},title:"\u6784\u5EFA\u65E5\u5FD7",submitter:!1,width:1e3,onOpenChange:function(D){if(c(D),D){var m,t;(m=C.current)===null||m===void 0||m.clear(),(t=C.current)===null||t===void 0||t.fit()}},open:d,children:(0,n.jsx)(o.Z,{ghost:!0,children:(0,n.jsx)(Z.Z,{showInModal:!0,width:"960px",height:"500px",ref:C})})})});N.Z=L},89063:function(ge,N,e){e.d(N,{Z:function(){return n}});var p=e(24963),r=e(88484),S=e(62370),o=e(31418),E=e(14726),W=e(67294),Z=e(85893);function n(L){var K=(0,W.useContext)(p.Z),j=K.message,P=K.notice,$=K.lang,d=(0,W.useRef)(null),c=o.Z.useApp(),x=function(){d.current&&(d.current.click(),d.current.onchange=function(a){if(!a||!a.target)return"";var _=new FileReader;_.onload=function(C){var F,D,m=(F=C.target)===null||F===void 0?void 0:F.result;if(L.onLoad)try{L.onLoad&&L.onLoad(m)}catch(t){P.error(t);return}typeof L.onImport=="function"&&(j.success("\u6210\u529F\u5BFC\u5165 ".concat(L.title)),L.onImport(m)),(D=d.current)!==null&&D!==void 0&&D.value&&(d.current.value="")};var g=a.target;if(g.files)try{_.readAsText(g.files[0])}catch(C){P.error("\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S.Z,{children:(0,Z.jsx)(E.ZP,{icon:(0,Z.jsx)(r.Z,{}),block:!0,onClick:x,children:L.title})}),(0,Z.jsx)("input",{style:{display:"none"},type:"file",ref:d,name:"importFileInput"})]})}},54964:function(ge,N,e){e.d(N,{a:function(){return K}});var p=e(78267),r=e.n(p),S=e(75458),o=e.n(S),E=e(67294),W=e(12320),Z=e.n(W),n=e(89629),L=e(85893),K={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},j=new W.Terminal(K),P=new S.SearchAddon,$=new p.FitAddon,d=(0,E.forwardRef)(function(c,x){return(0,E.useEffect)(function(){window.addEventListener("resize",function(){c.showInModal||$.fit()}),c.style&&c.style.fontSize&&(j.options.fontSize=c.style.fontSize),j.loadAddon($),j.loadAddon(P),j.open(document.getElementById("terminal-container")),$.fit()},[]),(0,E.useImperativeHandle)(x,function(){return{write:function(a){j.write(a)},clear:function(){j.clear()},getTerminal:function(){return j},findNext:function(a){P.findNext(a)},findPrev:function(a){P.findPrevious(a)},fit:function(){$.fit()},onData:function(a){j.onData(a)}}}),(0,L.jsx)("div",{id:"terminal-container",style:{width:c.width?c.width:"100%",height:c.height?c.height:"500px"}})});N.Z=d},24963:function(ge,N,e){var p=e(67294),r=(0,p.createContext)({});N.Z=r},90128:function(ge,N,e){e.r(N),e.d(N,{default:function(){return De}});var p=e(15009),r=e.n(p),S=e(99289),o=e.n(S),E=e(5574),W=e.n(E),Z=e(5966),n=e(85893);function L(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Z.Z,{fieldProps:{min:2,max:255},rules:[{required:!0}],required:!0,placeholder:"\u6307\u5B9AGit\u5730\u5740\uFF0C\u79C1\u6709\u4ED3\u5E93\u8BF7\u9644\u52A0\u6743\u9650\u3002\u4EC5\u652F\u6301Master\u5206\u652F",label:"Git\u4ED3\u5E93\u5730\u5740",name:"buildGit"})})}var K=e(97961),j=e(1413),P=e(45987),$=e(88484),d=e(31365),c=e(14726),x=e(67294),i=e(9105),a=e(90789),_=["fieldProps","action","accept","listType","title","max","icon","buttonProps","disabled","proFieldProps"],g=function(U,q){var w,V=U.fieldProps,te=U.action,k=U.accept,se=U.listType,A=U.title,v=A===void 0?"\u5355\u51FB\u4E0A\u4F20":A,M=U.max,G=U.icon,J=G===void 0?(0,n.jsx)($.Z,{}):G,b=U.buttonProps,re=U.disabled,ee=U.proFieldProps,me=(0,P.Z)(U,_),fe=(0,x.useMemo)(function(){var ie;return(ie=me.fileList)!==null&&ie!==void 0?ie:me.value},[me.fileList,me.value]),ae=(0,x.useContext)(i.A),Q=(ee==null?void 0:ee.mode)||ae.mode||"edit",l=(M===void 0||!fe||(fe==null?void 0:fe.length)<M)&&Q!=="read",X=(se!=null?se:V==null?void 0:V.listType)==="picture-card";return(0,n.jsx)(d.Z,(0,j.Z)((0,j.Z)({action:te,accept:k,ref:q,listType:se||"picture",fileList:fe},V),{},{name:(w=V==null?void 0:V.name)!==null&&w!==void 0?w:"file",onChange:function(_e){var de;V==null||(de=V.onChange)===null||de===void 0||de.call(V,_e)},children:l&&(X?(0,n.jsxs)("span",{children:[J," ",v]}):(0,n.jsxs)(c.ZP,(0,j.Z)((0,j.Z)({disabled:re||(V==null?void 0:V.disabled)},b),{},{children:[J,v]})))}))},C=(0,a.G)(x.forwardRef(g),{getValueFromEvent:function(U){return U.fileList}}),F=C;function D(ne){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F,{max:1,title:ne.title,label:ne.label,required:!0,rules:[{required:!0}],fieldProps:{name:"file",accept:ne.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(q){return new Promise(function(w){var V;(0,K._2)({path:(V=q.response.data.path)!==null&&V!==void 0?V:""}).then(function(te){w(!0)})})}},name:ne.name})})}var m=e(74344),t=e(89063),T=e(95089),s=e(62370),O=e(184),u=e(86615),ve=e(97462),ce=e(34041);function z(ne){var U=(0,x.useState)([]),q=W()(U,2),w=q[0],V=q[1];return(0,x.useEffect)(function(){(0,K.MF)().then(function(te){var k=Object.keys(te.data).map(function(se){return te.data[se]});V(k)})},[]),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(O.a,{trigger:(0,n.jsx)(c.ZP,{block:!0,children:"\u4F7F\u7528\u6A21\u677F\u751F\u6210"}),onFinish:function(k){return new Promise(function(se,A){var v=k[k.language+"EnvVersion"].split("|"),M=W()(v,2),G=M[0],J=M[1],b="FROM ".concat(G,`
# \u5E94\u7528\u76EE\u5F55\u4F4D\u4E8E /app
# \u53EF\u901A\u7BA1\u5BB9\u5668 - \u6587\u4EF6\u7BA1\u7406, \u4E0A\u4F20\u4EE3\u7801\u81F3\u6B64\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 80

# \u81EA\u5B9A\u4E49\u5B89\u88C5\u7EC4\u4EF6\u3001\u6269\u5C55\u6216\u662F\u5E93, \u4F8B\u5982:
# RUN apk add --no-cache --update vim
`);switch(k.language){case"php":b+=`
                
# \u7AD9\u70B9\u76EE\u5F55\u4F4D\u4E8E /app/wwwroot \u53EF\u4E0A\u4F20\u6216\u662F\u4FEE\u6539\u7AD9\u70B9\u6587\u4EF6
# nginx \u914D\u7F6E\u4F4D\u4E8E /app/nginx/ \u53EF\u4FEE\u6539\u589E\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E
# \u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u8FD0\u884C\u6620\u5C04\u7AEF\u53E3\uFF0C\u67E5\u770B\u73AF\u5883\u53CA\u6269\u5C55\u4FE1\u606F

`,k.language=="php"&&k.phpExt&&(b+="RUN apk add --no-cache --update ",k.phpExt.map(function(re){b+="php".concat(J,"-").concat(re," ")}));break;case"golang":b+=`
# \u53EF\u4EE5\u4FEE\u6539 RUN_COMMAND \u73AF\u5883\u53D8\u91CF, \u66F4\u6539\u542F\u52A8\u6267\u884C\u547D\u4EE4
ENV RUN_COMMAND="go version"`;break;default:break}ne.onFinish(b),se(!0)})},children:[(0,n.jsx)(u.Z.Group,{radioType:"button",name:"language",label:"\u7A0B\u5E8F\u8BED\u8A00",options:w.map(function(te){return{label:te.name,value:te.name}}),required:!0}),(0,n.jsx)(ve.Z,{name:["language"],children:function(k){var se=k.language;return se?(0,n.jsx)(n.Fragment,{children:w.map(function(A){if(A.name==se)return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Z,{name:"".concat(A.name,"EnvVersion"),label:"\u73AF\u5883\u7248\u672C",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7A0B\u5E8F\u8FD0\u884C\u7684\u73AF\u5883"}],children:(0,n.jsx)(ce.Z,{options:A.env.map(function(v){return{label:v.name,value:v.baseImage}}),placeholder:"\u8BF7\u9009\u62E9\u5177\u4F53\u7684\u73AF\u5883\u7248\u672C"},"".concat(A.name,"Select"))},A.name),A.name=="php"&&(0,n.jsx)(s.Z,{label:"php\u6269\u5C55",name:"phpExt",children:(0,n.jsx)(ce.Z,{options:A.ext.map(function(v){return{label:v,value:v}}),mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u8981\u5B89\u88C5\u7684php\u6269\u5C55"},"phpExtSelect")},"phpExt")]},"envSelect")})}):(0,n.jsx)(n.Fragment,{})}})]})})}function R(ne){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{title:"\u5BFC\u5165\u672C\u5730Dockerfile\u6587\u4EF6",onImport:function(q){var w;return(w=ne.createFormRef.current)===null||w===void 0||w.setFieldValue("buildDockerfile",q),!0},onLoad:function(q){if(q.indexOf("FROM ")<0)throw new Error("\u5BFC\u5165Dockerfile\u6587\u4EF6\u9519\u8BEF");return!0}}),(0,n.jsx)(z,{onFinish:function(q){var w;(w=ne.createFormRef.current)===null||w===void 0||w.setFieldValue("buildDockerfile",q)}}),(0,n.jsx)(s.Z,{shouldUpdate:!0,children:function(q){var w=q.getFieldValue;return(0,n.jsx)(s.Z,{name:"buildDockerfile",children:(0,n.jsx)(T.ZP,{value:w("buildDockerfile"),onChange:function(te){var k;(k=ne.createFormRef.current)===null||k===void 0||k.setFieldValue("buildDockerfile",te)},height:"600px",theme:"dark",style:{marginBottom:"20px"}})})}})]})}var Pe=e(24963),Ce=e(18148),Oe=e(75870),Fe=e(38345),H=e(97269),pe=e(64317),Ee=e(90672),Be=e(54006),Y=e(42075),y=e(83062),oe=e(91845);function De(){var ne=(0,x.useContext)(Pe.Z),U=ne.loading,q=ne.message,w=(0,x.useRef)(),V=(0,x.useState)([]),te=W()(V,2),k=te[0],se=te[1],A=(0,Be.useSearchParams)(),v=W()(A,2),M=v[0],G=v[1],J=(0,x.useState)("dockerfile"),b=W()(J,2),re=b[0],ee=b[1],me=(0,Be.useNavigate)(),fe=(0,x.useRef)();return(0,x.useEffect)(function(){var ae,Q=(ae=M.get("id"))!==null&&ae!==void 0?ae:0;Q&&(U.show(),(0,Ce.T8)({id:parseInt(Q)}).then(function(l){var X;ee(l.data.task.buildType),(X=w.current)===null||X===void 0||X.setFieldsValue({title:l.data.task.title,imageTag:l.data.task.tag,imageRegistry:l.data.task.setting.registry,uploadType:l.data.task.buildType,buildRoot:l.data.task.setting.buildRoot,buildGit:l.data.task.setting.buildGit,buildDockerfile:l.data.task.setting.buildDockerfile,platform:l.data.task.setting.platform})}).finally(function(){U.destroy()}))},[]),(0,n.jsxs)(Fe.Z,{direction:"column",ghost:!0,gutter:[0,10],children:[(0,n.jsx)(Fe.Z,{bordered:!0,headerBordered:!0,children:(0,n.jsxs)(H.A,{submitter:{render:function(Q,l){return(0,n.jsx)(Y.Z,{children:l})}},onFinish:function(){var ae=o()(r()().mark(function Q(l){var X,ie,_e,de,he,xe,Re,be,je,Ze,Ae,ye,Me,I,h;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(re!="containerTar"){f.next=8;break}return f.next=3,(0,K.vC)({tag:l.imageTag,registry:l.imageRegistry,tar:(X=l.containerTar[0].response.data.path)!==null&&X!==void 0?X:"",cmd:l.cmd,workDir:l.workDir,expose:l.expose?l.expose.split(`
`):[],env:l.env?l.env.split(`
`):[],volume:l.volume?l.volume.split(`
`):[]});case 3:return ie=f.sent,me("/image/list"),f.abrupt("return",!0);case 8:if(re!="imageTar"){f.next=19;break}return(_e=fe.current)===null||_e===void 0||_e.start("import",l.imageTag),f.next=12,(0,K.GH)({tag:l.imageTag,registry:l.imageRegistry,tar:(de=l.imageTar[0].response.data.path)!==null&&de!==void 0?de:""});case 12:return xe=f.sent,xe.data.tag&&xe.data.tag.map(function(le){q.success("\u5BFC\u5165 "+le+" \u955C\u50CF\u6210\u529F")}),(he=fe.current)===null||he===void 0||he.reset(),me("/image/list"),f.abrupt("return",!0);case 19:return Ze=(Re=M.get("id"))!==null&&Re!==void 0?Re:"0",Ae=k&&k[0]?k[0].fileName:"",ye={name:"",arch:""},K.ii.map(function(le){le.name==l.platform&&(ye=le)}),Me={id:parseInt(Ze),tag:l.imageTag,title:l.title,registry:l.imageRegistry,buildRoot:l.buildRoot,buildDockerfile:l.buildDockerfile,buildZip:Ae!=null?Ae:"",buildGit:l.buildGit,buildType:re,platform:ye.name,PlatformArch:ye.arch},l.buildZip&&l.buildZip.length>0&&(Me.buildZip=(I=l.buildZip[0].response.data.path)!==null&&I!==void 0?I:""),(be=fe.current)===null||be===void 0||be.start("build",Ze),f.next=28,(0,K.fN)(Me);case 28:return h=f.sent,(je=fe.current)===null||je===void 0||je.reset(),me("/image/list/recycle"),f.abrupt("return",!0);case 32:case"end":return f.stop()}},Q)}));return function(Q){return ae.apply(this,arguments)}}(),formRef:w,children:[(0,n.jsx)(Z.Z,{label:"\u4EFB\u52A1\u540D\u79F0",name:"title",fieldProps:{onChange:function(Q){var l="";if(Q.target.value){var X,ie=(0,oe.N9)(Q.target.value.trim(),{toneType:"none",type:"array"});l=ie.join(""),(X=w.current)===null||X===void 0||X.setFieldValue("imageTag",l)}}}}),(0,n.jsx)(ve.Z,{name:["uploadType"],children:function(Q){var l=Q.uploadType;if(l!="imageTar")return(0,n.jsx)(pe.Z,{label:"\u955C\u50CF\u4ED3\u5E93",tooltip:(0,n.jsxs)(n.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,n.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),name:"imageRegistry",request:o()(r()().mark(function X(){var ie;return r()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,(0,Oe.Ot)();case 2:return ie=de.sent,de.abrupt("return",ie.data.list.map(function(he){return{value:he.serverAddress,label:he.title+"("+he.serverAddress+")"}}));case 4:case"end":return de.stop()}},X)}))})}}),(0,n.jsx)(ve.Z,{name:["imageRegistry","uploadType"],children:function(Q){var l=Q.imageRegistry,X=Q.uploadType;if(X!="imageTar")return(0,n.jsx)(Z.Z,{fieldProps:{min:2,max:255,addonBefore:"".concat(l||"","/")},rules:[{required:!0}],required:!0,tooltip:"\u4F8B\u5982: name:tag\u3001namespace/name:tag\u3001registry/namespace/name:tag",placeholder:"\u53EA\u80FD\u4F7F\u7528\u5C0F\u5199\u82F1\u6587\u5B57\u7B26\u3001\u6570\u5B57\u3001_\u3001-\u3001",label:"\u955C\u50CFTag",name:"imageTag"})}}),(0,n.jsx)(u.Z.Group,{name:"uploadType",label:"\u6784\u5EFA\u65B9\u5F0F",initialValue:re,options:[{label:(0,n.jsx)(y.Z,{title:"\u901A\u8FC7 Dockerfile \u6587\u4EF6\u5FEB\u901F\u6784\u5EFA\u955C\u50CF",children:"Dockerfile"}),value:"dockerfile"},{label:(0,n.jsx)(y.Z,{title:"\u5C06 Dockerfile \u6587\u4EF6\u4E0E\u6784\u5EFA\u955C\u50CF\u7528\u5230\u7684\u8D44\u6E90\uFF0C\u901A\u8FC7\u4E0A\u4F20 Zip \u5305\u7684\u5F62\u5F0F\u6784\u5EFA\u955C\u50CF",children:"Zip\u5305"}),value:"zip"},{label:(0,n.jsx)(y.Z,{title:"\u5C06 Dockerfile \u6587\u4EF6\u4E0E\u6784\u5EFA\u955C\u50CF\u7528\u5230\u7684\u8D44\u6E90\u653E\u7F6E\u5230 Git \u4ED3\u5E93\u4E2D\uFF0C\u53EF\u4EE5\u6301\u7EED\u6027\u7684\u6784\u5EFA\u955C\u50CF",children:"Git\u6E90\u7801\u4ED3\u5E93"}),value:"git"},{label:(0,n.jsx)(y.Z,{title:"\u4E0A\u4F20\u5BB9\u5668\u5BFC\u51FA\u7684 Tar \u5305\uFF0C\u5E76\u81EA\u5B9A\u4E49\u53C2\u6570\u6784\u5EFA\u955C\u50CF\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u5BB9\u5668\u539F\u59CB\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u5BB9\u5668\u8BE6\u60C5\u9875\u4F7F\u7528\u3010\u5C06\u5BB9\u5668\u4FDD\u5B58\u4E3A\u955C\u50CF\u3011\u529F\u80FD",children:"\u5BFC\u5165\u5BB9\u5668Tar\u5305"}),value:"containerTar"},{label:(0,n.jsx)(y.Z,{title:"\u4E0A\u4F20\u955C\u50CF Tar \u5305\u6784\u5EFA\u955C\u50CF",children:"\u5BFC\u5165\u955C\u50CFTar\u5305"}),value:"imageTar"}],fieldProps:{onChange:function(Q){ee(Q.target.value)}}}),(0,n.jsx)(ve.Z,{name:["uploadType"],children:function(Q){var l=Q.uploadType;if(l=="containerTar")return[(0,n.jsx)(Z.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E00\u822C\u6307\u5411\u4EE3\u7801\u7684\u6240\u5728\u76EE\u5F55",label:"\u5DE5\u4F5C\u76EE\u5F55",name:"workDir",placeholder:"\u9ED8\u8BA4\u4E3A / \u76EE\u5F55"},"workDir"),(0,n.jsx)(Z.Z,{required:!0,tooltip:"\u901A\u8FC7\u5BB9\u5668\u5BFC\u5165\u955C\u50CF\u65F6\uFF0C\u5FC5\u987B\u6307\u5B9A\u542F\u52A8\u547D\u4EE4\uFF0C\u5426\u5219\u518D\u521B\u5EFA\u65F6\u65E0\u6CD5\u542F\u52A8",rules:[{required:!0}],label:"CMD",name:"cmd"},"cmd"),(0,n.jsx)(Ee.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u7AEF\u53E3",label:"\u66B4\u9732\u7AEF\u53E3",name:"expose",placeholder:`80 
9000`},"expose"),(0,n.jsx)(Ee.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF",label:"\u73AF\u5883\u53D8\u91CF",name:"env",placeholder:`TEST_VALUE=123 
TEST_NO_VALUE=`},"env"),(0,n.jsx)(Ee.Z,{tooltip:"\u6307\u5B9A\u5BFC\u5165\u540E\u7684\u955C\u50CF\u9700\u8981\u6301\u4E45\u5316\u7684\u76EE\u5F55\uFF0C\u4E00\u884C\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55",label:"\u5B58\u50A8\u5377\u76EE\u5F55",name:"volume",placeholder:`/app 
/home`},"volume")];if(l!="imageTar"){if(l=="zip"||l=="git")return(0,n.jsx)(Z.Z,{name:"buildRoot",label:"Dockerfile\u6587\u4EF6\u4F4D\u7F6E",tooltip:"\u6307\u5B9ADockerfile\u6240\u5728\u7684\u76EE\u5F55",fieldProps:{addonBefore:"\u9ED8\u8BA4\u4EE5\u5305\u6216\u662F\u4ED3\u5E93\u76EE\u5F55\u5F00\u59CB\uFF08/\uFF09"},placeholder:"/Dockerfile"})}}}),re=="zip"&&(0,n.jsx)(D,{label:"\u4E0A\u4F20\u6784\u5EFA\u5305 (\u53EA\u5141\u8BB8\u4E0A\u4F20 .zip \u6587\u4EF6\uFF0C\u4E14\u4E0E\u5305\u4E2D\u7684 Dockerfile \u6307\u5B9A\u7684\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4)",name:"buildZip",accept:".zip"}),re=="containerTar"&&(0,n.jsx)(D,{label:"\u5BFC\u5165\u5BB9\u5668\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u5BB9\u5668\u751F\u6210\uFF09",name:"containerTar",accept:".tar"}),re=="imageTar"&&(0,n.jsx)(D,{label:"\u5BFC\u5165\u955C\u50CF\u5305\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTar",accept:".tar"}),re=="git"&&(0,n.jsx)(L,{}),re=="dockerfile"&&(0,n.jsx)(R,{createFormRef:w})]})}),(0,n.jsx)(m.Z,{ref:fe})]})}},97961:function(ge,N,e){e.d(N,{GH:function(){return j},MF:function(){return c},_2:function(){return $},fN:function(){return Z},ii:function(){return W},vC:function(){return L}});var p=e(15009),r=e.n(p),S=e(99289),o=e.n(S),E=e(54006),W=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function Z(i){return n.apply(this,arguments)}function n(){return n=o()(r()().mark(function i(a){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,E.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:a}));case 1:case"end":return g.stop()}},i)})),n.apply(this,arguments)}function L(i){return K.apply(this,arguments)}function K(){return K=o()(r()().mark(function i(a){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,E.request)("/api/app/image/import-by-container-tar",{method:"POST",data:a}));case 1:case"end":return g.stop()}},i)})),K.apply(this,arguments)}function j(i){return P.apply(this,arguments)}function P(){return P=o()(r()().mark(function i(a){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,E.request)("/api/app/image/import-by-image-tar",{method:"POST",data:a}));case 1:case"end":return g.stop()}},i)})),P.apply(this,arguments)}function $(i){return d.apply(this,arguments)}function d(){return d=o()(r()().mark(function i(a){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,E.request)("/api/common/attach/delete",{method:"POST",data:a});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},i)})),d.apply(this,arguments)}function c(){return x.apply(this,arguments)}function x(){return x=o()(r()().mark(function i(){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,E.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return _.stop()}},i)})),x.apply(this,arguments)}},18148:function(ge,N,e){e.d(N,{$q:function(){return d},Fj:function(){return F},KG:function(){return W},KX:function(){return m},T8:function(){return P},Xn:function(){return K},ao:function(){return x},c5:function(){return g},c7:function(){return a}});var p=e(15009),r=e.n(p),S=e(99289),o=e.n(S),E=e(54006);function W(T){return Z.apply(this,arguments)}function Z(){return Z=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,E.request)("/api/app/image/get-list",{method:"POST",data:s}));case 1:case"end":return u.stop()}},T)})),Z.apply(this,arguments)}function n(T){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function T(s){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,request("/api/app/log/image-build",{method:"POST",data:s});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),L.apply(this,arguments)}function K(T){return j.apply(this,arguments)}function j(){return j=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,E.request)("/api/app/image/get-list-build",{method:"POST",data:s}));case 1:case"end":return u.stop()}},T)})),j.apply(this,arguments)}function P(T){return $.apply(this,arguments)}function $(){return $=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,E.request)("/api/app/image/get-build-task",{method:"POST",data:s});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),$.apply(this,arguments)}function d(T){return c.apply(this,arguments)}function c(){return c=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,E.request)("/api/app/image/delete-build-task",{method:"POST",data:s});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),c.apply(this,arguments)}function x(T){return i.apply(this,arguments)}function i(){return i=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,E.request)("/api/app/image/image-delete",{method:"POST",data:s});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),i.apply(this,arguments)}function a(){return _.apply(this,arguments)}function _(){return _=o()(r()().mark(function T(){return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,E.request)("/api/app/image/image-prune",{method:"POST"});case 2:return O.abrupt("return",O.sent);case 3:case"end":return O.stop()}},T)})),_.apply(this,arguments)}function g(){return C.apply(this,arguments)}function C(){return C=o()(r()().mark(function T(){return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,E.request)("/api/app/image/build-prune",{method:"POST"});case 2:return O.abrupt("return",O.sent);case 3:case"end":return O.stop()}},T)})),C.apply(this,arguments)}function F(T){return D.apply(this,arguments)}function D(){return D=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,E.request)("/api/app/image/update-title",{method:"POST",data:s});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),D.apply(this,arguments)}function m(T){return t.apply(this,arguments)}function t(){return t=o()(r()().mark(function T(s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,E.request)("/api/app/image/tag-sync",{method:"POST",data:s}));case 1:case"end":return u.stop()}},T)})),t.apply(this,arguments)}},75870:function(ge,N,e){e.d(N,{Ot:function(){return W},ZH:function(){return n},ix:function(){return K},t1:function(){return P}});var p=e(15009),r=e.n(p),S=e(99289),o=e.n(S),E=e(54006);function W(d){return Z.apply(this,arguments)}function Z(){return Z=o()(r()().mark(function d(c){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,E.request)("/api/common/registry/get-list",{method:"POST",data:c}));case 1:case"end":return i.stop()}},d)})),Z.apply(this,arguments)}function n(d){return L.apply(this,arguments)}function L(){return L=o()(r()().mark(function d(c){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,E.request)("/api/common/registry/create",{method:"POST",data:c}));case 1:case"end":return i.stop()}},d)})),L.apply(this,arguments)}function K(d){return j.apply(this,arguments)}function j(){return j=o()(r()().mark(function d(c){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,E.request)("/api/common/registry/delete",{method:"POST",data:c}));case 1:case"end":return i.stop()}},d)})),j.apply(this,arguments)}function P(d){return $.apply(this,arguments)}function $(){return $=o()(r()().mark(function d(c){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,E.request)("/api/common/registry/get-detail",{method:"POST",data:c}));case 1:case"end":return i.stop()}},d)})),$.apply(this,arguments)}},85576:function(ge,N,e){e.d(N,{Z:function(){return g}});var p=e(56080),r=e(38657),S=e(56745),o=e(67294),E=e(93967),W=e.n(E),Z=e(40974),n=e(8745),L=e(53124),K=e(35792),j=e(32409),P=e(4941),$=e(71194),d=function(C,F){var D={};for(var m in C)Object.prototype.hasOwnProperty.call(C,m)&&F.indexOf(m)<0&&(D[m]=C[m]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,m=Object.getOwnPropertySymbols(C);t<m.length;t++)F.indexOf(m[t])<0&&Object.prototype.propertyIsEnumerable.call(C,m[t])&&(D[m[t]]=C[m[t]]);return D};const c=C=>{const{prefixCls:F,className:D,closeIcon:m,closable:t,type:T,title:s,children:O,footer:u}=C,ve=d(C,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:ce}=o.useContext(L.E_),z=ce(),R=F||ce("modal"),Pe=(0,K.Z)(z),[Ce,Oe,Fe]=(0,$.ZP)(R,Pe),H=`${R}-confirm`;let pe={};return T?pe={closable:t!=null?t:!1,title:"",footer:"",children:o.createElement(j.O,Object.assign({},C,{prefixCls:R,confirmPrefixCls:H,rootPrefixCls:z,content:O}))}:pe={closable:t!=null?t:!0,title:s,footer:u!==null&&o.createElement(P.$,Object.assign({},C)),children:O},Ce(o.createElement(Z.s,Object.assign({prefixCls:R,className:W()(Oe,`${R}-pure-panel`,T&&H,T&&`${H}-${T}`,D,Fe,Pe)},ve,{closeIcon:(0,P.b)(R,m),closable:t},pe)))};var x=(0,n.i)(c),i=e(94423);function a(C){return(0,p.ZP)((0,p.uW)(C))}const _=S.Z;_.useModal=i.Z,_.info=function(F){return(0,p.ZP)((0,p.cw)(F))},_.success=function(F){return(0,p.ZP)((0,p.vq)(F))},_.error=function(F){return(0,p.ZP)((0,p.AQ)(F))},_.warning=a,_.warn=a,_.confirm=function(F){return(0,p.ZP)((0,p.Au)(F))},_.destroyAll=function(){for(;r.Z.length;){const F=r.Z.pop();F&&F()}},_.config=p.ai,_._InternalPanelDoNotUseOrYouWillBeFired=x;var g=_}}]);
