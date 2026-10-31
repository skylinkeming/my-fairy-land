import {LEISURE_LABELS} from './resident-leisure.js';
import {createLeisureArt} from './resident-leisure-art.js';
import {buildEnterableBuilding,clearBuildingFootprints,roomContains} from './enterable-buildings.js';
import {addRiversideWatermill} from './island-landmarks.js';
import { addExpandedScenery, batchExpandedScenery, addConnectedSceneryPaths } from "./expanded-scenery.js";
import { seatedRootHeight } from "./resident-pose.js";
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
import {collectSceneryNavigation} from "./scenery-navigation.js";
import { createResidentLife, ACTIVITY_LABELS, PARK as BASE_PARK } from "./resident-life.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { applyResidentShape, disposeShapeGeometry, RESIDENT_SHAPE_IDS } from "./resident-shape.js";
export function createWorld(
  container,
  onSelect,
  icon,
  onReminder = () => onSelect("todo"),
  { onResidentSelect = () => {}, onVisitChange = () => {}, onActivityChange = () => {}, onReady = () => {}, onEditResident = () => {}, onGroupPhotoChange = () => {}, residentShapes = {}, isUiCovered = () => false, reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches } = {},
) {
  const sceneryAnimations = [], buildingViews = [];
  let showAllInteriors = false;
  const PARK = {...BASE_PARK, z: BASE_PARK.z * 2, walkRadius: 12, bridgeHalfWidth: .94};
  const canvas = container.querySelector("canvas"),
    renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
  let frameDirty = true, reduced = Boolean(reducedMotion);
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
  controls.enableDamping = !reduced;
  controls.minZoom = 0.68;
  controls.maxZoom = 14;
  controls.enablePan = true;
  controls.screenSpacePanning = false;
  controls.minPolarAngle = 0.4;
  controls.maxPolarAngle = 1.22;
  controls.target.set(0, 0.1, 1.8);
  controls.rotateSpeed = 0.55;
  controls.update();
  controls.saveState();
  let focusedResident = null;
  let interactingResident = null;
  function stopFollowing() {
    focusedResident = null;
    delete container.dataset.focusedResident;
    delete container.dataset.followedResident;
  }
  controls.addEventListener("start", stopFollowing);
  scene.add(new T.AmbientLight(0xfff2d6, 1.55));
  const sun = new T.DirectionalLight(0xfff0d2, 2.5);
  sun.position.set(-25, 55, 32);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, {
    left: -65,
    right: 65,
    top: 65,
    bottom: -65,
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
  // Double the previous island width and depth; buildings retain their original size.
  const landScale = 4.8;
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
    d.walkRadius = 12;
    d.bridgeHalfWidth = .94;
    d.x *= landScale * 0.9;
    d.z *= landScale * 0.9;
    const g = new T.Group();
    g.position.set(d.x, 0, d.z);
    scene.add(g);
    groups[d.id] = g;
    g.userData.playerColor = BOARD_THEMES[d.id].piece;
    for (const [r, b, h, c, y] of [
      [2.95, 2.65, 1.18, "#c8ae80", -0.12],
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
    [65.1, -1.12, 0.45, "#68462e"],
    [64.6, -0.88, 0.1, "#c5a56c"],
    [64, -0.81, 0.06, "#347387"],
  ]) {
    const board = cyl(radius, radius, height, color, 0, y, 1, scene, 6);
    board.rotation.y = 0;
    if (radius === 64)
      board.material = [
        mat("#28566b"),
        new T.MeshStandardMaterial({
          map: terrainTexture("sea"),
          roughness: 1,
        }),
        mat("#28566b"),
      ];
    if (radius === 65.1) board.material = woodMaterial();
  }
  const shadow = new T.Mesh(
    new T.PlaneGeometry(190, 190),
    new T.ShadowMaterial({ opacity: 0.12 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.38;
  shadow.receiveShadow = true;
  scene.add(shadow);
  function tree(x, z, s, p, type = 0) {
    const g = new T.Group();
    g.userData.walkObstacle = true;
    g.userData.walkObstacleRadius = .22;
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
      g.userData.walkThrough = true;
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
    g.userData.walkObstacle = true;
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
  // Main homes are placed together after their former miniature gardens are known.
  const plannedHomes=new Set();
  function house(parent) {
    const id=Object.entries(groups).find(([,group])=>group===parent)?.[0];
    if(id==='home'||id==='note') plannedHomes.add(id);
  }
  function bench(x, z, p, rot = 0, width = 1.1) {
    const g = new T.Group();
    g.userData.walkObstacle = true;
    p.add(g);
    g.position.set(x, top, z);
    g.rotation.y = rot;
    for (let i = 0; i < 3; i++)
      box(width, 0.075, 0.11, "#b28d63", 0, 0.4, i * 0.13, g);
    for (const y of [0.73, 0.9])
      box(width, 0.12, 0.08, "#b28d63", 0, y, -0.05, g);
    for (const a of [-width * .36, width * .36]) {
      box(0.08, 0.45, 0.08, "#788371", a, 0.2, 0.12, g);
      box(0.06, 0.8, 0.06, "#788371", a, 0.5, -0.05, g);
    }
    return g;
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
        2.8,
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
        cyl(0.04, 0.05, 0.55, "#b89c73", s * 1.5, 0.23, z, g, 6);
      box(0.055, 0.055, len, "#d8ba8b", s * 1.5, 0.46, 0, g);
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
    [7.03, 7.25, 0.22, "#b4c991", 0.56],
  ]) {
    const terrain = cyl(radius * 2, bottom * 2, height, color, 0, y, 0, garden, 6);
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
  const flowMarkers = [], riverDefinitions = [], footbridgeDefinitions = [];
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
          y + point.y,
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
      points.map(([x, z, y = 0]) => new T.Vector3(x, y, z)),
    );
    ribbon(curve, width + 0.32, top + 0.035, "#e9dbb6", parent);
    const stream = ribbon(curve, width, top + 0.06, "#91c6bb", parent);
    stream.name = "winding-river";
    riverDefinitions.push({curve, parent, width, coastal:true});
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
    mound.userData.walkObstacle = true;
    const slope = ball(1, "#a1a267", x - s * 0.5, top - 0.12, z + s * 0.2, parent, [
      s * 0.7,
      s * 0.4,
      s * 0.67,
    ]);
    slope.userData.walkObstacle = true;
    tree(x - s * 0.8, z - 0.5, 0.9, parent, 1);
  }
  function footbridge(x, z, parent, rotation = 0) {
    const g = new T.Group();
    g.userData.walkThrough = true;
    g.userData.walkHalfWidth = .84;
    footbridgeDefinitions.push({group: g, island: Object.entries({...groups, park: garden}).find(([, value]) => value === parent)?.[0]});
    g.position.set(x, top + 0.18, z);
    g.rotation.y = rotation;
    parent.add(g);
    for (let i = 0; i < 12; i++)
      box(
        2.6,
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
        cyl(0.04, 0.05, 0.68, "#ae8f68", side * 1.44, 0.33, z, g, 6);
      box(0.055, 0.06, 1.9, "#d6b789", side * 1.44, 0.65, 0, g);
    }
  }

  river(
    [
      [-13.6, 11.4, -1.48],
      [-11.8, 9.6, -.22],
      [-10.8, 7.8],
      [-9.3, 4.4],
      [-6, 1.4],
      [-4.2, 2],
      [-2.4, 3.2],
      [0, 3.5],
      [2.6, 3],
      [4.5, 2.2],
      [6, 1.3],
      [9, 4.5],
      [10.8, 7.8],
      [11.8, 9.6, -.22],
      [13.6, 11.4, -1.48],
    ],
    home,
    1.05,
  );
  footbridge(0.2, 3.5, home, 0.2);
  footbridge(-8.5, 3.55, home, .72);
  addRiversideWatermill({parent:home,top,box,ball,cyl,animations:sceneryAnimations});
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
      [-14.5, -4.4, -1.48],
      [-12.6, -3.9, -.22],
      [-11.9, -3.7],
      [-9.2, -2.4],
      [-6.1, -1.1],
      [-4, -0.8],
      [-2, 0.3],
      [0, 1.2],
      [2.1, 0.8],
      [4, -0.4],
      [6.1, -1.2],
      [9.2, -2.5],
      [11.9, -3.5],
      [12.6, -3.7, -.22],
      [14.5, -4.1, -1.48],
    ],
    garden,
    1.4,
  );
  hill(-4.4, -3.5, 1.05, garden);
  hill(4, -4, 1, garden);
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
    [-5, 2.2, 1.1],
  ])
    bench(x, z, garden, r);
  // Shared coordinates keep the two seated residents aligned with a full-size bench.
  const chatBench = bench(PARK.chatBench.x, PARK.chatBench.z, garden,
    PARK.chatBench.heading, PARK.chatBench.width);
  chatBench.name = "resident-chat-bench";
  chatBench.userData.obstacleId = "park-chat-bench";
  curvedPath([[PARK.stroll.x, PARK.stroll.far], [PARK.stroll.x, PARK.stroll.near]], garden, 1.9);
  for (const [x, z] of [[-4.8, -3.3], [-4.7, -3.7], [-4.6, -1.5]]) tree(x, z, .75, garden);
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
  for(const [island,type,name,x,z,heading] of [
    ['home','home','河畔的家',0,-1.6,0],
    ['note','library','田園閱讀小屋',0,-1.5,0],
    ['memories','cabin','海邊休憩小屋',-4,3.4,0],
    ['park','teahouse','公園茶屋',-6,-6,Math.PI/2],
  ]) {
    if((island==='home'||island==='note')&&!plannedHomes.has(island)) continue;
    buildingViews.push(buildEnterableBuilding({id:`${island}-${type}`,island,type,name,parent:island==='park'?garden:groups[island],x,z,heading,
      baseY:top,box,ball,cyl,batchRoot:true,color:island==='home'?'#bd8e81':'#8ea296'}));
  }
  clearBuildingFootprints({...groups,park:garden},buildingViews,footbridgeDefinitions.map(item=>item.group));
  const coreRoomData=buildingViews.map(building=>building.describe());
  const layoutReservations=coreRoomData.flatMap(room=>{
    const swapped=Math.abs(Math.sin(room.heading))>.5;
    return [{id:`${room.id}-garden-reserve`,minX:room.center.x-(swapped?room.depth:room.width)/2-.3,maxX:room.center.x+(swapped?room.depth:room.width)/2+.3,
      minZ:room.center.z-(swapped?room.width:room.depth)/2-.3,maxZ:room.center.z+(swapped?room.width:room.depth)/2+.3},
      {id:`${room.id}-door-reserve`,minX:room.exit.x-1.3,maxX:room.exit.x+1.3,minZ:room.exit.z-1.3,maxZ:room.exit.z+1.3}];
  });
  const originalScenery = collectSceneryNavigation({...groups, park: garden}, riverDefinitions, footbridgeDefinitions, top);
  const expandedScenery = addExpandedScenery({buildings:buildingViews,animations:sceneryAnimations,rivers:riverDefinitions,footbridges:footbridgeDefinitions,obstacles: [...originalScenery.obstacles,...layoutReservations], crossings: originalScenery.crossings,groups: {...groups, park: garden}, nodes: [...defs, PARK], scene, top, box, ball, cyl, mesh, tree, curvedPath});
  container.dataset.expandedScenery = JSON.stringify(expandedScenery);
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
    for (const z of [3.2, 4.75])
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
    pivot.userData.walkThrough = true;
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
  playBall.userData.walkThrough = true;
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
  clearBuildingFootprints({...groups,park:garden},buildingViews,footbridgeDefinitions.map(item=>item.group));
  const roomData=buildingViews.map(building=>building.describe());
  const navigationData = collectSceneryNavigation({...groups, park: garden}, riverDefinitions, footbridgeDefinitions, top);
  // The pavilion is reserved scenery, not a shortcut through its posts.
  navigationData.obstacles.push({id: 'park-pavilion', island: 'park', minX: -4.95, maxX: -2.65, minZ: PARK.z + 1.55, maxZ: PARK.z + 3.85});
  const life = createResidentLife({
    ...navigationData,
    buildings:roomData,
    leisure:true,
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
  addConnectedSceneryPaths({groups: {...groups, park: garden}, nodes: [...defs, PARK], navigation: life.navigation, scenery: expandedScenery, curvedPath});
  batchExpandedScenery(scene);
  container.dataset.walkableIslands = JSON.stringify(life.navigation.islandCounts);
  try {
    sessionStorage.setItem("little-island-last-activity", life.initialMode);
  } catch {}
  function finishResidentVisit() {
    if (interactingResident !== null) life.resume(interactingResident);
    interactingResident = null;
    delete container.dataset.pausedResident;
    container.dataset.residentBubbleVisible="false";
    onVisitChange(null);
    controls.minPolarAngle = .4;
    controls.maxPolarAngle = 1.22;
    stopFollowing();
  }
  function visitResident(index) {
    frameDirty = true;
    const resident = residents[index];
    if (!resident) return;
    finishResidentVisit();
    interactingResident = index;
    life.pause(index);
    container.dataset.pausedResident = String(index);
    onVisitChange(index);
    onResidentSelect(index);
    // Clear residual orbit momentum, then hold the paused doll at the orbit centre.
    controls.enableDamping = false;
    controls.update();
    const target = resident.g.position.clone().add(new T.Vector3(0, .85, 0));
    const heading = resident.g.rotation.y + .65;
    controls.target.copy(target);
    camera.position.copy(target).add(new T.Vector3(Math.sin(heading) * 45, 42, Math.cos(heading) * 45));
    camera.zoom = 13.8;
    camera.updateProjectionMatrix();
    controls.minPolarAngle = .08;
    controls.maxPolarAngle = Math.PI - .08;
    controls.mouseButtons.LEFT = T.MOUSE.ROTATE;
    controls.touches.ONE = T.TOUCH.ROTATE;
    controls.update();
    controls.enableDamping = !reduced;
    focusedResident = index;
    container.dataset.focusedResident = String(index);
  }
  let activitySignature='';
  function updateActivityBadge() {
    const kinds=[...new Set(life.actors.filter(actor=>actor.target?.leisureSite).map(actor=>LEISURE_LABELS[actor.target.leisureKind]||'合照'))];
    activitySignature=life.mode+':'+kinds.join(',');
    container.dataset.residentActivity = life.mode;
    onActivityChange({mode: life.mode, label:kinds.length?`島上小日常 · ${kinds.join('、')}`:ACTIVITY_LABELS[life.mode]});
  }
  updateActivityBadge();
  life.update(0);
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
    g.userData.shapeHeadPivot = [0, 1.02, .025];
    for (const part of g.children) {
      part.userData.shapePart = arms.includes(part) ? 'arms' : feet.includes(part) ? 'feet' :
        part.position.y >= .85 || part.geometry.type === 'TubeGeometry' ? 'head' : 'body';
      if (part.position.y > 1.06 && part.position.y < 1.09 && part.position.z > .39) part.userData.shapeEye = true;
    }
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
  const residentTemplates = residents.map(resident => resident.g.clone(true));
  residents.forEach(resident=>{
    const cup=new T.Group();cup.name='resident-coffee-cup';cup.visible=false;resident.g.add(cup);
    cyl(.095,.085,.17,'#f0e4ce',0,0,0,cup,16);
    cyl(.077,.077,.012,'#785a43',0,.09,0,cup,16);
    const handle=mesh(new T.TorusGeometry(.055,.015,5,12),'#f0e4ce',cup);handle.position.x=.1;handle.rotation.y=Math.PI/2;
    resident.cup=cup;
  });
  const leisureArt=createLeisureArt({scene,residents,sites:life.leisure.sites,top});
  let lastPhotoPhase='idle',lastPhotoArrived=-1;
  function visibleTree(object) {
    for(let node=object;node;node=node.parent)if(!node.visible)return false;
    return true;
  }
  function frameResidents(actors,group=false) {
    const points=actors.map(actor=>group?actor.target.point:actor);
    const center=points.reduce((sum,point)=>({x:sum.x+point.x/points.length,z:sum.z+point.z/points.length}),{x:0,z:0});
    scene.updateMatrixWorld(true);
    const occluders=[];
    scene.traverse(object=>{
      if(!object.isMesh||!visibleTree(object))return;
      for(let node=object;node;node=node.parent)if(residents.some(resident=>resident.g===node))return;
      occluders.push(object);
    });
    const raycaster=new T.Raycaster(),preferred=group?0:actors[0].target.heading||0;
    let best=null;
    const angles=group?[0,Math.PI,-Math.PI/2,Math.PI/2,-Math.PI/4,Math.PI/4,Math.PI*3/4,-Math.PI*3/4]:[0,-Math.PI/4,Math.PI/4,-Math.PI/2,Math.PI/2,-Math.PI*3/4,Math.PI*3/4,Math.PI];
    for(const elevation of [16,24])for(const offset of angles) {
      const angle=preferred+offset,position=new T.Vector3(center.x+Math.sin(angle)*12,top+elevation,center.z+Math.cos(angle)*12);
      let visible=0;
      for(const point of points) {
        let clear=true;
        for(const height of [.65,1.2]) {
          const target=new T.Vector3(point.x,top+height,point.z),direction=target.clone().sub(position);
          raycaster.set(position,direction.clone().normalize());raycaster.far=direction.length()-.08;
          if(raycaster.intersectObjects(occluders,false).length){clear=false;break;}
        }
        if(clear)visible++;
      }
      const score=visible*100-elevation*.01-Math.abs(offset)*.01;
      if(!best||score>best.score)best={score,position,angle,visible};
      if(visible===points.length)break;
    }
    if(!best)return;
    focusedResident=group?null:actors[0].id;
    controls.target.set(center.x,top+.8,center.z);camera.position.copy(best.position);
    camera.zoom=Math.min(14,(camera.right-camera.left)/(group?8.5:4),(camera.top-camera.bottom)/(group?7:4));
    camera.updateProjectionMatrix();controls.update();frameDirty=true;
    if(group){container.dataset.photoVisibleResidents=String(best.visible);actors.forEach(actor=>{actor.target.heading=best.angle;actor.heading=best.angle;});}
    else if(actors[0].state==='photographing'&&!life.leisure.active.some(record=>record.ids.includes(actors[0].id)&&record.ids.length>1)){actors[0].target.heading=best.angle;actors[0].heading=best.angle;}
  }
  function frameGroupPhoto(){if(life.leisure.photo)frameResidents(life.actors,true);}
  let framedLeisureSite=null;
  function setResidentShapes(settings) {
    frameDirty = true;
    residents.forEach((resident, index) => {
      applyResidentShape(resident.g, settings[RESIDENT_SHAPE_IDS[index]]);
      resident.g.updateWorldMatrix(true,true);
      const bounds=new T.Box3();
      resident.g.children.filter(part=>part.userData.shapePart).forEach(part=>bounds.expandByObject(part,true));
      resident.headHeight=bounds.max.y-resident.g.getWorldPosition(new T.Vector3()).y;
    });
  }
  setResidentShapes(residentShapes);
  function openResidentEditor(index = 0) {
    finishResidentVisit();
    onEditResident(index);
  }
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
    ["todo", "待辦事項島", "森林工坊與菜園", -5.75, 1.9, 1.4],
    ["note", "記事本島", "風車麥田與閱讀角落", -2.88, 3.9, -5.05],
    ["friends", "家人朋友島", "花園咖啡與遊戲草坪", 2.88, 3.8, -5.05],
    ["memories", "美好回憶島", "海邊露營與觀星", 5.75, 2.2, 0.4],
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
  hl.textContent = "✿ 中央湖畔公園";
  container.querySelector("#world-labels").append(hl);
  let width = 1,
    height = 1;
  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    if (!width || !height) return;
    frameDirty = true;
    renderer.setSize(width, height, false);
    const nextDefaultZoom = width < 600 ? 1.4 : 1;
    if (camera.zoom === defaultZoom) camera.zoom = nextDefaultZoom;
    defaultZoom = nextDefaultZoom;
    const aspect = width / height,
      v = width < 600 ? 43 / Math.min(aspect, 1) : 38;
    camera.left = -v * aspect;
    camera.right = v * aspect;
    camera.top = v;
    camera.bottom = -v;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();
  const clock = new T.Clock();
  let greetUntil = 0,
    greetIndex = 0;
  let animationFrame,
    lastFrameTime = 0;
  function animate() {
    animationFrame = requestAnimationFrame(animate);
    // Do not spend GPU time on scenery hidden behind journals or background tabs.
    if (document.hidden || isUiCovered())
      return;
    const t = clock.getElapsedTime();
    if (focusedResident !== null) {
      const resident = residents[focusedResident];
      const target = resident.g.position.clone().add(new T.Vector3(0, .85, 0));
      camera.position.add(target.clone().sub(controls.target));
      controls.target.copy(target);
    }
    const cameraChanged = controls.update();
    const dt = Math.min(0.05, Math.max(0, t - lastFrameTime));
    lastFrameTime = t;
    const activityTime = reduced ? 0 : t;
    const previousMode = life.mode;
    const manualMotion=reduced && life.hasManualVisits;
    if (!reduced || manualMotion) life.update(dt,manualMotion);
    const openBuildings=[];
    for(let index=0;index<buildingViews.length;index++) {
      const open=showAllInteriors || life.actors.some(actor=>roomContains(roomData[index],actor,.12));
      buildingViews[index].roof.visible=!open;buildingViews[index].upper.visible=!open;
      if(open) openBuildings.push(roomData[index].id);
    }
    container.dataset.openBuildings=JSON.stringify(openBuildings);
    const followed=life.actors[focusedResident];
    if(followed?.target?.leisureSite&&followed.state!=='walking'&&framedLeisureSite!==followed.target.leisureSite) {
      framedLeisureSite=followed.target.leisureSite;frameResidents([followed]);
    }
    container.dataset.leisureActivities=JSON.stringify(life.descriptions());
    const photoPhase=life.leisure.photo?.phase||'idle';
    if(photoPhase!==lastPhotoPhase) {
      lastPhotoPhase=photoPhase;container.dataset.groupPhoto=photoPhase;
      if(photoPhase==='posing')frameGroupPhoto();
      if(photoPhase!=='ready'&&photoPhase!=='finished')onGroupPhotoChange({phase:photoPhase});
    }
    const arrived=life.actors.filter(actor=>actor.state==='photo-posing'&&actor.target?.leisureSite==='group-photo').length;
    if(photoPhase==='gathering'&&arrived!==lastPhotoArrived){lastPhotoArrived=arrived;onGroupPhotoChange({phase:'gathering',arrived,total:life.actors.length});}
    container.dataset.indoorResidents=JSON.stringify(life.actors.filter(actor=>actor.state==='indoors').map(actor=>actor.id));
    const signature=life.mode+':'+[...new Set(life.actors.filter(actor=>actor.target?.leisureSite).map(actor=>LEISURE_LABELS[actor.target.leisureKind]||'合照'))].join(',');
    if (previousMode !== life.mode || signature!==activitySignature) updateActivityBadge();
    {
      residents.forEach((r, i) => {
        const actor = life.actors[i];
        let bridgeLift = 0;
        for (const crossing of navigationData.crossings) {
          const dx = crossing.b.x - crossing.a.x, dz = crossing.b.z - crossing.a.z;
          const length = Math.hypot(dx, dz), ux = dx / length, uz = dz / length;
          const x = actor.x - (crossing.a.x + crossing.b.x) / 2;
          const z = actor.z - (crossing.a.z + crossing.b.z) / 2;
          const along = x * ux + z * uz, lateral = x * uz - z * ux;
          const deckHalfLength=crossing.deckHalfLength ?? 1.15;
          if (crossing.coastalDeck && Math.abs(along)<deckHalfLength+.2 && Math.abs(lateral)<crossing.halfWidth) bridgeLift=Math.max(bridgeLift,crossing.lift||.09);
          if (!crossing.coastalDeck && actor.state === 'walking' && Math.abs(along) < deckHalfLength && Math.abs(lateral) < (crossing.halfWidth ?? .3)) {
            const ramp = Math.min(1, (deckHalfLength - Math.abs(along)) / .2);
            bridgeLift = (.23 + Math.max(0, Math.cos(along * Math.PI / (deckHalfLength*2))) * .15) * ramp;
          }
        }
        const room=roomData.find(room=>roomContains(room,actor));
        const floorLift=room?room.floorY-top:0;
        r.g.position.set(actor.x, top + actor.yOffset + bridgeLift + floorLift, actor.z);
        r.g.rotation.set(0, actor.heading, 0);
        const seated = actor.state === "swinging" || actor.state === "chatting" || actor.state === "indoors" || actor.state === "picnicking";
        const walking = actor.state === "walking" || actor.state === "strolling";
        r.feet.forEach((foot, j) => {
          foot.position.y = actor.state==='indoors' ? .08 : seated ? 0.23 : (foot.userData.restY ?? 0.1);
          foot.position.z = seated
            ? 0.3
            : (foot.userData.restZ ?? 0.08) +
              (walking
                ? Math.sin(actor.walkTime * 8 + j * Math.PI) * 0.09
                : 0);
        });
        if (seated) {
          const seatSurface = actor.state==='picnicking' ? top+.16 : actor.state==='indoors' ? actor.target.seatHeight : actor.state === "chatting"
            ? top + PARK.chatBench.height + .075 / 2
            : top + 2.8 - Math.cos(actor.swingAngle) * 1.75 + .1 / 2;
          r.g.position.y = seatedRootHeight(r.g, seatSurface);
        }
        r.arms.forEach((arm, j) => {
          arm.rotation.x = seated
            ? (actor.state === "chatting" ? -.35 : -1.1)
            : actor.state === "pushing"
              ? -0.8 + Math.sin(activityTime * 1.7) * 0.25
              : 0;
          arm.rotation.z =
            actor.state === "playing"
              ? Math.sin(activityTime * 4 + j) * 0.5
              : actor.state === "chatting"
                ? Math.sin(activityTime * 1.4 + actor.phase + j) * .12
                : 0;
        });
        r.cup.visible=actor.state==='indoors';
        if(r.cup.visible) {
          const sip=reduced?0:Math.pow(Math.max(0,Math.sin(actor.sipTime*.95)),4);
          r.cup.position.set(.28,.7+sip*.31,.53+sip*.03);
          r.cup.rotation.x=-sip*.25;
          if(r.arms[1]) r.arms[1].rotation.x=-.55-sip*.65;
        }
        leisureArt.update(actor,r,reduced);
        if (!reduced && !life.isPaused(i) && t < greetUntil && i === greetIndex && !seated) {
          r.g.position.y += Math.abs(Math.sin(t * 8)) * 0.14;
          r.arms[1].rotation.z = -1.2 + Math.sin(t * 7) * 0.4;
        }
      });
      leisureArt.updateSites(life.actors,reduced);
      swingPivots.forEach((pivot, slot) => {
        const rider = life.actors.find(
          (actor) => actor.slot === slot && actor.state === "swinging",
        );
        // Positive rotation moves the seat toward positive Z.
        pivot.rotation.x = -(rider?.swingAngle || 0);
      });
      const players = life.actors.filter(actor => actor.state === 'playing');
      const playing = players.length === 2;
      playBall.visible = playing;
      if (playing) {
        const t = (Math.sin(life.elapsed * 1.7) + 1) / 2;
        playBall.position.set(
          players[0].x * (1 - t) + players[1].x * t - PARK.x,
          top + .5 + Math.sin(t * Math.PI) * .65,
          players[0].z * (1 - t) + players[1].z * t - PARK.z,
        );
        playBall.rotation.z = life.elapsed * 2;
      }
      if (!reduced) {
        sceneryAnimations.forEach(update=>update(t));
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
      marker.glint.position.set(point.x, top + 0.08 + point.y, point.z);
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
    if(interactingResident!==null) {
      const resident=residents[interactingResident];
      const head=resident.g.getWorldPosition(new T.Vector3());head.y+=(resident.headHeight || 1.7)+.12;
      head.project(camera);
      const headX=(head.x*.5+.5)*width,headY=(-head.y*.5+.5)*height;
      const speech=container.querySelector('.resident-speech');
      const half=(speech?.offsetWidth || Math.min(270,width-24))/2;
      const speechHeight=speech?.offsetHeight || 64;
      const x=T.MathUtils.clamp(headX,half+12,width-half-12);
      const y=T.MathUtils.clamp(headY-14,speechHeight+12,height-16);
      container.style.setProperty('--resident-bubble-x',`${x}px`);
      container.style.setProperty('--resident-bubble-y',`${y}px`);
      container.style.setProperty('--resident-bubble-tail',`${T.MathUtils.clamp(headX-x,-half+20,half-20)}px`);
      container.dataset.residentBubbleVisible=String(head.z>=-1 && head.z<=1 && headX>=0 && headX<=width && headY>=0 && headY<=height);
      container.dataset.residentHeadX=String(headX);container.dataset.residentHeadY=String(headY);
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
    // Static scenes need no GPU redraw until a command, resize or camera move.
    if (!reduced || manualMotion || cameraChanged || frameDirty) {
      renderer.render(scene, camera);
      if(life.leisure.photo?.phase==='ready') {
        try {onGroupPhotoChange({phase:'ready',url:canvas.toDataURL('image/png')});}
        catch {onGroupPhotoChange({phase:'error'});}
        life.leisure.releasePhoto();
      }
      frameDirty = false;
    }
  }
  animate();
  onReady();
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
    const residentHit = ray.intersectObjects(residents.map(resident => resident.g), true).find(hit=>visibleTree(hit.object));
    if (residentHit) {
      const index = residents.findIndex(resident => {
        let object = residentHit.object;
        while (object) { if (object === resident.g) return true; object = object.parent; }
        return false;
      });
      if (index !== -1) { visitResident(index); return; }
    }
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
      leisureArt.dispose();
      residents.forEach(resident => disposeShapeGeometry(resident.g));
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
    setReducedMotion(enabled) {
      reduced = enabled;
      // Reduced motion also removes inertial camera movement after a drag.
      controls.enableDamping = !enabled;
      controls.update();
      frameDirty = true;
    },
    zoom(f) {
      frameDirty = true;
      camera.zoom = T.MathUtils.clamp(camera.zoom * f, 0.68, 14);
      camera.updateProjectionMatrix();
    },
    setPanMode(enabled) {
      controls.mouseButtons.LEFT = enabled ? T.MOUSE.PAN : T.MOUSE.ROTATE;
      controls.touches.ONE = enabled ? T.TOUCH.PAN : T.TOUCH.ROTATE;
      canvas.style.cursor = enabled ? "grab" : "";
    },
    reset() {
      frameDirty = true;
      finishResidentVisit();
      controls.reset();
      camera.zoom = defaultZoom;
      camera.updateProjectionMatrix();
    },
    focusIsland() { finishResidentVisit(); },
    setTodoReminder(count) {
      frameDirty = true;
      todoBalloon.visible = count > 0;
    },
    getNavigationData() {return {nodes: [...defs, PARK], links: [["home","todo"],["home","note"],["home","friends"],["home","memories"],["note","friends"],["home","park"]], ...navigationData, leisure:true,leisureSites:life.leisure.sites, buildings:roomData, scenery: expandedScenery};},
    setInteriorsVisible(enabled) {showAllInteriors=Boolean(enabled);frameDirty=true;},
    goForCoffee(index) {
      if(!life.visitBuilding(index,'cafe')) return false;
      finishResidentVisit();frameDirty=true;focusedResident=index;
      const actor=life.actors[index],target=new T.Vector3(actor.x,.9,actor.z);
      controls.target.copy(target);camera.position.copy(target).add(new T.Vector3(30,30,40));
      camera.zoom=7;camera.updateProjectionMatrix();controls.update();
      container.dataset.followedResident=String(index);
      return true;
    },
    goHome(index) {
      if(!life.visitBuilding(index,'home')) return false;
      finishResidentVisit();frameDirty=true;focusedResident=index;
      const actor=life.actors[index],target=new T.Vector3(actor.x,.9,actor.z);
      controls.target.copy(target);camera.position.copy(target).add(new T.Vector3(30,30,40));
      camera.zoom=7;camera.updateProjectionMatrix();controls.update();
      container.dataset.followedResident=String(index);return true;
    },
    doActivity(index,kind) {
      if(!life.requestLeisure(index,kind))return false;
      finishResidentVisit();frameDirty=true;focusedResident=index;framedLeisureSite=null;return true;
    },
    takeGroupPhoto() {
      finishResidentVisit();
      if(!life.leisure.groupPhoto())return false;
      frameGroupPhoto();frameDirty=true;onGroupPhotoChange({phase:'gathering'});return true;
    },
    cancelGroupPhoto(){const cancelled=life.leisure.cancelPhoto();if(cancelled){frameDirty=true;onGroupPhotoChange({phase:'cancelled'});}return cancelled;},
    getResidentActivities() {
      return life.descriptions();
    },
    focusResident: visitResident,
    editResident: openResidentEditor,
    getResidentTemplate(index) { return residentTemplates[index]?.clone(true); },
    setResidentShapes,
    endResidentVisit: finishResidentVisit,
    watchResidents() {
      frameDirty = true;
      finishResidentVisit();
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
      frameDirty = true;
      finishResidentVisit();
      camera.zoom = Math.max(defaultZoom, 1.2);
      camera.updateProjectionMatrix();
    },
    greet(i) {
      visitResident(i);
      greetIndex = i;
      greetUntil = clock.getElapsedTime() + 3;
    },
  };
}
