var elementoPostit = document. querySelector ("#postit")
var addPostit = document. createElement("button") 
var inputElemento = document. createElement ("input")
var textoElemento = document. createTextNode ("Adicionar seu postit")
 
var deleteMensagem = document. createElement ("p")
deleteMensagem.appendChild(document.createTextNode("Clique duas vezes para apagar o postit"))


addPostit. appendChild (document. createTextNode(""))
addPostit. appendChild(textoElemento)
elementoPostit. appendChild(addPostit)

elementoPostit.appendChild(inputElemento)
elementoPostit.appendChild(deleteMensagem)
 

