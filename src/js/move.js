export default class Move {
  randomMove() {
    const activeElement = document.querySelector(".active");

    const itemArray = Array.from(document.querySelectorAll(".square"));

    const randomItem = Math.floor(Math.random() * itemArray.length);

    activeElement.classList.remove("active");

    itemArray[randomItem].classList.add("active");
    // console.log(activeElement);
    // console.log(itemArray);
  }
}
