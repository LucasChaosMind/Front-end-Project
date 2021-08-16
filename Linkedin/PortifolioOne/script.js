var hamburguer = document.querySelector(".hamburguer");
/*Primeiro cria a varia hamburguer
e se seleciona com document.querySelector a classe .hamburguer*/
hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");
});
/*Em seguida usando a variavel criada, usando o addEventListening
se munitora se acontece o evento de "click" quando acontece se da inicio a função
que seleciona a clase sidebar e usando classList.toggle "que basicamente é add ou remove"
adicona uma clase chhamada "show-menu". Basicamente se vc não tiver clicado ela criara essa clase,
mas se vc ja tiver essa classe e clicar ela ira remover essa classe*/