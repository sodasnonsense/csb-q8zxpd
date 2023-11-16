/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trash1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "kokokokok-removebg-preview",
        "./Trash1/costumes/kokokokok-removebg-preview.png",
        { x: 206, y: 171 }
      ),
      new Costume(
        "kokokokok-removebg-preview4",
        "./Trash1/costumes/kokokokok-removebg-preview4.png",
        { x: 206, y: 162 }
      ),
      new Costume(
        "kokokokok-removebg-preview3",
        "./Trash1/costumes/kokokokok-removebg-preview3.png",
        { x: 5, y: 171 }
      ),
      new Costume(
        "kokokokok-removebg-preview2",
        "./Trash1/costumes/kokokokok-removebg-preview2.png",
        { x: 208, y: 192.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kanan1" },
        this.whenIReceiveKanan1
      ),
      new Trigger(Trigger.BROADCAST, { name: "kiri1" }, this.whenIReceiveKiri1)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveKanan1() {
    this.visible = false;
  }

  *whenIReceiveKiri1() {
    this.visible = true;
  }
}
