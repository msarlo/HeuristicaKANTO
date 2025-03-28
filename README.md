/Introdução/

Este trabalho utiliza o algoritmo A* para encontrar o caminho mínimo entre duas cidades no mapa fictício da região de Kanto, do universo Pokémon. A modelagem foi feita representando a região como um grafo, onde cada cidade ou ponto importante é um vértice e as conexões entre eles são arestas com custos associados.

/Estrutura do Grafo/

Cada vértice do grafo representa uma cidade ou ponto relevante no trajeto, e cada aresta conecta dois vértices, possuindo um custo que representa a dificuldade de travessia. O custo das arestas não foi baseado apenas na distância, mas também na dificuldade do caminho, como a presença de obstáculos ou encontros com Pokémon selvagens.

/Custos das Arestas/

Os custos das arestas foram definidos considerando os desafios de cada trajeto:

Rotas fáceis (estradas, caminhos diretos): Custo 5 a 10

Rotas médias (florestas, pequenas cavernas, desvios): Custo 15 a 20

Rotas difíceis (Mt. Moon, mar, cavernas longas): Custo 25 a 30

/Heurística Adotada/

A heurística escolhida foi baseada na dificuldade de atravessar cada região e foi definida como admissível, ou seja, nunca superestima o custo real até o destino:

5 – Caminho sem obstáculos.

10 – Poucos encontros aleatórios.

15 – Muitos encontros evitáveis.

20 – Muitos encontros evitáveis com um longo desvio.

25 – Muitos encontros inevitáveis em trajetos longos (exemplo: Mt. Moon).

/Implementação do Algoritmo A/

O algoritmo A* foi implementado em JavaScript e utiliza as seguintes classes:

Vertice.js: Representa cada cidade com seu nome, conexões e heurística.

Aresta.js: Representa as conexões entre cidades e seus custos.

Rastreador.js: Armazena o custo atual de um trajeto e o caminho percorrido.

AEstrela.js: Implementa o algoritmo A* para encontrar o caminho mais eficiente.

Grafo.js: Constrói o grafo da região de Kanto.

Main.js: Executa o algoritmo A* para encontrar o menor caminho entre dois pontos.

/Conclusão/

Com base nessa modelagem, o algoritmo A* consegue encontrar a rota mais eficiente dentro do mapa de Kanto, considerando não apenas a distância, mas também a dificuldade de travessia. Essa abordagem demonstra como técnicas de Inteligência Artificial podem ser aplicadas em diferentes contextos para otimização de rotas.