const diseases = [
    {
      "nombre": "Resfriado común",
      "descripcion": "El resfriado común es una infección viral leve que afecta las vías respiratorias superiores.",
      "sintomas": "Estornudos, nariz congestionada, fiebre leve.",
      "tratamiento": "Descanso, líquidos calientes, medicinas si lo recomienda un médico."
    },
    {
      "nombre": "Gripe",
      "descripcion": "La gripe es una infección viral más grave que puede afectar a todo el cuerpo, especialmente el sistema respiratorio.",
      "sintomas": "Fiebre alta, dolor muscular, tos.",
      "tratamiento": "Descanso, analgésicos, hidratación constante."
    },
    {
      "nombre": "Amigdalitis",
      "descripcion": "La amigdalitis es una inflamación de las amígdalas, generalmente causada por infecciones virales o bacterianas.",
      "sintomas": "Dolor de garganta, fiebre, dificultad para tragar.",
      "tratamiento": "Antibióticos (si es bacteriana), analgésicos, líquidos tibios."
    },
    {
      "nombre": "Varicela",
      "descripcion": "La varicela es una enfermedad infecciosa que causa erupciones cutáneas con picazón y fiebre.",
      "sintomas": "Erupciones cutáneas, fiebre, picazón.",
      "tratamiento": "Crema para la picazón, mantener las ampollas limpias, reposo."
    },
    {
      "nombre": "Sarampión",
      "descripcion": "El sarampión es una enfermedad viral altamente contagiosa que afecta el sistema respiratorio.",
      "sintomas": "Fiebre, erupción cutánea, conjuntivitis.",
      "tratamiento": "Reposo, líquidos, vacunación para prevenir."
    },
    {
      "nombre": "Ansiedad",
      "descripcion": "La ansiedad es una reacción emocional frente a situaciones estresantes, que puede incluir síntomas físicos y psicológicos.",
      "sintomas": "Preocupación excesiva, dificultad para concentrarse, sudoración.",
      "tratamiento": "Técnicas de relajación, terapia psicológica, apoyo emocional."
    },
    {
      "nombre": "Estrés académico",
      "descripcion": "El estrés académico es el resultado de la presión o exceso de trabajo escolar que genera ansiedad y fatiga.",
      "sintomas": "Irritabilidad, dificultad para dormir, dolor de cabeza, cansancio.",
      "tratamiento": "Organización del tiempo, técnicas de estudio, pausas activas, apoyo emocional."
    },
    {
      "nombre": "Gastroenteritis",
      "descripcion": "La gastroenteritis es una inflamación del tracto gastrointestinal, generalmente causada por infecciones virales o bacterianas.",
      "sintomas": "Diarrea, vómitos, dolor abdominal.",
      "tratamiento": "Hidratación constante, dieta blanda, consulta médica si persiste."
    },
    {
      "nombre": "Parásitos intestinales",
      "descripcion": "Los parásitos intestinales son organismos que infectan el sistema digestivo, a menudo transmitidos por alimentos contaminados.",
      "sintomas": "Dolor abdominal, pérdida de peso, picazón en la zona anal.",
      "tratamiento": "Medicamentos antiparasitarios, higiene adecuada, lavado de manos frecuente."
    },
    {
      "nombre": "Conjuntivitis",
      "descripcion": "La conjuntivitis es la inflamación de la membrana que recubre el ojo, que puede ser causada por virus, bacterias o alergias.",
      "sintomas": "Ojos rojos, picazón, secreción acuosa o purulenta.",
      "tratamiento": "Compresas frías, gotas oftálmicas, higiene ocular."
    },
    {
      "nombre": "Otitis media",
      "descripcion": "La otitis media es una infección del oído medio, común en niños, que puede ser provocada por bacterias o virus.",
      "sintomas": "Dolor de oído, fiebre, pérdida temporal de la audición.",
      "tratamiento": "Analgésicos, antibióticos si es bacteriana, compresas tibias."
    },
    {
      "nombre": "Piojos",
      "descripcion": "Los piojos son parásitos que viven en el cuero cabelludo y causan picazón e irritación.",
      "sintomas": "Picazón en el cuero cabelludo, irritación, presencia de liendres.",
      "tratamiento": "Shampoo antipiojos, eliminación manual de liendres, higiene personal."
    },
    {
      "nombre": "Dermatitis atópica",
      "descripcion": "La dermatitis atópica es una afección crónica de la piel que causa enrojecimiento, picazón y sequedad.",
      "sintomas": "Piel seca, enrojecimiento, picazón.",
      "tratamiento": "Hidratación de la piel, cremas específicas, evitar irritantes."
    },
    {
      "nombre": "Bronquitis",
      "descripcion": "La bronquitis es la inflamación de los bronquios, generalmente causada por infecciones virales o bacterianas.",
      "sintomas": "Tos persistente, dificultad para respirar, fatiga.",
      "tratamiento": "Hidratación, medicamentos para la tos, evitar irritantes como humo."
    },
    {
      "nombre": "Faringitis",
      "descripcion": "La faringitis es una inflamación de la garganta, que puede ser causada por infecciones virales o bacterianas.",
      "sintomas": "Dolor de garganta, fiebre, inflamación en las amígdalas.",
      "tratamiento": "Analgesia, hidratación, antibióticos si es bacteriana."
    },
    {
      "nombre": "Alergias estacionales",
      "descripcion": "Las alergias estacionales son reacciones alérgicas causadas por cambios en el clima o la polinización.",
      "sintomas": "Estornudos, picazón en los ojos, congestión nasal.",
      "tratamiento": "Antihistamínicos, evitar alérgenos, lavado nasal."
    },
    {
      "nombre": "Hepatitis A",
      "descripcion": "La hepatitis A es una infección viral que afecta al hígado y se transmite principalmente por agua o alimentos contaminados.",
      "sintomas": "Ictericia, fatiga, fiebre, dolor abdominal.",
      "tratamiento": "Reposo, hidratación, alimentación ligera."
    },
    {
      "nombre": "Tos ferina",
      "descripcion": "La tos ferina es una enfermedad respiratoria altamente contagiosa, caracterizada por episodios de tos intensa.",
      "sintomas": "Tos intensa, dificultad para respirar, fatiga.",
      "tratamiento": "Antibióticos, reposo, vacunación para prevenir."
    },
    {
      "nombre": "Difteria",
      "descripcion": "La difteria es una infección bacteriana grave que afecta las vías respiratorias superiores.",
      "sintomas": "Dolor de garganta, fiebre, dificultad para respirar.",
      "tratamiento": "Antitoxinas, antibióticos, aislamiento para evitar contagios."
    },
    {
      "nombre": "Escarlatina",
      "descripcion": "La escarlatina es una enfermedad infecciosa provocada por una bacteria que causa fiebre y erupciones rojas.",
      "sintomas": "Fiebre alta, erupción roja en el cuerpo, inflamación de las amígdalas.",
      "tratamiento": "Antibióticos, hidratación, control de síntomas."
    },
    {
      "nombre": "Obesidad infantil",
      "descripcion": "La obesidad infantil es un trastorno en el cual los niños tienen un exceso de peso, lo que puede generar problemas de salud a largo plazo.",
      "sintomas": "Aumento de peso excesivo para la edad, dificultad para realizar actividad física.",
      "tratamiento": "Alimentación balanceada, actividad física regular, apoyo psicológico si es necesario."
    },
    {
      "nombre": "Asma",
      "descripcion": "El asma es una enfermedad respiratoria crónica que causa dificultad para respirar debido a la inflamación de las vías respiratorias.",
      "sintomas": "Dificultad para respirar, silbidos en el pecho, tos nocturna.",
      "tratamiento": "Uso de inhaladores, evitar alérgenos, manejo médico."
    },
    {
      "nombre": "Caries dental",
      "descripcion": "La caries dental es la destrucción del esmalte dental causada por bacterias que producen ácidos.",
      "sintomas": "Dolor en los dientes, sensibilidad al comer, manchas en el esmalte.",
      "tratamiento": "Visita al dentista, empastes, higiene bucal adecuada."
    },
    {
      "nombre": "Herpangina",
      "descripcion": "La herpangina es una infección viral que causa llagas en la garganta, generalmente en niños pequeños.",
      "sintomas": "Ampollas en la garganta, fiebre, dolor al tragar.",
      "tratamiento": "Hidratación, analgésicos, reposo."
    }
  ];

function buscarPorSintomas(sintomas) {
  const sintomasArray = sintomas.toLowerCase().split(',').map(s => s.trim());
  return diseases.filter(enfermedad =>
    sintomasArray.every(sintoma => enfermedad.sintomas.toLowerCase().includes(sintoma))
  );
}

function renderResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados previos

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = `<p class="text-danger text-center">No se encontraron enfermedades que coincidan con los síntomas ingresados.</p>`;
    return;
  }

  resultados.forEach(enfermedad => {
    const card = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title text-success">${enfermedad.nombre}</h5>
          <p class="card-text"><strong>Síntomas:</strong> ${enfermedad.sintomas}</p>
          <p class="card-text"><strong>Tratamiento:</strong> ${enfermedad.tratamiento}</p>
        </div>
      </div>
    `;
    resultadosDiv.innerHTML += card;
  });
}

document.getElementById("buscarBtn").addEventListener("click", () => {
  const sintomasInput = document.getElementById("sintomasInput").value;
  const resultados = buscarPorSintomas(sintomasInput);
  renderResultados(resultados);
});
