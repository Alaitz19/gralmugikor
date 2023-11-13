// script.js

var startX;

$('#pageContainer').on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
});

$('#pageContainer').on('touchend', function (e) {
    var endX = e.originalEvent.changedTouches[0].clientX;
    var threshold = 50; // Umbral para considerar el deslizamiento

    if (startX - endX > threshold) {
        // Deslizamiento hacia la izquierda, ir a la siguiente página
        nextPage();
    } else if (endX - startX > threshold) {
        // Deslizamiento hacia la derecha, ir a la página anterior
        prevPage();
    }
});

function nextPage() {
    var currentPage = $('#pageContainer').data('currentPage') || 0;
    var pageCount = $('.page').length;
    var nextPage = (currentPage + 1) % pageCount;

    $('#pageContainer').css('transform', 'translateX(' + -nextPage * 100 + '%)');
    $('#pageContainer').data('currentPage', nextPage);
}

function prevPage() {
    var currentPage = $('#pageContainer').data('currentPage') || 0;
    var pageCount = $('.page').length;
    var prevPage = (currentPage - 1 + pageCount) % pageCount;

    $('#pageContainer').css('transform', 'translateX(' + -prevPage * 100 + '%)');
    $('#pageContainer').data('currentPage', prevPage);
}

