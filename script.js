'use strict';


// ------------------------------- Banners -------------------------------

class Banner {
    constructor(idProducto = '', imagen = '', nombre = ''){
        this.idProducto = idProducto;
        this.imagen = imagen;
        // this.idBanner = idBanner;
        this.nombre = nombre;
    }
}

let banner1 = new Banner('accion-1', 'banner1.png', 'banner-1');
let banner2 = new Banner('aventura-1', 'banner2.png', 'banner-2');
let banner3 = new Banner('terror-1', 'banner3.png', 'banner-3');

let banners = [ banner1, banner2, banner3];

const mostrarBanner = (idBanner) => {

        let bannerCategoria = banners[idBanner];

        let imgBanner = document.createElement('img');
        imgBanner.setAttribute('src', './img/banners/' +bannerCategoria.imagen+'' );
        imgBanner.setAttribute('alt', bannerCategoria.nombre);
        imgBanner.setAttribute('id', bannerCategoria.idProducto);

        let contenedorDeBanner = document.getElementById('contenedorBanner');
        contenedorDeBanner.append(imgBanner);

        actualizarBanners();
        tiempoBanner = 10;
        actualizarContador();
    // } 
}

const quitarBanner = () => {

    tiempoBanner = 0;

    let contenedorDeBanner = document.getElementById('contenedorBanner');
    contenedorDeBanner.replaceChildren();
}

var tiempoBanner = 10;

const actualizarContador = () => {

    // let contadorDeTiempo = document.getElementById('contadorTiempo');
    // contadorDeTiempo.innerHTML = tiempoBanner;

    if(tiempoBanner != 0){
        tiempoBanner -= 1;
        setTimeout(actualizarContador, 1000);
    } else {
        // contadorTiempo.innerHTML = '';
        quitarBanner();
    }
}

// ------------------------------- Body -------------------------------

// Productos

class Producto {
    constructor(idProducto = '', imagen1 = '', imagen2 = '', imagen3 = '', nombre = '', categoria = '', idCategoria = '', descripcion = '', precio = 0){
        this.idProducto = idProducto;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.nombre = nombre;
        this.categoria = categoria;
        this.idCategoria = idCategoria;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

let producto1 = new Producto('accion-1', 'blasphemous-0.png', 'blasphemous-1.jpg', 'blasphemous-2.jpg', 'Blasphemous', 'Acción', 'accion', 'Blasphemous es un juego de acción y plataformas sin piedad, con elementos de combate hack-n-slash, ambientado en el retorcido mundo de Cvstodia.', 800);
let producto2 = new Producto('terror-1', 'dredge-0.png', 'dredge-1.jpg', 'dredge-2.jpg', 'Dredge', 'Terror', 'terror', 'DREDGE es una aventura de pesca para un solo jugador con una siniestra corriente subyacente. Vende lo que pescas, mejora tu barca y ahonda en las profundidades para encontrar antiguos tesoros enterrados.', 1600);
let producto3 = new Producto('aventura-1', 'hollow-knight-0.png', 'hollow-knight-1.jpg', 'hollow-knight-2.jpg', 'Hollow Knight', 'Aventura', 'aventura', '¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas.', 900);
let producto4 = new Producto('accion-2', 'hyper-light-drifter-0.png', 'hyper-light-drifter-1.jpg', 'hyper-light-drifter-2.jpg', 'Hyper Light Drifter', 'Acción', 'accion', 'Los ecos de un pasado oscuro y violento resuenan en una tierra salvaje repleta de tesoros y sangre. Hyper Light Drifter es un RPG de aventura y acción que emula a los mejores clásicos de 16 bits.', 600);
let producto5 = new Producto('terror-2', 'signalis-0.png', 'signalis-1.jpg', 'signalis-2.jpg', 'Siganlis', 'Terror', 'terror', 'Una experiencia clásica de terror y supervivencia ambientada en un futuro distópico donde la humanidad ha descubierto un oscuro secreto. Desentraña un misterio cósmico y escapa de criaturas aterradoras.', 1100);
let producto6 = new Producto('aventura-2', 'tunic-0.png', 'tunic-1.jpg', 'tunic-2.jpg', 'Tunic', 'Aventura', 'aventura', 'Explora un reino plagado de leyendas olvidadas, poderes ancestrales y feroces monstruos en TUNIC, un juego de acción isométrico sobre un pequeño zorro que emprende una gran aventura.', 600);

let productos = [ producto1, producto2, producto3, producto4, producto5, producto6];

let contenido = document.getElementById('contenido');

// Filtrar Productos

const actualizarBotonesNav = () => {

    let botonesNav = document.querySelectorAll(".nav_link");

    botonesNav.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            let categoriaBoton = e.currentTarget.id;

            botonesNav.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            quitarBanner();
            let numeroRandom = Math.floor(Math.random() * banners.length);
            mostrarBanner(numeroRandom);
            if(categoriaBoton != "todos") {
                const productosCategoria = productos.filter(producto => producto.idCategoria === categoriaBoton);
                mostrarLista(productosCategoria);
            } else {
                mostrarTodos();
            }
        })
    })
}

// Elementos en Carrito

let productosCarrito = [];

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

let contadorCarrito = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);;
let acumuladorCarrito =  productosCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);;

// Cargar Header

