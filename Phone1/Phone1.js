/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Phone1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("phone1_1", "./Phone1/costumes/phone1_1.png", {
        x: 100,
        y: 100
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "kiri1" }, this.whenIReceiveKiri1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kanan1" },
        this.whenIReceiveKanan1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveKiri1() {
    this.visible = true;
  }

  *whenIReceiveKanan1() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Budi"].andClones())) {
        this.stage.vars.handphone = 1;
        this.broadcast("hp +1");
        this.visible = false;
      }
      yield;
    }
  }
}
