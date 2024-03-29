class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResults = {
            win,
            bid,
        }
        // console.log(gameResults);
        this.gameResults.push(gameResults)
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        // console.log(wins, losses);
        return [games, wins, losses]
    }
}

const stats = new Statistics();