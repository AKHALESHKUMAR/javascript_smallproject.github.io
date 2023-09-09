var colors = ["red", "blue", "purpul", "green"];

var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const randomNumber = getRandom();
  console.log(getRandom());
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
