(this["webpackJsonpmodulo-3-evaluacion-intermedia-lauraherrero"]=this["webpackJsonpmodulo-3-evaluacion-intermedia-lauraherrero"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(2),o=n.n(a),i=(n(14),n(15),n(3)),u=n(4),m=n(7),p=n(5),l=n(8),c=(n(16),n(6)),h=function(e){return s.a.createElement("div",null,s.a.createElement("img",{className:"pokemonImage",src:e.image,alt:e.name}),s.a.createElement("h3",{className:"pokemonName"},e.name),s.a.createElement("ul",{className:"typeList"},e.typesArray.map((function(e,t){return s.a.createElement("li",{className:"typeLi",key:t},e)}))))},k=function(e){return s.a.createElement("ul",{className:"pokemonList"},e.items.map((function(e,t){return s.a.createElement("li",{className:"pokemonLi",key:e.id},s.a.createElement(h,{image:e.url,name:e.name,typesArray:e.types}))})))},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={pokemonData:c},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.state),s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Mi lista de pokemon"),s.a.createElement(k,{items:this.state.pokemonData}))}}]),t}(s.a.Component);o.a.render(s.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.28e96158.chunk.js.map