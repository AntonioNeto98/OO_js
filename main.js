function Moto(modelo, cilindrada, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
}


function Dono1(nome, modelo, cilindranda, fabricante, anoModelo, anoFabricacao) {
    this.nome = nome;

    Moto.call (this, modelo, cilindranda, fabricante, anoModelo, anoFabricacao); 
}

function Dono2(nome, modelo, cilindranda, fabricante, anoModelo, anoFabricacao) {
    this.nome = nome;

    Moto.call (this, modelo, cilindranda, fabricante, anoModelo, anoFabricacao); 
}

function Preco(valor, modelo, cilindrada, fabricante, anoModelo, anoFabricacao) {
    this.valor = valor;

    Moto.call (this, modelo, cilindrada, fabricante, anoModelo, anoFabricacao); 
}


const dono1 = new Dono1 ("Jonata", "cb300", "300", "Honda", 2012, 2013); 
const dono2 = new Dono2 ("Aline", "Superleggera V4", "998", "Ducati", 2020, 2021); 

const valor1 = new Preco ("12.000,00", "cb300", "300", "Honda", 2012, 2013); 
const valor2 = new Preco ("700.000,00", "Superleggera V4", "998", "Ducati", 2020, 2021); 

const motoDoJonata = new Moto ("cb300", "300", "Honda", 2012, 2013);
const motoDaAline = new Moto ("Superleggera V4", "998", "Ducati", 2020, 2021);

console.log (dono1);
console.log (dono2);

console.log (motoDoJonata instanceof Moto);
console.log (motoDaAline instanceof Moto);
console.log (valor1 instanceof Preco);
