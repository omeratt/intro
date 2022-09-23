$(document).ready(function () {
  for (let i = 0; i < 40; i++) {
    $(".container").append(`<div class="row-${i}"></div>`);
    for (let j = 0; j < 5; j++) {
      let width = Math.floor(Math.random() * 10 + 1);
      $(`.row-${i}`).append(
        `<div class="box-${width}" style="--width: ${width * 1.2};"></div>`
      );
    }
  }
});