const cargarHeader = () => {

    let header = document.createElement('header');
    header.setAttribute('class', 'bg' );
    contenido.append(header);

    let nav = document.createElement('nav');
    nav.setAttribute('class', 'contenedor row navBar' );

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Videojuegos';
    nav.append(h1);

    let listaNavegacion = document.createElement('ul');

    let navElem1 = document.createElement('li');
    navElem1.setAttribute('class', 'nav_item' );
    let linkElem1 = document.createElement('a');
    linkElem1.setAttribute('id', 'todos' );
    linkElem1.setAttribute('class', 'nav_link navegacion active' );
    linkElem1.setAttribute('href', '#' );
    linkElem1.innerHTML = 'Todos';
    navElem1.append(linkElem1);

    let navElem2 = document.createElement('li');
    navElem2.setAttribute('class', 'nav_item' );
    let linkElem2 = document.createElement('a');
    linkElem2.setAttribute('id', 'terror' );
    linkElem2.setAttribute('class', 'nav_link navegacion' );
    linkElem2.setAttribute('href', '#' );
    linkElem2.innerHTML = 'Terror';
    navElem2.append(linkElem2);

    let navElem3 = document.createElement('li');
    navElem3.setAttribute('class', 'nav_item' );
    let linkElem3 = document.createElement('a');
    linkElem3.setAttribute('id', 'accion' );
    linkElem3.setAttribute('class', 'nav_link navegacion' );
    linkElem3.setAttribute('href', '#' );
    linkElem3.innerHTML = 'Accion';
    navElem3.append(linkElem3);

    let navElem4 = document.createElement('li');
    navElem4.setAttribute('class', 'nav_item' );
    let linkElem4 = document.createElement('a');
    linkElem4.setAttribute('id', 'aventura' );
    linkElem4.setAttribute('class', 'nav_link navegacion' );
    linkElem4.setAttribute('href', '#' );
    linkElem4.innerHTML = 'Aventura';
    navElem4.append(linkElem4);

    listaNavegacion.setAttribute('class', 'row' );

    listaNavegacion.append(navElem1);
    listaNavegacion.append(navElem2);
    listaNavegacion.append(navElem3);
    listaNavegacion.append(navElem4);



    let navCarrito = document.createElement('ul');
    let navElem5 = document.createElement('li');
    navElem5.setAttribute('class', 'nav_item' );
    let botonElem5 = document.createElement('button');
    botonElem5.setAttribute('class', 'boton-carrito' );
    botonElem5.innerHTML = 'Carrito ';

    let cantidadBoton = document.createElement('span');
    cantidadBoton.innerHTML = contadorCarrito;
    cantidadBoton.setAttribute('id', 'cantidadCarrito' );

    let precioBotonCarrito = document.createElement('span');
    precioBotonCarrito.innerHTML = '$';
    let precioBoton = document.createElement('span');
    precioBoton.innerHTML = acumuladorCarrito;
    precioBoton.setAttribute('id', 'precioCarrito' );
    precioBotonCarrito.append(precioBoton);

    botonElem5.setAttribute('onclick', 'abrirCarrito();' );

    botonElem5.append(cantidadBoton);
    botonElem5.append(precioBotonCarrito);
    navElem5.append(botonElem5);

    navCarrito.append(navElem5);

    nav.append(listaNavegacion);
    nav.append(navCarrito);
    header.append(nav);

    actualizarBotonesNav();
    // actualizarCarrito();
}

// Main

const cargarMain = () => {

    let principal = document.createElement('main');
    principal.setAttribute('class', 'contenedor' );
    principal.setAttribute('id', 'contenedorPrincipal' );
    contenido.append(principal);


    // let contadorTiempo = document.createElement('span');
    // contadorTiempo.setAttribute('id', 'contadorTiempo' );
    // principal.append(contadorTiempo);


    let contenedorBanner = document.createElement('div');
    contenedorBanner.setAttribute('id', 'contenedorBanner' );
    principal.append(contenedorBanner);

    let listaGrilla = document.createElement('ul');
    listaGrilla.setAttribute('class', 'grilla' );
    listaGrilla.setAttribute('id', 'grilla' );
    principal.append(listaGrilla);

}

// ------------------------------- Grilla de Productos -------------------------------

let botonesAgregar = [];

const resetElementosCarritos = () => {

    contadorCarrito = 0;
    acumuladorCarrito = 0;
    productosCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));

}

// Mostrar Productos

const mostrarLista = (lista) => {

    let listaDeGrilla = document.getElementById('grilla');
    listaDeGrilla.replaceChildren();

    lista.forEach((producto) => {

        let li = document.createElement('li');
        li.setAttribute('class', 'card' );

        let img = document.createElement('img');
        img.setAttribute('src', './img/miniaturas/' +producto.imagen1+'' );
        img.setAttribute('alt', producto.nombre);
        li.append(img);

        let textoCard = document.createElement('div');
        textoCard.setAttribute('class', 'texto-card' );

        let nombre = document.createElement('h2');
        nombre.innerHTML = producto.nombre;
        nombre.setAttribute('class', 'row titulo-detalle');
        textoCard.append(nombre);

        let categoria = document.createElement('p');
        categoria.innerHTML = 'Categoría: ' + producto.categoria;
        categoria.setAttribute('class', 'row elem-detalle');
        textoCard.append(categoria);

        let precio = document.createElement('p');
        let textoPrecio = document.createElement('p');
        textoPrecio.innerHTML = 'Precio: $';
        precio.append(textoPrecio);
        let valorPrecio = document.createElement('p');
        valorPrecio.innerHTML = producto.precio;
        precio.append(valorPrecio);
        precio.setAttribute('class', 'row elem-detalle');
        textoCard.append(precio);

        let descripcion = document.createElement('p');
        descripcion.innerHTML = 'Descripcion: ' + producto.descripcion;
        descripcion.setAttribute('class', 'texto-card-descripcion');
        textoCard.append(descripcion);

        li.append(textoCard)

        let agregar = document.createElement('button');
        agregar.innerHTML = 'Agregar al carrito';
        agregar.setAttribute('id', producto.idProducto);
        agregar.setAttribute('class', 'boton producto-agregar');

        let detalles = document.createElement('button');
        detalles.innerHTML = 'Detalles';
        detalles.setAttribute('id', producto.idProducto);
        detalles.setAttribute('class', 'boton producto-detalle');

        let contenedorBotones = document.createElement('div');
        contenedorBotones.setAttribute('class', 'buttons-card');
        contenedorBotones.append(detalles);
        contenedorBotones.append(agregar);
        li.append(contenedorBotones);

        listaDeGrilla.append(li);
    })

    actualizarBotonesDetalles();
    actualizarBotonesAgregar();
}

