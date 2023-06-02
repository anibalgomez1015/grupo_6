// Filtro de Busqueda
function aplicarFiltro() {
    // Obtener el elemento de entrada de búsqueda por su ID
    var input = document.getElementById("searchInput");
    // Obtener el valor del filtro de búsqueda en minúsculas
    var filter = input.value.toLowerCase();
    // Obtener todos los elementos "article" dentro del elemento con la clase "article-grid"
    var articles = document.getElementsByClassName("article-grid")[0].getElementsByTagName("article");

    // Iterar sobre cada artículo
    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        // Obtener el contenido del artículo en minúsculas
        var content = article.innerHTML.toLowerCase();
        // Reemplazar el texto coincidente con el filtro por el mismo texto envuelto en un span con la clase "highlighted"
        var highlightedContent = content.replace(new RegExp("(" + filter + ")", "gi"), "<span class='highlighted'>$1</span>");
        // Asignar el contenido resaltado al artículo
        article.innerHTML = highlightedContent;
        // Verificar si el contenido contiene el filtro
        if (content.indexOf(filter) > -1) {
            // Si contiene el filtro, mostrar el artículo
            article.style.display = "";
        } else {
            // Si no contiene el filtro, ocultar el artículo
            article.style.display = "none";
        }
    }
}
// Resaltar la busqueda realizada
function searchArticle() {
    // Obtener el término de búsqueda ingresado
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    // Obtener todos los elementos de párrafo en el artículo
    var paragraphs = document.querySelectorAll('.article-grid p');
    // Iterar sobre cada párrafo y buscar el término de búsqueda
    paragraphs.forEach(function (paragraph) {
    var paragraphText = paragraph.textContent.toLowerCase();
    // Resaltar el término de búsqueda en el párrafo
    if (paragraphText.includes(searchTerm)) {
    var highlightedText = paragraphText.replace(
        new RegExp(({searchTerm}), 'gi'));
        '<span class="highlighted">$1</span>'
    paragraph.innerHTML = highlightedText;
    }; {
    paragraph.innerHTML = paragraphText;
    };
      }
    )};