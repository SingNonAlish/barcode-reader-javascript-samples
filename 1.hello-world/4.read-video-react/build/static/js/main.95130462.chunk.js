(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(13),s=n.n(c),o=(n(18),n(19),n.p+"static/media/logo.6ce24c58.svg"),i=n(0),l=n.n(i),d=n(9),u=n(5),h=n(6),p=n(8),b=n(7),j=(n(21),n(11));j.a.BarcodeReader.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.1.3/dist/",j.a.BarcodeReader.productKeys="t0077xQAAAEOf0RjyWar4Q48NrAu7iX4j+Ivl3iqpsR2Mf3W9gf/HMgalcntdpSMel3xw/Mze/z8dpY0eCdkvUxN6+brx+xrzZh4+AWkFKn4=";var f=j.a,v=n(2),x=(n(22),n(1)),m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).bDestroyed=!1,a.scanner=null,a.elRef=r.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=this.scanner,e.t0){e.next=6;break}return e.next=5,f.BarcodeScanner.createInstance();case 5:e.t0=e.sent;case 6:if(this.scanner=e.t0,!this.bDestroyed){e.next=10;break}return this.scanner.destroy(),e.abrupt("return");case 10:return this.scanner.setUIElement(this.elRef.current),this.scanner.onFrameRead=function(e){var n,a=Object(v.a)(e);try{for(a.s();!(n=a.n()).done;){var r=n.value;t.props.appendMessage(r.barcodeFormatString+": "+r.barcodeText)}}catch(c){a.e(c)}finally{a.f()}},e.next=14,this.scanner.open();case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(0),this.props.appendMessage(e.t1.message),console.error(e.t1);case 20:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.bDestroyed=!0,this.scanner&&this.scanner.destroy()}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(x.jsxs)("div",{ref:this.elRef,className:"component-barcode-scanner",children:[Object(x.jsx)("svg",{className:"dbrScanner-bg-loading",viewBox:"0 0 1792 1792",children:Object(x.jsx)("path",{d:"M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"})}),Object(x.jsx)("svg",{className:"dbrScanner-bg-camera",style:{display:"none"},viewBox:"0 0 2048 1792",children:Object(x.jsx)("path",{d:"M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"})}),Object(x.jsx)("video",{className:"dbrScanner-video",playsInline:!0}),Object(x.jsx)("canvas",{className:"dbrScanner-cvs-drawarea"}),Object(x.jsx)("div",{className:"dbrScanner-cvs-scanarea",children:Object(x.jsx)("div",{className:"dbrScanner-scanlight",style:{display:"none"}})})]})}}]),n}(r.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).appendMessage=function(e){a.setState((function(t){return t.resultValue=e,t}))},a.showScanner=function(){a.setState({bShowScanner:!0})},a.refDivMessage=r.a.createRef(),a.state={libLoaded:!1,resultValue:"",bShowScanner:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.BarcodeScanner.createInstance();case 2:this.setState((function(e){return e.libLoaded=!0,e}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{class:"helloWorld",children:[Object(x.jsx)("h1",{children:"Dynamsoft Barcode Reader Hello World Sample for React"}),Object(x.jsx)("button",{onClick:this.showScanner,children:"Start Barcode Scanner"}),Object(x.jsx)("input",{type:"text",value:this.state.resultValue,readonly:"true",class:"Input-text",placeholder:"The Barcode Result"}),Object(x.jsxs)("div",{id:"scannerUI",children:[this.state.libLoaded?"":Object(x.jsx)("span",{style:{fontSize:"x-large"},children:"Loading Library..."}),";",Object(x.jsx)(m,{appendMessage:this.appendMessage})]})]})}}]),n}(r.a.Component);var g=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App-logo",children:Object(x.jsx)("img",{src:o,className:"App-logo",alt:"logo"})}),Object(x.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.95130462.chunk.js.map