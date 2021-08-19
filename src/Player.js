class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
    this.scene.physics.world.enable(this); // enables physics on this entity
  }
  updateMovement(cursors) {
    // move left
    if(cursors.left.isDown) {
      this.setVelocityX(-360);
    }
    // move right
    else if(cursors.right.isDown) {
      this.setVelocityX(360);
    }
    else {
      this.setVelocityX(0);
    }
  }
  updateJump(cursors) {
    // if the keyboard up key is being pressed AND the body of the player is touching the ground
    if(cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-800);
    }
  }
  // Check which controller button is being pushed and execute movement & animation
  update(cursors) {
    // RECALL: the update function will run on every frame. Note, the update function in the SCENE is what will be called on each frame.
    this.updateMovement(cursors);
    this.updateJump(cursors);
  }
}