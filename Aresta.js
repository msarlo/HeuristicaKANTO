import Vertice from "./Vertice.js";

class Aresta {
    vertices = [];
    nome = "";
    custo = 0;

    constructor(vertice1 = null, vertice2 = null, custo = 0) {
        this.nome = this.nome;
        this.custo = custo;
        if(vertice1 && vertice2 && vertice1 instanceof Vertice && vertice2 instanceof Vertice){
            this.vertices = [vertice1, vertice2];
        }
        
    }
}

export default Aresta;