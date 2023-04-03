/*
let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked";
  console.log("Paragraph Clicked Here!");
    console.log(event);

}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  //   let enteredText = inputElement.value;
  //   let enteredText = event.target.value;
  let enteredText = event.data;
  console.log(enteredText);
  //   console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
*/

let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;


    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)
