const mostrarTodos = () => {
    mostrarLista(productos);
}

// ------------------------------- Modals -------------------------------  

const cargarModals = () => {

    cagarModalCarrito();
    cagarModalCheckout();
    cagarModalDetalles();
}

//  Modal Carrito

const cagarModalCarrito = () => {

    let contenedorPrincipal = document.getElementById('contenedorPrincipal');

    let ventanaCarrito = document.createElement('section');
    ventanaCarrito.setAttribute('class', 'modal');
    ventanaCarrito.setAttribute('id', 'ventanaCarrito');
    let cardCarrito = document.createElement('div');
    cardCarrito.setAttribute('class', 'modal-container');
    ventanaCarrito.append(cardCarrito);
    contenedorPrincipal.append(ventanaCarrito);


    let tituloCarrito = document.createElement('h2');
    tituloCarrito.innerHTML = 'Carrito de compras';

    let botonCarritoX = document.createElement('button');
    botonCarritoX.innerHTML = 'X';
    botonCarritoX.setAttribute('onclick', 'cerrarCarrito();');
    botonCarritoX.setAttribute('class', 'botonX');

    let encabezadoCarrito = document.createElement('div');
    encabezadoCarrito.append(tituloCarrito);
    encabezadoCarrito.append(botonCarritoX);
    encabezadoCarrito.setAttribute('class', 'encabezado-ventana');

    let contenidoCarrito = document.createElement('div');
    contenidoCarrito.setAttribute('class', 'cont-carrito');
    contenidoCarrito.setAttribute('id', 'contenidoCarrito');

    let totalElementosCarrito = document.createElement('div');
    totalElementosCarrito.innerHTML = 'Cantidad elementos: ';
    let valorElementosCarrito = document.createElement('span');
    valorElementosCarrito.setAttribute('id', 'valorElementosCarrito');
    valorElementosCarrito.innerHTML = contadorCarrito;
    let elementoTotalCarrito = document.createElement('div');
    elementoTotalCarrito.setAttribute('class', 'row elem-detalle total-carrito');
    elementoTotalCarrito.append(totalElementosCarrito);
    elementoTotalCarrito.append(valorElementosCarrito);

    let totalPrecioCarrito = document.createElement('div');
    totalPrecioCarrito.innerHTML = 'Precio Total: $';
    let valorPrecioCarrito = document.createElement('span');
    valorPrecioCarrito.setAttribute('id', 'valorPrecioCarrito');
    valorPrecioCarrito.innerHTML = acumuladorCarrito;
    let elementoPrecioCarrito = document.createElement('div');
    elementoPrecioCarrito.setAttribute('class', 'row elem-detalle total-carrito');
    elementoPrecioCarrito.append(totalPrecioCarrito);
    elementoPrecioCarrito.append(valorPrecioCarrito);

    let botonVaciar = document.createElement('button');
    botonVaciar.innerHTML = 'Vaciar carrito';
    botonVaciar.setAttribute('onclick', 'vaciarCarrito();');
    botonVaciar.setAttribute('class', 'botonVaciar');

    let botonCarrito = document.createElement('button');
    botonCarrito.innerHTML = 'Seguir comprando';
    botonCarrito.setAttribute('onclick', 'cerrarCarrito();');
    botonCarrito.setAttribute('class', 'botonSeguir');

    let botonCheckout = document.createElement('button');
    botonCheckout.innerHTML = 'Checkout';
    botonCheckout.setAttribute('onclick', 'checkout();');
    botonCheckout.setAttribute('class', 'botonCheckout');

    cardCarrito.append(encabezadoCarrito);
    cardCarrito.append(contenidoCarrito);
    cardCarrito.append(elementoTotalCarrito);
    cardCarrito.append(elementoPrecioCarrito);
    cardCarrito.append(botonVaciar);
    cardCarrito.append(botonCarrito);
    cardCarrito.append(botonCheckout);

}

const abrirCarrito = () => {
    
    let ventanaDeCarrito = document.getElementById('ventanaCarrito');
    ventanaDeCarrito.setAttribute('class', 'modal mostrar-modal');
}

const cerrarCarrito = () => {

    let ventanaDeCarrito = document.getElementById('ventanaCarrito');
    ventanaDeCarrito.setAttribute('class', 'modal');
}

// Modal Checkout

const checkout = () => {
    cerrarCarrito();
    ventanaCheckout.setAttribute('class', 'modal mostrar-modal');
}

const cerrarCheckout = () => {

    let ventanaDeCheckout = document.getElementById('ventanaCheckout');
    ventanaDeCheckout.setAttribute('class', 'modal');
}

