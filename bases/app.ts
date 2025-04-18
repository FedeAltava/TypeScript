// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

const contar = ( heroes:string ):number => {
  return heroes.length;
}
const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes[3]);

//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
const unirheroes = ( ...personas:string[] ):string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( n:number, f:string, t:boolean, k:[] ):void => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:Function;
noHaceNadaTampoco = noHaceNada;
