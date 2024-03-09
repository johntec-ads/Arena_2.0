let meuArray = ( [
  {
    nome: "Edmar",
    posicao: "Defesa",
    habilidade: 3,
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
    nome: "João Frango",
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
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Maua",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Paulinho (Victor)",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "João Ramalho",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Van Helsing",
    posicao: "Meio",
    habilidade: 2,
  },
  {
    nome: "Alison",
    posicao: "Ataque",
    habilidade: 1
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Vitor",
    posicao: "Meio",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Allan(Xandão)",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Lacio",
    posicao: "MeioAtaque",
    habilidade: 2,
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
  {
    nome: "Tannuri",
    posicao: "Ataque",
    habilidade: 1
  },
  {
    nome: "Alexandre",
    posicao: "Meio",
    habilidade: 2
  },
  {
    nome: "Maicon",
    posicao: "MeioAtaque",
    habilidade: 3
  },
  {
    nome: "Japones",
    posicao: "Meio",
    habilidade: 4
  },
  {
    nome: "Antonio",
    posicao: "Meio",
    habilidade: 2
  },
  {
    nome: "Xana",
    posicao: "Ataque",
    habilidade: 1
  },
  {
    nome: "Rato",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Kadu",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Henderson",
    posicao: "Meio",
    habilidade: 2
  },


] );

function marcar () {
  this.marcado = true;
}

function desmarcar () {
  this.marcado = false;
}
/* ***Função para ordenar o array original em ordem alfabetica */
function ordemAZ ( param ) {
  param.sort( ( a, b ) => a.nome.localeCompare( b.nome ) );

}


/************Função que mistura o array******** */
function misturarArray ( array ) {
  const resultado = array.slice();
  for ( let i = resultado.length - 1; i > 0; i-- ) {
    const j = Math.floor( Math.random() * ( i + 1 ) );
    [ resultado[ i ], resultado[ j ] ] = [ resultado[ j ], resultado[ i ] ];
  }
  return resultado;
}

/* *************Function para filtrar a posição Meio e suas habilidades*********/
function meioNivel4 ( param ) {
  const meioNivel4 = param.filter( item => item.habilidade === 4 && item.posicao === "Meio" );
  return meioNivel4;
}
function meioNivel3 ( param ) {
  const meioNivel3 = param.filter( item => item.habilidade === 3 && item.posicao === "Meio" );
  return meioNivel3;
}
function meioNivel2 ( param ) {
  const meioNivel2 = param.filter( item => item.habilidade === 2 && item.posicao === "Meio" );
  return meioNivel2;
}
function meioNivel1 ( param ) {
  const meioNivel1 = param.filter( item => item.habilidade === 1 && item.posicao === "Meio" );
  return meioNivel1;
}
/* **************Function para filtrar a posição Ataque,MeioAtaque e suas habilidades********/
function ataqueNivel1 ( param ) {
  const ataqueNivel1 = param.filter( item => item.habilidade === 1 && item.posicao === "Ataque" );
  return ataqueNivel1;
}
function ataqueNivel2 ( param ) {
  const ataqueNivel2 = param.filter( item => item.habilidade === 2 && item.posicao === "Ataque" );
  return ataqueNivel2;
}
function ataqueNivel3 ( param ) {
  const ataqueNivel3 = param.filter( item => item.habilidade === 3 && item.posicao === "Ataque" );
  return ataqueNivel3;
}
function meioAtaque ( param ) {
  const meioAtaque = param.filter( item => item.habilidade === 3 && item.posicao === "MeioAtaque" );
  return meioAtaque;
}
/* ************Function para filtar a defesa e suas habilidades*********************************** */
function defesaNivel0 ( param ) {
  const defesaNivel0 = param.filter( item => item.habilidade === 0 && item.posicao === "Defesa" );
  return defesaNivel0
}
function defesaNivel1 ( param ) {
  const defesaNivel1 = param.filter( item => item.habilidade === 1 && item.posicao === "Defesa" );
  return defesaNivel1
}
function defesaNivel2 ( param ) {
  const defesaNivel2 = param.filter( item => item.habilidade === 2 && item.posicao === "Defesa" );
  return defesaNivel2
}
function defesaNivel3 ( param ) {
  const defesaNivel3 = param.filter( item => item.habilidade === 3 && item.posicao === "Defesa" );
  return defesaNivel3
}
/* **********função para criar 2 listas em html representando as equipes********** */
function displayLists ( timeAzul, timeAmarelo ) {
  const containerAzul = document.querySelector( '#listaAzul' );
  const containerAmarelo = document.querySelector( "#listaAmarelo" );
  const ulsAzul = containerAzul.querySelectorAll( 'ol' );

  ulsAzul.forEach( ul => ul.remove() );

  const ulsAmarelo = containerAmarelo.querySelectorAll( 'ol' );
  ulsAmarelo.forEach( ul => ul.remove() );
  const ulAzul = document.createElement( 'ol' );

  timeAzul.map( item => {
    const li = document.createElement( 'li' );
    li.textContent = item.nome;
    ulAzul.appendChild( li );
  } );

  containerAzul.appendChild( ulAzul );
  const ulAmarelo = document.createElement( 'ol' );
  timeAmarelo.map( item => {
    const li = document.createElement( 'li' );
    li.textContent = item.nome;
    ulAmarelo.appendChild( li );
  } );
  containerAmarelo.appendChild( ulAmarelo )
}
/* ************************************************************************ */
meuArray.forEach( item => item.marcar = marcar )
meuArray.forEach( item => item.desmarcar = desmarcar )

/* *******Function que cria uma lista html com as checkbox*************** */
function html ( jogadores ) {
  const lista = document.querySelector( "#minhaLista" );
  jogadores.forEach( ( item ) => {
    const itemLista = document.createElement( "li" );
    const rotulo = document.createElement( "label" );
    const caixaSelecao = document.createElement( "input" );
    /*  */

    /*  */

    caixaSelecao.type = "checkbox";
    caixaSelecao.checked = item.marcado;

    caixaSelecao.addEventListener( "change", () => {
      if ( caixaSelecao.checked ) {
        item.marcar();
      } else {
        item.desmarcar();
      }
      /* Filtra para o novo array, os itens cuja a propriedade marcado esteja true. */
      const itensMarcados = jogadores.filter( item => item.marcado );

      /* novaLista recebe o argumento itensMarcados  evoncando a função que randomiza a ordem da lista */
      const novaLista = misturarArray( itensMarcados );

      const meioFiltrado = [].concat(/* concatena as functions para a const meioFiltrado */
        meioNivel1( novaLista ),
        meioNivel2( novaLista ),
        meioNivel3( novaLista ),
        meioNivel4( novaLista ),

      );
      const ataqueFiltrado = [].concat(/* concatena as functions para a const ataqueFiltrado */
        ataqueNivel1( novaLista ),
        ataqueNivel2( novaLista ),
        ataqueNivel3( novaLista ),
      );

      const mAfiltrado = meioAtaque( novaLista );/* mAfiltrado recebe a function meioAtaque */

      const defesaFiltrado = [].concat(/* concatena as functions para a const defesaFiltrado */
        defesaNivel0( novaLista ),
        defesaNivel1( novaLista ),
        defesaNivel2( novaLista ),
        defesaNivel3( novaLista ),
      );
      /* concatena para newAtletas as const criadas pelas functions */
      const newAtletas = [ ...ataqueFiltrado, ...defesaFiltrado, ...meioFiltrado, ...mAfiltrado ];

      /* cria duas arrays vazias */
      const timeAzul = [];
      const timeAmarelo = [];

      /* Itera em ordem de índice o array newAtletas, e separa 
      um objeto para cada array */
      newAtletas.forEach( ( jogador, index ) => {
        if ( index % 2 === 0 ) {
          timeAzul.push( jogador );
        } else {
          timeAmarelo.push( jogador );
        }
      } );

      /* Function que cria duas lista em html,usando os argumentos de timeAmarelo e timeAzul */
      displayLists( timeAmarelo, timeAzul );
      /* ******************************** */

      const listaMarcados = document.querySelector( "#minhaListaMarcados" );
      listaMarcados.innerHTML = "";
      itensMarcados.forEach( ( item ) => {
        const itemLista = document.createElement( "li" );
        itemLista.textContent = item.nome;
        listaMarcados.appendChild( itemLista );
      } );

    }
    );

    rotulo.appendChild( caixaSelecao );
    rotulo.appendChild( document.createTextNode( item.nome ) );
    itemLista.appendChild( rotulo );
    lista.appendChild( itemLista );

  } )
}
//Ocultar as listas de equipes no início.
const teamLists = document.querySelectorAll( '.team-list, #backButton, #teamsButton,.legenda1, .legenda2' );
teamLists.forEach( list => list.style.display = 'none' );

//Adicionar um manipulador de eventos click ao botão
const button = document.querySelector( '#myButton' );
button.addEventListener( 'click', () => {

  //Mostrar as listas de equipes quando o botão é clicado.
  teamLists.forEach( list => list.style.display = 'block' );

  //Ocultar a lista checkbox
  const listaCompleta = document.querySelectorAll( '.lista-completa,.lista-presente, #myButton, .legenda,.fa-solid, .fa-hand-point-left, .fa-bounce' );
  listaCompleta.forEach( list => list.style.display = 'none' );

} );

/* Evento de click para retornar para a lista checkbox e ocultar as equipes */
const backButton = document.querySelector( '#backButton' );
backButton.addEventListener( 'click', () => {
  // ocultar listas de equipes azul e amarelo
  document.querySelector( '#listaAzul' ).style.display = 'none';
  document.querySelector( '#listaAmarelo' ).style.display = 'none';
  // mostrar lista de seleção e lista presente
  document.querySelector( '.lista-completa' ).style.display = 'block';
  document.querySelector( '.lista-presente' ).style.display = 'block';
} );


/* Evento click para volta para lista de equipes já criada,sem perder os dados */
const teamsButton = document.querySelector( '#teamsButton' );
teamsButton.addEventListener( 'click', () => {
  // ocultar lista de seleção
  document.querySelector( '.lista-completa' ).style.display = 'none';
  document.querySelector( '.lista-presente' ).style.display = 'none';
  // mostrar listas de equipes azul e amarelo
  document.querySelector( '#listaAzul' ).style.display = 'block';
  document.querySelector( '#listaAmarelo' ).style.display = 'block';
} );


ordemAZ( meuArray ); /* Evoncando função que ordena o array em ordem alfabetica */
html( meuArray );/* Evocando a função que criar as lista na página html */

/* Orientações no txt da página */
const printButton = document.querySelector( '#print' );
printButton.addEventListener( 'click', () => {
  html2canvas( document.body ).then( function ( canvas ) {
    var dataUrl = canvas.toDataURL();
    var img = new Image();
    img.src = dataUrl;
    img.style.width = '100%';
    img.style.height = 'auto';
    document.body.appendChild( img );

    const btn = document.createElement( 'buttom' );
    btn.id = 'remove-img'
    btn.innerHTML = "Remover imagem";
    btn.addEventListener( "click", function () {
      document.body.removeChild( img );
      document.body.removeChild( btn );// remove o botão também

    } );
    document.body.appendChild( btn );//adiciona o botão após a imagem

    //Rola para mostrar a imagem gerada
    window.scrollTo( 0, document.body.scrollHeight );
  } );
} );

//Organiza por habilidade e posição
function listaPronta ( param ) {
  let habilidades = [ 0, 1, 2, 3, 4 ];
  let posicoes = [ 'Defesa', 'Meio', 'Ataque', 'MeioAtaque' ]
  const novoArray = [];

  posicoes.forEach( posicao => {
    habilidades.forEach( habilidade => {
      let jogadoresFiltrados = param.filter( jogador => jogador.posicao === posicao && jogador.habilidade === habilidade );
      novoArray.push( ...jogadoresFiltrados );
    } )
  } )
  return novoArray
}
//Convertendo em string por nome,posição e habilidade.
function convertArray (itens) {
  return itens.map(itens => {    
    return `${itens.nome} (${itens.posicao},Habilidade ${itens.habilidade})\n`;
    }).join('');  
}
//Aplicando as function ,print no console.lo()
const numero1 = listaPronta( meuArray );
const numero2 = convertArray( numero1 )
console.log( numero2 )