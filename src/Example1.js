class Example1 extends Phaser.Scene {
    constructor() {
        super({ key: "Example1 "});
    }
    preload() {
        this.load.image('logo', '/public/assets/backgrounds/fullBlastLogo.png');
        this.load.image('sky', '/public/assets/backgrounds/sky.png');
    }
    create() {
        this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5);
        this.add.image(380,80,'logo').setScale(5)
    }
}