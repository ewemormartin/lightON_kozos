export function lampaMegjelenit(){
    const ADATLISTA = [];
    const ELEM  = $(".tabla");
    for (let index = 0; index < 9; index++) {
        ADATLISTA[index] = szamGeneral();
        ELEM.append(`<div id="lampa"><p>${ADATLISTA[index]}</p></div>`);
    }
    ellenoriz(ADATLISTA);
}

function szamGeneral(){
    return Math.floor(Math.random() * 2);
}

function ellenoriz(lista) {
   for (let index = 0; index < lista.length; index++) {
        if (lista[index] == 1) {
            lista[index].css(`background-color`, `yellow`);
        }
   } 
}

function lampaFel(){
    lista[index].on("click", function(){
        lista[index].css("backroundcolor", "yellow")
      });
      
}