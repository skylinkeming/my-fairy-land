// Lightweight, clickable illustration for browsers without a working WebGL context.
export function showIslandFallback(container, onSelect, icon) {
  const tree = (x, y, s = 1) =>
    `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v-55" stroke="#785433" stroke-width="8"/><path d="M-28-26 0-82 28-26Z" fill="#35573d"/><path d="M-23-47 0-98 23-47Z" fill="#4d7147"/><path d="M-16-66 0-110 16-66Z" fill="#71864f"/></g>`;
  const house = (x, y) =>
    `<g transform="translate(${x} ${y})" stroke="#63422e" stroke-width="1.5"><path d="m-35-13 43 17 31-21v-47L-5-80l-30 21Z" fill="var(--piece-color,#a64331)"/><path d="m-43-60 38-43 54 30-41 36Z" fill="var(--piece-color,#a64331)"/><path d="m-43-60 38-43-1 38Z" fill="#ffffff" fill-opacity=".13"/><path d="m8 4 31-21v-47L8-37Z" fill="#21170f" fill-opacity=".16"/><path d="m-20-7 0-23 12 5v23Z" fill="#21170f" fill-opacity=".25"/></g>`;
  const bear = (x, y, color = "#bc9b75", rabbit = false) =>
    `<g transform="translate(${x} ${y})"><ellipse cy="3" rx="14" ry="4" fill="#718b6333"/><ellipse cy="-12" rx="10" ry="14" fill="${color}"/>${rabbit ? `<ellipse cx="-7" cy="-44" rx="4" ry="12" fill="${color}"/><ellipse cx="7" cy="-44" rx="4" ry="12" fill="${color}"/>` : `<circle cx="-10" cy="-36" r="6" fill="${color}"/><circle cx="10" cy="-36" r="6" fill="${color}"/>`}<ellipse cy="-28" rx="15" ry="13" fill="${color}"/><ellipse cy="-24" rx="7" ry="5" fill="#f9ebd2"/><circle cx="-5" cy="-30" r="1.5" fill="#645640"/><circle cx="5" cy="-30" r="1.5" fill="#645640"/><circle cy="-25" r="1.5" fill="#645640"/><path d="M-9-17Q0-12 9-17v10H-9Z" fill="#9bac83"/></g>`;
  const land = (x, y, content) => {
    const type =
      x === 275
        ? "grain"
        : x === 515
          ? "pasture"
          : x === 200
            ? "forest"
            : x === 570
              ? "mountain"
              : y === 540
                ? "pasture"
                : "clay";
    const pieces = {
      forest: "#a64331",
      grain: "#386879",
      pasture: "#d8c7a4",
      mountain: "#b67b32",
      clay: "#a64331",
    };
    const number = x === 405 && y === 540 ? 10 : { forest: 5, grain: 8, pasture: 6, mountain: 9, clay: 4 }[type];
    return `<g transform="translate(${x * 2.4} ${y * 2.4})" style="--piece-color:${pieces[type]}"><g transform="scale(2.4)" stroke="#c5a66a" stroke-width="1"><path d="m-86-20 0 31 86 44 86-44V-20L0 24Z" fill="#8e633d"/><path d="m0 24 86-44v31L0 55Z" fill="#6f4e31"/><path d="m0-64 86 44L0 24-86-20Z" fill="#c7a875"/><path d="m0-60 80 40L0 20-80-20Z" fill="url(#board-${type})"/></g>${content}${tree(-115, -30, 0.8)}${tree(115, -60, 0.7)}${x === 405 ? '<path d="M-140 35Q-60 5 0 42T145 15" fill="none" stroke="#82b6ba" stroke-width="18"/>' : ""}<ellipse cx="105" cy="-22" rx="26" ry="17" fill="#f3e2b8" stroke="#89653d" stroke-width="3"/><text x="105" y="-15" text-anchor="middle" fill="${number === 6 || number === 8 ? "#a24430" : "#4e3723"}" font-family="Georgia,serif" font-weight="bold" font-size="24">${number}</text><path d="M-130 30l45 18m-42-25 45 18" stroke="${pieces[type]}" stroke-width="9"/></g>`;
  };
  const islands = [
    ["note", "記事本島", 34, 29],
    ["friends", "家人朋友島", 64, 34],
    ["todo", "待辦事項島", 23, 48],
    ["memories", "美好回憶島", 74, 58],
  ];
  container.classList.add("illustrated-world");
  container.dataset.artStyle = "catan-inspired";
  container.innerHTML = `<svg class="fallback-map" viewBox="0 0 1920 1580" role="img" aria-label="六角形家族小島插畫"><defs><pattern id="board-forest" width="24" height="22" patternUnits="userSpaceOnUse"><rect width="24" height="22" fill="#436647"/><path d="m3 19 8-17 8 17Z" fill="#5b7b4b"/></pattern><pattern id="board-grain" width="20" height="14" patternUnits="userSpaceOnUse"><rect width="20" height="14" fill="#c5a153"/><path d="M0 4h20M0 10h20" stroke="#e3be69" stroke-width="3"/></pattern><pattern id="board-pasture" width="22" height="20" patternUnits="userSpaceOnUse"><rect width="22" height="20" fill="#8d9d56"/><path d="m4 9 3 4 3-5m5 10 2-4" fill="none" stroke="#bac17a"/></pattern><pattern id="board-mountain" width="32" height="28" patternUnits="userSpaceOnUse"><rect width="32" height="28" fill="#96958b"/><path d="m3 24 13-21 13 21Z" fill="#777e77"/><path d="m11 11 5-8 5 8Z" fill="#d7d3bd"/></pattern><pattern id="board-clay" width="24" height="18" patternUnits="userSpaceOnUse"><rect width="24" height="18" fill="#b77c53"/><path d="M0 0h20v14H0Z" fill="#a86e47" stroke="#cb9368"/></pattern></defs><path d="M960 30 1900 440 1900 1160 960 1570 20 1160 20 440Z" fill="#765135" stroke="#553a27" stroke-width="12"/><path d="M960 60 1870 460 1870 1140 960 1540 50 1140 50 460Z" fill="#c2a36a"/><path d="M960 84 1847 477 1847 1125 960 1516 73 1125 73 477Z" fill="#326c82"/><g transform="scale(2.4)" stroke="#d4b98b" stroke-width="15"><path d="m270 245 134 75m113-45-113 45m-185 31 185-31m170 92-170-92"/></g>${land(275, 245, house(0, -15, "#c58e79") + tree(-55, -22, 0.7) + tree(54, -29, 0.6))}${land(515, 280, tree(-42, -25, 0.9) + tree(48, -30, 0.7) + bear(-8, -6) + bear(23, 2, "#eee0c7", true))}${land(200, 360, house(-5, -14, "#8e9e78") + tree(-52, -4, 0.6))}${land(405, 350, house(0, -20) + tree(-57, -13, 0.85) + tree(59, -35, 0.7))}${land(570, 420, tree(40, -27, 0.85) + '<path d="m-50-18 43-21 44 22L-7 5Z" fill="#eac6b0"/><path d="m-36-24 43 22m-14-30 29 15" stroke="#fff0d4" stroke-width="5"/>' + bear(-22, -18, "#a6b48c"))}${land(405, 540, '<ellipse cx="-45" cy="-35" rx="75" ry="40" fill="#a0bd83"/><path d="M-125 42Q0-20 115 40" fill="none" stroke="#e7d8b2" stroke-width="14"/>' + tree(-85, -45, 0.9) + tree(80, 35, 0.8) + bear(0, 0))}<g transform="scale(2.4)" fill="#fff9e8"><ellipse cx="127" cy="164" rx="32" ry="10"/><ellipse cx="113" cy="158" rx="17" ry="13"/><ellipse cx="659" cy="196" rx="26" ry="9"/><ellipse cx="667" cy="189" rx="15" ry="12"/></g><text x="960" y="1480" text-anchor="middle" fill="#8b9d7d" font-size="22" font-family="sans-serif" letter-spacing="3">OUR LITTLE WORLD</text></svg><div id="world-labels">${islands.map(([id, title, x, y]) => `<button class="map-label label-${id}" style="left:${x}%;top:${y}%;transform:translate(-50%,-100%)"><span class="label-symbol">${icon(id)}</span><strong>${title}</strong><span class="label-arrow">↗</span></button>`).join("")}</div><span class="fallback-badge">✿ 小島插畫模式</span>`;
  for (const [id] of islands)
    container.querySelector(`.label-${id}`).onclick = () => onSelect(id);
}
