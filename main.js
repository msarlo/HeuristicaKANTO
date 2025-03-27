import Grafo from "./Grafo.js";
import Aestrela from "./Aestrela.js";

// Criar o grafo de Kanto
const grafo = new Grafo();
grafo.criarGrafoKanto();

// Definir os pontos de início e destino
const inicio = "Pallet";
const destino = "Indigo Plateau";

// Executar o algoritmo A*
const caminho = AEstrela.encontrarCaminho(grafo, inicio, destino);

// Exibir o resultado
console.log(`Caminho encontrado de ${inicio} até ${destino}:`, caminho.join(" -> "));
