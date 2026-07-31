let score = 0;

const add = document.querySelector("#addnum");
const subtract = document.querySelector("#subtractnum");
const reset = document.querySelector("#resetnum");
const display = document.querySelector("#Displaynum");


add.addEventListener("click", () => {
    score++;
    display.textContent = `Score: ${score}`;
}
);

subtract.addEventListener("click", () => {
    score--;
    display.textContent = `Score: ${score}`;
}
);       

reset.addEventListener("click", () => {
    score = 0;
    display.textContent = `Score: ${score}`;
}
);