// Response handling with typing effect
function typeEffect(element, speed) {
    let text = element.val();
    element.val('');
    let i = 0;
    let timer = setInterval(function () {
        if (i < text.length) {
            element.val(element.val() + text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Download conversation history
function downloadResponses(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.click();
}
