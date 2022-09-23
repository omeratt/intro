const container = document.querySelector(".container");
const cloneContainer = container.cloneNode(true);
cloneContainer.classList.add("duplicate");
container.append(cloneContainer);

container.addEventListener("click", () => {
  container.classList.add("slide", "no-load");
  const rows = container.querySelectorAll(".row");
  const cells = container.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.add("flip");
  });
  const lastRow = rows[rows.length - 1];
  const lastCell = cells[cells.length - 1];
  lastCell.addEventListener("animationend", () => {
    cells.forEach((cell) => {
      cell.classList.remove("flip");
    });
    container.classList.remove("slide");
  });
});
