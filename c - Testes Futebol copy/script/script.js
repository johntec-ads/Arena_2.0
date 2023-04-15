class Futebol {
  constructor(atletas, presente) {
    this.atletas = atletas;
    this.presente = presente;
  }

  names() {

    let cont = 1;

    for (let i in this.atletas) {
      let nomes = this.atletas[i].nome
      let lista = document.createElement("ul");
      let item = document.createElement("li")

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      let string =
        document.createTextNode(`${cont.toString().padStart(2, 0)}-${nomes}`);
      checkbox.name = nomes;
      checkbox.value = string;

      item.appendChild(checkbox);
      item.appendChild(string);
      lista.appendChild(item);
      var container = document.getElementById('lista-faltas');
      container.appendChild(lista);
      cont++

    }


    const selecao = document.querySelectorAll('#lista-faltas');

    selecao.addEventListener('click', () => {

      if (selecao.checked == true) {
        console.log(document.querySelectorAll('#lista-faltas'));
      } else {
        console.log(document.querySelectorAll('#lista-faltas'));
      }

    })



  }

  elementos() {
    let newarray = this.atletas.map((valor) => {
      let cont = 1;
      let nomes = valor.nome;
      let lista = document.createElement("ul");
      let item = document.createElement("li");

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      let string = document.createTextNode(`${cont.toString().padStart(2, 0)}-${item.nomes}`);
      checkbox.name = nomes;
      checkbox.value = string;
      item.appendChild(checkbox);
      item.appendChild(string);
      lista.appendChild(item);
      var container = document.getElementById('lista-faltas');
      container.appendChild(lista);
      cont ++;
    })
  }

  newmap() {
    console.log(this.atletas.map(atleta => atleta.nome))

  }


}

let lista = new Futebol([
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

lista.newmap()
lista.elementos()

















