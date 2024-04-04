export function listaOsszeallit() {
    const ADATLISTA = [];
    for (let index = 0; index < 9; index++) {
        ADATLISTA[index] = szamGeneral();
    }
    return ADATLISTA;
}

export function lampaMegjelenit(lista){
    const ELEM  = $(".tabla");
    for (let index = 0; index < lista.length; index++) {
        ELEM.append(`<div id="lampa"><p>${lista[index]}</p></div>`)
    }
}

function szamGeneral(){
    return Math.floor(Math.random() * 2);
}

function ellenoriz(lista) {

}