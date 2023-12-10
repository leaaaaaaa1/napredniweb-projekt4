document.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.getElementById('textContainer3');
    var textRequest = new XMLHttpRequest();
    textRequest.open('GET', 'cats3.txt', true);
    textRequest.onreadystatechange = function() {
        if (textRequest.readyState === 4 && textRequest.status === 200) {
            var text = textRequest.responseText;
            textContainer.textContent = text;
        }
    };
    textRequest.send();
});
