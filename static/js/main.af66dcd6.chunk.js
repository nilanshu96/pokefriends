(this.webpackJsonppokefriends=this.webpackJsonppokefriends||[]).push([[0],{60:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),i=n.n(r),o=n(8),c=n.n(o),s=(n(60),n(34)),h=n.n(s),l=n(39),u=n(40),p=n(41),j=n(48),d=n(47),m=n(100),f=n(103),g=n(111),b=n(107),x=n(106),O=n(32),v=n(105),k=Object(m.a)((function(e){return{root:{width:200,height:250,backgroundColor:e.palette.secondary.dark},media:{height:"100%"},img:{backgroundColor:e.palette.secondary.main,objectFit:"contain"},txt:{color:e.palette.secondary.contrastText}}})),w=function(e){var t=e.name,n=e.height,r=e.weight,i=e.img,o=k();return Object(a.jsx)(f.a,{className:o.root,elevation:5,children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(v.a,{title:t}),Object(a.jsx)(x.a,{className:o.img,component:"img",height:"100px",width:"100px",image:i,title:"Contemplative Reptile"}),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(O.a,{variant:"body1",component:"p",children:["Height: ",parseInt(n)/10," meters"]}),Object(a.jsxs)(O.a,{variant:"body1",component:"p",children:["Weight: ",parseInt(r)/10," kg"]})]})]})})},C=Object(m.a)((function(e){return{grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",rowGap:"20px"}}})),y=function(e){var t=e.pokemons,n=C();return Object(a.jsx)("div",{className:n.grid,children:t.map((function(e){return Object(a.jsx)(w,{name:e.name,height:e.height,weight:e.weight,img:e.sprites.front_default},e.id)}))})},F=(n(65),n(68)),N=n(110),S=n(4),P=n(108),I=Object(m.a)({root:{overflowY:"scroll",height:"70vh",margin:"20px"}}),L=function(e){var t=I();return Object(a.jsx)(F.a,{className:t.root,variant:"outlined",children:e.children})},T=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemons:[],searchfield:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state.pokemons.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===t.length?Object(a.jsxs)(F.a,{className:this.props.classes.root,square:!0,children:[Object(a.jsx)(O.a,{variant:"h1",children:"PokeFriends"}),Object(a.jsx)(P.a,{variant:"wave"})]}):Object(a.jsxs)(F.a,{className:this.props.classes.root,square:!0,children:[Object(a.jsx)(O.a,{variant:"h1",children:"PokeFriends"}),Object(a.jsx)(N.a,{variant:"outlined",style:{margin:"20px"},onChange:this.onSearchChange}),Object(a.jsx)(L,{children:Object(a.jsx)(y,{pokemons:t})})]})}},{key:"componentDidMount",value:function(){var e=Object(l.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return e.url}))}));case 2:return t=e.sent,n=t.map((function(e){return fetch(e).then((function(e){return e.json()}))})),e.next=6,Promise.all(n);case 6:a=e.sent,this.setState({pokemons:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(i.a.Component),q=Object(S.a)({root:{height:"100%",textAlign:"center"}})(T),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))},D=n(46),J=Object(D.a)({palette:{type:"dark"}}),M=n(109);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(M.a,{theme:J,children:Object(a.jsx)(q,{})})}),document.getElementById("root")),B()}},[[66,1,2]]]);
//# sourceMappingURL=main.af66dcd6.chunk.js.map