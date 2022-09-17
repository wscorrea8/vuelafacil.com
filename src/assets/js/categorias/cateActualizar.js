
function actualizarCate() {
    const codigo = document.getElementById('cod').value;
    const nombre = document.getElementById('nom').value;
    const nit = document.getElementById('nit').value;

    let objetoEnviar = {
        codAgencia: codigo,
        nomAgencia: nombre,
        nitAgencia: nit

    }
    const apiCrearRol = "http://localhost:8094/backen03/agencias/editar/";
    fetch(apiCrearRol, {
        method: "PUT",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.error==('Accepted')) {
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

}
