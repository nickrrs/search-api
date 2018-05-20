
// Variaveiss//
var texto = document.getElementById("inputText");
var botao = document.getElementById("searchButton");
var lista = document.getElementById("listGroup");
// ---------------- //

//Funções//
function buscaNoticias(valor) {
	lista.innerHTML = ""
	articles = fetch("https://newsapi.org/v2/everything?q="+ valor +"&apiKey=e005866aae6e44678ecb5ab983887a4e"); //Fetch é uma func q retorna dados da web //
	articles
	   .then(data => data.json())
	   .then(data => data.articles.map(article => {
	   	var a = document.createElement("a");
	   	a.textContent = article.title;
	   	a.setAttribute("class","list-group-item list-group-item-acrtion");
	   	a.setAttribute("href", article.url);
	   	a.setAttribute("target", "blank");
	   	lista.appendChild(a);
	   }))        
}

//-------//

// Eventos //
botao.addEventListener("click",function(){

	buscaNoticias(texto.value);
})
// -------//
