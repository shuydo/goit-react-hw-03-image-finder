(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(3),c=n.n(a),i=n(2),u=n.n(i),s=n(4),o=n(6),p=n(7),f=n(9),h=n(8),l=n(10),m=(n(16),n(1));function b(t){var e=t.onSubmitGo;return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.elements.query.value)},children:[Object(m.jsx)("input",{type:"text",name:"query"}),Object(m.jsx)("button",{children:"Search"})]})}function j(t){var e=t.imgs;return Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t.webformatURL,alt:"some pic"})},t.id)}))})}var d="https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=21031732-6fee4eefe658f550324b0a29e&q=",g=function(t){return t.map((function(t){return{id:t.id,webformatURL:t.webformatURL,largeImageURL:t.largeImageURL}}))};function y(t,e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function t(e,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d).concat(e,"&page=").concat(n,"&per_page=").concat(12)).then((function(t){return t.json()})).then((function(t){return g(t.hits)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={query:null,imgs:[],status:"idle"},t.handleSubmit=function(e){return t.setState({query:e})},t}return Object(p.a)(n,[{key:"componentDidUpdate",value:function(){var t=Object(s.a)(u.a.mark((function t(e,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n.query,this.state.query),n.query===this.state.query){t.next=8;break}return t.t0=this,t.next=5,y(this.state.query,1);case 5:t.t1=t.sent,t.t2={imgs:t.t1},t.t0.setState.call(t.t0,t.t2);case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.imgs,e=t.length>0;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{onSubmitGo:this.handleSubmit}),e&&Object(m.jsx)(j,{imgs:t}),Object(m.jsx)(l.a,{})]})}}]),n}(r.Component);c.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3cd4c578.chunk.js.map