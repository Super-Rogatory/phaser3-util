let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1500 }, // determines if the 
            debug: false
        }
    },
    scene: [ BackGround, ForeGround ]
};

let game = new Phaser.Game(config);