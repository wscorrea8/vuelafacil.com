'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'inicio.html', true),
            // Rutas para categorias
            new Route('catelist', 'categorias/catelistar.html'),
            new Route('cateadd', 'categorias/catecrear.html'),
            new Route('cateadmin', 'categorias/cateadmin.html'),
            new Route('catedelete', 'categorias/cateborrar.html'),
            new Route('cateupdate', 'categorias/cateactualizar.html'),

            // Rutas para proveedores, etc...
            new Route('addclient', 'clienteagregar.html'),
            new Route('listclient', 'clientelistar.html'),
            new Route('searchclient', 'clientebuscar.html'),
            new Route('proadmin', 'admin.html'),
            new Route('login', 'acceso.html')
        ]);
    }
    init();
}());
