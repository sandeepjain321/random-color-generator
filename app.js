let heading = document.querySelector("h3");
let textarea = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let randomcolor = getrandomcolor();
  heading.innerText = randomcolor;
  console.log("color updated");
  textarea.style.backgroundColor = randomcolor;
});

//  genrate R G B
function getrandomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb( ${red}, ${green}, ${blue} )`;

  return color;
}
