document.addEventListener("DOMContentLoaded", () => {
    const squares = [...document.querySelectorAll("#board div")];
    const status = document.querySelector("#status");
    const msg = status.textContent;
    const wins = ["012", "345", "678", "036", "147", "258", "048", "246"];
    let player = "X", over = false;

    squares.forEach(sq => {
        sq.classList.add("square");
        sq.onmouseover = sq.onmouseout = e => sq.classList.toggle("hover", e.type === "mouseover");
        sq.onclick = () => {
            if (sq.textContent || over) return;
            sq.textContent = player;
            sq.classList.add(player);
            if (wins.some(w => [...w].every(i => squares[i].textContent === player))) {
                status.textContent = `Congratulations! ${player} is the Winner!`;
                status.classList.add("you-won");
                over = true;
            }
            player = player === "X" ? "O" : "X";
        };
    });

    document.querySelector(".btn").onclick = () => {
        squares.forEach(sq => { sq.textContent = ""; sq.classList.remove("X", "O", "hover"); });
        player = "X";
        over = false;
        status.textContent = msg;
        status.classList.remove("you-won");
    };
});