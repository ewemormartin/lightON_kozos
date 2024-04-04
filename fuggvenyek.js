export function lampaMegjelenit(){
    const ADATLISTA = [];
    const ELEM  = $(".tabla");
    for (let index = 0; index < 9; index++) {
        ADATLISTA[index] = szamGeneral();
        ELEM.append(`<div id="lampa"><p>${ADATLISTA[index]}</p></div>`)
    }
    
}

function szamGeneral(){
    return Math.floor(Math.random() * 2);
}

