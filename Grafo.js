import Vertice from "./Vertice.js";
import Aresta from "./Aresta.js";

class Grafo {
    constructor() {
        this.vertices = new Map();
    }

    adicionarVertice(nome, heuristica) {
        if (!this.vertices.has(nome)) {
            this.vertices.set(nome, new Vertice(nome, heuristica));
        }
        return this.vertices.get(nome);
    }

    adicionarAresta(nome1, nome2, custo) {
        const vertice1 = this.adicionarVertice(nome1, 0);
        const vertice2 = this.adicionarVertice(nome2, 0);
        const aresta = new Aresta(vertice1, vertice2, custo);
        vertice1.arestas.push(aresta);
        vertice2.arestas.push(aresta);
    }

    criarGrafoKanto() {
        // Definição dos vértices com heurísticas
        this.adicionarVertice("Pallet", 5);
        this.adicionarVertice("Viridian", 10);
        this.adicionarVertice("Pewter", 15);
        this.adicionarVertice("Cerulean", 10);
        this.adicionarVertice("Vermilion", 8);
        this.adicionarVertice("Lavender", 15);
        this.adicionarVertice("Celadon", 10);
        this.adicionarVertice("Fuchsia", 15);
        this.adicionarVertice("Saffron", 10);
        this.adicionarVertice("Cinnabar", 25);
        this.adicionarVertice("Indigo Plateau", 20);
        this.adicionarVertice("Mt. Moon", 25);

        // Definição das arestas com custos
        this.adicionarAresta("Pallet", "Viridian", 5);
        this.adicionarAresta("Viridian", "Pewter", 10);
        this.adicionarAresta("Pewter", "Mt. Moon", 20);
        this.adicionarAresta("Mt. Moon", "Cerulean", 25);
        this.adicionarAresta("Cerulean", "Vermilion", 15);
        this.adicionarAresta("Cerulean", "Saffron", 10);
        this.adicionarAresta("Saffron", "Celadon", 8);
        this.adicionarAresta("Celadon", "Fuchsia", 15);
        this.adicionarAresta("Fuchsia", "Cinnabar", 25);
        this.adicionarAresta("Vermilion", "Lavender", 15);
        this.adicionarAresta("Lavender", "Indigo Plateau", 20);
    }
}

export default Grafo;