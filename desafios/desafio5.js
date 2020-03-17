var valor = [5, 6, 8, 4, 9]


        function realiza(matriz) {
            if (typeof(matriz == "Teste")) {
                return matriz
            }
        }

realiza(valor)
realiza(valor)[1]



        function realizadois(matriz, index) {
            var mostrar = (matriz)[index]
            return mostrar

        }



function book(value) {
    
var livros = {
        HarryPotter: {
            quantidadedepaginas: ("O livro " + HarryPotter + "tem 56 páginas"),
            autor: "JK",
            editora: "abril"
        },
            HarryPotter1: {
                quantidadedepaginas: "57",
                autor: "JK",
                editora: "abril"
            },
                HarryPotter2: {
                    quantidadedepaginas: "58",
                    autor: "JK",
                    editora: "abril"
                }
    }
    if (value != undefined) {
        return livros[value]
    } else {
        return livros
    }

}

book()
book("HarryPotter").quantidadedepaginas
book("HarryPotter").editora