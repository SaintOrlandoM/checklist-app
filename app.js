function selectArea(area) {
  localStorage.setItem("area", area);
  window.location.href = "linea.html";
}

const area = localStorage.getItem("area");

if (document.getElementById("tituloArea")) {

  if (!area) {
    window.location.href = "index.html";
  }

  document.getElementById("tituloArea").innerText = area;

  const contenedor = document.getElementById("lineas");

  let opciones = [];

  if (area === "Ensamble") {
    opciones = ["ENS3", "ENS12", "ENSXL", "ENS13"];
  } else {
    opciones = ["CTL1", "CONT", "CTL2", "CTL5"];
  }

  opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.innerText = op;
    contenedor.appendChild(btn);
  });
}