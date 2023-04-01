let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked';
    console.log('Paragraph Clicked Here!');
}

paragraphElement.addEventListener('click', changeParagraphText)