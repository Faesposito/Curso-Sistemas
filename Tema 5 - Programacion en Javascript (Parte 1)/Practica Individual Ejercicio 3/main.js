let paragraph =
    "Mar del Plata es una ciudad ubicada en el sudeste de la provincia de Buenos Aires, Argentina, sobre la costa del mar argentino. Es la cabecera del partido de General Pueyrredón, un importante puerto y balneario y la segunda urbe de turismo más importante del país tras Buenos Aires, ya que en época de verano su población puede aumentar en alrededor de un 300 %, por lo que cuenta con una gran oferta de infraestructura de hoteles. La autovía 2 la enlaza tras 404 km con Buenos Aires y está ubicada a 365 km de La Plata. Fue fundada con su nombre actual el 10 de febrero de 1874 por Patricio Peralta Ramos, en una estancia de su propiedad, sobre la base de la segunda de las tres extintas misiones jesuitas de la Pampa, fundadas en la segunda mitad del siglo XVIII, denominada Nuestra Señora del Pilar de Puelches, que más tarde recibió el nombre de «Puerto de la Laguna de los Padres». Las principales industrias son la pesquera, la turística y la textil. La pesca, actividad principal del puerto, se complementa también con barcos petroleros y cerealeros. La ciudad cuenta también con una base naval de submarinos. Entre la gran variedad de industrias, se destacan también las derivadas de la horticultura, la construcción, la metalúrgica y la mecánica. La ciudad cuenta con un complejo deportivo que fue subsede del Mundial de Fútbol 1978,2​sede de los Juegos Panamericanos de 1995 y donde se jugó la final de la Copa Davis 2008. El Club Atlético Aldosivi y el Club Atlético Alvarado son los equipos de fútbol más populares que representan a la ciudad. Además, es conocida por su calidad en el básquetbol, donde el Club Atlético Peñarol y el Club Atlético Quilmes representan a este deporte a nivel nacional.";

function wordsWhitCertainLetters(paragraph) {

    // investigando vi que las Expresiones Regulares son muy utiles para esta clase de tareas, 
    // esta expresion la hice con prueba y error viendo los difentes Metacaracteres y Modificadores
    // pero me parecio la opcion mas rapida para la tarea dada.
    // no se si vamos a ver sobre Expresiones Regulares en el curso, pero me gustaria, por que es 
    // bastante dificil de entender.

    // la informacion la saque de ahi y otras paginas https://www.w3schools.com/jsref/jsref_obj_regexp.asp 

    let words = paragraph.match(/(\b(a|d|n|s)\S+\b)/gi);

    // probe con usar solo sort. pero me las organizaba primero las que tiene mayusculas y despues
    // las minusculas, esto no me gustaba y busque la forma de organizarlas sin que se Case Sensitive

    words.sort(new Intl.Collator('en').compare)

    return words;
}

console.log("Las Palabras que Empiezan con las Letras a,d,n o s son: ",
    wordsWhitCertainLetters(paragraph));