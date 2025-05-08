const questions = [
  {
    question: "¿Qué es la praxia? ",
    answers: [
      { id: "1", text: "Es la capacidad de reconocer estímulos sensoriales complejos." },
      { id: "2", text: "Es la capacidad para realizar tareas que requieren recordar patrones previamente aprendidos o secuencias de movimientos.", correct: true },
      { id: "3", text: "Es la capacidad para dibujar o construir figuras o formas en dos o tres dimensiones." },
      { id: "4", text: "Es la capacidad de planificar y llevar a cabo tareas secuenciales en un periodo de tiempo determinado." }
    ]
  },
  {
    question: "¿Qué es evocación?",
    answers: [
      { id: "1", text: "Es la orientación hacia un objetivo específico o la conducción a sacar conclusiones reales a partir de la producción de ideas, símbolos y asociaciones. " },
      { id: "2", text: "Capacidad para generalizar, juzgar situaciones reales y actuar con base en valores culturales establecidos." },
      { id: "3", text: "Es un movimiento afectivo que se presenta como la reacción ante estímulos externos o internos." },
      { id: "4", text: "Se refiere al hecho de recuperar o acceder a la información que, en su momento, fue registrada y almacenada. Es traer a la memoria de corto plazo contenidos de la memoria de largo plazo.", correct: true }
    ]
  },
  {
    question: "¿Cómo valora la función sensorial del par craneal VII?",
    answers: [
      { id: "1", text: "Explorar el gusto de cada hemilengua, en sus dos tercios anteriores." , correct: true},
      { id: "2", text: "Exploración de la lengua y si sus dos mitades son iguales y simétricas." },
      { id: "3", text: "Exploración de la contracción inmediata de la pared posterior de la faringe." },
      { id: "4", text: "Exploración del gusto en el tercio posterior de la lengua." }
    ]
  }
,
  {
    question: "¿Qué pruebas hacen parte de la valoración del nervio vestibular?",
    answers: [
      { id: "1", text: "Prueba de la voz cuchicheada, Prueba de Weber. " },
      { id: "2", text: "Prueba de desviación del índice de Barany, Maniobra de Romberg.", correct: true  },
      { id: "3", text: "Prueba de Rinne, Maniobra de Romberg." },
      { id: "4", text: "Prueba de Schwabach, Prueba del tic-tac del reloj."}
    ]
  },
  {
    question: "¿Qué características tiene una actitud o postura de pie normal? ",
    answers: [
      { id: "1", text: "Cabeza hacia delante, tórax plano, abdomen relajado, curvaturas de la espalda exageradas.  " },
      { id: "2", text: "Cabeza ligeramente hacia delante, Tórax ligeramente bajo, curvaturas de la espalda ligeramente aumentadas." },
      { id: "3", text: "Alineación adecuada de las partes del cuerpo. Al estar el paciente frente al enfermero y a una distancia de unos 2 m hay alineación y simetría de los hombros, crestas iliacas y rodillas, que deben estar al mismo nivel, respectivamente. Al estar en posición lateral puede trazarse una línea imaginaria que pase por el lóbulo de la oreja, el hombro, la cadera, el trocánter femoral, el centro de la rodilla y delante del tobillo.", correct: true  },
      { id: "4", text: "Cabeza exageradamente hacia delante, Tórax deprimido, curvaturas de la espalda extremadamente exageradas."}
    ]
  },
  {
    question: "¿Qué partes componen la fase de apoyo en el ciclo de la marcha?  ",
    answers: [
      { id: "1", text: "Balanceo inicial, apoyo medio, balanceo terminal." },
      { id: "2", text: "Apoyo plantar, balanceo inicial, despegue." },
      { id: "3", text: "Contacto del talón, balanceo medio, apoyo terminal." },
      { id: "4", text: "Contacto del talón, apoyo plantar, apoyo medio, apoyo terminal, despegue.", correct: true }
    ]
  },
  {
    question: "¿Cómo se llama la fase de la marcha que se caracteriza por la rápida aceleración del extremo de la pierna inmediatamente después de que los dedos dejan el suelo?",
    answers: [
      { id: "1", text: "Despegue. " },
      { id: "2", text: "Balanceo inicial." , correct: true},
      { id: "3", text: "Contacto del talón." },
      { id: "4", text: "Apoyo plantar." }
    ]
  },
  {
    question: "¿Cómo se llama la capacidad de ejercer movimientos voluntarios rítmicos alternos con grupos musculares funcionalmente opuestos, que se valora con  “prueba de movimientos alternantes rápidos”?",
    answers: [
      { id: "1", text: "Diadococinesia." , correct: true },
      { id: "2", text: "Metria." },
      { id: "3", text: "Ataxia." },
      { id: "4", text: "Apraxia."}
    ]
  },
  {
    question: "¿Cuál es el tipo de sensibilidad que se inicia en los receptores localizados en ligamentos, tendones, músculos y huesos?",
    answers: [
      { id: "1", text: "Sensibilidad superficial. " },
      { id: "2", text: "Sensibilidad profunda." , correct: true},
      { id: "3", text: "Sensibilidad dolorosa." },
      { id: "4", text: "Sensibilidad cortical." }
    ]
  },
    {
    question: "¿Cuál es el concepto para definir la disminución de la sensibilidad al dolor?",
    answers: [
      { id: "1", text: "Algesia." },
      { id: "2", text: "Anestesia." },
      { id: "3", text: "Analgesia." },
      { id: "4", text: "Hipoalgesia.", correct: true }
    ]
  }
];

export default questions;
