async function generateTutorial() {
    const components = document.querySelector('#components').value;
    const output = document.querySelector('#output');
  
    output.textContent = 'Cooking a recipe for you...';
  
    const response = await fetch('/generate', {
  
    method: 'POST',
    body: new FormData(document.querySelector('#tutorial-form'))
    });
  
    const newOutput = await response.text();
    output.textContent = newOutput;
  
   }
  
   function copyToClipboard() {
  
    const output = document.querySelector('#output');
    const textarea = document.createElement('textarea');
  
    textarea.value = output.textContent;
  
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard');
  
   }