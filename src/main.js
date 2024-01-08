const pages = ["test1", "test2"];

let btns = document.querySelectorAll(".btn");
let iframe = document.querySelector("iframe");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    iframe.src = "./src/pages/" + pages[i] + ".html";
  });
}