const cagarModalCheckout = () => {

    let contenedorPrincipal = document.getElementById('contenedorPrincipal');

    let ventanaCheckout = document.createElement('section');
    ventanaCheckout.setAttribute('class', 'modal');
    ventanaCheckout.setAttribute('id', 'ventanaCheckout');
    let cardCheckout = document.createElement('div');
    cardCheckout.setAttribute('class', 'modal-container');
    ventanaCheckout.append(cardCheckout);
    contenedorPrincipal.append(ventanaCheckout);

    let tituloCheckout = document.createElement('h2');
    tituloCheckout.innerHTML = 'Información Personal';


    let botonCarritoX = document.createElement('button');
    botonCarritoX.innerHTML = 'X';
    botonCarritoX.setAttribute('onclick', 'cerrarCheckout();');
    botonCarritoX.setAttribute('class', 'botonX');

    let encabezadoCheckout = document.createElement('div');
    encabezadoCheckout.append(tituloCheckout);
    encabezadoCheckout.append(botonCarritoX);
    encabezadoCheckout.setAttribute('class', 'encabezado-ventana');



    
    let formulario = document.createElement('form');
    formulario.setAttribute('class', 'form');
    formulario.setAttribute('id', 'form');
    formulario.setAttribute('method', 'post');
    formulario.setAttribute('name', 'miForm');
    formulario.setAttribute('action', '#');

    let grupoNombre = document.createElement('div');
    grupoNombre.setAttribute('class', 'form-group');
    let labelNombre = document.createElement('label');
    labelNombre.setAttribute('for', 'input-nombre');
    labelNombre.setAttribute('class', 'label');
    labelNombre.innerHTML = 'Nombre*';
    let inputNombre = document.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('class', 'input');
    inputNombre.setAttribute('id', 'input-nombre');
    inputNombre.setAttribute('name', 'input-nombre');
    inputNombre.setAttribute('placeholder', 'Nombre');
    inputNombre.setAttribute('required', '');
    grupoNombre.append(labelNombre);
    grupoNombre.append(inputNombre);
    formulario.append(grupoNombre);

    let grupoApellido = document.createElement('div');
    grupoApellido.setAttribute('class', 'form-group');
    let labelApellido = document.createElement('label');
    labelApellido.setAttribute('for', 'input-apellido');
    labelApellido.setAttribute('class', 'label');
    labelApellido.innerHTML = 'Apellido*';
    let inputApellido = document.createElement('input');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('class', 'input');
    inputApellido.setAttribute('id', 'input-apellido');
    inputApellido.setAttribute('name', 'input-apellido');
    inputApellido.setAttribute('placeholder', 'Apellido');
    inputApellido.setAttribute('required', '');
    grupoApellido.append(labelApellido);
    grupoApellido.append(inputApellido);
    formulario.append(grupoApellido);

    let grupoMail = document.createElement('div');
    grupoMail.setAttribute('class', 'form-group');
    let labelMail = document.createElement('label');
    labelMail.setAttribute('for', 'input-mail');
    labelMail.setAttribute('class', 'label');
    labelMail.innerHTML = 'Mail*';
    let inputMail = document.createElement('input');
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('class', 'input');
    inputMail.setAttribute('id', 'input-mail');
    inputMail.setAttribute('name', 'input-mail');
    inputMail.setAttribute('placeholder', 'Mail');
    inputMail.setAttribute('required', '');
    grupoMail.append(labelMail);
    grupoMail.append(inputMail);
    formulario.append(grupoMail);

    let grupoTelefono = document.createElement('div');
    grupoTelefono.setAttribute('class', 'form-group');
    let labelTelefono = document.createElement('label');
    labelTelefono.setAttribute('for', 'input-telefono');
    labelTelefono.setAttribute('class', 'label');
    labelTelefono.innerHTML = 'Telefono*';
    let inputTelefono = document.createElement('input');
    inputTelefono.setAttribute('type', 'text');
    inputTelefono.setAttribute('class', 'input');
    inputTelefono.setAttribute('id', 'input-telefono');
    inputTelefono.setAttribute('name', 'input-telefono');
    inputTelefono.setAttribute('placeholder', 'Teléfono');
    inputTelefono.setAttribute('required', '');
    grupoTelefono.append(labelTelefono);
    grupoTelefono.append(inputTelefono);
    formulario.append(grupoTelefono);

    let grupoTitular = document.createElement('div');
    grupoTitular.setAttribute('class', 'form-group');
    let labelTitular = document.createElement('label');
    labelTitular.setAttribute('for', 'input-titular');
    labelTitular.setAttribute('class', 'label');
    labelTitular.innerHTML = 'Nombre Titular Tarjeta';
    let inputTitular = document.createElement('input');
    inputTitular.setAttribute('type', 'text');
    inputTitular.setAttribute('class', 'input');
    inputTitular.setAttribute('id', 'input-titular');
    inputTitular.setAttribute('placeholder', 'Titular');
    inputTitular.setAttribute('name', 'input-titular');
    inputTitular.setAttribute('required', '');
    grupoTitular.append(labelTitular);
    grupoTitular.append(inputTitular);
    formulario.append(grupoTitular);

    let grupoNumero = document.createElement('div');
    grupoNumero.setAttribute('class', 'form-group');
    let labelNumero = document.createElement('label');
    labelNumero.setAttribute('for', 'input-numero');
    labelNumero.setAttribute('class', 'label');
    labelNumero.innerHTML = 'Numero Tarjeta';
    let inputNumero = document.createElement('input');
    inputNumero.setAttribute('type', 'text');
    inputNumero.setAttribute('class', 'input');
    inputNumero.setAttribute('id', 'input-numero');
    inputNumero.setAttribute('placeholder', '0000 0000 0000 0000');
    inputNumero.setAttribute('name', 'input-numero');
    inputNumero.setAttribute('required', '');
    grupoNumero.append(labelNumero);
    grupoNumero.append(inputNumero);
    formulario.append(grupoNumero);

    let grupoFecha = document.createElement('div');
    grupoFecha.setAttribute('class', 'form-group');
    let labelFecha = document.createElement('label');
    labelFecha.setAttribute('for', 'input-mes');
    labelFecha.setAttribute('class', 'label');
    labelFecha.innerHTML = 'Fecha Vencimiento';

    let inputFecha = document.createElement('div');
    inputFecha.setAttribute('class', 'row');
    let inputMes = document.createElement('input');
    inputMes.setAttribute('type', 'text');
    inputMes.setAttribute('class', 'input');
    inputMes.setAttribute('id', 'input-mes');
    inputMes.setAttribute('placeholder', 'MM');
    inputMes.setAttribute('name', 'input-mes');
    inputMes.setAttribute('required', '');
    let inputAnio = document.createElement('input');
    inputAnio.setAttribute('type', 'text');
    inputAnio.setAttribute('class', 'input');
    inputAnio.setAttribute('id', 'input-anio');
    inputAnio.setAttribute('placeholder', 'AA');
    inputAnio.setAttribute('name', 'input-anio');
    inputAnio.setAttribute('required', '');
    inputFecha.append(inputMes);
    inputFecha.append(inputAnio);

    grupoFecha.append(labelFecha);
    grupoFecha.append(inputFecha);
    formulario.append(grupoFecha);

    let grupoCVC = document.createElement('div');
    grupoCVC.setAttribute('class', 'form-group');
    let labelCVC = document.createElement('label');
    labelCVC.setAttribute('for', 'input-cvc');
    labelCVC.setAttribute('class', 'label');
    labelCVC.innerHTML = 'CVC';
    let inputCVC = document.createElement('input');
    inputCVC.setAttribute('type', 'text');
    inputCVC.setAttribute('class', 'input');
    inputCVC.setAttribute('id', 'input-cvc');
    inputCVC.setAttribute('placeholder', '123');
    inputCVC.setAttribute('name', 'input-cvc');
    inputCVC.setAttribute('required', '');
    grupoCVC.append(labelCVC);
    grupoCVC.append(inputCVC);
    formulario.append(grupoCVC);

    let botonFinalizar = document.createElement('button');
    botonFinalizar.innerHTML = 'Finalizar Compra';
    botonFinalizar.setAttribute('onclick', 'finalizarCompra();');
    botonFinalizar.setAttribute('class', 'botonCheckout boton-form-compra');
    botonFinalizar.setAttribute('type', 'submit');

    let botonCerrar = document.createElement('button');
    botonCerrar.innerHTML = 'Seguir comprando';
    botonCerrar.setAttribute('onclick', 'cerrarCheckout();');
    botonCerrar.setAttribute('class', 'botonSeguir boton-form-compra');

    // formulario.append(botonCerrar);
    formulario.append(botonFinalizar);

    cardCheckout.append(encabezadoCheckout);
    cardCheckout.append(formulario);
    cardCheckout.append(botonCerrar);
    // cardCheckout.append(botonFinalizar);
}

