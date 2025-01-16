const diseases = [
  {
    nombre: "Resfriado común",
    sintomas: "Estornudos, nariz congestionada, fiebre leve.",
    tratamiento: "Descanso, líquidos calientes, medicinas si lo recomienda un médico."
  },
  {
    nombre: "Gripe",
    sintomas: "Fiebre alta, dolor muscular, tos.",
    tratamiento: "Descanso, analgésicos, hidratación constante."
  },
  {
    nombre: "Amigdalitis",
    sintomas: "Dolor de garganta, fiebre, dificultad para tragar.",
    tratamiento: "Antibióticos (si es bacteriana), analgésicos, líquidos tibios."
  },
  {
    nombre: "Varicela",
    sintomas: "Erupciones cutáneas, fiebre, picazón.",
    tratamiento: "Crema para la picazón, mantener las ampollas limpias, reposo."
  },
  {
    nombre: "Ansiedad",
    sintomas: "Preocupación excesiva, dificultad para concentrarse, sudoración.",
    tratamiento: "Técnicas de relajación, terapia psicológica, apoyo emocional."
  },
  {
    nombre: "Estrés académico",
    sintomas: "Irritabilidad, dificultad para dormir, dolor de cabeza, cansancio.",
    tratamiento: "Organización del tiempo, técnicas de estudio, pausas activas, apoyo emocional."
  }
];

// Función para buscar enfermedades por síntomas
function buscarPorSintomas(sintomas) {
  const sintomasArray = sintomas.toLowerCase().split(',').map(s => s.trim());
  return diseases.filter(enfermedad =>
    sintomasArray.every(sintoma => enfermedad.sintomas.toLowerCase().includes(sintoma))
  );
}

// Renderizar resultados en el DOM
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

// Manejar el evento de búsqueda
document.getElementById("buscarBtn").addEventListener("click", () => {
  const sintomasInput = document.getElementById("sintomasInput").value;
  const resultados = buscarPorSintomas(sintomasInput);
  renderResultados(resultados);
});
