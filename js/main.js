//////// Start Header
let icon = document.querySelector(".icon");
let links = document.querySelector(".links");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");


icon.onclick = function () {
  icon.classList.toggle("active-icon");
  links.classList.toggle("active-link");
  one.classList.toggle("active-one");
  two.classList.toggle("none");
  three.classList.toggle("active-three");
}
//////// Start Header


//////// Start portfolio
let showbtn = document.querySelector(".show");
let portfolio = document.querySelectorAll(".portfolio-none");
let portfolioArr = Array.from(portfolio);

showbtn.onclick = function () {
  portfolioArr.forEach((no) => {
    no.classList.toggle("none")
  })
}
  //////// Start portfolio