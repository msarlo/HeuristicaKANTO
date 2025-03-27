class Rastreador {
    custoAtual = 0;
    vertice = null;
    anterior = null;

    constructor(vertice, anterior, custoAtual) {
        this.vertice = vertice;
        this.anterior = anterior;
        this.custoAtual = anterior.custo + custoAtual;
    }
    FuncaoAvaliacao() {
        return this.custo + this.vertice.heuristica;
    }
}

export default Rastreador;