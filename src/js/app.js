import Move from "./move";

document.addEventListener("DOMContentLoaded", () => {
  const item = new Move(document.querySelector(".grid"));
  setInterval(item.randomMove, 1000);
});
