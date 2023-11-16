/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class End extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./End/costumes/costume1.svg", {
        x: 181.00000000000003,
        y: 152.49999999999997
      })
    ];

    this.sounds = [new Sound("pop", "./End/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "kiri1" }, this.whenIReceiveKiri1),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "tamat" }, this.whenIReceiveTamat)
    ];
  }

  *whenIReceiveKiri1() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTamat() {
    this.effects.ghost = 20;
    this.visible = true;
  }
}
