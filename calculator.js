//Check out calculator_hints.js for hints if you're stuck
/* HINTS DOCUMENT
Disclaimer: FEEL FREE TO DEVIATE FROM THE FILL IN THE BLANKS OR WRITE OVER
SKELETON CODE. THEY ARE JUST TO PROVIDE HINTS TO THE COURSE STAFF SOLUTION BUT THERE
ARE MANY WAYS TO APPROACH ANYTHING IN WEB DEVELOPMENT. YOU DO NOT HAVE TO 
COMPLETE FROM TOP TO BOTTOM (in fact we encourage you not to). */

/* Assign/declare variables. We started you off with some variables to help you.
Hint: We need:
      (1) a variable for keeping track of the total number,
      (2) the string value that is shown on the display screen
      (3) the operator (+, x, -, and ÷) that is selected.  */

      let total = 0;
      let strbuffer = "0";
      let operator = null;

      /*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
          Uncomment and fill in the blank spaces. */
      function calculations() {
          const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
          if (operator === "+") {
            total += intBuffer;
            console.log(total);
          } else if (operator === "-"){
            total -= intBuffer;
          } else if (operator === "*"){
            total *= intBuffer;
          } else if (operator === "/"){
            total /= intBuffer;
        }
      }

      /*   FUNC DESCRIPTION: If user input is a number, create the function. */
      function makesNumber(value) {
          if (strbuffer === "0") {
              strbuffer = value.toString();
          } else {
          /*  If strbuffer is not 0, meaning there is a previous number typed in already, what should we display on the screen?
          Hint: How do we concatenate strings? If you are stuck, imagine typing in a "5" into the calculator, making strbuffer into "5". 
          Then imagine typing "3" into the calculator. Now "3" is value and strbuffer is still at "5", so strbuffer will now be 53.  */
              strbuffer += value.toString(); 
          }
      }

      /*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

      function makesSymbol(symbol) {
          //make functionality for symbol C
          //make functionality for symbol ← Hint: .substring might be helpful! 
          //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
          if (symbol === "C") {
            total = 0;
            strbuffer = "0";
            operator = null;
          } else if (symbol === "←") {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1)
            total = parseInt(strbuffer)
          } else if (symbol === "=") {
            strbuffer = total;
          } else { //make functionality if symbol is an operator
          const intBuffer = parseInt(strbuffer);
          if (total === 0) {
              total = intBuffer;
          } else {
              calculations();
          }
          operator = null;
          strbuffer = total
          }
      }

      /*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
          This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
      function setListeners() {
      //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
          let items = document.querySelectorAll(".buttons"); 
          for (item of items) {
          //Hint: addEventListener might be useful.
          //Hint: event.target.innerText might be helpful. innerText return type is a string
          item.addEventListener('click', function(event) {buttonClicked(event.target.innerText);});
          }
      }

      //Make sure to call setListeners!!!
      setListeners()

      /*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
      function buttonClicked(valueClicked) {
          if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
              //Hint: call a function we just created!
              makesSymbol(valueClicked)
          } else {
              //Hint: call a function we just created!
              makesNumber(valueClicked)
          }
          document.querySelector(".result-screen").innerText = strbuffer;
      // Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
      }