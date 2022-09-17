function obtenerUnaCateActualizar(codigo) {
    const apiObtenerCate = "http://localhost:8094/backen03/agencias/uno/" + codigo;
  
    const miPromesaCate = fetch(apiObtenerCate)
      .then((respuesta) => respuesta.json())
      .then((dato)=>{
          if (dato.hasOwnProperty("codAgencia")) {
              document.getElementById("cod").value=dato.codAgencia;
              document.getElementById("nom").value=dato.nomAgencia;
              document.getElementById("nit").value=dato.nitAgencia;
          } else {
              
          }
      })
      .catch((miError) => console.log(miError));
  }