

class Item {
  constructor(nome, marcado){
    this.nome = nome;
    this.marcado = marcado;
  }

  marcar() {
    this.marcado = true;
  }

  desmarcar() {
    this.marcado = false;
  }

}

class MeuItem {
  constructor(itens) {
    this.itens = itens.map(item => new Item(item.nome,item.marcado));
    
  }

  

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

        const itensMarcados = this.itens.filter(item => item.marcado)
        const listaMarcados =document.querySelector("#minhaListaMarcados");
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








