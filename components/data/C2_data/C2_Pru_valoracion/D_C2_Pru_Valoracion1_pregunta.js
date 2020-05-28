const questions = [
  
  { 
    question: "¿Cuál es el nombre de la prueba de valoración que acaba de realizar el enfermero?",
    answers: [
      { id: "1", text: "Estereognosia." },
      { id: "2", text: "Campimetría por Confrontación." },
      { id: "3", text: "Discriminación de dos puntos." },
      { id: "4", text: "Frascos con sustancias de olores conocidos." , correct: true}
    ]
  },
    { 
    question: "¿Qué se puede asumir con los hallazgos del paciente?",
    answers: [
      { id: "1", text: "El paciente identifica los diferentes olores.", correct: true },
      { id: "2", text: "El paciente es incapaz de identificar los diferentes olores." },
    ]
  },
      { 
    question: "¿El enfermero podría usar amoniaco, vinagre o fórmol cómo sustancia para que olfatee el paciente?",
    answers: [
      { id: "1", text: " Si, ya que esta sustancia no afecta las terminaciones sensitivas del V par." },
      { id: "2", text: " No ya que esta sustancia irritaría las terminaciones sensitivas del I par." },
      { id: "3", text: " No ya que esta sustancia irritaría las terminaciones sensitivas del IV par." },
      { id: "4", text: " No ya que esta sustancia irritaría las terminaciones sensitivas del V par.", correct: true }
    
    ]
  }

];

export default questions;