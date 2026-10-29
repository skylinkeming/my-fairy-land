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
    forest: "#426747",
    grain: "#c7a456",
    pasture: "#909e58",
    mountain: "#929187",
    clay: "#b77d55",
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
  if (type === "grain") {
    for (let band = 0; band < 10; band++) {
      c.strokeStyle = band % 2 ? "#e2be67" : "#9c7c38";
      c.lineWidth = 13;
      c.beginPath();
      c.moveTo(-20, band * 59);
      c.bezierCurveTo(
        130,
        band * 59 - 35,
        300,
        band * 59 + 30,
        540,
        band * 59 - 12,
      );
      c.stroke();
    }
    for (let i = 0; i < 180; i++) {
      const x = rand() * 512,
        y = rand() * 512;
      c.strokeStyle = "#f2d990";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(x, y + 10);
      c.lineTo(x, y - 8);
      c.moveTo(x, y);
      c.lineTo(x - 5, y - 5);
      c.moveTo(x, y - 4);
      c.lineTo(x + 5, y - 9);
      c.stroke();
    }
  } else if (type === "forest") {
    for (let i = 0; i < 160; i++) {
      const x = rand() * 512,
        y = rand() * 512,
        size = 8 + rand() * 17;
      c.fillStyle = ["#294d37", "#557b4a", "#6c8850"][i % 3];
      c.beginPath();
      c.moveTo(x, y - size);
      c.lineTo(x - size * 0.65, y + size * 0.55);
      c.lineTo(x + size * 0.65, y + size * 0.55);
      c.fill();
    }
  } else if (type === "pasture") {
    for (let i = 0; i < 320; i++) {
      const x = rand() * 512,
        y = rand() * 512;
      c.strokeStyle = i % 3 ? "#64783e88" : "#c5ca7b";
      c.lineWidth = 1.5;
      c.beginPath();
      c.moveTo(x - 3, y - 5);
      c.lineTo(x, y);
      c.lineTo(x + 3, y - 7);
      c.stroke();
    }
  } else if (type === "mountain") {
    for (let i = 0; i < 55; i++) {
      const x = rand() * 512,
        y = rand() * 512,
        r = 12 + rand() * 28;
      c.fillStyle = i % 2 ? "#6d756d" : "#b4b3a0";
      c.beginPath();
      c.moveTo(x - r, y + r * 0.5);
      c.lineTo(x, y - r);
      c.lineTo(x + r, y + r * 0.5);
      c.closePath();
      c.fill();
      c.strokeStyle = "#dedac5";
      c.lineWidth = 1;
      c.stroke();
    }
  } else if (type === "clay") {
    for (let j = 0; j < 14; j++)
      for (let i = 0; i < 12; i++) {
        c.fillStyle = (i + j) % 3 ? "#8f563b44" : "#d9a57566";
        c.fillRect(i * 48 + (j % 2) * 24, j * 38, 43, 30);
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
function numberTexture(number) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const c = canvas.getContext("2d");
  c.fillStyle = "#f3e2b8";
  c.fillRect(0, 0, 256, 256);
  c.strokeStyle = "#b39059";
  c.lineWidth = 3;
  c.beginPath();
  c.arc(128, 128, 111, 0, Math.PI * 2);
  c.stroke();
  c.strokeStyle = "#d4bb86";
  c.lineWidth = 1;
  c.beginPath();
  c.arc(128, 128, 101, 0, Math.PI * 2);
  c.stroke();
  c.fillStyle = [6, 8].includes(number) ? "#9f3f2d" : "#493624";
  c.font = "bold 112px Georgia, serif";
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.fillText(String(number), 128, 117);
  const dots = { 4: 3, 5: 4, 6: 5, 8: 5, 9: 4, 10: 3 }[number] || 2;
  for (let i = 0; i < dots; i++) {
    c.beginPath();
    c.arc(128 + (i - (dots - 1) / 2) * 17, 187, 4.4, 0, Math.PI * 2);
    c.fill();
  }
  return canvasTexture(canvas);
}
export function decorateBoardTile(group, theme, { box, ball, cyl, mesh, top }) {
  // Printed number discs and colored road pieces evoke a physical strategy board.
  const token = new THREE.Group();
  token.position.set(
    theme.terrain === "mountain" ? -1.5 : 1.1,
    top + 0.12,
    theme.terrain === "mountain" ? 3.6 : -3.5,
  );
  group.add(token);
  token.name = "board-number-token";
  cyl(0.99, 0.99, 0.12, "#90683d", 0, 0, 0, token, 48);
  const face = cyl(0.92, 0.92, 0.05, "#f3e2b8", 0, 0.085, 0, token, 48);
  face.material = [
    new THREE.MeshStandardMaterial({ color: "#d8bb82" }),
    new THREE.MeshStandardMaterial({
      map: numberTexture(theme.number),
      roughness: 1,
    }),
    new THREE.MeshStandardMaterial({ color: "#d8bb82" }),
  ];
  for (const angle of [Math.PI * 0.65, Math.PI * 1.35]) {
    const centerX = Math.sin(angle) * 6.3,
      centerZ = Math.cos(angle) * 6.3;
    for (let i = 0; i < 3; i++) {
      const road = box(
        1.14,
        0.17,
        0.22,
        theme.piece,
        centerX + (i - 1) * 1.25 * Math.cos(angle),
        top + 0.1,
        centerZ - (i - 1) * 1.25 * Math.sin(angle),
        group,
      );
      road.rotation.y = angle;
    }
  }
  // Thin golden outlines keep the resource hexes readable at overview scale.
  const points = [];
  for (let i = 0; i < 6; i++)
    points.push(
      new THREE.Vector3(
        Math.sin((i * Math.PI) / 3) * 6.98,
        top + 0.015,
        Math.cos((i * Math.PI) / 3) * 6.98,
      ),
    );
  const outline = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: "#e6c88a" }),
  );
  group.add(outline);
  if (theme.terrain === "grain") {
    for (const [x, z] of [
      [-3.9, 1.6],
      [3.7, 3.3],
      [-0.9, 4.3],
    ]) {
      const field = box(2.05, 0.045, 1.3, "#a9853b", x, top + 0.04, z, group);
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
