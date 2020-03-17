var isTruthy = (value)=>{
	if(value){
		return true
	}else{
		return false
	}
}

isTruthy(0)
    isTruthy(0n)
        isTruthy(null)
            isTruthy(undefined)
                isTruthy(false)
                    isTruthy(NaN)
                        isTruthy("")
                            isTruthy(document.all)





isTruthy(1)
    isTruthy([])
        isTruthy({})
            isTruthy(true)
                isTruthy("1")
                    isTruthy(1+"1")
                        isTruthy(8)
                            isTruthy(9)
                                isTruthy(10)
                                        isTruthy("pp")



//----------------------------------------------------------------------------------------------------------

var carro = {
	marca: "Ford",
	modelo: "Fusion",
	placa: "placa",
	ano: "2020",
	cor: "branco", 
	quantasPortas: 4,
	assentos: 5,
    quantidadePessoas: 0,
    

	
mudarCor : function (cor){
	this.cor = cor	
},

obterCor : function (){
	console.log(this.cor)
},

obterModelo : function (){
	console.log(this.modelo)
},

obterMarca : function (){
 console.log(this.marca)
},

obterMarcaModelo : function (){
	console.log ("Esse carro é um " +this.obterMarca()+" "+this.obterModelo() )
},


addPessoas : function(x) {
var vagas = carro.assentos - carro.quantidadePessoas
var singulaPlural = vagas === 1 ? " pessoa" : " pessoas"

if (carro.quantidadePessoas >= carro.assentos) {
	console.log (" Já temos " + carro.quantidadePessoas + " pessoas no carro!" + " O carro já está lotado!")
	}else if (carro.quantidadePessoas <= carro.assentos) {
	  if (vagas >= x) {
	  carro.quantidadePessoas += x
	  console.log("Já temos " + carro.quantidadePessoas + " pessoas no carro!")
	  }else {
		console.log ("Só cabem mais " + vagas + singulaPlural + "!")
	  }
	}
  }
  
}



carro.obterCor() 
carro.mudarCor("vermelho")
carro.obterCor()
carro.mudarCor("verde musgo")
carro.obterCor()
carro.obterMarca() 
carro.obterModelo()
carro.addPessoas(2)
carro.addPessoas(4)
carro.addPessoas(3)
carro.addPessoas(10)