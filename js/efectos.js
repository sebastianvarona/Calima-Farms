let animacionArticulo = document.querySelectorAll('#animacionArticulo');

function mostrarArticulo() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animacionArticulo.length; i++) {
        let alturaArticulo = animacionArticulo[i].offsetTop;
        if (alturaArticulo -450 < scrollTop) {
            animacionArticulo[i].classList.add('animacionArticulo')
        }else if (alturaArticulo - 800 > scrollTop) {
            animacionArticulo[i].classList.remove('animacionArticulo')
        }
        
    }

}
window.addEventListener('scroll', mostrarArticulo);

let animacionServicios = document.querySelectorAll('.serv');

function mostrarServicios() {
    let scrollPantalla = document.documentElement.scrollTop;
    for (let i = 0; i < animacionServicios.length; i++) {
        let alturaServicios = animacionServicios[i].offsetTop;
        if (alturaServicios - 500 < scrollPantalla ) {
            animacionServicios[i].classList.add('itemServicios');
        } else if (alturaServicios - 700 > scrollPantalla) {
            animacionServicios[i].classList.remove('itemServicios')
        }
        
    }
}
window.addEventListener('scroll', mostrarServicios);