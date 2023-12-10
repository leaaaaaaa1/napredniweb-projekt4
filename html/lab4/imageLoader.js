window.onload = function() {
    var container = document.getElementById('imageContainer');
    for (var i = 0; i <= 599; i++) {
        var img = document.createElement('img');
        img.src = 'images2/cats_' + i + '.jpg';
        img.alt = 'Cat ' + i;
        container.appendChild(img);
    }
};
