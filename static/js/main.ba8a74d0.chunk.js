(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n(0),r=n.n(c),o=n(40),a=n.n(o),s=n(6),l=n(108),d=n(101),b=n(105),j=n(100),u=n(99),p=n(109),h=function(e){var t=e.list,n=e.direction;return Object(i.jsx)(l.a,{direction:n,children:t.map((function(e){return Object(i.jsx)(u.a,{paddingX:2,paddingY:1,align:"center",backgroundColor:"rgba(255,255,255, 0.2)",borderRadius:9999,width:"fit-content",textTransform:"capitalize",children:e},e)}))})},g=function(e){var t=e.pokemon,n=e.onClick;return Object(i.jsx)(j.a,{backgroundColor:"".concat(t.types[0],".300"),borderRadius:12,padding:3,color:"white",cursor:"pointer",onClick:n,children:Object(i.jsxs)(l.a,{children:[Object(i.jsxs)(l.a,{direction:"row",align:"baseline",justify:"space-between",children:[Object(i.jsx)(d.a,{fontSize:"xl",textTransform:"capitalize",children:t.name}),Object(i.jsxs)(u.a,{children:["#",t.id]})]}),Object(i.jsxs)(l.a,{direction:"row",justify:"space-between",children:[Object(i.jsx)(h,{list:t.types,direction:"column"}),Object(i.jsx)(p.a,{width:"100%",maxWidth:"90px",src:t.image})]})]})})},x=function(e){return Promise.all(new Array(50*e+1).fill(!0).map((function(e,t){return t})).slice(1).map((function(e){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json().then((function(e){return{id:e.id,name:e.name,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.id,".png"),types:e.types.map((function(e){return e.type.name})),weight:e.weight,height:e.height,abilities:e.abilities.map((function(e){return e.ability.name}))}}))}))})))},f=n(107),m=n(20),O=n(102),w=n(103),k=function(e){var t=e.titles,n=e.data;return Object(i.jsx)(l.a,{width:"100%",paddingX:2,paddingY:1,align:"justify",backgroundColor:"rgba(255,255,255, 0.2)",borderRadius:9999,children:t.map((function(e,t){return Object(i.jsxs)(l.a,{direction:"row",justify:"space-between",children:[Object(i.jsx)(u.a,{color:"gray.500",textStyle:"bold",children:e}),Object(i.jsx)(u.a,{color:"black",children:n[t]})]})}))})},y=function(e){var t=e.pokemon,n=e.onClose,c=[t.height.toString().concat(" ft."),t.weight.toString().concat(" lbs."),t.abilities.map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(", ")];return Object(i.jsx)(f.a,{isOpen:!0,placement:"right",size:"lg",onClose:n,children:Object(i.jsx)(m.c,{children:Object(i.jsxs)(f.b,{children:[Object(i.jsxs)(l.a,{backgroundColor:"".concat(t.types[0],".300"),padding:6,color:"white",children:[Object(i.jsxs)(l.a,{direction:"row",align:"center",justify:"space-between",fontSize:"2xl",children:[Object(i.jsx)(O.a,{onClick:n}),Object(i.jsx)(w.a,{})]}),Object(i.jsx)(l.a,{direction:"row",children:Object(i.jsxs)(l.a,{width:"100%",children:[Object(i.jsxs)(l.a,{direction:"row",align:"baseline",justify:"space-between",children:[Object(i.jsx)(d.a,{textTransform:"capitalize",children:t.name}),Object(i.jsxs)(u.a,{children:["#",t.id]})]}),Object(i.jsx)(h,{list:t.types,direction:"row"}),Object(i.jsx)(p.a,{src:t.image,marginBottom:-12,zIndex:1,paddingX:6})]})})]}),Object(i.jsx)(l.a,{backgroundColor:"whitesmoke",height:"100%",borderTopLeftRadius:24,borderTopRightRadius:24,marginTop:-12,paddingTop:20,paddingX:6,paddingBottom:6,children:Object(i.jsx)(k,{titles:["Height","Weight","Abilities"],data:c})})]})})})},C=function(){var e=c.useState([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=c.useState(1),a=Object(s.a)(o,2),j=a[0],u=(a[1],c.useState(null)),p=Object(s.a)(u,2),h=p[0],f=p[1];return c.useEffect((function(){x(j).then((function(e){return r((function(t){return t.concat(e)}))}))}),[j]),console.log(n),Object(i.jsxs)(l.a,{padding:3,spacing:6,backgroundColor:"whitesmoke",children:["1",Object(i.jsx)(d.a,{fontSize:"4xl",marginLeft:3,children:"Pokedex"}),Object(i.jsx)(b.a,{columns:2,gap:3,padding:3,children:n.map((function(e){return Object(i.jsx)(g,{onClick:function(){return f(e)},pokemon:e},e.id)}))}),h&&Object(i.jsx)(y,{pokemon:h,onClose:function(){return f(null)}})]})},S=n(106),z=n(15),v=n(104),T=Object(v.a)({colors:{grass:z.b.colors.green,fire:z.b.colors.red,water:z.b.colors.blue,normal:z.b.colors.blue,flying:z.b.colors.blue,bug:z.b.colors.teal,electric:z.b.colors.purple,psychic:z.b.colors.yellow,ground:z.b.colors.orange}});a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S.a,{resetCSS:!0,theme:T,children:Object(i.jsx)(C,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.ba8a74d0.chunk.js.map