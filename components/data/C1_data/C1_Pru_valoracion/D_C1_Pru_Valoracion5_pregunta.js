const questions = [
  
   { 
    question: "¿Cuál es el nombre de la prueba de valoración que acaba de realizar el enfermero?",
    answers: [
      { id: "1", text: "Reflejo Plantar."},
      { id: "2", text: "Reflejo Biscipital."  },
      { id: "3", text: "Palpación Percusión." },
      { id: "4", text: "Movilidad Activa." , correct: true}
    ]
  },{ 
    question: "¿Qué se puede asumir con los hallazgos del paciente?",
    answers: [
      { id: "1", text: "Paciente con limitación de movimientos en hemicuerpo derecho (brazo, tronco, cadera, pierna derecha)  " , correct: true},
      { id: "2", text: "El paciente está en la capacidad de desarrollar todos los movimientos en la amplitud y simetría requerida." },
    ]
  }
];

export default questions;