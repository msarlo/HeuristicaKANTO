import Rastreador from "./Rastreador.js";

class AEstrela {
    static encontrarCaminho(grafo, inicio, destino) {
        const aberta = [new Rastreador(grafo.vertices.get(inicio), null, 0)];
        const fechada = new Set();

        while (aberta.length > 0) {
            aberta.sort((a, b) => a.FuncaoAvaliacao() - b.FuncaoAvaliacao());
            const atual = aberta.shift();
            
            if (atual.vertice.valor === destino) {
                return AEstrela.reconstruirCaminho(atual);
            }
            
            fechada.add(atual.vertice);

            for (const aresta of atual.vertice.arestas) {
                const proximoVertice = aresta.vertices.find(v => v !== atual.vertice);
                if (fechada.has(proximoVertice)) continue;

                const custoTotal = atual.custoAtual + aresta.custo;
                const novoRastreador = new Rastreador(proximoVertice, atual, custoTotal);
                aberta.push(novoRastreador);
            }
        }
        return [];
    }

    static reconstruirCaminho(rastreador) {
        const caminho = [];
        let atual = rastreador;
        while (atual) {
            caminho.unshift(atual.vertice.valor);
            atual = atual.anterior;
        }
        return caminho;
    }
}

export default AEstrela;
