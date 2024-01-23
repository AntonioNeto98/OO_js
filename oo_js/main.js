function Moto (modelo, cilindrada, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
}

const motoDoJonata = new Moto ("cb300", "300", "Honda", 2012, 2012 );
const motoDaAline = new Moto ("Superleggera V4", "998", "Ducati", 2020, 2020);

console.log (motoDoJonata instanceof Moto);
console.log (motoDaAline instanceof Moto);
console.log (motoDoJonata instanceof Array);