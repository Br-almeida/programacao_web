var x = {} //objeto vazio

var pessoa = {
    nome : "Bruno ",
    sobrenome : "Almeida",
    sexo : [ "Feminino"],
    idade : 19,
    altura : 1.70,
    peso : 50,
    andando : false,
    caminhouQuantosMetros : 0,

   fazerAniversario : function (){
        
       this.idade++ 
 },
  
    andar : function (metrosCaminhados){
       
    this.caminhouQuantosMetros= this.caminhouQuantosMetros + metrosCaminhados
    this.andando= true 
   
   },

   parar : function (){
       this.andando = false 

    },
    
    nomeCompleto : function (){
      console.log ("Olá, Meu nome é "+ this.nome  + this.sobrenome)
    
    },

    mostrarIdade : function (){
        console.log ("Olá eu tenho " + this.idade , " Anos!")
    },

    mostrarPeso : function (){
        console.log ("Eu peso" + this.peso , " Kg") 

    },

    mostrarAltura : function (){
        console.log ("Minha altura é " + this.altura , " m")
    },
    
    mostrarMetros : function (){
        console.log ("Você andou " + this.caminhouQuantosMetros, " metros" )
    },
    apresentacao : function (){
        if ((this.idade == 1), (this.caminhouQuantosmetros == 1)) {
            if (this.sexo === "Masculino") {
                console.log("Olá, eu sou o " + this.nome + " tenho " + this.idade + " ano, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metro!")
            } else {
                console.log("Olá, eu sou a " + this.nome + " tenho " + this.idade + " ano, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metro!")
            }
        } else {
            if ((this.sexo === "Feminino") && (this.caminhouQuantosMetros > 1)) {
                console.log("Olá, eu sou o " + this.nome + " tenho " + this.idade + " anos, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metros!")
            } else {
                console.log("Olá, eu sou a " + this.nome + " tenho " + this.idade + " anos, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metros!")
            }
        }
    }
        
   



}
pessoa.nomeCompleto()
pessoa.mostrarAltura()
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.mostrarIdade()
pessoa.andar(10)
pessoa.andar(5)
pessoa.andar(2)
pessoa.parar()
pessoa.mostrarMetros()
pessoa.parar()
pessoa.apresentacao()

