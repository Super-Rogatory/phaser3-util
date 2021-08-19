class ForeGround extends Phaser.Scene {
	constructor() {
		// [1]
		super({ key: 'ForeGround', active: true });
	}
	createGround(x, y) {
		// [2.2]
		this.groundGroup.create(x, y, 'ground');
	}
	createAnimations() {
		this.anims.create({
			key: 'run',
			frames: this.anims.generateFrameNumbers('mainCharacter', { start: 17, end: 20 }),
			frameRate: 10,
			repeat: -1,
		});
		this.anims.create({
			key: 'jump',
			frames: [{ key: 'mainCharacter', frame: 17 }],
			frameRate: 20,
		});
		this.anims.create({
			key: 'idleUnarmed',
			frames: [{ key: 'mainCharacter', frame: 11 }],
			frameRate: 10,
		});
		this.anims.create({
			key: 'idleArmed',
			frames: [{ key: 'mainCharacter', frame: 6 }],
			frameRate: 10,
		});
	}
	preload() {
		// [1]
		this.load.spritesheet('mainCharacter', 'assets/spriteSheets/josh.png', {
			frameWidth: 340,
			frameHeight: 460,
		});
		// [2.1.1]
		// still need to load the ground with a special sprite key
		this.load.image('ground', 'assets/sprites/ground.png');
		// [2.1.2]
		// a group allows you to group together similar objects and control them as a single unit.
		this.groundGroup = this.physics.add.staticGroup({ classType: Ground });
	}
	create() {
		// [1]
		this.player = new Player(this, 20, 400, 'mainCharacter').setScale(0.25);
		// [2]
		this.createGround(160, 540);
		this.createGround(600, 540);
		// [2.2]
		// collider() enables our player to physically collid with the ground, preventing him from falling through
		this.physics.add.collider(this.player, this.groundGroup);
		// [3.1]
		// allowing us to move the character body
		this.cursors = this.input.keyboard.createCursorKeys();
		// create the animations
		this.createAnimations();
	}
	update(time, delta) {
		// the player object was created on line 19.
		// the player class has the update method on it's prototype so we are able to utilize the update here.
		this.player.update(this.cursors);
	}
}
