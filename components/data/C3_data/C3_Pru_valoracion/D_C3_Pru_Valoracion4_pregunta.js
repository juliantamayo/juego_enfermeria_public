const questions = [
  
    { 
    question: "¿Cuál es el nombre de la Prueba de valoración que acaba de realizar el enfermero?",
    answers: [
      { id: "1", text: "Percusión del Abdomen" },
      { id: "2", text: "Auscultación del Abdomen" },
      { id: "3", text: "Palpación Superficial"},
      { id: "4", text: "Palpación Profunda", correct: true  }
    ]
  },
  { 
    question: "¿El Paciente A.T. presentó abdomen blando, depresible, no doloroso a la palpación  profunda, no masas palpables.?",
    answers: [
      { id: "1", text: "Incorrecto, Con la maniobra de deslizamiento se evidenció dolor en el paciente" , correct: true},
      { id: "2", text: "Correcto, los hallazgos del paciente A.T. corresponden a hallazgos normales" },
    ]
  }
];

export default questions;