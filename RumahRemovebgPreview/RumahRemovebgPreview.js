/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RumahRemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "rumah-removebg-preview",
        "./RumahRemovebgPreview/costumes/rumah-removebg-preview.png",
        { x: 304, y: 232 }
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
      new Trigger(Trigger.BROADCAST, { name: "kiri1" }, this.whenIReceiveKiri1),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveKanan1() {
    this.visible = true;
  }

  *whenIReceiveKiri1() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.handphone) === 1) {
      yield* this.broadcastAndWait("tamat");
    }
  }
}
