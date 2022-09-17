function obtenerCateListarAdmin() {
    const apiObtenerCate = "http://localhost:8094/backen03/agencias/obtener";
    const miPromesaCate = fetch(apiObtenerCate).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaCate]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        crearFilaCateListarAdmin(datos);
    });
}

function crearFilaCateListarAdmin(arrObjeto) {
    const cantidadRegistros = arrObjeto.length;
    for (let i = 0; i < cantidadRegistros; i++) {
        const codigo = arrObjeto[i].codAgencia;
        const nombre = arrObjeto[i].nomAgencia;
        const nit = arrObjeto[i].nitAgencia;
        

        document.getElementById("tablaCateAdmin").insertRow(-1).innerHTML = "<td>" + codigo + "</td>"
            + "<td>" + nombre + "</td>"
            + "<td>" + nit + "</td>"
            + "<td class='text-center'>"
            + "<a href='javascript:confirmarBorrarCategoria("
            + codigo+");'><i class='fa-solid fa-trash-can check-rojo'></i></a>&nbsp;"
            + "<a href='#cateupdate/"+codigo+"'><i class='fa-solid fa-pen-to-square'></i></a>"
            + "</td>";

    }
}

function confirmarBorrarCategoria(codigo){
    if(window.confirm("¿Seguro quieres eliminar la Agencia?")){
        window.location.replace("#catedelete/"+codigo);
    }
}