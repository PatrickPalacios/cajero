var cuentas = [
  { nombre: "Mali", saldo: 200, password: "mali123" },
  { nombre: "Gera", saldo: 290, password: "gera456" },
  { nombre: "Maui", saldo: 67, password: "maui789" }
];

var cuentaSeleccionada;
var password;

function ingresar() {
  var dropdown = document.getElementById("cuentasDropdown");
  cuentaSeleccionada = parseInt(dropdown.value);
  password = document.getElementById("passwordInput").value;

  // Validar contraseña
  if (password === cuentas[cuentaSeleccionada].password) {    
    document.getElementById("operaciones").style.display = "block";    
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

function consultarSaldo() {
  var saldo = cuentas[cuentaSeleccionada].saldo;
  mostrarResultado(`Saldo actual: $${saldo}`);
}

function ingresarMonto() {
  var monto = prompt("Ingrese el monto a ingresar:");
  monto = parseFloat(monto);

  if (isNaN(monto) || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  cuentas[cuentaSeleccionada].saldo += monto;
  mostrarResultado(`Monto ingresado: $${monto}`, true);
}

function retirarMonto() {
  var monto = prompt("Ingrese el monto a retirar:");
  monto = parseFloat(monto);

  if (isNaN(monto) || monto <= 0 || monto > cuentas[cuentaSeleccionada].saldo - 10 || monto > 990) {
    alert("Monto no válido o excede el límite permitido.");
    return;
  }

  cuentas[cuentaSeleccionada].saldo -= monto;
  mostrarResultado(`Monto retirado: $${monto}`, true);
}

function mostrarResultado(resultado, mostrarSaldo) {
  var resultadosDiv = document.getElementById("resultados");
  var resultadoP = document.getElementById("resultado");
  var saldoP = document.getElementById("saldo");

  resultadosDiv.style.display = "block";
  resultadoP.textContent = resultado;

  if (mostrarSaldo) {
    saldoP.textContent = `Nuevo saldo: $${cuentas[cuentaSeleccionada].saldo}`;
  } else {
    saldoP.textContent = "";
  }
}

  