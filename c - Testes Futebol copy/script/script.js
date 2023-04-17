

class Item {
  constructor(nome, marcado) {
    this.nome = nome;
    this.marcado = marcado;

    //console.log(nome)
    /* O parâmetro nome importa da da instância meuArray,as
    propriedades nome da mesma. */
  }

  marcar() {
    this.marcado = true;
  }

  desmarcar() {
    this.marcado = false;
  }
  /* Posso ter duas classes em um código?
  Sim, você pode ter duas classes no seu código. 
  No exemplo que eu dei anteriormente, há duas classes: Item e MeuItem. A classe Item representa um único item com propriedades nome e marcado e métodos marcar e desmarcar. */


}

class MeuItem {
  constructor(itens) {
    this.itens = itens.map(item => new Item(item.nome, item.marcado));

    console.log(itens)/* O parâmetro itens do constructor, esta 
    recebendo através da propriedade this.itens, um novo array de
    objetos, que esta sendo importado da classe Item */

  }
  /* A classe MeuItem representa uma lista de itens e possui um construtor que aceita um array de objetos e (cria uma instância da classe Item para cada objeto no array)ou seja, importa todos
  os objetos e suas propriedades da classe Item.

Ter duas classes pode ajudar a organizar melhor o código e torná-lo mais legível e fácil de manter. Cada classe tem suas próprias responsabilidades e métodos, o que facilita a compreensão de como o código funciona. */



  html() {
    const lista = document.querySelector("#minhaLista");

    this.itens.forEach((item) => {
      const itemLista = document.createElement("li");
      const rotulo = document.createElement("label");
      const caixaSelecao = document.createElement("input");
      caixaSelecao.type = "checkbox";
      caixaSelecao.checked = item.marcado;

      caixaSelecao.addEventListener("change", () => {
        if (caixaSelecao.checked) {
          item.marcar();
        } else {
          item.desmarcar();
        }

        /* Cria um novo array de objetos com os itens marcados,
        cujo a propriedade marcado é true */
        
        const itensMarcados = this.itens.filter(item => item.marcado);

        console.log(itensMarcados)
        /* *********************************************** */

        const listaMarcados = document.querySelector("#minhaListaMarcados");
        listaMarcados.innerHTML = "";
        itensMarcados.forEach((item) => {
          const itemLista = document.createElement("li");
          itemLista.textContent = item.nome;

          listaMarcados.appendChild(itemLista);
        });
      });

      rotulo.appendChild(caixaSelecao);
      rotulo.appendChild(document.createTextNode(item.nome));
      itemLista.appendChild(rotulo);
      lista.appendChild(itemLista);
    });
    /* Este método cria elementos HTML para exibir a lista de itens. Para cada item no array itens, ele cria um elemento li, um elemento label e um elemento input do tipo checkbox. O estado do checkbox é definido com base na propriedade marcado do item. Um evento é adicionado ao checkbox para chamar os métodos marcar ou desmarcar do item quando o estado do checkbox é alterado. Por fim, os elementos são adicionados à página HTML. */

    /* Quando você marca ou desmarca um item na lista, o método marcar ou desmarcar da instância do objeto Item correspondente é chamado. Isso atualiza a propriedade marcado do objeto para true ou false, respectivamente.
    No entanto, além de atualizar a propriedade marcado do objeto, nada mais acontece no código atual. */
  }

}



let meuArray = new MeuItem([
  {
    nome: "Edmar",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Meio",
    habilidade: 4
  },
  {
    nome: "Tota",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Maua",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Victor",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Piu Pinga",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Adauto",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Alison",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Vitor",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Bilu",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "João Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Hugo",
    posicao: "Meio",
    habilidade: 4
  },
  {
    nome: "Alexandre",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Lacio",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Wanderson",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Gustavo Filho",
    posicao: "Defesa",
    habilidade: 0
  },
  {
    nome: "Felipe Indiano",
    posicao: "Defesa",
    habilidade: 0
  },
]);

meuArray.html();








