class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, spriteKey) {
		super(scene, x, y, spriteKey);
		this.scene = scene;
		this.scene.add.existing(this);
		// << INITIALIZE PLAYER ATTRIBUTES HERE >>
		this.scene.physics.world.enable(this); // enables physics on this entity
		this.facingLeft = false;
	}
	updateInAir() {
		if (!this.body.touching.down) {
			this.play('jump');
		}
	}
	updateMovement(cursors) {
		// Move left
		if (cursors.left.isDown) {
			if (!this.facingLeft) {
				this.flipX = !this.flipX;
				this.facingLeft = true;
			}
			this.setVelocityX(-360);
			if (this.body.touching.down) {
				this.play('run', true);
			}
		}
		// Move right
		else if (cursors.right.isDown) {
			if (this.facingLeft) {
				this.flipX = !this.flipX;
				this.facingLeft = false;
			}
			this.setVelocityX(360);

			if (this.body.touching.down) {
				this.play('run', true);
			}
		}
		// Neutral (no movement)
		else {
			this.setVelocityX(0);
			// Whenever Josh is not moving, use the idleUnarmed animation
			this.play('idleUnarmed');
		}
	}
	updateJump(cursors) {
		// if the keyboard up key is being pressed AND the body of the player is touching the ground
		if (cursors.up.isDown && this.body.touching.down) {
			this.setVelocityY(-800);
		}
	}
	// Check which controller button is being pushed and execute movement & animation
	update(cursors) {
		// RECALL: the update function will run on every frame. Note, the update function in the SCENE is what will be called on each frame.
		this.updateMovement(cursors);
		this.updateJump(cursors);
		// On update, check to see if Josh is in the air (see below)
		this.updateInAir();
	}
}
