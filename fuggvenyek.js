const ADATLISTA= [];


export function lampaMegjelenit(){
    const Elem  = $(".tabla");
    for (let index = 0; index < 8; index++) {
        ADATLISTA[index].append(true);
    }
    console.log(ADATLISTA)
}