// Modal Detalles

const cerrarDetalle = () => {

    let ventanaDeDetalles = document.getElementById('ventanaDetalles');
    ventanaDeDetalles.setAttribute('class', 'modal');
    contenidoDetalles.replaceChildren();
}

const cagarModalDetalles = () => {

    let contenedorPrincipal = document.getElementById('contenedorPrincipal');

    let ventanaDetalles = document.createElement('section');
    ventanaDetalles.setAttribute('id', 'ventanaDetalles');
    let cardDetalles = document.createElement('div');
    cardDetalles.setAttribute('class', 'modal-container');

    let tituloDetalles = document.createElement('h2');
    tituloDetalles.innerHTML = 'Detalles producto';

    let contenidoDetalles = document.createElement('div');
    contenidoDetalles.setAttribute('id', 'contenidoDetalles');

    let cerrarDetalles = document.createElement('button');
    cerrarDetalles.innerHTML = 'Seguir comprando';
    cerrarDetalles.setAttribute('onclick', 'cerrarDetalle();');
    cerrarDetalles.setAttribute('class', 'boton-seguir');

    let cerrarDetalles2 = document.createElement('button');
    cerrarDetalles2.innerHTML = 'X';
    cerrarDetalles2.setAttribute('onclick', 'cerrarDetalle();');
    cerrarDetalles2.setAttribute('class', 'botonX');

    let agregarDetalle = document.createElement('button');
    agregarDetalle.innerHTML = 'Agregar al carrito';
    agregarDetalle.setAttribute('class', 'boton-detalle');

    let botonesDetalle = document.createElement('div');
    botonesDetalle.append(cerrarDetalles);
    botonesDetalle.append(agregarDetalle);
    botonesDetalle.setAttribute('class', 'detalle-botones');

    // let encabezadoVentana = document.createElement('div');
    // encabezadoVentana.append(tituloDetalles);
    // encabezadoVentana.append(cerrarDetalles2);
    // encabezadoVentana.setAttribute('class', 'encabezado-ventana');

    cardDetalles.append(cerrarDetalles2);
    cardDetalles.append(tituloDetalles);
    // cardDetalles.append(encabezadoVentana);
    cardDetalles.append(contenidoDetalles);
    cardDetalles.append(botonesDetalle);
    // cardDetalles.append(cerrarDetalles);
    ventanaDetalles.append(cardDetalles);
    ventanaDetalles.setAttribute('class', 'modal');
    contenedorPrincipal.append(ventanaDetalles);

    actualizarAgregarDetalle();
}

