class BackGround extends Phaser.Scene {
	constructor() {
		super({ key: 'BackGround' });
	}
	preload() {
		this.load.image('logo', '/public/assets/backgrounds/fullBlastLogo.png');
		this.load.image('sky', '/public/assets/backgrounds/sky.png');
	}
	create() {
		this.add.image(-160, 0, 'sky').setOrigin(0).setScale(0.5);
		this.add.image(380, 80, 'logo').setScale(5);
	}
}
