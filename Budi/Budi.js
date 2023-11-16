/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Budi extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("diem", "./Budi/costumes/diem.png", { x: 28, y: 54 }),
      new Costume("jalan1", "./Budi/costumes/jalan1.png", { x: 28, y: 54 }),
      new Costume("jalan2", "./Budi/costumes/jalan2.png", { x: 28, y: 54 }),
      new Costume("diem2", "./Budi/costumes/diem2.png", { x: 32, y: 54 }),
      new Costume("jalan2-1", "./Budi/costumes/jalan2-1.png", { x: 32, y: 54 }),
      new Costume("jalan2-2", "./Budi/costumes/jalan2-2.png", { x: 32, y: 54 }),
      new Costume("jump", "./Budi/costumes/jump.png", { x: 28, y: 56 }),
      new Costume("jump2", "./Budi/costumes/jump2.png", { x: 32, y: 56 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kanan1" },
        this.whenIReceiveKanan1
      )
    ];

    this.vars.falling = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "diem";
    this.stage.vars.gravity = -1.5;
    this.stage.vars.jumpForce = 12;
    this.stage.vars.acceleration = 2;
    this.stage.vars.resistance = 0.8;
    this.stage.vars.speedY = 0;
    this.goto(-150, 0);
    while (true) {
      if (this.keyPressed("w")) {
        if (this.compare(this.vars.falling, 3) < 0) {
          this.stage.vars.speedY = this.stage.vars.jumpForce;
        }
      }
      if (this.keyPressed("a")) {
        this.stage.vars.speedX +=
          0 - this.toNumber(this.stage.vars.acceleration);
      }
      if (this.keyPressed("d")) {
        this.stage.vars.speedX += this.toNumber(this.stage.vars.acceleration);
      }
      this.stage.vars.speedX =
        this.toNumber(this.stage.vars.speedX) *
        this.toNumber(this.stage.vars.resistance);
      this.stage.vars.speedY += this.toNumber(this.stage.vars.gravity);
      yield* this.moveInSteps(
        Math.abs(this.toNumber(this.stage.vars.speedX)) +
          Math.abs(this.toNumber(this.stage.vars.speedY))
      );
      yield;
    }
  }

  *moveInSteps(steps) {
    this.vars.falling++;
    for (let i = 0; i < this.toNumber(steps); i++) {
      this.stage.vars.lastValue = this.x;
      this.x += this.toNumber(this.stage.vars.speedX) / this.toNumber(steps);
      if (this.touching(Color.rgb(102, 168, 84))) {
        this.x = this.toNumber(this.stage.vars.lastValue);
        this.stage.vars.speedX = 0;
      }
      this.stage.vars.lastValue = this.y;
      this.y += this.toNumber(this.stage.vars.speedY) / this.toNumber(steps);
      if (this.touching(Color.rgb(102, 168, 84))) {
        this.y = this.toNumber(this.stage.vars.lastValue);
        if (this.compare(this.stage.vars.speedY, 0) < 0) {
          this.vars.falling = 0;
        }
        this.stage.vars.speedY = 0;
      }
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("d")) {
        this.costume = "jalan1";
        yield* this.wait(0.1);
        this.costume = "jalan2";
      }
      if (this.keyPressed("a")) {
        this.costume = "jalan2-1";
        yield* this.wait(0.1);
        this.costume = "jalan2-2";
      }
      if (this.keyPressed("w")) {
        if (this.keyPressed("w") && this.keyPressed("a")) {
          this.costume = "jump2";
        }
        if (this.keyPressed("w") && this.keyPressed("d")) {
          this.costume = "jump";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Kanan1"].andClones())) {
        this.broadcast("kanan1");
      }
      if (this.touching(this.sprites["Kiri1"].andClones())) {
        this.broadcast("kiri1");
      }
      yield;
    }
  }

  *whenIReceiveKanan1() {
    this.goto(-216, -22);
  }
}
