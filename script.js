const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const catImage = document.getElementById('catImage');

let noCount = 0;
const catImages = ["images/cat1.gif", "images/cat2.gif", "images/cat3.jpg"];
const jobBitchImages = ["images/cat4.jpg", "images/cat5.jpeg", "images/cat6.jpg"]; 

noButton.addEventListener('click', () => {
  noCount++;
  if (noCount === 1) {
    message.textContent = "Aisa mat karo, Pookie! 😢";
  } else if (noCount === 2) {
    message.textContent = "Please think again! 🥺";
  } else if (noCount === 3) {
    message.textContent = "Please think again, Pookie! 😭";
    noButton.style.position = 'absolute';
  } 

  // Random cat image change
  let randomIndex = Math.floor(Math.random() * catImages.length);
  catImage.src = catImages[randomIndex];

  // Button random move
  if (noCount >= 3) {
    noButton.style.left = `${Math.random() * 80}%`;
    noButton.style.top = `${Math.random() * 80}%`;
  }
});

yesButton.addEventListener('click', () => {
  message.textContent = "I love you too, Pookie! ❤️";
  
  // Random "job bitch" image change
  let randomIndex = Math.floor(Math.random() * jobBitchImages.length);
  catImage.src = jobBitchImages[randomIndex];

  yesButton.disabled = true;
  noButton.disabled = true;
});
