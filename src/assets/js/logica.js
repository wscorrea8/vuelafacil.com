function logicaNegocio(url, param) {
    switch (url) {
        // Categorias
        // ***************************************************************
        case 'src/componentes/categorias/catelistar.html':
            obtenerCateListar();
            break;
        case 'src/componentes/categorias/cateadmin.html':
            obtenerCateListarAdmin();
            break;
        case 'src/componentes/categorias/cateborrar.html':
            eliminarCate(param);
            break;
        case 'src/componentes/categorias/cateactualizar.html':
            obtenerUnaCateActualizar(param);
            break;

        // Inicio
        // ***************************************************************
        case 'src/componentes/inicio.html':

            break;

        default:
            console.log('Componente no requiere Javascript personalizado');
    }

}


