let contenedor = document.getElementById('contenedor');
let paginaActual = 1;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(event) {
    x1 = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!x1) {
        return;
    }

    let x2 = event.touches[0].clientX;
    let deltaX = x2 - x1;

    if (Math.abs(deltaX) > 50) { // Se considera un desplazamiento significativo
        if (deltaX > 0 && paginaActual > 1) {
            paginaActual--;
        } else if (deltaX < 0 && paginaActual < 2) {
            paginaActual++;
        }

        updateContenedor();
        x1 = null;
    }
}

function updateContenedor() {
    let nuevaTransformacion = 'translateX(' + (paginaActual - 1) * -50 + '%)';
    contenedor.style.transform = nuevaTransformacion;
}