// Inicio

const cargarPagina = () => {

    contenido.replaceChildren();
    resetElementosCarritos();
    cargarHeader();
    cargarMain();
    mostrarTodos();
    cargarModals();    
}

cargarPagina();

// ------------------------------- Carrito -------------------------------

// Actualizar Boton Carrito

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
        let productoBoton = productos.filter(producto => producto.idProducto == idBoton)[0];
        let productoAgregado = { ...productoBoton };

        if(productoEnCarrito(idBoton)){
            const indiceProducto = indiceCarrito(idBoton);
            productosCarrito[indiceProducto].cantidad++;
            actualizarCarrito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
        } else {
            productoAgregado.cantidad = 1;
            productosCarrito.push(productoAgregado);
            actualizarCarrito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
        }
}

function actualizarBotonesAgregar() {

    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
});
}


function actualizarAgregarDetalle() {

    let agregarDetalle = document.getElementsByClassName("boton-detalle")[0];

    agregarDetalle.addEventListener("click", agregarAlCarrito);
} 

const agregarProducto = (e) => {

    const idBoton = e.currentTarget.id;
        let productoBoton = productos.filter(producto => producto.idProducto == idBoton)[0];
        let productoAgregado = { ...productoBoton };

        if(productoEnCarrito(idBoton)){
            const indiceProducto = indiceCarrito(idBoton);
            productosCarrito[indiceProducto].cantidad++;
            actualizarCarrito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
        } else {
            productoAgregado.cantidad = 1;
            productosCarrito.push(productoAgregado);
            actualizarCarrito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
        }
}

const productoEnCarrito = (id) => {
    for (let i=0; i < productosCarrito.length; i++) {
        if (productosCarrito[i].idProducto == id) {
            return true;
        }
    }
    return false;
}

const indiceCarrito = (id) => {
    for (let i=0; i < productosCarrito.length; i++) {
        if (productosCarrito[i].idProducto == id) {
            return i;
        }
    }
}

function actualizarCantidad() {

    let cantidadCarrito = document.getElementById('cantidadCarrito');

    let nuevaCantidad = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadCarrito.innerText = nuevaCantidad;
    contadorCarrito = nuevaCantidad;
    actualizarCantidadCarrito();
}

function actualizarPrecio() {

    let precioCarrito = document.getElementById('precioCarrito');

    let nuevoPrecio = productosCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
    precioCarrito.innerText = nuevoPrecio;
    acumuladorCarrito = nuevoPrecio;
    actualizarPrecioCarrito();
}

function actualizarCarrito() {

    actualizarCantidad();
    actualizarPrecio();
    actualizarContenidoCarrito();

}

// Eliminar Producto Carrito

function actualizarBotonesEliminar() {

    let botonesEliminar = document.querySelectorAll(".producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
        const idBoton = e.currentTarget.id;
        let indiceProducto = indiceCarrito(idBoton);

        productosCarrito.splice(indiceProducto, 1);
        actualizarCarrito();
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    });
});
}

// Actualizar Contenido Carrito

function actualizarCantidadCarrito() {

    let valorElementosDeCarrito = document.getElementById('valorElementosCarrito'); 
    valorElementosDeCarrito.innerHTML = contadorCarrito;
}

function actualizarPrecioCarrito() {

    let valorPrecioDeCarrito = document.getElementById('valorPrecioCarrito'); 
    valorPrecioDeCarrito.innerHTML = acumuladorCarrito;
}

function actualizarContenidoCarrito() {

    let contenidoDeCarrito = document.getElementById('contenidoCarrito'); 
    contenidoDeCarrito.replaceChildren();

    productosCarrito.forEach((producto) => {

        let elementoCarrito = document.createElement('div');
        elementoCarrito.setAttribute('class', 'elem-carrito');

        let imagenCarrito = document.createElement('img');
        imagenCarrito.setAttribute('class', 'carrito-producto-imagen');
        imagenCarrito.setAttribute('src', './img/miniaturas/' +producto.imagen1+'' );
        imagenCarrito.setAttribute('alt', producto.nombre);
        elementoCarrito.append(imagenCarrito);

        let productoTitulo = document.createElement('div');
        let encabezadoTitulo = document.createElement('p');
        encabezadoTitulo.innerHTML = 'Título';
        let contenidoTitulo = document.createElement('h3');
        contenidoTitulo.innerHTML = producto.nombre;
        productoTitulo.append(encabezadoTitulo);
        productoTitulo.append(contenidoTitulo);
        elementoCarrito.append(productoTitulo);

        let productoCantidad = document.createElement('div');
        let encabezadoCantidad = document.createElement('p');
        encabezadoCantidad.innerHTML = 'Cantidad';
        let contenidoCantidad = document.createElement('h3');
        contenidoCantidad.innerHTML = producto.cantidad;
        productoCantidad.append(encabezadoCantidad);
        productoCantidad.append(contenidoCantidad);
        elementoCarrito.append(productoCantidad);

        let productoPrecio = document.createElement('div');
        let encabezadoPrecio = document.createElement('p');
        encabezadoPrecio.innerHTML = 'Precio ($)';
        let contenidoPrecio= document.createElement('h3');
        contenidoPrecio.innerHTML = producto.precio;
        productoPrecio.append(encabezadoPrecio);
        productoPrecio.append(contenidoPrecio);
        elementoCarrito.append(productoPrecio);

        let productoSubtotal = document.createElement('div');
        let encabezadoSubtotal = document.createElement('p');
        encabezadoSubtotal.innerHTML = 'Subtotal ($)';
        let contenidoSubtotal = document.createElement('h3');
        contenidoSubtotal.innerHTML = producto.precio * producto.cantidad;
        productoSubtotal.append(encabezadoSubtotal);
        productoSubtotal.append(contenidoSubtotal);
        elementoCarrito.append(productoSubtotal);

        let eliminarProducto = document.createElement('button');
        eliminarProducto.innerHTML = 'Eliminar';
        eliminarProducto.setAttribute('id', producto.idProducto);
        eliminarProducto.setAttribute('class', 'producto-eliminar');
        elementoCarrito.append(eliminarProducto);

        contenidoCarrito.appendChild(elementoCarrito);
    })

    actualizarBotonesEliminar()
}

