(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),s=(n(17),n(9)),i=n.n(s),l=n(7),u=n(11),h=n(3),m=n(4),d=n(6),g=n(5),j=n(12),b=n.n(j),f="".concat("https://pixabay.com/api/?image_type=","photo&orientation=horizontal&key=").concat("21031732-6fee4eefe658f550324b0a29e","&per_page=12&q=");function p(t,e){return fetch("".concat(f).concat(t,"&page=").concat(e)).then((function(t){return t.json()})).then((function(t){return t.hits.map((function(t){return{id:t.id,webformatURL:t.webformatURL,largeImageURL:t.largeImageURL}}))}))}var O=n(0);function v(t){var e=t.onSubmitDo;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),e(t.target.elements[1].value),t.target.elements[1].value=""},children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}function y(t){var e=t.id,n=t.url,a=t.clickOnImg;return Object(O.jsx)("img",{className:"galleryImg",id:e,src:n,alt:"img",onClick:a})}function x(t){var e=t.imgs,n=t.clickOnGall;return Object(O.jsx)("ul",{className:"ImageGallery",children:e.map((function(t){var e=t.id,a=t.webformatURL;return Object(O.jsx)("li",{children:Object(O.jsx)(y,{id:e,url:a,clickOnImg:n})},e)}))})}var k=function(t){Object(d.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleClickOnBD=function(e){e.target===e.currentTarget&&t.props.onClose()},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"Overlay",onClick:this.handleClickOnBD,children:Object(O.jsx)("div",{className:"Modal",children:Object(O.jsx)("img",{src:this.props.urlBigImg,alt:"oversize"})})})}}]),n}(a.Component);function w(t){var e=t.onClick;return Object(O.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})}var S=function(t){Object(d.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={query:null,curPage:1,imgs:[],modalImgId:null,showM:!1,status:!1},t.handleSubmit=function(e){return t.setState({query:e,curPage:1})},t.toggleModal=function(){return t.setState({showM:!t.state.showM})},t.handleMore=function(){return t.setState((function(t){return{curPage:t.curPage+1}}))},t.handleTakeID=function(e){t.setState({modalImgId:+e.target.id}),t.toggleModal()},t}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(){var t=Object(u.a)(i.a.mark((function t(e,n){var a,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.state,r=a.query,c=a.curPage,o=a.imgs,n.query===r){t.next=12;break}return t.t0=this,t.t1=l.a,t.next=7,p(r,c);case 7:t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4={status:!0,imgs:t.t3},t.t0.setState.call(t.t0,t.t4),this.setState({status:!1});case 12:if(n.curPage===c){t.next=25;break}return t.t5=this,t.t6=[],t.t7=Object(l.a)(o),t.t8=l.a,t.next=19,p(r,c);case 19:t.t9=t.sent,t.t10=(0,t.t8)(t.t9),t.t11=t.t6.concat.call(t.t6,t.t7,t.t10),t.t12={status:!0,imgs:t.t11},t.t5.setState.call(t.t5,t.t12),this.setState({status:!1});case 25:window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});case 26:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this,n=this.state,a=this.handleTakeID,r=this.handleMore,c=this.toggleModal,o=n.imgs,s=n.status,i=n.showM,l=n.modalImgId;return Object(O.jsxs)("div",{className:"App",children:[s&&Object(O.jsx)(b.a,{className:"Loader",type:"Watch"}),Object(O.jsx)(v,{onSubmitDo:function(t){return e.setState({query:t})}}),!s&&o.length>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{imgs:o,clickOnGall:a}),Object(O.jsx)(w,{onClick:r})]}),i&&Object(O.jsx)(k,{urlBigImg:(t=l,o[o.map((function(t){return t.id})).indexOf(t)].largeImageURL),onClose:c})," "]})}}]),n}(a.Component);o.a.render(Object(O.jsxs)(r.a.StrictMode,{children:[Object(O.jsx)(S,{}),","]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.17585c8a.chunk.js.map