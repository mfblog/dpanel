"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3355],{28307:function(R,M,r){var b=r(5574),u=r.n(b),h=r(38345),s=r(97269),t=r(5966),g=r(62370),p=r(14726),E=r(85265),P=r(42075),_=r(34041),f=r(67294),T=r(80821),D=r(3393),O=r(97961),v=r(92754),o=r(54006),a=r(85893),m=(0,f.forwardRef)(function(n,c){var j=(0,f.useState)(!1),C=u()(j,2),I=C[0],B=C[1],y=(0,f.useRef)(),l=(0,f.useRef)();return(0,f.useImperativeHandle)(c,function(){return{upgradeImage:function(i){var e;return B(!0),(e=y.current)===null||e===void 0||e.setFieldValue("imageUrl",i),(0,D.Gb)({tag:i,type:"pull"})},setImageName:function(i){var e;B(!0),(e=y.current)===null||e===void 0||e.setFieldValue("imageUrl",i)}}}),[(0,a.jsx)(p.ZP,{type:n.buttonType?n.buttonType:"default",onClick:function(){var i,e;n.onClick&&n.onClick(),B(!0),(i=y.current)===null||i===void 0||i.resetFields(),(e=l.current)===null||e===void 0||e.setStart("")},children:"\u62C9\u53D6\u955C\u50CF"},"remoteBtn"),(0,a.jsxs)(E.Z,{forceRender:!0,open:I,title:"\u4E0B\u8F7D\u8FDC\u7A0B\u955C\u50CF",width:800,onClose:function(){return B(!1)},footer:!1,children:[(0,a.jsx)(h.Z,{children:(0,a.jsxs)(P.Z,{direction:"vertical",size:"middle",children:[(0,a.jsxs)("div",{children:["1\u3001\u955C\u50CF\u540D\u79F0\u4E2D\u4E0D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C \u9ED8\u8BA4\u4ECE ",(0,a.jsx)("a",{href:"https://hub.docker.com/",target:"_blank",children:"docker hub"})," \u4E2D\u4E0B\u8F7D\uFF0C \u4F60\u53EF\u4EE5\u5728\u4E0A\u9762",(0,a.jsx)("a",{href:"https://hub.docker.com/search?q=",target:"_blank",children:"\u3010\u67E5\u627E\u3011"}),"\u9700\u8981\u7684\u955C\u50CF"]}),(0,a.jsxs)("div",{children:["2\u3001\u955C\u50CF\u4E2D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C\u8BF7\u786E",(0,a.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u6DFB\u52A0\u3011"}),"\u8FC7\u8BE5\u4ED3\u5E93\uFF0C\u5E76\u6709 Pull \u6743\u9650"]}),(0,a.jsxs)("div",{children:["3\u3001\u53EF\u5728",(0,a.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u4ED3\u5E93\u7BA1\u7406\u3011"}),"\u4E2D\u914D\u7F6E\u955C\u50CF\u7684\u52A0\u901F\u5730\u5740"]})]})}),(0,a.jsx)(h.Z,{title:"\u4E0B\u8F7D\u955C\u50CF",headerBordered:!0,children:(0,a.jsxs)(s.A,{submitter:!1,formRef:y,children:[(0,a.jsxs)(P.Z.Compact,{children:[(0,a.jsx)(t.Z,{width:400,name:"imageUrl",placeholder:"\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740"}),(0,a.jsx)(g.Z,{name:"platform",children:(0,a.jsx)(_.Z,{style:{width:150},placeholder:"\u9ED8\u8BA4\u5F53\u524D\u67B6\u6784",options:O.ii.map(function(d){return{label:d.name,value:d.name}})})}),(0,a.jsx)(T.Z,{action:function(){var i,e,U,F,A,W=(i=(e=y.current)===null||e===void 0?void 0:e.getFieldValue("imageUrl"))!==null&&i!==void 0?i:"";return(U=l.current)===null||U===void 0||U.setStart(W),(0,D.Gb)({tag:W,type:"pull",platform:(F=(A=y.current)===null||A===void 0?void 0:A.getFieldValue("platform"))!==null&&F!==void 0?F:"amd64"})},onSuccess:function(i){var e;(e=l.current)===null||e===void 0||e.setFinish(),B(!1),n.onFinish&&n.onFinish(i.data.tag)},messageSuccess:function(i){var e="\u62C9\u53D6\u6210\u529F";return i.data.proxyUrl&&(e+="\uFF0C\u4F7F\u7528\u4EE3\u7406 "+i.data.proxyUrl),e},children:"\u62C9\u53D6\u955C\u50CF"})]}),(0,a.jsx)(g.Z,{label:"\u4E0B\u8F7D\u8FDB\u5EA6",children:(0,a.jsx)(v.Z,{ref:l})})]})})]},"remoteDrawer")]});M.Z=m},80821:function(R,M,r){r.d(M,{Z:function(){return P}});var b=r(5574),u=r.n(b),h=r(24963),s=r(86738),t=r(14726),g=r(83062),p=r(67294),E=r(85893);function P(_){var f=(0,p.useState)(!1),T=u()(f,2),D=T[0],O=T[1],v=(0,p.useContext)(h.Z),o=v.lang,a=v.notice,m=v.message,n=function(){O(!0),_.action().then(function(j){if(O(!1),typeof _.onSuccess=="function"&&_.onSuccess(j),_.messageSuccess){var C="";typeof _.messageSuccess=="function"?C=_.messageSuccess(j):C=_.messageSuccess,C.indexOf(".")>-1&&(C=o(C)),_.asynced?m.info(C):m.success(C)}}).catch(function(j){O(!1),typeof _.onError=="function"&&_.onError(j)})};return _.confirm?(0,E.jsx)(s.Z,{style:{width:500},title:_.confirmTitle?_.confirmTitle:o("notification.title.tip"),description:_.confirm,onConfirm:n,okText:"Yes",cancelText:"No",children:(0,E.jsx)(t.ZP,{disabled:_.disabled,icon:_.icon,loading:D,danger:_.danger,type:_.type,children:_.children})}):(0,E.jsx)(g.Z,{title:_.tips,children:(0,E.jsx)(t.ZP,{disabled:_.disabled,icon:_.icon,loading:D,onClick:n,danger:_.danger,type:_.type,children:_.children})})}},92754:function(R,M,r){var b=r(5574),u=r.n(b),h=r(67294),s=r(54006),t=r(38703),g=r(85893),p=(0,h.forwardRef)(function(E,P){var _=(0,h.useState)(""),f=u()(_,2),T=f[0],D=f[1];(0,h.useImperativeHandle)(P,function(){return{setFinish:function(){m({finish:{downloading:100,extracting:100}})},setStart:function(c){c&&D(c),m({start:{downloading:0,extracting:0}})}}});var O=(0,s.useModel)("subscriber");O.addDataHandler("image:pull:"+T,function(n){m(n.data)});var v=(0,h.useState)(),o=u()(v,2),a=o[0],m=o[1];return(0,h.useEffect)(function(){m({start:{downloading:0,extracting:0}})},[]),(0,g.jsx)(g.Fragment,{children:a&&Object.keys(a).map(function(n){return(0,g.jsx)(t.Z,{percent:a[n].downloading,success:{percent:a[n].extracting}},n)})})});M.Z=p},97961:function(R,M,r){r.d(M,{MF:function(){return v},_2:function(){return D},fN:function(){return p},hG:function(){return f},ii:function(){return g},vC:function(){return P}});var b=r(15009),u=r.n(b),h=r(99289),s=r.n(h),t=r(54006),g=[{name:"amd64",arch:"amd64"},{name:"arm64",arch:"arm64"},{name:"i386",arch:"386"},{name:"arm/v6",arch:"arm"},{name:"arm/v7",arch:"arm"},{name:"arm/v8",arch:"arm64"},{name:"ppc64le",arch:"ppc64le"},{name:"riscv64",arch:"riscv64"}];function p(a){return E.apply(this,arguments)}function E(){return E=s()(u()().mark(function a(m){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,t.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:m}));case 1:case"end":return c.stop()}},a)})),E.apply(this,arguments)}function P(a){return _.apply(this,arguments)}function _(){return _=s()(u()().mark(function a(m){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,t.request)("/api/app/image/import-by-container-tar",{method:"POST",data:m}));case 1:case"end":return c.stop()}},a)})),_.apply(this,arguments)}function f(a){return T.apply(this,arguments)}function T(){return T=s()(u()().mark(function a(m){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,t.request)("/api/app/image/import-by-image-tar",{method:"POST",data:m}));case 1:case"end":return c.stop()}},a)})),T.apply(this,arguments)}function D(a){return O.apply(this,arguments)}function O(){return O=s()(u()().mark(function a(m){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,t.request)("/api/common/attach/delete",{method:"POST",data:m});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},a)})),O.apply(this,arguments)}function v(){return o.apply(this,arguments)}function o(){return o=s()(u()().mark(function a(){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return n.stop()}},a)})),o.apply(this,arguments)}},3393:function(R,M,r){r.d(M,{Gb:function(){return E},Pn:function(){return T},Rb:function(){return O},YU:function(){return g},_U:function(){return _}});var b=r(15009),u=r.n(b),h=r(99289),s=r.n(h),t=r(54006);function g(o){return p.apply(this,arguments)}function p(){return p=s()(u()().mark(function o(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/get-detail",{method:"POST",data:a}));case 1:case"end":return n.stop()}},o)})),p.apply(this,arguments)}function E(o){return P.apply(this,arguments)}function P(){return P=s()(u()().mark(function o(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/tag-remote",{method:"POST",data:a}));case 1:case"end":return n.stop()}},o)})),P.apply(this,arguments)}function _(o){return f.apply(this,arguments)}function f(){return f=s()(u()().mark(function o(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/tag-add",{method:"POST",data:a}));case 1:case"end":return n.stop()}},o)})),f.apply(this,arguments)}function T(o){return D.apply(this,arguments)}function D(){return D=s()(u()().mark(function o(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/tag-delete",{method:"POST",data:a}));case 1:case"end":return n.stop()}},o)})),D.apply(this,arguments)}function O(o){return v.apply(this,arguments)}function v(){return v=s()(u()().mark(function o(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,t.request)("/api/app/image/export",{method:"POST",data:a,responseType:"blob"}));case 1:case"end":return n.stop()}},o)})),v.apply(this,arguments)}},18148:function(R,M,r){r.d(M,{$q:function(){return O},Fj:function(){return C},KG:function(){return g},KX:function(){return B},T8:function(){return T},Xn:function(){return _},ao:function(){return o},c5:function(){return c},c7:function(){return m}});var b=r(15009),u=r.n(b),h=r(99289),s=r.n(h),t=r(54006);function g(l){return p.apply(this,arguments)}function p(){return p=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,t.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),p.apply(this,arguments)}function E(l){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function l(d){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),P.apply(this,arguments)}function _(l){return f.apply(this,arguments)}function f(){return f=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,t.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),f.apply(this,arguments)}function T(l){return D.apply(this,arguments)}function D(){return D=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),D.apply(this,arguments)}function O(l){return v.apply(this,arguments)}function v(){return v=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),v.apply(this,arguments)}function o(l){return a.apply(this,arguments)}function a(){return a=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),a.apply(this,arguments)}function m(){return n.apply(this,arguments)}function n(){return n=s()(u()().mark(function l(){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,t.request)("/api/app/image/image-prune",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l)})),n.apply(this,arguments)}function c(){return j.apply(this,arguments)}function j(){return j=s()(u()().mark(function l(){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,t.request)("/api/app/image/build-prune",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l)})),j.apply(this,arguments)}function C(l){return I.apply(this,arguments)}function I(){return I=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),I.apply(this,arguments)}function B(l){return y.apply(this,arguments)}function y(){return y=s()(u()().mark(function l(d){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,t.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),y.apply(this,arguments)}},5251:function(R,M,r){r.d(M,{FI:function(){return u},ZM:function(){return h}});function b(s){return s.trim()}function u(s){var t="";s<.1*1024?t=s.toFixed(2)+"B":s<.1*1024*1024?t=(s/1024).toFixed(2)+"KB":s<1*1024*1024*1024?t=(s/(1024*1024)).toFixed(2)+"MB":t=(s/(1024*1024*1024)).toFixed(2)+"GB";var g=t+"",p=g.indexOf("."),E=g.substring(p+1,p+3);return E=="00"?g.substring(0,p)+g.substr(p+3,2):t}function h(s){if(s){var t=new Date(s),g=t.getFullYear()+"-",p=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",E=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",P=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",_=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",f=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return g+p+E+P+_+f}}}}]);