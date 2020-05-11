const questions = [
  
  { 
    question: "¿Cuál es el nombre de la Prueba de valoración que acaba de realizar el enfermero?",
    answers: [
      { id: "1", text: "Motilidad Extríseca del ojo" },
      { id: "2", text: "Campimetría por Confrontación"},
      { id: "3", text: "Sensibilidad Térmica" },
      { id: "4", text: "Estereognosia", correct: true }
    ]
  },
    { 
    question: "¿Si el Paciente identifica los objetos proporcionados en una sola mano se considera como un hallazgo normal?",
    answers: [
      { id: "1", text: "Si, lo importante es que identifique el objeto que fue puesto en sus manos" },
      { id: "2", text: "No, para considerarlo un hallazgo normal debe identificar los objetos proporcionados en ambas manos." , correct: true},
    ]
  }

];

export default questions;