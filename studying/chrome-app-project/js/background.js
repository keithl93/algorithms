const images = ["fuji.jpg", "nyc.jpg", "river.jpg", "sunny.jpg", "tokyo.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);
