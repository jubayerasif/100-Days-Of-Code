// Normal Practice
// let paragraphElement = document.querySelector("p");

// function changeParagraphText(event) {
//   paragraphElement.textContent = "Clicked";
//   console.log("Paragraph Clicked Here!");
//     console.log(event);
// }

// paragraphElement.addEventListener("click", changeParagraphText);

// let inputElement = document.querySelector("input");

// function retrieveUserInput(event) {
//   //   let enteredText = inputElement.value;
//   //   let enteredText = event.target.value;
//   let enteredText = event.data;
//   console.log(enteredText);
//   //   console.log(event);
// }

// inputElement.addEventListener("input", retrieveUserInput);

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters() {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);

const spanElement = document.getElementById("remaining-chars");
spanElement.style.color = "rgb(0, 120, 50)";