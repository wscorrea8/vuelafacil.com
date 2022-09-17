
function crearCate() {
    const nit = document.getElementById('nit').value;
    const nombre = document.getElementById('nom').value;

    let objetoEnviar = {
        nitAgencia: nit,
        nomAgencia: nombre,
        
    }
    const apiCrearRol = "http://localhost:8094/backen03/agencias/crear";
    fetch(apiCrearRol, {
        method: "POST",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.hasOwnProperty('codAgencia')) {
                console.log(datos)
                document.getElementById("cateMsgOk").style.display = "";
                document.getElementById("cateMsgError").style.display = "none";
            } else {
                console.log("No se puede grabar -> " + datos.status);
                document.getElementById("cateMsgOk").style.display = "none";
                document.getElementById("cateMsgError").style.display = "";
            }

        })
        .catch(miError => console.log(miError));

    document.getElementById("formaCateCrear").reset();
    document.getElementById("formaCateCrear").classList.remove("was-validated");

}
