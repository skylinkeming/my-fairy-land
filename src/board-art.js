import * as THREE from "three";

export const BOARD_THEMES = {
  todo: { terrain: "forest", color: "#3d6443", piece: "#a64331", number: 5 },
  note: { terrain: "grain", color: "#c5a14c", piece: "#386879", number: 8 },
  friends: {
    terrain: "pasture",
    color: "#8a9c52",
    piece: "#dfceb0",
    number: 6,
  },
  memories: {
    terrain: "mountain",
    color: "#8d8b81",
    piece: "#b67b32",
    number: 9,
  },
  home: { terrain: "clay", color: "#bd8059", piece: "#a64331", number: 4 },
  park: { terrain: "pasture", color: "#8a9c52", piece: "#386879", number: 10 },
};
const textureCache = new Map();
function randomGenerator(seed = 27) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
function canvasTexture(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
export function terrainTexture(type) {
  if (textureCache.has(type)) return textureCache.get(type);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  const c = canvas.getContext("2d"),
    rand = randomGenerator(type.length * 47 + type.charCodeAt(0));
  const colors = {
    forest: "#71876b",
    grain: "#b8ad79",
    pasture: "#98a67d",
    mountain: "#959b8b",
    clay: "#b4a083",
    sea: "#326c82",
    wood: "#987045",
  };
  c.fillStyle = colors[type];
  c.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 6500; i++) {
    const n = rand();
    c.fillStyle = n > 0.5 ? "#fff5d208" : "#2b25100b";
    c.fillRect(rand() * 512, rand() * 512, rand() * 3 + 1, rand() * 2 + 1);
  }
  c.lineCap = "round";
  if (["forest", "grain", "pasture", "mountain", "clay"].includes(type)) {
    // Quiet, mottled natural ground instead of printed resource symbols or grids.
    for (let i = 0; i < 100; i++) {
      const x = rand() * 512, y = rand() * 512, radius = 12 + rand() * 48;
      const gradient = c.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, i % 2 ? "#edf0c814" : "#3d543912");
      gradient.addColorStop(1, "#68764c00");
      c.fillStyle = gradient;
      c.fillRect(x-radius,y-radius,radius*2,radius*2);
    }
    for (let i = 0; i < 900; i++) {
      const x = rand()*512, y = rand()*512;
      c.strokeStyle = i % 3 ? "#4e614326" : "#ece7c333";
      c.lineWidth = .5;
      c.beginPath();c.moveTo(x,y);
      c.lineTo(x+(rand()-.5)*3,y-1-rand()*2);c.stroke();
    }
  } else if (type === "sea") {
    for (let i = 0; i < 140; i++) {
      const x = rand() * 512,
        y = rand() * 512;
      c.strokeStyle = "#b9d4c04d";
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + 8, y + 5, x + 16, y);
      c.stroke();
    }
  } else if (type === "wood") {
    for (let i = 0; i < 70; i++) {
      c.strokeStyle = i % 3 ? "#402b151c" : "#efca8c36";
      c.lineWidth = 1 + rand() * 2;
      c.beginPath();
      c.moveTo(0, i * 8);
      c.bezierCurveTo(
        190,
        i * 8 + rand() * 9,
        320,
        i * 8 - 9,
        512,
        i * 8 + rand() * 5,
      );
      c.stroke();
    }
  }
  const texture = canvasTexture(canvas);
  textureCache.set(type, texture);
  return texture;
}
export function styleTerrain(mesh, type) {
  mesh.material = [
    new THREE.MeshStandardMaterial({ color: "#b79456", roughness: 1 }),
    new THREE.MeshStandardMaterial({ map: terrainTexture(type), roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: "#805533", roughness: 1 }),
  ];
  mesh.userData.terrain = type;
}
export function woodMaterial() {
  return new THREE.MeshStandardMaterial({
    map: terrainTexture("wood"),
    color: "#b99a70",
    roughness: 1,
  });
}
export function decorateBoardTile(group, theme, { box, ball, cyl, mesh, top }) {
  if (theme.terrain === "grain") {
    for (const [x, z] of [
      [-3.9, 1.6],
      [3.7, 3.3],
      [-0.9, 4.3],
    ]) {
      const field = box(2.05, 0.045, 1.3, "#a9853b", x, top + 0.04, z, group);
      field.userData.walkObstacle = true;
      for (let i = 0; i < 7; i++)
        box(
          0.1,
          0.18,
          1.2,
          "#d7b65d",
          x - 0.85 + i * 0.28,
          top + 0.13,
          z,
          group,
        );
      for (let i = 0; i < 3; i++)
        cyl(
          0.21,
          0.21,
          0.45,
          "#d8b461",
          x - 0.5 + i * 0.5,
          top + 0.27,
          z - 0.4,
          group,
          9,
        );
    }
  } else if (theme.terrain === "mountain") {
    for (const [x, z, h, r] of [
      [3.2, -3.4, 3.5, 1.7],
      [4.6, -2.8, 2.3, 1.2],
      [2.2, -4.3, 2.4, 1.25],
    ]) {
      const peak = cyl(0, r, h, "#777e78", x, top + h / 2, z, group, 5);
      peak.rotation.y = x;
      const cap = cyl(
        0,
        r * 0.24,
        h * 0.27,
        "#e3dfc9",
        x,
        top + h * 0.87,
        z,
        group,
        5,
      );
      cap.rotation.y = x;
    }
  } else if (theme.terrain === "pasture") {
    for (const [x, z] of [
      [-4, 1],
      [4, 1.7],
    ]) {
      ball(0.28, "#e7dfc6", x, top + 0.35, z, group, [1.3, 0.85, 0.8]);
      ball(0.13, "#77755e", x + 0.32, top + 0.4, z, group);
      for (const a of [-0.17, 0.17])
        for (const b of [-0.12, 0.12])
          cyl(0.025, 0.03, 0.2, "#69644d", x + a, top + 0.12, z + b, group, 5);
    }
  } else if (theme.terrain === "clay") {
    for (let j = 0; j < 3; j++)
      for (let i = 0; i < 4 - j; i++)
        box(
          0.5,
          0.23,
          0.32,
          j % 2 ? "#9b5e3e" : "#b7794d",
          3.1 + i * 0.54 + j * 0.2,
          top + 0.12 + j * 0.23,
          2.6,
          group,
        );
  }
}
