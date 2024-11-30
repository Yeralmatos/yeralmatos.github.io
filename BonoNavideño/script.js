document.getElementById('consultarBtn').addEventListener('click', function() {
    var cedula = document.getElementById('cedulaInput').value;
    var mensaje = document.getElementById('mensaje');
    
    
    if (cedula.length === 10 && /^\d+$/.test(cedula)) {
        mensaje.textContent = 'Usted aplica para el bono de $3,000.00';
    } else {
        mensaje.textContent = 'Por favor, ingrese una cédula de 10 dígitos válida.';
    }
});