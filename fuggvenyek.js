export function listaOsszeallit() {
    const ADATLISTA = [];
    for (let index = 0; index < 9; index++) {
        ADATLISTA[index] = szamGeneral();
    }
    return ADATLISTA;
}
export function lampaMegjelenit(lista){
    const ELEM = $(".tabla");
    for (let index = 0; index < lista.length; index++) {
        ELEM.append(`<div class="lampa" id="lampa-${index}"><p>${lista[index]}</p></div>`);
    }
    lampaFel(lista);
    kattintasra()
}

function szamGeneral(){
    return Math.floor(Math.random() * 2);
}

function ellenoriz(lista) {
}
function lampaFel(lista){
    for (let index = 0; index < lista.length; index++) {
        let lampa = $(`#lampa-${index}`);
        if (lista[index] == 1) {
            lampa.addClass("fel");
        }
    }
}
function kattintasra(){
    $(".lampa").on("click", function(){
        $(this).css("background-color", "yellow"); 
    });
}
