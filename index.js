const canvas = document.querySelector('canvas');
//using c instead of context because this will be repeated a lot
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
};

const player = new Player(100, 100, 30, 'blue');

console.log(player);