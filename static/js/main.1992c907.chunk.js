(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,r){e.exports=r(32)},25:function(e,a,r){},26:function(e,a,r){},32:function(e,a,r){"use strict";r.r(a);var t=r(0),o=r.n(t),n=r(15),c=r.n(n),l=(r(24),r(25),r(26),r(5));function i(){return o.a.createElement("nav",{className:"h-20 bg-indigo-100 text-gray-600"},o.a.createElement("ul",{className:"flex items-center justify-between h-full px-10"},o.a.createElement(l.c,{to:"/perguntas",activeStyle:{fontWeight:"bold",color:"red"}},o.a.createElement("li",null,"Perguntas")),o.a.createElement(l.c,{to:"/ideias",activeStyle:{fontWeight:"bold",color:"red"}},o.a.createElement("li",null,"Lista de Ideias"))))}var s=r(6);function u(){var e,a,r=Object(s.g)();return o.a.createElement("div",null,o.a.createElement(d,null),(null===(e=r.state)||void 0===e?void 0:e.respostas)&&o.a.createElement("section",{className:"bloco-gerador col-md-12 p-5"},o.a.createElement("div",{className:"textarea col-md-12 form-group"},o.a.createElement("textarea",{name:"lista_ideias",className:"form-control sendo-feito-text",id:"lista-ideias",rows:"15",readOnly:"",value:E(null===(a=r.state)||void 0===a?void 0:a.respostas)}))))}function d(){return o.a.createElement("div",{className:"flex justify-center p-4"},o.a.createElement(l.b,{to:"perguntas",className:"\n          text-blue-500 text-lg \n          hover:bg-blue-500 \n          hover:text-gray-100\n          focus:border-4 \n          focus:border-blue-300\n          border-2 border-blue-500\n          rounded-lg\n        "},o.a.createElement("button",{className:"p-2 pl-3 pr-3"},"Voltar")))}var E=function(e){var a=[];return a.push("DE QUE FORMA A APLICA\xc7\xc3O DO(A) "+e.faria+" PODE REFLETIR OU CONTRIBUIR NO(A) "+e.gostouDeFazer+"?"),a.push("QUAIS OS FATORES QUE ESTUDA O(A) "+e.servePara+" INFLUENCIA O(A) "+e.dorDeCabeca+"?"),a.push("QUAL A IMPORT\xc2NCIA DO ESTUDO DO(A) "+e.servePara+" COMO SOLU\xc7\xc3O PARA "+e.dorDeCabeca+"?"),a.push("QUAL A IMPORT\xc2NCIA DA APLICA\xc7\xc3O DO(A) "+e.faria+" FRENTE A "+e.dorDeCabeca2+"?"),a.push("QUAIS OS PROCEDIMENTOS E TECNICAS QUE MELHOR SE ADEQUAM A ANALISE DO(A) "+e.aplicadoNaMateria+" COMO SOLU\xc7\xc3O PARA "+e.dorDeCabeca2+"?"),a.push("QUAIS FATORES DETERMINAM A COMPREENS\xc3O DO(A) "+e.servePara+" PARA "+e.gostouDeFazer+" NO(A) "+e.comoChama+"?"),a.push("DE QUE FORMA A APLICA\xc7\xc3O DO(A) "+e.faria+" PARA "+e.servePara+" PODE REFLETIR OU CONTRIBUIR NO(A) "+e.gostouDeFazer+" DO(A) "+e.comoChama+"?"),a.push("QUAIS OS EFEITOS DA APLICA\xc7\xc3O DO(A) "+e.faria+" PARA "+e.servePara+" NO(A) PROCESSSO DE "+e.gostouDeFazer+" DO(A) "+e.comoChama+"?"),a.push("QUAIS FATORES DETERMINAM A COMPREENS\xc3O DO(A) "+e.faria+" PARA "+e.servePara+" COMO SOLU\xc7\xc3O DE "+e.dorDeCabeca+"?"),a.push("QUAIS OS ASPECTOS DO ESTUDO SOBRE "+e.faria+" PARA "+e.aplicadoNaMateria+" INFLUENCIA NO(A) "+e.dorDeCabeca2+"?"),a.push("QUAIS FATORES DETERMINAM O CONHECIMENTO B\xc1SICO DAS FERRAMENTAS DO(A) "+e.faria+" PARA "+e.gostouDeFazer+" COMO SOLU\xc7\xc3O FRENTE AO PROBLEMA DE "+e.dorDeCabeca+"?"),a.push("QUAIS OS EFEITOS DA ANALISE DA TEORIA DE "+e.faria+" COMO MEIO PARA "+e.gostouDeFazer+" PODE INFLUENCIAR NO(A) "+e.dorDeCabeca+"?"),a.join("\n\n\n").toString()},m=r(9),p=r(12),A=r(18);function O(){var e=Object(t.useState)({curso:"",disciplina:"",profissional:"",trabalhaEm:"",comoChama:"",gostouDeFazer:"",aplicadoNaMateria:"",servePara:"",dorDeCabeca:"",dorDeCabeca2:"",faria:""}),a=Object(A.a)(e,2),r=a[0],n=a[1];function c(e,a){console.log("Alterar [".concat(e,"]: ").concat(a)),n(function(r){return Object(p.a)(Object(p.a)({},r),{},Object(m.a)({},e,a))})}return o.a.createElement("div",null,o.a.createElement(b,{getRespostas:r}),g.map(function(e){return o.a.createElement(f,{item:e,save:c,get:r})}),o.a.createElement(b,{getRespostas:r}))}function f(e){var a=e.item,r=e.save,t=e.get;return o.a.createElement("section",{className:"px-8"},o.a.createElement("h2",{class:"w-full text-xl font-bold leading-tight my-2"},a.pergunta(t)),o.a.createElement("div",{className:"flex flex-wrap mb-2"},o.a.createElement("div",{className:"relative w-full appearance-none label-floating"},o.a.createElement("textarea",{className:"autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500",name:a.chave,type:"text",maxLength:"100",placeholder:a.placeholder,value:t[a.chave],onChange:function(e){return r(a.chave,e.target.value)}}),o.a.createElement("label",{for:"message",className:"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"},"Message..."))))}function b(e){var a=e.getRespostas;return o.a.createElement("div",{className:"\n      flex justify-center p-4\n      "},o.a.createElement(l.b,{className:"\n          text-blue-500 text-lg \n          hover:bg-blue-500 \n          hover:text-gray-100\n          focus:border-4 \n          focus:border-blue-300\n          border-2 border-blue-500\n          rounded-lg\n        ",to:{pathname:"/ideias",state:{respostas:a}}},o.a.createElement("button",{className:"\n          p-2 pl-3 pr-3\n          "},"Gerar Ideias")))}var g=[{chave:"curso",placeholder:"Administra\xe7\xe3o",pergunta:function(e){return"Qual seu curso ?"}},{chave:"disciplina",placeholder:"Marketing",pergunta:function(e){return"Qual a disciplina do curso "+e.curso+" que voc\xea mais se identifica?"}},{chave:"profissional",placeholder:"Publicit\xe1rio",pergunta:function(e){return"Qual o profissional que lida com "+e.disciplina+"?"}},{chave:"trabalhaEm",placeholder:"Ag\xeancia de Publicidade",pergunta:function(e){return"Onde o trabalha "+e.profissional+"? COMPLETE A FRASE: Ele trabalha em..."}},{chave:"comoChama",placeholder:"Empresas",pergunta:function(e){return"Como se chama o individuo, seja fisica ou juridica que consome produtos ou \xe9 atendido pelo "+e.profissional+"? COMPLETE A FRASE: Esse individuo pode ser um(a)..."}},{chave:"gostouDeFazer",placeholder:"Mudan\xe7a de Marca",pergunta:function(e){return"Qual teoria, conceito, ferramenta, m\xe9todo, t\xe9cnica ou principio que voc\xea mais tem conhecimento em "+e.disciplina+" O que voc\xea fez em sala que mais gostou de fazer? COMPLETE A FRASE: Eu gostei de fazer..."}},{chave:"aplicadoNaMateria",placeholder:"Posicionamento de Mercado",pergunta:function(e){return"Em qual mat\xe9ria da disciplina de "+e.disciplina+" "+e.gostouDeFazer+" \xe9 aplicado? COMPLETE A FRASE: \xc9 aplicado na mat\xe9ria..."}},{chave:"servePara",placeholder:"Repocionamento de Marca",pergunta:function(e){return"Para que serve um(a) "+e.aplicadoNaMateria+"? COMPLETE A FRASE: Serve para..."}},{chave:"dorDeCabeca",placeholder:"Clientes confundindo a marca com outra",pergunta:function(e){return"A falta de "+e.servePara+" gera qual problema para os(as) "+e.comoChama+" que s\xe3o clientes do(a) "+e.trabalhaEm+" COMPLETE A FRASE: Vai ter principalmente dor de cabe\xe7a com.."}},{chave:"dorDeCabeca2",placeholder:"Reclama\xe7\xf5es de clientes",pergunta:function(e){return"Deixe aqui mais um problema relacionado ao "+e.profissional+" COMPLETE A FRASE:...Mais uma dor de cabe\xe7a ser\xe1..."}},{chave:"faria",placeholder:"Mudan\xe7a de marca",pergunta:function(e){return"Qual teoria, conceito, ferramenta, m\xe9todo, t\xe9cnica ou principio capaz de resolver o problema com "+e.dorDeCabeca+"? O que o "+e.profissional+" precisa fazer para evitar problemas com "+e.dorDeCabeca+"? Imagine que voc\xea \xe9 um "+e.profissional+" e est\xe1 com esse problema, se voc\xea tivesse que sentar e escrever sobre o que precisa estudar para resolver esse problema, o que seria? COMPLETE A FRASE: Eu faria o(a)..."}}];function h(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/",render:function(){return o.a.createElement(s.a,{to:"/perguntas"})}}),o.a.createElement(s.b,{path:"/perguntas",exact:!0,component:O}),o.a.createElement(s.b,{path:"/ideias",component:u}),o.a.createElement(s.b,{exact:!0,path:"*",render:function(){return o.a.createElement("h2",null,"Rota n\xe3o encontrada!")}}))))}var v=document.getElementById("root");c.a.render(o.a.createElement(h,null),v)}},[[19,1,2]]]);
//# sourceMappingURL=main.1992c907.chunk.js.map