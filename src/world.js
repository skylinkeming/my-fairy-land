import * as T from "three";
import { createDinosaur } from "./dinosaur.js";
import { createFrog } from "./frog.js";
import { createFloralBear } from "./floral-bear.js";
import { createPlushArt } from "./plush-art.js";
import {
  BOARD_THEMES,
  styleTerrain,
  terrainTexture,
  woodMaterial,
  decorateBoardTile,
} from "./board-art.js";
import { createResidentLife, ACTIVITY_LABELS, PARK } from "./resident-life.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export function createWorld(
  container,
  onSelect,
  icon,
  onReminder = () => onSelect("todo"),
) {
  const canvas = container.querySelector("canvas"),
    renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0xf8f8f0, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new T.Scene(),
    camera = new T.OrthographicCamera(-13, 13, 10, -10, 0.1, 240);
  camera.position.set(42, 53, 65);
  let defaultZoom = innerWidth <= 760 ? 1.4 : 1;
  camera.zoom = defaultZoom;
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.minZoom = 0.68;
  controls.maxZoom = 8;
  controls.enablePan = true;
  controls.screenSpacePanning = false;
  controls.minPolarAngle = 0.4;
  controls.maxPolarAngle = 1.22;
  controls.target.set(0, 0.1, 1.8);
  controls.rotateSpeed = 0.55;
  controls.update();
  controls.saveState();
  let focusedResident = null;
  function stopFollowing() {
    focusedResident = null;
    delete container.dataset.focusedResident;
  }
  controls.addEventListener("start", stopFollowing);
  scene.add(new T.AmbientLight(0xfff2d6, 1.55));
  const sun = new T.DirectionalLight(0xfff0d2, 2.5);
  sun.position.set(-25, 55, 32);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, {
    left: -40,
    right: 40,
    top: 40,
    bottom: -40,
    near: 1,
    far: 130,
  });
  sun.shadow.normalBias = 0.06;
  sun.shadow.bias = -0.0001;
  scene.add(sun);
  const mats = new Map();
  function mat(c) {
    if (!mats.has(c))
      mats.set(
        c,
        new T.MeshStandardMaterial({
          color: c,
          roughness: 1,
          flatShading: true,
        }),
      );
    return mats.get(c);
  }
  function mesh(geo, c, p = scene) {
    const m = new T.Mesh(geo, mat(c));
    m.castShadow = m.receiveShadow = true;
    p.add(m);
    return m;
  }
  function box(w, h, d, c, x = 0, y = 0, z = 0, p = scene) {
    const m = mesh(new T.BoxGeometry(w, h, d), c, p);
    m.position.set(x, y, z);
    return m;
  }
  function ball(r, c, x, y, z, p = scene, s = [1, 1, 1]) {
    const m = mesh(new T.SphereGeometry(r, 12, 9), c, p);
    m.position.set(x, y, z);
    m.scale.set(...s);
    return m;
  }
  function cyl(a, b, h, c, x, y, z, p = scene, n = 12) {
    const m = mesh(new T.CylinderGeometry(a, b, h, n), c, p);
    m.position.set(x, y, z);
    return m;
  }
  // Radius × 2.4 gives every original hexagon 5.76 times its land area.
  const landScale = 2.4;
  const top = 0.67,
    defs = [
      { id: "home", x: 0, z: 0, c: "#afc588" },
      { id: "todo", x: -5.75, z: 0, c: "#a9c28e" },
      { id: "note", x: -2.88, z: -5.05, c: "#bdc88f" },
      { id: "friends", x: 2.88, z: -5.05, c: "#abc597" },
      { id: "memories", x: 5.75, z: 0, c: "#bac99e" },
    ],
    groups = {},
    selectable = [];
  defs.forEach((d) => {
    d.x *= landScale * 0.9;
    d.z *= landScale * 0.9;
    const g = new T.Group();
    g.position.set(d.x, 0, d.z);
    scene.add(g);
    groups[d.id] = g;
    g.userData.playerColor = BOARD_THEMES[d.id].piece;
    for (const [r, b, h, c, y] of [
      [2.95, 2.65, 1.18, "#c8ae80", -0.12],
      [3.04, 2.95, 0.23, "#efdeb1", 0.38],
      [2.93, 3.02, 0.22, d.c, 0.56],
    ]) {
      const m = cyl(r * landScale, b * landScale, h, c, 0, y, 0, g, 6);
      m.rotation.y = 0;
      if (y === -0.12) m.material = woodMaterial();
      if (y === 0.56) {
        styleTerrain(m, BOARD_THEMES[d.id].terrain);
        m.userData.id = d.id;
        selectable.push(m);
      }
    }
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      ball(
        0.17,
        "#bfa984",
        Math.cos(a) * 2.65 * landScale,
        -0.5,
        Math.sin(a) * 2.65 * landScale,
        g,
        [1, 0.6, 0.7],
      );
    }
  });
  // A blue maritime board with a layered timber frame replaces the soft lagoon.
  for (const [radius, y, height, color] of [
    [48.4, -1.12, 0.45, "#68462e"],
    [47.9, -0.88, 0.1, "#c5a56c"],
    [47.3, -0.81, 0.06, "#347387"],
  ]) {
    const board = cyl(radius, radius, height, color, 0, y, 1, scene, 6);
    board.rotation.y = 0;
    if (radius === 47.3)
      board.material = [
        mat("#28566b"),
        new T.MeshStandardMaterial({
          map: terrainTexture("sea"),
          roughness: 1,
        }),
        mat("#28566b"),
      ];
    if (radius === 48.4) board.material = woodMaterial();
  }
  const shadow = new T.Mesh(
    new T.PlaneGeometry(140, 140),
    new T.ShadowMaterial({ opacity: 0.12 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.38;
  shadow.receiveShadow = true;
  scene.add(shadow);
  function tree(x, z, s, p, type = 0) {
    const g = new T.Group();
    g.position.set(x, top, z);
    g.scale.setScalar(s);
    p.add(g);
    cyl(0.12, 0.18, 1.2, "#94775c", 0, 0.6, 0, g, 7);
    if (type === 1) {
      for (let i = 0; i < 3; i++)
        cyl(
          0,
          0.85 - i * 0.17,
          1.25 - i * 0.13,
          ["#35563c", "#426749", "#6c8550"][i],
          0,
          1.35 + i * 0.53,
          0,
          g,
          7,
        );
    } else {
      const crown = mesh(new T.DodecahedronGeometry(0.95, 0), "#426447", g);
      crown.position.set(0, 1.8, 0);
      crown.scale.y = 1.2;
      const upper = mesh(new T.DodecahedronGeometry(0.62, 0), "#58794c", g);
      upper.position.set(-0.3, 2.3, 0);
      if (type === 2)
        for (let i = 0; i < 5; i++) {
          let a = i * 2.4;
          ball(
            0.14,
            "#df9b70",
            Math.sin(a) * 0.78,
            1.7 + Math.cos(i * 3) * 0.45,
            Math.cos(a) * 0.65,
            g,
          );
        }
    }
  }
  function flowers(x, z, p, c = "#f6e3ab", n = 9) {
    for (let j = 0; j < n; j++) {
      const g = new T.Group();
      g.position.set(
        x + Math.sin(j * 3.88) * 0.55,
        top,
        z + Math.cos(j * 3.88) * 0.55,
      );
      g.rotation.y = j * 2;
      p.add(g);
      cyl(0.015, 0.018, 0.27, "#849461", 0, 0.12, 0, g, 5);
      for (let i = 0; i < 5; i++) {
        const a = (i * Math.PI * 2) / 5;
        ball(
          0.065,
          c,
          Math.cos(a) * 0.075,
          0.3 + Math.sin(a) * 0.075,
          0,
          g,
          [1, 1, 0.55],
        );
      }
      ball(0.04, "#dcba66", 0, 0.3, 0.025, g);
    }
  }
  function fence(x, z, n, p, rot = 0) {
    const g = new T.Group();
    g.position.set(x, top, z);
    g.rotation.y = rot;
    p.add(g);
    for (let i = 0; i <= n; i++) {
      box(0.1, 0.63, 0.1, "#b59a70", i * 0.5, 0.31, 0, g);
      ball(0.07, "#ccb48b", i * 0.5, 0.65, 0, g);
    }
    for (const h of [0.2, 0.43])
      box(n * 0.5, 0.08, 0.07, "#b59a70", n * 0.25, h, 0, g);
  }
  function path(x, z, w, d, p) {
    box(w, 0.035, d, "#c9ad77", x, top + 0.01, z, p);
  }
  function house(parent, { x = 0, z = 0, w = 2.2, h = 1.7, d = 1.7 } = {}) {
    const group = new T.Group();
    group.position.set(x, top, z);
    parent.add(group);
    const color = parent.userData.playerColor || "#a64331";
    const body = box(w, h * 0.75, d, color, 0, h * 0.375, 0, group);
    const shape = new T.Shape();
    shape.moveTo(-w / 2 - 0.04, 0);
    shape.lineTo(0, h * 0.55);
    shape.lineTo(w / 2 + 0.04, 0);
    shape.closePath();
    const roof = mesh(
      new T.ExtrudeGeometry(shape, { depth: d + 0.08, bevelEnabled: false }),
      color,
      group,
    );
    roof.position.set(0, h * 0.75, -d / 2 - 0.04);
    for (const piece of [body, roof]) {
      const edge = new T.LineSegments(
        new T.EdgesGeometry(piece.geometry),
        new T.LineBasicMaterial({
          color: new T.Color(color).multiplyScalar(0.65),
          transparent: true,
          opacity: 0.4,
        }),
      );
      piece.add(edge);
    }
    box(
      w * 0.19,
      h * 0.34,
      0.025,
      new T.Color(color).multiplyScalar(0.65).getStyle(),
      0,
      h * 0.17,
      d / 2 + 0.018,
      group,
    );
    if (parent === groups.home) {
      box(w * 0.48, h * 1.05, d * 0.7, color, w * 0.58, h * 0.525, -0.1, group);
    }
  }
  function bench(x, z, p, rot = 0) {
    const g = new T.Group();
    p.add(g);
    g.position.set(x, top, z);
    g.rotation.y = rot;
    for (let i = 0; i < 3; i++)
      box(1.1, 0.075, 0.11, "#b28d63", 0, 0.4, i * 0.13, g);
    for (const y of [0.73, 0.9])
      box(1.1, 0.12, 0.08, "#b28d63", 0, y, -0.05, g);
    for (const a of [-0.4, 0.4]) {
      box(0.08, 0.45, 0.08, "#788371", a, 0.2, 0.12, g);
      box(0.06, 0.8, 0.06, "#788371", a, 0.5, -0.05, g);
    }
  }
  function lamp(x, z, p) {
    cyl(0.035, 0.06, 1.55, "#7b8370", x, top + 0.77, z, p, 8);
    box(0.3, 0.34, 0.3, "#fff1c5", x, top + 1.57, z, p);
    cyl(0, 0.25, 0.22, "#73816b", x, top + 1.85, z, p, 4);
  }
  const home = groups.home;
  path(0, 1.3, 0.75, 2.5, home);
  path(1.5, 0.85, 2.5, 0.65, home);
  house(home, { z: -0.6, w: 2.35, h: 1.65, d: 1.9 });
  tree(-1.9, -1.05, 0.86, home, 2);
  tree(1.9, -1.4, 0.86, home);
  flowers(-1.6, 1.55, home);
  flowers(1.6, 1.5, home, "#e7a49a");
  fence(-1, -2.25, 4, home);
  lamp(-0.8, 1.8, home);
  box(0.34, 0.3, 0.4, "#7e9a87", 0.83, 1.33, 1.8, home);
  cyl(0.045, 0.045, 0.6, "#b09876", 0.83, 0.94, 1.8, home);
  const todo = groups.todo;
  house(todo, { x: -0.4, z: -0.7, w: 1.8, h: 1.3, d: 1.5, roof: "#8b9b75" });
  path(0.1, 1, 0.65, 2.4, todo);
  tree(-1.8, 0.35, 0.77, todo, 1);
  tree(0.9, -1.7, 0.9, todo, 2);
  bench(1.35, 0.65, todo, -0.3);
  fence(-1.3, 1.9, 3, todo);
  flowers(-1.5, 1.2, todo);
  flowers(1.8, -0.5, todo, "#faf1d3", 7);
  const note = groups.note;
  house(note, {
    z: -0.3,
    w: 1.9,
    h: 1.4,
    d: 1.5,
    wall: "#f1d5b7",
    roof: "#c18a75",
    shop: true,
  });
  path(0, 1.2, 0.65, 2.1, note);
  tree(-1.8, -0.6, 0.92, note);
  tree(1.8, -1.1, 0.7, note, 1);
  cyl(0.53, 0.53, 0.1, "#d2af7d", 1.4, 1.13, 1.05, note);
  cyl(0.09, 0.14, 0.47, "#ae8b63", 1.4, 0.87, 1.05, note);
  for (const [x, z] of [
    [0.7, 1.3],
    [1.9, 1.65],
  ])
    cyl(0.25, 0.28, 0.45, "#d7b981", x, 0.85, z, note);
  box(0.27, 0.04, 0.35, "#f9eed5", 1.4, 1.21, 1.05, note);
  flowers(-1.65, 1.3, note, "#e2a395");
  fence(-1.3, -2.15, 5, note);
  const friends = groups.friends;
  path(0, 0.5, 0.9, 4.8, friends);
  tree(-1.65, -1.2, 1.05, friends, 1);
  tree(1.7, -0.7, 0.88, friends, 2);
  tree(0.7, -2, 0.75, friends);
  bench(-1.4, 0.6, friends, 0.7);
  flowers(1.5, 1.5, friends, "#eed38b", 11);
  flowers(-1.7, 1.5, friends, "#faf2d5", 10);
  fence(-0.8, -2.2, 4, friends);
  const mem = groups.memories;
  tree(1.5, -1.3, 1.03, mem, 2);
  tree(-0.8, -1.8, 0.8, mem);
  box(1.8, 0.035, 1.45, "#edc7b3", -0.15, top + 0.03, 0.25, mem);
  for (let i = 0; i < 5; i++)
    box(0.07, 0.015, 1.45, "#fff0d7", -0.9 + i * 0.36, top + 0.055, 0.25, mem);
  for (let i = 0; i < 4; i++)
    box(1.8, 0.015, 0.06, "#fff0d7", -0.15, top + 0.06, -0.3 + i * 0.35, mem);
  box(0.45, 0.32, 0.32, "#c5a174", 0.25, 0.86, 0.25, mem);
  const handle = mesh(
    new T.TorusGeometry(0.17, 0.03, 6, 12, Math.PI),
    "#aa895e",
    mem,
  );
  handle.position.set(0.25, 1.04, 0.25);
  box(0.3, 0.19, 0.15, "#6d7b70", -0.5, 0.79, 0.48, mem);
  const lens = cyl(0.07, 0.07, 0.08, "#455950", -0.5, 0.8, 0.59, mem);
  lens.rotation.x = Math.PI / 2;
  bench(-1.7, 0.2, mem, 0.9);
  flowers(1.5, 0.9, mem, "#d5b1bc", 11);
  flowers(-0.9, 1.8, mem);
  fence(0.4, 1.9, 3, mem);
  lamp(-1.3, 1.2, mem);
  function bridge(a, b) {
    const dx = b.x - a.x,
      dz = b.z - a.z,
      len = Math.max(0.8, Math.hypot(dx, dz) - 4.7 * landScale),
      g = new T.Group();
    g.position.set((a.x + b.x) / 2, top - 0.05, (a.z + b.z) / 2);
    g.rotation.y = Math.atan2(dx, dz);
    scene.add(g);
    for (let i = 0; i < 8; i++)
      box(
        0.75,
        0.1,
        (len / 8) * 0.88,
        "#c9a878",
        0,
        0,
        -len / 2 + ((i + 0.5) * len) / 8,
        g,
      );
    for (const s of [-1, 1]) {
      for (const z of [-len / 2, len / 2])
        cyl(0.04, 0.05, 0.55, "#b89c73", s * 0.41, 0.23, z, g, 6);
      box(0.055, 0.055, len, "#d8ba8b", s * 0.41, 0.46, 0, g);
    }
  }
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [2, 3],
  ].forEach(([a, b]) => bridge(defs[a], defs[b]));
  const garden = new T.Group();
  garden.position.set(0, 0, PARK.z);
  garden.userData.playerColor = BOARD_THEMES.park.piece;
  garden.name = "riverside-park";
  scene.add(garden);
  for (const [radius, bottom, height, color, y] of [
    [7.08, 6.36, 1.18, "#c8ae80", -0.12],
    [7.3, 7.08, 0.23, "#efdeb1", 0.38],
    [7.03, 7.25, 0.22, "#b4c991", 0.56],
  ]) {
    const terrain = cyl(radius, bottom, height, color, 0, y, 0, garden, 6);
    terrain.rotation.y = 0;
    if (y === -0.12) terrain.material = woodMaterial();
    if (y === 0.56) styleTerrain(terrain, "pasture");
  }
  bridge(defs[0], { x: 0, z: PARK.z });
  for (let i = 0; i < 12; i++)
    box(1.4, 0.12, 0.24, "#c4a579", 14.8, -0.12, 7 + i * 0.25);
  for (const x of [14.15, 15.45])
    for (const z of [7, 9.8]) cyl(0.08, 0.09, 0.65, "#ae906b", x, -0.13, z);
  const boat = new T.Group();
  boat.position.set(16.8, -0.46, 10.2);
  boat.rotation.y = -0.6;
  scene.add(boat);
  ball(0.6, "#e9d3a3", 0, 0, 0, boat, [0.55, 0.35, 1.5]);
  box(0.5, 0.08, 1.2, "#b29368", 0, 0.08, 0, boat);
  box(0.52, 0.06, 0.17, "#dfc596", 0, 0.19, 0.2, boat);
  cyl(0.02, 0.025, 1.7, "#b99b71", 0, 0.85, -0.15, boat);
  const sh = new T.Shape();
  sh.moveTo(0, 0);
  sh.lineTo(0, 1.25);
  sh.lineTo(0.73, 0.1);
  sh.closePath();
  const sail = new T.Mesh(
    new T.ShapeGeometry(sh),
    new T.MeshStandardMaterial({ color: "#fff2d8", side: T.DoubleSide }),
  );
  sail.position.set(0.03, 0.4, -0.15);
  boat.add(sail);
  const flowMarkers = [];
  function ribbon(curve, width, y, color, parent) {
    const points = curve.getPoints(70),
      vertices = [],
      indices = [];
    points.forEach((point, i) => {
      const tangent = curve.getTangent(i / 70);
      const normal = new T.Vector3(-tangent.z, 0, tangent.x).normalize();
      for (const side of [-1, 1])
        vertices.push(
          point.x + (normal.x * width * side) / 2,
          y,
          point.z + (normal.z * width * side) / 2,
        );
      if (i < 70) {
        const j = i * 2;
        indices.push(j, j + 2, j + 1, j + 1, j + 2, j + 3);
      }
    });
    const geometry = new T.BufferGeometry();
    geometry.setAttribute(
      "position",
      new T.Float32BufferAttribute(vertices, 3),
    );
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const strip = mesh(geometry, color, parent);
    strip.material = new T.MeshStandardMaterial({
      color,
      roughness: 0.8,
      side: T.DoubleSide,
    });
    strip.castShadow = false;
    return strip;
  }
  function curvedPath(points, parent, width = 0.75) {
    const curve = new T.CatmullRomCurve3(
      points.map(([x, z]) => new T.Vector3(x, 0, z)),
    );
    ribbon(curve, width, top + 0.025, "#e5d6ad", parent);
  }
  function river(points, parent, width = 1) {
    const curve = new T.CatmullRomCurve3(
      points.map(([x, z]) => new T.Vector3(x, 0, z)),
    );
    ribbon(curve, width + 0.32, top + 0.035, "#e9dbb6", parent);
    const stream = ribbon(curve, width, top + 0.06, "#91c6bb", parent);
    stream.name = "winding-river";
    for (let i = 0; i < 7; i++) {
      const glint = new T.Mesh(
        new T.CircleGeometry(0.11, 10),
        new T.MeshBasicMaterial({
          color: "#d9eee0",
          transparent: true,
          opacity: 0.7,
        }),
      );
      glint.rotation.x = -Math.PI / 2;
      glint.scale.set(2.5, 0.4, 1);
      parent.add(glint);
      flowMarkers.push({ glint, curve, offset: i / 7 });
    }
    return curve;
  }
  function hill(x, z, s, parent) {
    const mound = ball(1, "#858b53", x, top - 0.1, z, parent, [
      s,
      s * 0.65,
      s * 0.82,
    ]);
    mound.name = "grassy-hill";
    ball(1, "#a1a267", x - s * 0.5, top - 0.12, z + s * 0.2, parent, [
      s * 0.7,
      s * 0.4,
      s * 0.67,
    ]);
    tree(x - s * 0.8, z - 0.5, 0.9, parent, 1);
  }
  function footbridge(x, z, parent, rotation = 0) {
    const g = new T.Group();
    g.position.set(x, top + 0.18, z);
    g.rotation.y = rotation;
    parent.add(g);
    for (let i = 0; i < 12; i++)
      box(
        0.95,
        0.1,
        0.15,
        "#c4a071",
        0,
        Math.sin((i / 11) * Math.PI) * 0.15,
        -0.9 + i * 0.16,
        g,
      );
    for (const side of [-1, 1]) {
      for (const z of [-0.9, 0, 0.9])
        cyl(0.04, 0.05, 0.68, "#ae8f68", side * 0.5, 0.33, z, g, 6);
      box(0.055, 0.06, 1.9, "#d6b789", side * 0.5, 0.65, 0, g);
    }
  }
  // The extra land is usable countryside rather than scaled-up buildings.
  Object.entries(groups).forEach(([id, group], index) => {
    curvedPath(
      [
        [-5.6, 0],
        [-3.4, 0.4],
        [0, 1.6],
        [3.8, 1],
        [5.7, 0],
      ],
      group,
    );
    hill(-3.6, -3.25, 1.65, group);
    for (let i = 0; i < 7; i++) {
      const angle = 0.3 + i * 0.82;
      tree(
        Math.cos(angle) * 5,
        Math.sin(angle) * 4.7,
        0.72 + (i % 3) * 0.16,
        group,
        i % 3 === 0 ? 1 : 0,
      );
    }
    bench(3.8, 2.8, group, -0.6);
    lamp(3.3, 2.6, group);
    flowers(-3.7, 2.7, group, index % 2 ? "#eab5a5" : "#f2e5b1", 6);
    flowers(3.2, -3, group, "#d1b4c9", 6);
    fence(-2.5, 4.9, 5, group);
  });
  river(
    [
      [-6, 1.4],
      [-4.2, 2],
      [-2.4, 3.2],
      [0, 3.5],
      [2.6, 3],
      [4.5, 2.2],
      [6, 1.3],
    ],
    home,
    1.05,
  );
  footbridge(0.2, 3.5, home, 0.2);
  curvedPath(
    [
      [0, 1.5],
      [0.2, 3.5],
      [0, 5.9],
    ],
    home,
    0.8,
  );
  house(todo, { x: 3.5, z: -2.8, w: 1.65, h: 1.25, d: 1.4, roof: "#b2a178" });
  house(note, {
    x: 3.7,
    z: 1,
    w: 1.5,
    h: 1.25,
    d: 1.3,
    roof: "#a3ae89",
    wall: "#f0e5c6",
  });
  hill(3.4, -3.4, 1.5, mem);
  // Riverside central park: an open lawn, twin hills, promenade and picnic pavilion.
  river(
    [
      [-6.1, -1.1],
      [-4, -0.8],
      [-2, 0.3],
      [0, 1.2],
      [2.1, 0.8],
      [4, -0.4],
      [6.1, -1.2],
    ],
    garden,
    1.4,
  );
  hill(-2.6, -3.4, 2, garden);
  hill(2, -3.8, 1.5, garden);
  curvedPath(
    [
      [-4.9, 1.2],
      [-2.5, 2.4],
      [0, 3.2],
      [3, 2.8],
      [4.8, 1.4],
    ],
    garden,
    0.9,
  );
  curvedPath(
    [
      [0, -6],
      [0.4, -3],
      [0.5, 0],
      [0.3, 3.2],
      [0, 5.6],
    ],
    garden,
    0.8,
  );
  footbridge(0.45, 1.1, garden, 0.05);
  footbridge(-4.3, -0.8, garden, -0.5);
  for (const [x, z] of [
    [-5, -2.6],
    [-4, 3.3],
    [-2.7, 4.5],
    [4.9, 2.4],
    [4.7, -3.1],
  ])
    tree(x, z, 0.85, garden);
  for (const [x, z, r] of [
    [-2, 2.2, 0.1],
    [2.8, -1.4, -0.3],
    [-4.5, 1.4, 1.1],
  ])
    bench(x, z, garden, r);
  flowers(-2, 3.9, garden, "#e7b6b3", 8);
  flowers(3.9, 1.9, garden, "#f7e8ad", 8);
  lamp(-1.3, 2.3, garden);
  lamp(2.8, 2.4, garden);
  // A hexagonal gazebo with a warm terracotta roof.
  cyl(1.05, 1.1, 0.14, "#e8d6b0", -3.8, top + 0.1, 2.7, garden, 6);
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3;
    cyl(
      0.045,
      0.06,
      1.6,
      "#c8ac7b",
      -3.8 + Math.cos(a) * 0.82,
      top + 0.95,
      2.7 + Math.sin(a) * 0.82,
      garden,
      6,
    );
  }
  cyl(0, 1.25, 0.85, "#ba8c70", -3.8, top + 2.05, 2.7, garden, 6);
  for (const [id, group] of Object.entries({ ...groups, park: garden })) {
    decorateBoardTile(group, BOARD_THEMES[id], { box, ball, cyl, mesh, top });
  }
  container.dataset.artStyle = "catan-inspired";
  container.dataset.landAreaMultiplier = String(landScale ** 2);
  container.dataset.scenery = "park hills river";
  // Two real pendulum rigs; seated residents follow the same pivots as the seats.
  function timberBetween(a, b, r, color, parent) {
    const start = new T.Vector3(...a),
      end = new T.Vector3(...b),
      delta = end.clone().sub(start);
    const post = cyl(r, r, delta.length(), color, 0, 0, 0, parent, 8);
    post.position.copy(start.add(end).multiplyScalar(0.5));
    post.quaternion.setFromUnitVectors(
      new T.Vector3(0, 1, 0),
      delta.normalize(),
    );
    return post;
  }
  const swingFrame = new T.Group();
  garden.add(swingFrame);
  swingFrame.name = "park-swings";
  for (const x of [0.65, 3.75])
    for (const z of [2.85, 4.75])
      timberBetween(
        [x, top, z],
        [x, top + 2.9, 3.8],
        0.075,
        "#b69a70",
        swingFrame,
      );
  timberBetween(
    [0.4, top + 2.9, 3.8],
    [4, top + 2.9, 3.8],
    0.1,
    "#c3a77d",
    swingFrame,
  );
  const swingPivots = PARK.seats.map((seat) => {
    const pivot = new T.Group();
    pivot.position.set(seat.x, top + 2.8, seat.z);
    swingFrame.add(pivot);
    for (const x of [-0.29, 0.29])
      cyl(0.018, 0.018, 1.75, "#8f967d", x, -0.875, 0, pivot, 6);
    box(0.8, 0.1, 0.48, "#ccac7d", 0, -1.75, 0, pivot);
    return pivot;
  });
  const playBall = ball(
    0.22,
    "#e2b187",
    PARK.play.x,
    top + 0.23,
    PARK.play.z,
    garden,
  );
  playBall.name = "residents-play-ball";
  const ballStripe = mesh(
    new T.TorusGeometry(0.221, 0.018, 5, 16),
    "#fff0d1",
    playBall,
  );
  ballStripe.rotation.x = 0.6;
  let previousActivity;
  try {
    previousActivity = sessionStorage.getItem("little-island-last-activity");
  } catch {}
  const life = createResidentLife({
    nodes: [...defs, PARK],
    links: [
      ["home", "todo"],
      ["home", "note"],
      ["home", "friends"],
      ["home", "memories"],
      ["note", "friends"],
      ["home", "park"],
    ],
    previous: previousActivity,
  });
  try {
    sessionStorage.setItem("little-island-last-activity", life.initialMode);
  } catch {}
  const activityBadge = document.querySelector("#resident-activity");
  function updateActivityBadge() {
    container.dataset.residentActivity = life.mode;
    if (activityBadge) activityBadge.textContent = ACTIVITY_LABELS[life.mode];
  }
  updateActivityBadge();
  life.update(0);
  // Footpaths meet the bridge landings on both ends of every cross-island journey.
  for (const [aIndex, bIndex] of [
    [0, 2],
    [0, 3],
    [2, 3],
  ]) {
    const a = defs[aIndex],
      b = defs[bIndex],
      length = Math.hypot(b.x - a.x, b.z - a.z);
    for (const [from, to] of [
      [a, b],
      [b, a],
    ]) {
      const dx = (to.x - from.x) / length,
        dz = (to.z - from.z) / length;
      const points = [[0, 1.6]];
      if (dz < -0.1) points.push([2.4, 1.4], [2.4, -2.1]);
      points.push([dx * 5.64, dz * 5.64]);
      curvedPath(points, groups[from.id], 0.65);
    }
  }
  const residents = [];
  const plushArt = createPlushArt();
  function plush(type, color, shirt, p, x, z, phase) {
    const g = new T.Group();
    const ball = (r, c, x, y, z, parent, scale) => plushArt.ball(
      r, c, x, y, z, parent, scale,
      c === color || c === "#f3e6cb" ? "fur" : c === shirt ? "fabric" : "smooth",
    );
    p.add(g);
    g.scale.setScalar(0.85);
    ball(0.32, color, 0, 0.43, 0, g, [1, 1.2, 0.8]);
    ball(0.445, color, 0, 1.02, 0.025, g, [1, 0.9, 0.9]);
    const arms = [];
    for (const s of [-1, 1]) {
      if (type === "rabbit") {
        const ear = ball(0.115, color, s * 0.2, 1.5, 0, g, [1, 2.6, 0.8]);
        ear.rotation.z = s * -0.14;
        ball(0.065, "#e0b9ab", s * 0.2, 1.54, 0.075, g, [1, 2.7, 0.4]);
      } else {
        ball(0.145, color, s * 0.31, 1.28, 0, g);
        ball(0.08, "#d3b99d", s * 0.31, 1.28, 0.09, g);
      }
      plushArt.ball(0.035, "#382d27", s * 0.145, 1.07, 0.398, g, [1, 1.1, .55], "eye");
      plushArt.ball(0.009, "#fff8e9", s * 0.145 - .009, 1.082, .414, g, [1, 1, .5], "eye");
      ball(0.065, "#d9a398", s * 0.27, 0.96, 0.35, g, [1, 0.5, 0.25]);
      arms.push(ball(0.12, color, s * 0.34, 0.52, 0, g, [0.8, 1.5, 0.8]));
    }
    ball(0.2, "#f3e6cb", 0, 0.93, 0.355, g, [1, 0.7, 0.35]);
    ball(0.04, "#67533f", 0, 0.98, 0.435, g, [1, 0.7, 0.7]);
    for (const side of [-1, 1]) {
      const curve = new T.QuadraticBezierCurve3(
        new T.Vector3(0, .952, .436),
        new T.Vector3(side * .025, .91, .435),
        new T.Vector3(side * .052, .938, .424),
      );
      const smile = new T.Mesh(new T.TubeGeometry(curve, 12, .007, 6, false), mat("#67533f"));
      g.add(smile);
    }
    ball(0.28, shirt, 0, 0.5, 0.015, g, [1, 1, 0.88]);
    ball(0.04, "#e8cf85", 0, 0.56, 0.25, g);
    const feet = [
      ball(0.135, color, -0.18, 0.1, 0.08, g, [1, 0.7, 1.4]),
      ball(0.135, color, 0.18, 0.1, 0.08, g, [1, 0.7, 1.4]),
    ];
    g.position.set(x, top, z);
    residents.push({ g, feet, arms });
  }
  plush("bear", "#bb956e", "#90a080", scene, 0, 0, 0);
  plush("rabbit", "#f0e0c9", "#d9a28f", scene, 0, 0, 2.1);
  plush("bear", "#a9b18a", "#d8bc7c", scene, 0, 0, 4.2);
  const floralBear = createFloralBear(plushArt);
  scene.add(floralBear.g);
  residents.push(floralBear);
  const frog = createFrog(plushArt);
  scene.add(frog.g);
  residents.push(frog);
  const dinosaur = createDinosaur(plushArt);
  scene.add(dinosaur.g);
  residents.push(dinosaur);
  const clouds = [];
  for (const [x, y, z, s] of [
    [-9, 5, -7, 1],
    [7, 6, -6, 0.7],
    [-7, 4, 6, 0.6],
  ]) {
    const g = new T.Group();
    g.position.set(x * landScale, y + 2, z * landScale);
    g.scale.setScalar(s * 1.4);
    scene.add(g);
    for (const [a, b, c, r] of [
      [0, 0, 0, 0.8],
      [-0.7, -0.1, 0, 0.55],
      [0.65, -0.1, 0.1, 0.6],
      [0.2, 0.3, 0, 0.6],
    ]) {
      const m = ball(r, "#fff9e9", a, b, c, g, [1, 0.63, 0.75]);
      m.castShadow = false;
    }
    clouds.push({ g, x: x * landScale });
  }
  for (let i = 0; i < 12; i++) {
    const a = i * 2.4;
    const r = new T.Mesh(
      new T.TorusGeometry(0.25 + (i % 3) * 0.08, 0.015, 4, 24, Math.PI * 1.4),
      new T.MeshBasicMaterial({
        color: "#eff6e5",
        transparent: true,
        opacity: 0.55,
      }),
    );
    r.rotation.x = -Math.PI / 2;
    r.rotation.z = a;
    r.position.set(
      Math.cos(a) * (9 + (i % 3)) * landScale,
      -0.78,
      (Math.sin(a) * (7 + (i % 3)) - 0.4) * landScale,
    );
    scene.add(r);
  }
  // A quiet, warm balloon rises above the todo island only when work is due soon.
  const todoIsland = defs.find((island) => island.id === "todo");
  const todoBalloon = new T.Group();
  todoBalloon.position.set(todoIsland.x - 2.8, 10.8, todoIsland.z + 1.2);
  todoBalloon.visible = false;
  scene.add(todoBalloon);
  todoBalloon.name = "todo-reminder-balloon";
  const balloonBody = ball(0.95, "#e9c36c", 0, 0, 0, todoBalloon, [1, 1.18, 1]);
  const balloonParts = [balloonBody];
  for (let i = 0; i < 4; i++) {
    const panel = mesh(
      new T.SphereGeometry(0.956, 8, 12, (i * Math.PI) / 2, 0.3),
      "#f6df9b",
      todoBalloon,
    );
    panel.scale.y = 1.18;
    balloonParts.push(panel);
  }
  cyl(0.25, 0.22, 0.36, "#bb9970", 0, -1.65, 0, todoBalloon, 8);
  for (const x of [-0.23, 0.23])
    for (const z of [-0.18, 0.18])
      cyl(0.014, 0.014, 0.7, "#ae9575", x, -1.19, z, todoBalloon, 5);
  const exclamation = new T.Group();
  exclamation.position.set(0.43, 0.05, 0.84);
  todoBalloon.add(exclamation);
  box(0.13, 0.48, 0.035, "#fff8da", 0, 0.12, 0, exclamation);
  ball(0.075, "#fff8da", 0, -0.27, 0, exclamation, [1, 1, 0.3]);
  const reminderButton = container.querySelector("#todo-reminder");
  container.dataset.renderMode = "three";
  const labelDefs = [
    ["todo", "待辦事項島", "一步一步，慢慢來", -5.75, 1.9, 1.4],
    ["note", "記事本島", "留住想說的話", -2.88, 3.9, -5.05],
    ["friends", "家人朋友島", "今天也一起散步", 2.88, 3.8, -5.05],
    ["memories", "美好回憶島", "收藏閃閃發光的日子", 5.75, 2.2, 0.4],
  ];
  const labels = labelDefs.map(([id, title, sub, x, y, z]) => {
    const el = document.createElement("button");
    el.className = "map-label label-" + id;
    el.innerHTML = `<span class="label-symbol">${icon(id)}</span><span><strong>${title}</strong><small>${sub}</small></span><span class="label-arrow">↗</span>`;
    el.onclick = () => onSelect(id);
    container.querySelector("#world-labels").append(el);
    return {
      el,
      point: new T.Vector3(x * landScale * 0.9, y + 1, z * landScale * 0.9),
    };
  });
  const hl = document.createElement("div");
  hl.className = "home-label";
  hl.textContent = "✿ 中央河畔公園";
  container.querySelector("#world-labels").append(hl);
  let width = 1,
    height = 1;
  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const nextDefaultZoom = width < 600 ? 1.4 : 1;
    if (camera.zoom === defaultZoom) camera.zoom = nextDefaultZoom;
    defaultZoom = nextDefaultZoom;
    const aspect = width / height,
      v = width < 600 ? 25 / Math.min(aspect, 1) : 22;
    camera.left = -v * aspect;
    camera.right = v * aspect;
    camera.top = v;
    camera.bottom = -v;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();
  const clock = new T.Clock(),
    reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let greetUntil = 0,
    greetIndex = 0;
  let animationFrame,
    lastFrameTime = 0;
  function animate() {
    animationFrame = requestAnimationFrame(animate);
    // Do not spend GPU time on scenery hidden behind journals or background tabs.
    if (document.hidden || document.body.classList.contains("modal-open"))
      return;
    const t = clock.getElapsedTime();
    if (focusedResident !== null) {
      const resident = residents[focusedResident];
      const target = resident.g.position.clone().add(new T.Vector3(0, .85, 0));
      camera.position.add(target.clone().sub(controls.target));
      controls.target.copy(target);
    }
    controls.update();
    const dt = Math.min(0.05, Math.max(0, t - lastFrameTime));
    lastFrameTime = t;
    const activityTime = reduced ? 0 : t;
    const previousMode = life.mode;
    if (!reduced) life.update(dt);
    if (previousMode !== life.mode) updateActivityBadge();
    {
      residents.forEach((r, i) => {
        const actor = life.actors[i];
        let bridgeLift = 0;
        for (const bridge of [
          { x: 0.2, z: 3.5 },
          { x: 0.45, z: PARK.z + 1.1 },
        ]) {
          if (
            actor.state === "walking" &&
            Math.abs(actor.x - bridge.x) < 0.55 &&
            Math.abs(actor.z - bridge.z) < 1
          )
            bridgeLift =
              0.28 + Math.cos(((actor.z - bridge.z) * Math.PI) / 2) * 0.1;
        }
        r.g.position.set(actor.x, top + actor.yOffset + bridgeLift, actor.z);
        r.g.rotation.set(0, actor.heading, 0);
        const seated = actor.state === "swinging";
        r.feet.forEach((foot, j) => {
          foot.position.y = seated ? 0.23 : (foot.userData.restY ?? 0.1);
          foot.position.z = seated
            ? 0.3
            : (foot.userData.restZ ?? 0.08) +
              (actor.state === "walking"
                ? Math.sin(actor.walkTime * 8 + j * Math.PI) * 0.09
                : 0);
        });
        r.arms.forEach((arm, j) => {
          arm.rotation.x = seated
            ? -1.1
            : actor.state === "pushing"
              ? -0.8 + Math.sin(activityTime * 1.7) * 0.25
              : 0;
          arm.rotation.z =
            actor.state === "playing"
              ? Math.sin(activityTime * 4 + j) * 0.5
              : 0;
        });
        if (!reduced && t < greetUntil && i === greetIndex && !seated) {
          r.g.position.y += Math.abs(Math.sin(t * 8)) * 0.14;
          r.arms[1].rotation.z = -1.2 + Math.sin(t * 7) * 0.4;
        }
      });
      swingPivots.forEach((pivot, slot) => {
        const rider = life.actors.find(
          (actor) => actor.slot === slot && actor.state === "swinging",
        );
        // Positive rotation moves the seat toward positive Z.
        pivot.rotation.x = -(rider?.swingAngle || 0);
      });
      const playing = life.actors.some((actor) => actor.state === "playing");
      playBall.position.set(
        PARK.play.x + (playing ? Math.cos(life.elapsed * 1.1) * 0.75 : 0),
        top +
          0.23 +
          (playing ? Math.abs(Math.sin(life.elapsed * 3)) * 0.45 : 0),
        PARK.play.z + (playing ? Math.sin(life.elapsed * 1.1) * 0.75 : 0),
      );
      playBall.rotation.z = playing ? life.elapsed * 2 : 0;
      if (!reduced) {
        clouds.forEach(
          (c, i) => (c.g.position.x = c.x + Math.sin(t * 0.07 + i) * 0.4),
        );
        boat.position.y = -0.45 + Math.sin(t * 1.3) * 0.035;
        boat.rotation.z = Math.sin(t) * 0.025;
      }
    }
    for (const marker of flowMarkers) {
      const point = marker.curve.getPoint(
        ((reduced ? 0 : t) * 0.025 + marker.offset) % 1,
      );
      marker.glint.position.set(point.x, top + 0.08, point.z);
    }
    if (todoBalloon.visible) {
      const balloonHeight = width < 600 ? 12.8 : 10.8;
      todoBalloon.position.y =
        balloonHeight + (reduced ? 0 : Math.sin(t * 0.8) * 0.15);
      todoBalloon.rotation.z = reduced ? 0 : Math.sin(t * 0.55) * 0.025;
      exclamation.lookAt(camera.position);
      const point = new T.Vector3(
        todoBalloon.position.x,
        balloonHeight - 2.1,
        todoBalloon.position.z,
      ).project(camera);
      const half = reminderButton.offsetWidth / 2 + 8;
      const x = T.MathUtils.clamp(
        (point.x * 0.5 + 0.5) * width,
        half,
        width - half,
      );
      const y = T.MathUtils.clamp(
        (-point.y * 0.5 + 0.5) * height,
        135,
        height - 60,
      );
      reminderButton.style.transform = `translate(-50%,0) translate(${x}px,${y}px)`;
    }
    const placedLabels = [];
    for (const l of labels) {
      const p = l.point.clone().project(camera);
      const half = l.el.offsetWidth / 2 + 8;
      const x = T.MathUtils.clamp(
        (p.x * 0.5 + 0.5) * width,
        half,
        width - half,
      );
      const labelHeight = l.el.offsetHeight;
      const preferredY = T.MathUtils.clamp(
        (-p.y * 0.5 + 0.5) * height,
        labelHeight + 95,
        height - 20,
      );
      // Keep offscreen island links separate when their anchors reach an edge.
      const candidates = [preferredY];
      for (let y = labelHeight + 95; y <= height - 20; y += labelHeight + 8)
        candidates.push(y);
      candidates.sort((a, b) => Math.abs(a - preferredY) - Math.abs(b - preferredY));
      const y = candidates.find((candidate) => placedLabels.every((other) =>
        x + half <= other.left || x - half >= other.right ||
        candidate + 8 <= other.top || candidate - labelHeight >= other.bottom + 8
      )) ?? preferredY;
      placedLabels.push({ left: x - half, right: x + half, top: y - labelHeight, bottom: y });
      l.el.style.transform = `translate(-50%,-100%) translate(${x}px,${y}px)`;
    }
    const p = new T.Vector3(0, 1.1, PARK.z).project(camera);
    hl.style.transform = `translate(-50%,0) translate(${(p.x * 0.5 + 0.5) * width}px,${(-p.y * 0.5 + 0.5) * height}px)`;
    renderer.render(scene, camera);
  }
  animate();
  container.querySelector(".world-loading").remove();
  const ray = new T.Raycaster();
  let down;
  canvas.addEventListener(
    "pointerdown",
    (e) => (down = { x: e.clientX, y: e.clientY }),
  );
  canvas.addEventListener("pointerup", (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
    const r = canvas.getBoundingClientRect();
    ray.setFromCamera(
      new T.Vector2(
        ((e.clientX - r.left) / r.width) * 2 - 1,
        (-(e.clientY - r.top) / r.height) * 2 + 1,
      ),
      camera,
    );
    const hit = ray.intersectObjects(
      todoBalloon.visible ? [...selectable, ...balloonParts] : selectable,
    )[0];
    if (hit && balloonParts.includes(hit.object)) {
      onReminder();
      return;
    }
    if (hit && hit.object.userData.id !== "home")
      onSelect(hit.object.userData.id);
  });
  return {
    dispose() {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      scene.traverse((object) => {
        object.geometry?.dispose();
      });
      for (const material of mats.values()) material.dispose();
      dinosaur.dispose();
      frog.dispose();
      floralBear.dispose();
      plushArt.dispose();
      renderer.dispose();
    },
    zoom(f) {
      camera.zoom = T.MathUtils.clamp(camera.zoom * f, 0.68, 8);
      camera.updateProjectionMatrix();
    },
    setPanMode(enabled) {
      controls.mouseButtons.LEFT = enabled ? T.MOUSE.PAN : T.MOUSE.ROTATE;
      controls.touches.ONE = enabled ? T.TOUCH.PAN : T.TOUCH.ROTATE;
      canvas.style.cursor = enabled ? "grab" : "";
    },
    reset() {
      stopFollowing();
      controls.reset();
      camera.zoom = defaultZoom;
      camera.updateProjectionMatrix();
    },
    focusIsland() {},
    setTodoReminder(count) {
      todoBalloon.visible = count > 0;
    },
    getResidentActivities() {
      return life.descriptions();
    },
    focusResident(index) {
      const resident = residents[index];
      if (!resident) return;
      // Remove residual orbit momentum so selecting a doll is immediate.
      controls.enableDamping = false;
      controls.update();
      const target = resident.g.position.clone().add(new T.Vector3(0, .85, 0));
      const heading = resident.g.rotation.y + .65;
      controls.target.copy(target);
      camera.position.copy(target).add(new T.Vector3(
        Math.sin(heading) * 35, 32, Math.cos(heading) * 35,
      ));
      camera.zoom = 8;
      camera.updateProjectionMatrix();
      controls.update();
      controls.enableDamping = true;
      focusedResident = index;
      container.dataset.focusedResident = String(index);
    },
    watchResidents() {
      stopFollowing();
      const actor = life.actors[0];
      const target =
        life.mode === "wander" ? actor : { x: PARK.x, z: PARK.z + 1.5 };
      const nextTarget = new T.Vector3(target.x, 0.8, target.z);
      camera.position.add(nextTarget.clone().sub(controls.target));
      controls.target.copy(nextTarget);
      controls.update();
      camera.zoom = 2.8;
      camera.updateProjectionMatrix();
    },
    tour() {
      stopFollowing();
      camera.zoom = Math.max(defaultZoom, 1.2);
      camera.updateProjectionMatrix();
    },
    greet(i) {
      greetIndex = i;
      greetUntil = clock.getElapsedTime() + 3;
    },
  };
}
