/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kanan1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Kanan1/costumes/costume1.png", {
        x: 426,
        y: 115
      })
    ];

    this.sounds = [new Sound("pop", "./Kanan1/sounds/pop.wav")];

    this.triggers = [];
  }
}
