import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Budi from "./Budi/Budi.js";
import Platform from "./Platform/Platform.js";
import Trash1 from "./Trash1/Trash1.js";
import Trash2 from "./Trash2/Trash2.js";
import Kanan1 from "./Kanan1/Kanan1.js";
import Kiri1 from "./Kiri1/Kiri1.js";
import Phone1 from "./Phone1/Phone1.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import RumahRemovebgPreview from "./RumahRemovebgPreview/RumahRemovebgPreview.js";
import End from "./End/End.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Budi: new Budi({
    x: -149.9988287957278,
    y: -46.999089847375004,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 6
  }),
  Platform: new Platform({
    x: -17,
    y: -160,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 3
  }),
  Trash1: new Trash1({
    x: 222,
    y: -139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Trash2: new Trash2({
    x: -257.1923670174581,
    y: -126.30962713374629,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Kanan1: new Kanan1({
    x: 424,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Kiri1: new Kiri1({
    x: -30.175677873452685,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Phone1: new Phone1({
    x: 71,
    y: -78,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 8
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  RumahRemovebgPreview: new RumahRemovebgPreview({
    x: -68,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  End: new End({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
