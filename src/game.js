import Board from "./board";

class Game {
    constructor(ctx) {
        this.board = new Board(ctx);
        this.paused = false;

        document.addEventListener("keydown", e => this.pause(e, ctx))
    }

    start() {
        
    }

    pause(e, ctx) {
        if (e.key === "p" && this.paused === false) {
            clearInterval(this.board.speed)
            alert('Game is paused. Press OK and any key to resume.');
            this.paused = true;
        } else if (this.paused === true) {
            const interval = 1100 - (this.board.scoreboard.level * 100);
            this.board.speed = setInterval(() => this.board.drop(ctx), interval);
            this.paused = false;
        }
    }
}

export default Game;