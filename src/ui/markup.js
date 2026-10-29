export const icons = {
  leaf: '<path d="M19 4C9 2 3 7 5 14c2 6 11 5 14-10Z"/><path d="m5 20 9-11"/>',
  home: '<path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-7h6v7"/>',
  todo: '<rect x="5" y="5" width="14" height="16" rx="3"/><path d="M9 3h6v4H9zM9 12l2 2 4-4M9 18h6"/>',
  note: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 3v18M11 9h5M11 13h5M11 17h3"/>',
  friends:
    '<path d="M5 11C0 1 9 1 9 8M15 8c0-7 9-7 4 3"/><path d="M4 14c0-9 16-9 16 0 0 9-16 9-16 0Z"/><path d="M9 14h.01M15 14h.01M11 17h2"/>',
  memories:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m4 18 5-4 4 3 4-5 4 5"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h.01M12 15h.01M16 15h.01"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
  volume: '<path d="m4 9 4 0 5-4v14l-5-4H4zM17 8c3 2 3 6 0 8"/>',
  muted: '<path d="m4 9 4 0 5-4v14l-5-4H4zM17 9l5 6m-5 0 5-6"/>',
  reset: '<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  heart: '<path d="M12 20S2 14 3 8c1-5 7-5 9-1 2-4 8-4 9 1 1 6-9 12-9 12Z"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  trash: '<path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
  message:
    '<path d="M20 15a3 3 0 0 1-3 3H9l-6 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z"/>',
  pin: '<path d="M12 22s8-9 8-14A8 8 0 0 0 4 8c0 5 8 14 8 14Z"/><circle cx="12" cy="8" r="3"/>',
};
export const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.leaf}</svg>`;
export const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
