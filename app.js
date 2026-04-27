let area = localStorage.getItem("area") || "";
let respuestas = {};

function selectArea(a) {
  localStorage.setItem("area", a);
  window.location.href = "form.html";
}

if (document.getElementById("areaTitle")) {
  document.getElementById("areaTitle").innerText = "Área: " + area;
}

function setAnswer(q, val) {
  respuestas[q] = val;
}

function enviar() {
  let turno = document.getElementById("turno").value;
  let empleado = document.getElementById("empleado").value;
  let obs = document.getElementById("obs").value;

  if (!turno || !empleado) {
    alert("Completa todos los campos");
    return;
  }

  let data = {
    area,
    turno,
    empleado,
    respuestas,
    observaciones: obs,
    fecha: new Date().toLocaleString()
  };

  fetch("https://script.google.com/macros/s/AKfycbwsfsfyFAIfM0tmrIDeIQXWdR5ISth5Rq6sqBvBWpYTz-MntYZWlK4j1qBBJYmrNKet/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    document.getElementById("status").innerText = "✅ Enviado correctamente";
  })
  .catch(() => {
    document.getElementById("status").innerText = "❌ Error al enviar";
  });
}