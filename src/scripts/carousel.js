const cards = document.querySelectorAll(".jidlo-karta");
const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");

let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("visible", i === index);
  });
}

left.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

right.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

showCard(current);