"use strict";

function generateTutorial() {
  var components, output, response, newOutput;
  return regeneratorRuntime.async(function generateTutorial$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          components = document.querySelector('#components').value;
          output = document.querySelector('#output');
          output.textContent = 'Cooking a recipe for you...';
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch('/generate', {
            method: 'POST',
            body: new FormData(document.querySelector('#tutorial-form'))
          }));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.text());

        case 8:
          newOutput = _context.sent;
          output.textContent = newOutput;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

function copyToClipboard() {
  var output = document.querySelector('#output');
  var textarea = document.createElement('textarea');
  textarea.value = output.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Copied to clipboard');
}
//# sourceMappingURL=webpage.dev.js.map
