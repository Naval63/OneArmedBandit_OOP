class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult()
        this.getDrowResult = () => _result;
    }

    drawResult() {
        let colors = [];
        for(let i =0; i < this.options.length; i++) {
        this.options = ['red', 'green', 'blue'];
        const index = Math.floor(Math.random() * this.options.length);
        const color = this.options[index]
        console.log(color);
        colors.push(color)
        }
        return colors
    }
}

// const draw = new Draw();