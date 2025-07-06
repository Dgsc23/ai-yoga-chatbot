/**
 * Core Functions for AI Yoga Chatbot
 * Production code - Sanitized version
 * @author Dr. David Gramling, PhD
 * @license Proprietary
 */

// Typing animation effect for natural conversation feel
function typeEffect(element, speed = 22) {
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
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Example: API handler function (pseudocode)
// function getAPIKey() { ... }

