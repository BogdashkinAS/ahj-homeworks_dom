export default class Move {
  randomMove() {
    const activeElement = document.querySelector(".active");
    const activeImg = document.querySelector(".img");
    const imgElement = document.createElement("img");
    imgElement.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';
    const itemArray = Array.from(document.querySelectorAll(".square"));
    const randomItem = Math.floor(Math.random() * itemArray.length);

    activeElement.classList.remove("active");
    activeElement.firstElementChild.remove();

    itemArray[randomItem].classList.add("active");
    itemArray[randomItem].append(imgElement);
  }
}
