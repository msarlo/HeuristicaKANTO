import Grafo from "./Grafo.js";
import Aestrela from "./Aestrela.js";


const grafo = new Grafo();
grafo.criarGrafoKanto();


const inicio = "Pallet";
const destino = "Saffron";


const caminho = AEstrela.encontrarCaminho(grafo, inicio, destino);


console.log(`Caminho encontrado de ${inicio} até ${destino}:`, caminho.join(" -> "));
