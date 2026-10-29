import { esc } from "./markup.js";
export function plushSVG(r) {
  if (r.type === "dinosaur")
    return `<svg viewBox="0 0 140 160" role="img" aria-label="${esc(r.name)}">
    <defs>
      <linearGradient id="dino-plush-pink" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f698b5"/><stop offset="1" stop-color="#dc7095"/></linearGradient>
      <linearGradient id="dino-plush-cream" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffaf0"/><stop offset="1" stop-color="#dfd6c6"/></linearGradient>
    </defs>
    <ellipse cx="73" cy="150" rx="44" ry="6" fill="#000" opacity=".06"/>
    <path d="M35 109C18 108 5 95 8 83C11 74 21 80 24 89L40 93Z" fill="url(#dino-plush-pink)" stroke="#cc7897"/>
    <path d="M46 41C31 55 27 84 30 110C33 131 46 143 65 145L85 133L83 88L87 57Z" fill="url(#dino-plush-pink)" stroke="#cc7897"/>
    <g fill="#ad88ce" stroke="#9672b8" stroke-width=".8">
      <path d="M56 18C45 10 36 17 35 28C34 36 39 39 46 34Z"/>
      <path d="M42 32C28 29 25 41 26 51C27 58 32 59 38 52Z"/>
      <path d="M33 52C23 48 19 57 21 67C22 74 27 75 32 68Z"/>
    </g>
    <path d="M78 68C67 77 68 94 72 110C75 122 84 121 88 109L90 78C103 82 118 82 125 75L124 64Z" fill="url(#dino-plush-cream)" stroke="#d5cbbb" stroke-width=".8"/>
    <path d="M36 56C33 33 44 16 66 13C85 9 110 9 122 21C134 34 136 56 131 69C128 78 121 77 113 72C100 65 88 63 79 68L68 82C48 84 35 72 36 56Z" fill="url(#dino-plush-pink)" stroke="#cc7897"/>
    <path d="M69 86C64 82 62 89 63 99L65 111C69 117 77 113 77 107C77 99 73 90 69 86Z" fill="#e985a5" stroke="#cf7999"/>
    <path d="M48 125C57 124 66 128 75 133C86 133 94 138 95 144C96 154 73 155 59 149C45 147 40 137 48 125Z" fill="#df7b9d"/>
    <path d="M62 122C71 121 82 128 91 134C102 139 110 145 105 151C100 158 77 152 65 147C50 141 49 128 62 122Z" fill="url(#dino-plush-pink)" stroke="#cc7897"/>
    <circle cx="86" cy="44" r="6.4" fill="#201e24"/><ellipse cx="88" cy="43" rx="1.7" ry="2.1" fill="#fffaf0"/>
    <path d="M119 65q4 4 7 0" fill="none" stroke="#b56382" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
  if (r.type === "frog")
    return `<svg viewBox="0 0 140 160" role="img" aria-label="${esc(r.name)}"><ellipse cx="70" cy="149" rx="40" ry="6" fill="#000" opacity=".06"/><g fill="#9fb9ae" stroke="#7f9a90" stroke-width="1"><ellipse cx="70" cy="112" rx="32" ry="33"/><ellipse cx="36" cy="112" rx="10" ry="20" transform="rotate(24 36 112)"/><ellipse cx="104" cy="112" rx="10" ry="20" transform="rotate(-24 104 112)"/><ellipse cx="47" cy="141" rx="18" ry="11" transform="rotate(-20 47 141)"/><ellipse cx="93" cy="141" rx="18" ry="11" transform="rotate(20 93 141)"/><ellipse cx="70" cy="66" rx="45" ry="35"/><ellipse cx="41" cy="34" rx="16" ry="19"/><ellipse cx="99" cy="34" rx="16" ry="19"/><ellipse cx="70" cy="64" rx="44" ry="31" stroke="none"/></g><g fill="#252b29"><circle cx="41" cy="28" r="2.5"/><circle cx="99" cy="28" r="2.5"/></g><path d="M59 44Q70 49 81 44" fill="none" stroke="#29312d" stroke-width="2" stroke-linecap="round"/><g fill="#e2d2c1" stroke="#c7b58b" stroke-width="1.5"><ellipse cx="39" cy="64" rx="12" ry="13"/><ellipse cx="101" cy="64" rx="12" ry="13"/></g><ellipse cx="70" cy="115" rx="22" ry="25" fill="#dfd0bc"/></svg>`;
  if (r.type === "floral-bear")
    return `<svg viewBox="0 0 140 160" role="img" aria-label="${esc(r.name)}"><defs><clipPath id="floral-silhouette"><path d="M34 40C18 18 42 11 53 28Q70 24 87 28C100 11 121 24 106 42L113 76Q132 114 118 123L107 117L103 146Q95 157 79 146L70 135L61 147Q43 157 37 144L33 115Q14 131 14 115L26 78Z"/></clipPath></defs><ellipse cx="70" cy="151" rx="38" ry="5" fill="#000" opacity=".06"/><g clip-path="url(#floral-silhouette)"><path d="M0 0h140v160H0Z" fill="#b7b5a9"/><g fill="none" stroke-width="4" stroke-linecap="round"><path d="m79 73 14-12m-7 6-5-9m5 9 11 1M41 99l10-15m-7 10-7-6m7 6 10 1M46 135l12-11m-6 5-8-3m8 3 9 1" stroke="#657e8f"/><path d="m91 42 8 8m-5-6 6-4M29 77l7 12m-3-7-7 1M85 114l11 9m-6-5 8-4M87 143l8 4" stroke="#b97960"/></g></g><g fill="#292b2b"><ellipse cx="52" cy="48" rx="4" ry="3.5"/><ellipse cx="88" cy="48" rx="4" ry="3.5"/><path d="M65 62Q70 60 75 62L70 69Z"/></g><path d="M70 69v12m0 0-8 7m8-7 8 7" fill="none" stroke="#292b2b" stroke-width="2" stroke-linecap="round"/></svg>`;
  const rabbit = r.type === "rabbit";
  return `<svg viewBox="0 0 140 160" role="img" aria-label="${esc(r.name)}"><ellipse cx="70" cy="146" rx="36" ry="7" fill="#000" opacity=".06"/><g fill="${r.color}" stroke="#756951" stroke-width="1.5">${rabbit ? '<ellipse cx="50" cy="33" rx="12" ry="29" transform="rotate(-10 50 33)"/><ellipse cx="90" cy="33" rx="12" ry="29" transform="rotate(10 90 33)"/>' : '<circle cx="38" cy="44" r="16"/><circle cx="102" cy="44" r="16"/>'}<ellipse cx="70" cy="115" rx="33" ry="31"/><ellipse cx="40" cy="110" rx="11" ry="19" transform="rotate(28 40 110)"/><ellipse cx="100" cy="110" rx="11" ry="19" transform="rotate(-28 100 110)"/><ellipse cx="52" cy="139" rx="13" ry="9"/><ellipse cx="88" cy="139" rx="13" ry="9"/><ellipse cx="70" cy="72" rx="43" ry="36"/></g><ellipse cx="70" cy="83" rx="18" ry="13" fill="#fff5e5"/><circle cx="54" cy="69" r="3" fill="#514735"/><circle cx="86" cy="69" r="3" fill="#514735"/><ellipse cx="70" cy="79" rx="4" ry="3" fill="#514735"/><path d="M70 82v5m-5-1q5 6 10 0" fill="none" stroke="#514735" stroke-width="1.5"/><ellipse cx="43" cy="81" rx="7" ry="4" fill="#e3a193" opacity=".7"/><ellipse cx="97" cy="81" rx="7" ry="4" fill="#e3a193" opacity=".7"/><path d="m53 105 17 8 17-8-3 18H56Z" fill="${rabbit ? "#dba89a" : "#7f9b77"}"/><circle cx="70" cy="117" r="3" fill="#f7e8b5"/></svg>`;
}
