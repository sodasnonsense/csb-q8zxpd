/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 251.2222010294596,
        y: 188.33332061767578
      }),
      new Costume("kanan1", "./Stage/costumes/kanan1.svg", {
        x: 302.44443384806306,
        y: 186.66666030883778
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kanan1" },
        this.whenIReceiveKanan1
      ),
      new Trigger(Trigger.BROADCAST, { name: "kiri1" }, this.whenIReceiveKiri1)
    ];

    this.vars.speedY = 0;
    this.vars.gravity = -1.5;
    this.vars.speedX = 7.656072052201871e-10;
    this.vars.lastValue = -46.999089847375004;
    this.vars.jumpForce = 12;
    this.vars.acceleration = 2;
    this.vars.resistance = 0.8;
    this.vars.handphone = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenIReceiveKanan1() {
    this.costume = "kanan1";
  }

  *whenIReceiveKiri1() {
    this.costume = "backdrop1";
  }
}
