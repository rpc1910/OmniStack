(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(292)},127:function(e,t,a){},148:function(e,t,a){},176:function(e,t){},179:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.87f18662.svg"},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(112),o=a.n(c),l=(a(127),a(116)),i=a(12),s=a(8),u=a.n(s),p=a(15),f=a(16),m=a(17),h=a(20),b=a(18),d=a(22),E=a(113),x=a.n(E).a.create({baseURL:"https://rpc1910-omnistack.herokuapp.com/"}),v=(a(148),a(19)),w=a.n(v),y=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={newBox:""},a.handleSubmit=function(){var e=Object(p.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.post("/boxes",{title:a.state.newBox});case 3:n=e.sent,a.props.history.push("/box/".concat(n.data._id));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){a.setState({newBox:e.target.value})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"main-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("img",{src:w.a,alt:"Dropbox"}),r.a.createElement("input",{type:"text",placeholder:"Criar um box",value:this.state.newBox,onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit"},"Criar")))}}]),t}(n.Component),j=a(120),k=a(121),O=a(119),g=a(115),C=a.n(g),D=(a(179),a(21)),I=a(38),A=a(39),S=a.n(A),_=(a(283),function(e){return r.a.createElement("li",{key:e.file._id},r.a.createElement("a",{className:"fileInfo",href:e.file.url,target:"_blank"},r.a.createElement(D.c,{size:24,color:"#a5cfff"}),r.a.createElement("strong",null,e.file.title)),r.a.createElement("span",null,"h\xe1 ",Object(I.distanceInWords)(e.file.createdAt,new Date,{locale:S.a})))}),N=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={box:{}},a.subscribeToNewFiles=function(){var e=a.props.match.params.id,t=C()(x.defaults.baseURL);t.emit("connectRoom",e),t.on("file",function(e){a.setState({box:Object(k.a)({},a.state.box,{files:[].concat(Object(j.a)(a.state.box.files),[e])})})})},a.handleUpload=function(e){e.forEach(function(e){var t=new FormData;t.append("file",e);var n=a.props.match.params.id;x.post("/boxes/".concat(n,"/files"),t)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.subscribeToNewFiles(),t=this.props.match.params.id,e.next=4,x.get("/boxes/".concat(t));case 4:a=e.sent,this.setState({box:a.data});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.box.files;return r.a.createElement("div",{id:"box-container"},r.a.createElement("header",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:w.a,alt:"Dropbox"})),r.a.createElement("h1",null,this.state.box.title)),r.a.createElement(O.a,{onDropAccepted:this.handleUpload},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({className:"upload"},t()),r.a.createElement("input",a()),r.a.createElement("p",null,"Arraste arquivos ou clique aqui"))}),r.a.createElement("ul",null,e&&e.map(function(e){return r.a.createElement(_,{key:e._id,file:e})})))}}]),t}(n.Component),B=(a(284),function(e){return r.a.createElement("li",{key:e.folder._id},r.a.createElement("a",{className:"fileInfo",onClick:e.onClick},r.a.createElement(D.b,{size:24,color:"#a5cfff"}),r.a.createElement("span",null,e.folder.files.length),r.a.createElement("strong",null,e.folder.title)),r.a.createElement("span",null,"h\xe1 ",Object(I.distanceInWords)(e.folder.createdAt,new Date,{locale:S.a})))}),R=(a(285),function(e){return r.a.createElement("div",{className:"float-action-button"},r.a.createElement("a",{onClick:e.onClick,title:"Criar pasta"},r.a.createElement(D.a,{size:32,color:"#fff"})))}),U=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={boxes:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/boxes");case 2:t=e.sent,this.setState({boxes:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.boxes;return r.a.createElement("div",{id:"box-container"},r.a.createElement("header",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:w.a,alt:"Dropbox"})),r.a.createElement("h1",null,"Todas as pastas")),r.a.createElement("ul",null,t&&t.map(function(t){return r.a.createElement(B,{key:t._id,folder:t,onClick:function(){return e.props.history.push("/box/".concat(t._id))}})})),r.a.createElement(R,{onClick:function(){return e.props.history.push("/create")}}))}}]),t}(n.Component),q=function(){return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:U,exact:!0}),r.a.createElement(i.a,{path:"/create",component:y,exact:!0}),r.a.createElement(i.a,{path:"/box/:id",component:N})))},z=function(){return r.a.createElement(q,null)};o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.159443b5.chunk.js.map