const vaciarCarrito = () => {

    resetElementosCarritos();
    actualizarCarrito();
}

// Local Storage

if (productosEnCarritoLS) {
    productosCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCarrito();
} else {
    productosCarrito = [];
}

// Checkout


function validarCheckout() {
    let nombForm = document.forms["miForm"]["input-nombre"].value;
    let apellForm = document.forms["miForm"]["input-apellido"].value;
    let telfForm = document.forms["miForm"]["input-telefono"].value; 
    let mailForm = document.forms["miForm"]["input-mail"].value;
    
    let tituForm = document.forms["miForm"]["input-titular"].value;
    let numForm = document.forms["miForm"]["input-numero"].value;
    let mesForm = document.forms["miForm"]["input-mes"].value;
    let anioForm = document.forms["miForm"]["input-anio"].value;
    let cvcForm = document.forms["miForm"]["input-cvc"].value;

    if (nombForm == "" || nombForm == null) {
      return false;
    } else if (apellForm == "" || apellForm == null) {
        return false;
    } else if (telfForm == "" || telfForm == null) {
        return false;
    } else if (mailForm == "" || mailForm == null) {
        return false;
    } else if (tituForm == "" || tituForm == null) {
        return false;
    } else if (numForm == "" || numForm == null) {
        return false;
    } else if (mesForm == "" || mesForm == null) {
        return false;
    } else if (anioForm == "" || anioForm == null) {
        return false;
    } else if (cvcForm == "" || cvcForm == null) {
        return false;
    } else {
        return true;
    }
  }




function finalizarCompra() {

    if(validarCheckout()){
        contenido.replaceChildren();
        let mensaje = document.createElement('div');
        let tituloMensaje = document.createElement('h2');
        tituloMensaje.innerHTML = 'Felicidades, la compra ha sido realizada con éxito.';
        mensaje.append(tituloMensaje);
        let contenidoMensaje = document.createElement('p');
        contenidoMensaje.innerHTML = 'Hemos envíado un email a tu casilla de correo con los datos de la compra.';
        mensaje.append(contenidoMensaje);
        let esperaMensaje = document.createElement('p');
        esperaMensaje.innerHTML = 'Por favor, espera unos segundos para ser redireccionado al inicio.';
        mensaje.append(esperaMensaje);
        let contadorSaludo = document.createElement('span');
        contadorSaludo.setAttribute('id', 'tiempo-saludo');
        contadorSaludo.innerHTML = '';
        mensaje.append(contadorSaludo);
        mensaje.setAttribute('class', 'mensaje-checkout' );
        contenido.append(mensaje);
        
        tiempoSaludo = 5;
        
        actualizarSaludo();
    }
}

var tiempoSaludo = 5;

const actualizarSaludo = () => {

    let contadorTiempoSaludo = document.getElementById('tiempo-saludo');
    contadorTiempoSaludo.innerHTML = tiempoSaludo;

    if(tiempoSaludo != 0){
        tiempoSaludo -= 1;
        setTimeout(actualizarSaludo, 1000);
    } else {
        cargarPagina();
    }
}

// ------------------------------- Detalles -------------------------------

