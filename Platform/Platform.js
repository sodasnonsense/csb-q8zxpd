/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Platform extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("platform", "./Platform/costumes/platform.png", {
        x: 290,
        y: 62.5
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
