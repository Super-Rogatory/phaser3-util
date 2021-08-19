class ForeGround extends Phaser.Scene {
	constructor() {
		super({ key: 'ForeGround', active: true });
	}
	createGround(x, y) {
		this.groundGroup.create(x, y, 'ground');
	}
	preload() {
		this.load.spritesheet('mainCharacter', 'assets/spriteSheets/josh.png', {
			frameWidth: 340,
			frameHeight: 460,
		});
        // still need to load the ground with a special sprite key
		this.load.image('ground', 'assets/sprites/ground.png');
        // a group allows you to group together similar objects and control them as a single unit.
        this.groundGroup = this.physics.add.staticGroup({ classType: Ground });
	}
	create() {
		this.player = new Player(this, 20, 400, 'mainCharacter').setScale(0.25);
		this.createGround(160, 540);
        this.createGround(600, 540);
        // collider() enables our player to physically collid with the ground, preventing him from falling through
        this.physics.add.collider(this.player, this.groundGroup);
        // allowing us to move the character body
        this.cursors = this.input.keyboard.createCursorKeys();
	}
    update(time, delta) {
        // the player object was created on line 19.
        // the player class has the update method on it's prototype so we are able to utilize the update here.
        this.player.update(this.cursors);
    }
}