function cargarContenidoDetalle (e) {
    const idBoton = e.currentTarget.id;
    let productoBoton = productos.filter(producto => producto.idProducto == idBoton)[0];

    let imgDetalle = document.createElement('img');
    imgDetalle.setAttribute('src', './img/miniaturas/' +productoBoton.imagen1+'' );
    imgDetalle.setAttribute('alt', productoBoton.nombre);

    let carruselImg = document.createElement('div');
    carruselImg.setAttribute('id', 'carrusel' );

    carruselImg.append(imgDetalle);

    let contenedorMiniaturas = document.createElement('div');
    contenedorMiniaturas.setAttribute('id', 'miniaturas' );

    let imgMiniatura1 = document.createElement('img');
    imgMiniatura1.setAttribute('src', './img/miniaturas/' +productoBoton.imagen1+'' );
    imgMiniatura1.setAttribute('alt', productoBoton.nombre + '-1');
    imgMiniatura1.setAttribute('class', 'modal-activo');
    let imgMiniatura2 = document.createElement('img');
    imgMiniatura2.setAttribute('src', './img/miniaturas/' +productoBoton.imagen2+'' );
    imgMiniatura2.setAttribute('alt', productoBoton.nombre + '-2');
    let imgMiniatura3 = document.createElement('img');
    imgMiniatura3.setAttribute('src', './img/miniaturas/' +productoBoton.imagen3+'' );
    imgMiniatura3.setAttribute('alt', productoBoton.nombre + '-3');

    contenedorMiniaturas.append(imgMiniatura1);
    contenedorMiniaturas.append(imgMiniatura2);
    contenedorMiniaturas.append(imgMiniatura3);

    let contenidoDeDetalles = document.getElementById('contenidoDetalles');

    let imagenesDetalle = document.createElement('div');
    imagenesDetalle.append(carruselImg);
    imagenesDetalle.append(contenedorMiniaturas);
    contenidoDeDetalles.append(imagenesDetalle);

    let textoDetalle = document.createElement('div');
    textoDetalle.setAttribute('class', 'texto-card' );

    let nombreDetalle = document.createElement('h2');
    nombreDetalle.innerHTML = productoBoton.nombre;
    nombreDetalle.setAttribute('class', 'row titulo-detalle');
    textoDetalle.append(nombreDetalle);

    let categoriaDetalle = document.createElement('p');
    categoriaDetalle.innerHTML = 'Categoría: ' + productoBoton.categoria;
    categoriaDetalle.setAttribute('class', 'row elem-detalle');
    textoDetalle.append(categoriaDetalle);

    let precioDetalle = document.createElement('p');
    let textoPrecioDetalle = document.createElement('p');
    textoPrecioDetalle.innerHTML = 'Precio: $';
    precioDetalle.append(textoPrecioDetalle);
    let valorPrecioDetalle = document.createElement('p');
    valorPrecioDetalle.innerHTML = productoBoton.precio;
    precioDetalle.append(valorPrecioDetalle);
    precioDetalle.setAttribute('class', 'row elem-detalle');
    textoDetalle.append(precioDetalle);

    let descripcionDetalle = document.createElement('p');
    descripcionDetalle.innerHTML = 'Descripcion: ' + productoBoton.descripcion;
    textoDetalle.append(descripcionDetalle);

    contenidoDeDetalles.append(textoDetalle)

    let botonAgregarDetalle = document.getElementsByClassName('boton-detalle')[0];
    botonAgregarDetalle.setAttribute('id', productoBoton.idProducto);

    ventanaDetalles.setAttribute('class', 'modal mostrar-modal');

    actualizarCarrusel();

}

function actualizarBotonesDetalles() {

    let botonesDetalle = document.querySelectorAll(".producto-detalle");

    botonesDetalle.forEach(boton => {
        boton.addEventListener("click", cargarContenidoDetalle);
    });
}

// Carrusel


function actualizarCarrusel() {

    let galeria = document.querySelector("#carrusel > img");

    let miniImgs = document.querySelectorAll('#miniaturas > img');

    miniImgs.forEach(mini => {
        mini.addEventListener("click", (e) =>{

            miniImgs.forEach(mini => {mini.setAttribute('class', '')});
            let nuevaImg = e.target;
            if(nuevaImg === null){
                galeria.src=`mini.src`;
            }else{
                nuevaImg.setAttribute('class', 'modal-activo');
                galeria.src=nuevaImg.src;
            }
        });
    });
}

function actualizarBanners () {

    let banner = document.querySelectorAll('#contenedorBanner > img')[0];

    banner.addEventListener("click", cargarContenidoDetalle);
}
    
// Detaccion Teclado

document.addEventListener('keydown', function (e) {
    
    let ventanaDeCarrito = document.getElementById('ventanaCarrito');
    let ventanaDeCheckout = document.getElementById('ventanaCheckout');
    let ventanaDeDetalles = document.getElementById('ventanaDetalles');

    if(e.key === 'Escape'){
        if(ventanaDeCarrito.classList.contains('mostrar-modal')){
            cerrarCarrito();
        }else if(ventanaDeCheckout.classList.contains('mostrar-modal')){
            cerrarCheckout(); 
        }else if(ventanaDeDetalles.classList.contains('mostrar-modal')){
            cerrarDetalle();
        }
    }
})

document.addEventListener('keydown', function (e) {
    
    let ventanaDeDetalles = document.getElementById('ventanaDetalles');

    if(e.key === 'ArrowRight'){

        if(ventanaDeDetalles.classList.contains('mostrar-modal')){

            let galeria = document.querySelector("#carrusel > img");
            let miniImgs = document.querySelectorAll('#miniaturas > img');

            let indiceImagen = obtenerIdActivo();

            miniImgs[indiceImagen].setAttribute('class', '');
            if(indiceImagen < 2){

                miniImgs[indiceImagen + 1].setAttribute('class', 'modal-activo');
                galeria.src = miniImgs[indiceImagen + 1].src;

            }else {

                miniImgs[0].setAttribute('class', 'modal-activo');
                galeria.src = miniImgs[0].src;
            }
        }
    }

    if(e.key === 'ArrowLeft'){

        if(ventanaDeDetalles.classList.contains('mostrar-modal')){

            let galeria = document.querySelector("#carrusel > img");
            let miniImgs = document.querySelectorAll('#miniaturas > img');

            let indiceImagen = obtenerIdActivo();

            miniImgs[indiceImagen].setAttribute('class', '');
            if(indiceImagen > 0){

                miniImgs[indiceImagen - 1].setAttribute('class', 'modal-activo');
                galeria.src = miniImgs[indiceImagen - 1].src;

            }else {

                miniImgs[2].setAttribute('class', 'modal-activo');
                galeria.src = miniImgs[2].src;
            }
        }
    }
})

const obtenerIdActivo = () => {

    let miniImgs = document.querySelectorAll('#miniaturas > img');

    for (let i=0; i < miniImgs.length; i++) {
        if (miniImgs[i].classList.contains('modal-activo')) {
            return i;
        }
    }
}






