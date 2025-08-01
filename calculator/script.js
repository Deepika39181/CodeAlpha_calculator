let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      try {
        string = eval(string); // Evaluate the string as math expression
        document.querySelector('input').value = string;
      } catch (err) {
        document.querySelector('input').value = "Error";
        string = "";
      }
    } 
    else if (buttonText === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } 
    else if (buttonText === 'X') { 
      string = string.slice(0, -1); // Remove last character
      document.querySelector('input').value = string;
    }
    else if (buttonText === '()') { 
      // Automatically add brackets correctly
      if (string.includes('(') && !string.includes(')')) {
        string += ')';
      } else {
        string += '(';
      }
      document.querySelector('input').value = string;
    }
    else {
      string += buttonText;
      document.querySelector('input').value = string;
    }
  });
});
