const Box1 = document.getElementsByClassName("box-1");
const rado = document.getElementById("disc");

// console.log(Box1);

for (let i = 0; i < Box1.length; i++) {
  Box1[i].addEventListener("click", () => {
    Box1[i].classList.toggle("active");
  });
}
